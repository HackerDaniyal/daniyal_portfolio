"use client";

import { motion } from "framer-motion";
import { Android } from "@/components/magicui/android";
import styles from "./SocialConnect.module.css";
import { ArrowRight } from "lucide-react";

export default function SocialConnect() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.textContent}
                    >
                        <h2 className={styles.title}>
                            Behind The <br />
                            <span className={styles.highlight}>Scenes</span>
                        </h2>
                        <p className={styles.description}>
                            Follow my design journey, daily tips, and creative process on TikTok.
                            See how I build high-end digital experiences from scratch.
                        </p>

                        <a
                            href="https://tiktok.com/@wordpress_wallah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Follow on TikTok <ArrowRight size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.mockupWrapper}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={styles.mockupWrapper}
                        >
                            <div className={styles.androidContainer}>
                                <Android
                                    className={styles.androidMockup}
                                    src="/assets/tiktok-profile.webp"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
