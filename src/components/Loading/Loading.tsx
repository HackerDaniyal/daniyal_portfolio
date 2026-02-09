"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
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

export default function Loading({ onComplete }: { onComplete: () => void }) {
    const [valueIndex, setValueIndex] = useState(0);

    // Unified High-Precision Physics Driver
    // Lower stiffness and higher damping create a smooth, high-end "luxury" feel
    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 30,
        mass: 1,
        restDelta: 0.001 // High precision for synchronization
    });

    // Both visual elements derive from the EXACT same motion value
    const displayCounter = useTransform(springValue, (latest) => Math.round(latest));
    const progressScale = useTransform(springValue, [0, 100], [0, 1]);

    useEffect(() => {
        // Start almost immediately with a slight "gentle" trigger
        const startTimeout = setTimeout(() => {
            springValue.set(100);
        }, 150);

        // Synchronize brand flip with a rhythmic interval
        const brandInterval = setInterval(() => {
            setValueIndex((prev) => (prev + 1) % BRAND_VALUES.length);
        }, 350);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(brandInterval);
        };
    }, [springValue]);

    useEffect(() => {
        // Listen for completion with high precision
        const unsubscribe = springValue.on("change", (latest) => {
            // We use >= 99.9 to ensure we don't wait for the very last micro-jitter
            if (latest >= 99.9) {
                // Instant exit logic
                setTimeout(() => {
                    onComplete();
                }, 100);
            }
        });
        return () => unsubscribe();
    }, [springValue, onComplete]);

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
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                                transition={{ duration: 0.35, ease: "circOut" }}
                                className={styles.valueText}
                            >
                                {BRAND_VALUES[valueIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <div className={styles.counterWrapper}>
                        <motion.span className={styles.counter}>{displayCounter}</motion.span>
                        <span className={styles.percent}>%</span>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.statusBar}>
                        <motion.div
                            className={styles.statusFill}
                            style={{
                                scaleX: progressScale,
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
