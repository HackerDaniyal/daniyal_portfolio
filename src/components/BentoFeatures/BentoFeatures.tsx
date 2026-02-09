"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./BentoFeatures.module.css";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
    {
        imageUrl: "https://avatars.githubusercontent.com/u/16860528",
        profileUrl: "#",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/20110627",
        profileUrl: "#",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/106103625",
        profileUrl: "#",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/59228569",
        profileUrl: "#",
    },
];

export default function BentoFeatures() {
    return (
        <section className={styles.section} id="features">
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        <span className={styles.dot} /> Daniyal Edge
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Smart Design, Smarter Growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Future proof your brand with designs that are cost effective, custom, scalable, and seamlessly <br />
                        integrated into your workflow because great design should work for you, not against you.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Faster UX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${styles.card} ${styles.card1}`}
                    >
                        <h3 className={styles.cardTitle}>Faster UX,<br />Better Results</h3>
                        <p className={styles.cardText}>Ship your product faster with designs that feel effortless and intuitive.</p>
                        <div className={styles.visualWrapper}>
                            <Image
                                src="/assets/target.webp"
                                alt="Target"
                                width={180}
                                height={180}
                                className={styles.targetImage}
                            />
                        </div>
                    </motion.div>

                    {/* Card 2: Designs Driving Growth (Yellow) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`${styles.card} ${styles.card2}`}
                    >
                        <h3 className={styles.cardTitle}>Designs<br />Driving Growth</h3>
                        <p className={styles.cardText}>Not just aesthetics: strategic UX that boosts engagement & conversions.</p>
                    </motion.div>

                    {/* Card 3: Real Time Collab */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`${styles.card} ${styles.card3}`}
                    >
                        <h3 className={styles.cardTitle}>Real Time Collab</h3>
                        <p className={styles.cardText}>Design, iterate, and refine live, with you in the loop.</p>
                        <div className={styles.socialStack}>
                            <AvatarCircles numPeople={12} avatarUrls={avatars} />
                        </div>
                    </motion.div>

                    {/* Card 4: TikTok / Process (Tall & Featured) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`${styles.card} ${styles.card4}`}
                    >
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Behind The<br />Scenes</h3>
                            <p className={styles.cardText}>Follow my design journey, tips, and process on TikTok.</p>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                @daniyal.design <ArrowUpRight size={16} />
                            </a>
                        </div>

                        {/* Modern Phone Mockup */}
                        <div className={styles.phoneContainer}>
                            <div className={styles.phoneMockup}>
                                <div className={styles.phoneNotch} />
                                <div className={styles.phoneScreen}>
                                    <Image
                                        src="/assets/TikTok.webp"
                                        alt="TikTok Profile"
                                        fill
                                        className={styles.phoneImage}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Design That Scales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`${styles.card} ${styles.card5}`}
                    >
                        <h3 className={styles.cardTitle}>Design That<br />Scales</h3>
                        <p className={styles.cardText}>Smart UX decisions that drive user growth and business success.</p>
                        <div className={styles.barChart}>
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "40%" }}
                                className={styles.bar}
                            />
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "70%" }}
                                className={styles.bar}
                                transition={{ delay: 0.1 }}
                            />
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "50%" }}
                                className={styles.bar}
                                transition={{ delay: 0.2 }}
                            />
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "90%" }}
                                className={styles.bar}
                                transition={{ delay: 0.3 }}
                            />
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "65%" }}
                                className={styles.bar}
                                transition={{ delay: 0.4 }}
                            />
                        </div>
                    </motion.div>

                    {/* Card 6: Transparent Pricing (Center Wide) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`${styles.card} ${styles.card6}`}
                    >
                        <h3 className={styles.cardTitle}>Transparent Pricing,<br />No Surprises</h3>
                        <p className={styles.cardText}>Get top-tier design without breaking the bank. Quality, speed, and affordability all in one package.</p>
                        <div className={styles.visualWrapper}>
                            <Image
                                src="/assets/money.webp"
                                alt="Money Bag"
                                width={180}
                                height={180}
                                className={styles.moneyBag}
                            />
                        </div>
                    </motion.div>

                    {/* Card 7: MVPs (Moved from Card 4) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`${styles.card} ${styles.card7}`}
                    >
                        <h3 className={styles.cardTitle}>MVPs That<br />Launch Faster</h3>
                        <p className={styles.cardText}>From idea to user-validated prototype ready to test.</p>
                        <div className={styles.visualWrapper}>
                            <Image
                                src="/assets/rocket.webp"
                                alt="Rocket"
                                width={160}
                                height={160}
                                className={styles.rocketSmall}
                            />
                        </div>
                    </motion.div>

                    {/* Card 8: UX Audits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className={`${styles.card} ${styles.card8}`}
                    >
                        <h3 className={styles.cardTitle}>UX Audits<br />That Fix The Leaks</h3>
                        <p className={styles.cardText}>Spot issues, tweak movements, and refine your product.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
