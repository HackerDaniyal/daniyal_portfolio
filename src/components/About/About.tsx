"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import styles from "./About.module.css";

const aboutFeatures = [
    "5+ Years of WordPress Experience",
    "100+ Websites Delivered",
    "Elementor Pro Expert",
    "SEO & Performance Focused",
    "Responsive & Mobile-First Design",
    "24/7 Client Support"
];

const stats = [
    { label: "Years Exp.", value: "5+" },
    { label: "Projects", value: "100+" },
    { label: "Clients", value: "50+" }
];

export default function About() {
    return (
        <section className={styles.aboutSection} id="about">
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.cardWrapper}
                    >
                        <div className={styles.cardBg} />
                        <div className={styles.card}>
                            <div className={styles.avatarWrapper}>
                                <div className={styles.avatar}>
                                    <Image
                                        src="/about.webp"
                                        alt="Daniyal Alam"
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardName}>Daniyal Alam</h3>
                                <p className={styles.cardTitle}>Web Designer & Developer</p>
                                <p className={styles.cardSubtitle}>WordPress • Elementor • Custom Themes</p>
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.statsGrid}>
                                {stats.map((stat, index) => (
                                    <div key={index} className={styles.statItem}>
                                        <span className={styles.statValue}>{stat.value}</span>
                                        <span className={styles.statLabel}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.content}
                    >
                        <span className={styles.tag}>ABOUT ME</span>
                        <h2 className={styles.heading}>
                            Designing Experiences That <br />
                            <span className={styles.highlight}>Solve Real Problems</span>
                        </h2>
                        <div className={styles.descriptionWrapper}>
                            {"I don't just build websites; I create digital homes for brands. My focus is on WordPress and Elementor, where I turn complex ideas into clean, functional designs that actually move the needle for your business.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, filter: "blur(10px)", y: 20, rotateX: 45 }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, rotateX: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.02,
                                        ease: [0.21, 0.47, 0.32, 0.98]
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={styles.word}
                                >
                                    {word}
                                </motion.span>
                            )).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, " ", curr], [] as React.ReactNode[])}
                        </div>
                        <div className={styles.descriptionWrapper}>
                            {"Over the years, I've learned that a great site isn't just about looking pretty—it's about working weightlessly for your users. Whether we're starting from a blank canvas or refining a custom theme, I'm here to ensure your vision lands exactly as you imagined.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i + 100}
                                    initial={{ opacity: 0, filter: "blur(10px)", y: 20, rotateX: 45 }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, rotateX: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: (i + 40) * 0.02,
                                        ease: [0.21, 0.47, 0.32, 0.98]
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={styles.word}
                                >
                                    {word}
                                </motion.span>
                            )).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, " ", curr], [] as React.ReactNode[])}
                        </div>

                        <div className={styles.featuresGrid}>
                            {aboutFeatures.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
