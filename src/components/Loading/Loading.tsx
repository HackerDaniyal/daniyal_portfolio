"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loading.module.css";

const BRAND_VALUES = [
    "STRATEGY",
    "DESIGN",
    "DEVELOPMENT",
    "INNOVATION",
    "MASTERY",
    "BESPOKE",
    "DANIYAL ALAM"
];

// Duration must match the CSS transition on .statusFill
const LOADER_DURATION_MS = 2500;

export default function Loading({ onComplete }: { onComplete: () => void }) {
    const [valueIndex, setValueIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [started, setStarted] = useState(false);

    // Kick off CSS animation after one frame so the browser paints the
    // initial state (0%) first — prevents a flash to 100%.
    useEffect(() => {
        const raf = requestAnimationFrame(() => setStarted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    // Pure JS counter — lightweight, won't block anything important.
    useEffect(() => {
        if (!started) return;
        const step = LOADER_DURATION_MS / 100; // ms per 1%
        let count = 0;
        const id = setInterval(() => {
            count++;
            setCounter(count);
            if (count >= 100) clearInterval(id);
        }, step);
        return () => clearInterval(id);
    }, [started]);

    // Brand value flip — same as before, independent of the counter.
    useEffect(() => {
        const id = setInterval(() => {
            setValueIndex((prev) => (prev + 1) % BRAND_VALUES.length);
        }, 350);
        return () => clearInterval(id);
    }, []);

    // Fire onComplete after exactly LOADER_DURATION_MS + a tiny buffer.
    useEffect(() => {
        const id = setTimeout(onComplete, LOADER_DURATION_MS + 150);
        return () => clearTimeout(id);
    }, [onComplete]);

    return (
        <motion.div
            className={styles.container}
            exit={{
                opacity: 0,
                y: "-100%",
                transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
            }}
        >
            {/* Background Layers */}
            <div className={styles.noise} />
            <div className={styles.glow} />

            <div className={styles.content}>
                <div className={styles.topRow}>
                    <div className={styles.brandWrapper}>
                        {"DANIYAL ALAM".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.02, duration: 0.6 }}
                                className={styles.brandChar}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 0.4, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className={styles.year}
                    >
                        EST. 2026
                    </motion.div>
                </div>

                <div className={styles.center}>
                    <div className={styles.valueContainer}>
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={valueIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "circOut" }}
                                className={styles.valueText}
                            >
                                {BRAND_VALUES[valueIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <div className={styles.counterWrapper}>
                        <span className={styles.counter}>{counter}</span>
                        <span className={styles.percent}>%</span>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.statusBar}>
                        {/* CSS transition — runs on compositor, immune to main thread jank */}
                        <div
                            className={styles.statusFill}
                            style={{
                                transform: started ? "scaleX(1)" : "scaleX(0)",
                                transition: `transform ${LOADER_DURATION_MS}ms linear`,
                                transformOrigin: "left"
                            }}
                        />
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.indicator}>
                            <div className={styles.dot} />
                            <span>SYNCHRONIZING SYSTEM</span>
                        </div>
                        <div className={styles.location}>BASED IN PAKISTAN</div>
                    </div>
                </div>
            </div>

            {/* Cinematic Overlay Entrance */}
            <motion.div
                className={styles.revealOverlay}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.05 }}
            />
        </motion.div>
    );
}
