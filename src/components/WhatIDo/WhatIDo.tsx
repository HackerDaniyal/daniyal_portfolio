"use client";

import { motion } from "framer-motion";
import {
    Palette,
    Code,
    Cpu,
    Zap,
    Search,
    Smartphone,
    ArrowUpRight
} from "lucide-react";
import styles from "./WhatIDo.module.css";
import { MagicCard } from "@/components/magicui/magic-card";

const services = [
    {
        icon: <Palette size={24} />,
        title: "Figma UI/UX Design",
        description: "High-fidelity wireframes and user-centric designs in Figma that ensure a seamless journey for your customers.",
        tags: ["Figma Design", "User Research", "Prototyping"],
        delay: 0.1
    },
    {
        icon: <Code size={24} />,
        title: "Custom Theme Development",
        description: "Lightweight, fast, and scalable WordPress themes built from scratch to match your brand's unique needs.",
        tags: ["PHP", "SCSS", "Performance"],
        delay: 0.2
    },
    {
        icon: <Cpu size={24} />,
        title: "Custom Plugin Development",
        description: "Tailor-made plugins to extend WordPress functionality without compromising performance or security.",
        tags: ["Custom Code", "API Integration", "Secure Build"],
        delay: 0.3
    },
    {
        icon: <Zap size={24} />,
        title: "Speed Optimization",
        description: "Lightning-fast websites optimized for performance, ensuring the best user experience and Core Web Vitals.",
        tags: ["Core Web Vitals", "Optimization", "Speed"],
        delay: 0.4
    },
    {
        icon: <Search size={24} />,
        title: "SEO Strategy",
        description: "Search engine friendly websites that rank higher and attract more organic traffic through technical SEO.",
        tags: ["On-Page SEO", "Schema", "Meta Tracking"],
        delay: 0.5
    },
    {
        icon: <Smartphone size={24} />,
        title: "Responsive Strategy",
        description: "Mobile-first approach ensuring your site works perfectly on all devices, from phones to large desktops.",
        tags: ["Mobile First", "Cross Browser", "Smooth UX"],
        delay: 0.6
    }
];

export default function WhatIDo() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.tag}
                    >
                        WHAT I DO
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Design. Build. <span className={styles.highlight}>Evolve.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        From concept to launch, I provide end-to-end web design services <br />
                        that help your business stand out and succeed online.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            style={{ width: "100%" }}
                        >
                            <MagicCard
                                imageUrl="https://cdn.simpleicons.org/wordpress/FF8C00"
                                title={service.title}
                                className={styles.magicCardCustom}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        {service.icon}
                                    </div>
                                </div>
                                <div className={styles.cardTitleWrapper}>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <ArrowUpRight size={16} className={styles.arrowIcon} />
                                </div>
                                <p className={styles.cardText}>{service.description}</p>

                                <div className={styles.tags}>
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className={styles.tagItem}>{tag}</span>
                                    ))}
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
