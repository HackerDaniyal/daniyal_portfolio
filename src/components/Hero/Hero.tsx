"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { Sparkles, ArrowRight } from "lucide-react";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
    {
        imageUrl: "https://avatars.githubusercontent.com/u/16860528",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/20110627",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/106103625",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/59228569",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/59442788",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/89768406",
        profileUrl: "https://www.tiktok.com/@wordpress_wallah",
    },
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.gridOverlay} />
            <div className={styles.glow} />

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.badge}
                >
                    <span className={styles.dot} />
                    Available for Freelance Projects
                    <Sparkles size={14} className={styles.sparkle} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.title}
                >
                    I Design Experiences That <br />
                    <span className={styles.orangeItalic}>Work As Hard</span> As You Do
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.description}
                >
                    Hi, I&apos;m <strong>Daniyal Alam</strong> — a WordPress & Elementor expert crafting stunning
                    websites that convert visitors into loyal customers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.actionsContainer}
                >
                    <div className={styles.actions}>
                        <Link href="#contact" className={styles.primaryBtn}>
                            Let&apos;s Collaborate <ArrowRight size={18} />
                        </Link>
                        <Link href="#portfolio" className={styles.secondaryBtn}>
                            View my work
                        </Link>
                    </div>

                    <div className={styles.socialProof}>
                        <AvatarCircles numPeople={99} avatarUrls={avatars} />
                        <span className={styles.socialText}>Trusted by 100+ clients worldwide</span>
                    </div>
                </motion.div>
            </div>

            {/* Decorative logos from image with floating motion */}
            <div className={`${styles.icon} ${styles.logoIcon} ${styles.icon1}`}>
                <Image src="/assets/icons/figma.svg" alt="Figma" width={40} height={40} />
            </div>
            <div className={`${styles.icon} ${styles.logoIcon} ${styles.icon2}`}>
                <Image src="/assets/icons/wordpress.svg" alt="WordPress" width={40} height={40} />
            </div>
            <div className={`${styles.icon} ${styles.logoIcon} ${styles.icon3}`}>
                <Image src="/assets/icons/elementor.svg" alt="Elementor" width={40} height={40} />
            </div>
            <div className={`${styles.icon} ${styles.logoIcon} ${styles.icon4}`}>
                <Image src="/assets/icons/woocommerce.svg" alt="WooCommerce" width={40} height={40} />
            </div>
            <div className={`${styles.icon} ${styles.logoIcon} ${styles.icon5}`}>
                <Image src="/assets/icons/shopify.svg" alt="Shopify" width={40} height={40} />
            </div>
        </section>
    );
}
