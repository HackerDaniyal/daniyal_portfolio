"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Figma, Code, Zap } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
    {
        number: "01",
        title: "Strategy & Discovery",
        desc: "We start by diving deep into your business goals, target audience, and market trends to build a strategic roadmap for your digital success.",
        icon: <Target size={32} />,
    },
    {
        number: "02",
        title: "High-End Design & UX",
        desc: "Transforming insights into immersive, high-converting interfaces. We focus on creating a visual language that speaks luxury and precision.",
        icon: <Figma size={32} />,
    },
    {
        number: "03",
        title: "Bespoke Development",
        desc: "Pixel-perfect engineering using modern tech stacks. We prioritize performance, semantic code, and seamless responsiveness across all devices.",
        icon: <Code size={32} />,
    },
    {
        number: "04",
        title: "Launch & Optimization",
        desc: "Deployment is just the beginning. We continuously monitor, test, and refine your platform to ensure maximum growth and sustained ROI.",
        icon: <Zap size={32} />,
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
    const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section ref={containerRef} className={styles.section} id="process">
            {/* Ambient Background Grid */}
            <div className={styles.gridOverlay} />

            <motion.div style={{ x: bgX }} className={styles.bgText}>
                ARCHITECTURE • STRATEGY • ARCHITECTURE • STRATEGY
            </motion.div>

            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        <span className={styles.dot} /> My Methodology
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.title}
                    >
                        How I Turn Your <br />
                        <span className={styles.highlight}>Vision</span> Into Reality
                    </motion.h2>
                </div>

                <div className={styles.timelineContainer}>
                    {/* Modern DIV-based Progress Line */}
                    <div className={styles.lineBase} />
                    <motion.div
                        className={styles.lineProgress}
                        style={{ scaleY, originY: 0 }}
                    />

                    <div ref={stepsRef} className={styles.stepsWrapper}>
                        {steps.map((step, index) => {
                            const isEven = index % 2 !== 0;
                            return (
                                <ProcessStep
                                    key={index}
                                    step={step}
                                    index={index}
                                    isEven={isEven}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessStep({ step, index, isEven }: { step: any, index: number, isEven: boolean }) {
    return (
        <div className={`${styles.stepContainer} ${isEven ? styles.even : styles.odd}`}>
            {/* The Dot/Node anchor */}
            <div className={styles.nodeWrapper}>
                <motion.div
                    className={styles.node}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                />
            </div>

            <motion.div
                className={styles.stepContent}
                initial={{ opacity: 0, x: isEven ? 100 : -100, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                <div className={styles.card}>
                    {/* Parallax Index Number */}
                    <motion.span
                        className={styles.stepNumber}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 0.15, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {step.number}
                    </motion.span>

                    <div className={styles.iconBox}>
                        {step.icon}
                        <div className={styles.iconGlow} />
                    </div>

                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>

                    <div className={styles.cardGlow} />
                </div>
            </motion.div>
        </div>
    );
}
