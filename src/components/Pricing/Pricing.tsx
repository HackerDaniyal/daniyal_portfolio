"use client";

import { motion } from "framer-motion";
import { Check, Star, Clock, RotateCcw, HelpCircle } from "lucide-react";
import Link from "next/link";
import styles from "./Pricing.module.css";

const plans = [
    {
        name: "BASIC WEBSITE",
        price: "400",
        desc: "For individuals and small businesses",
        delivery: "UP TO 5 DAYS DELIVERY",
        revisions: "UP TO 5 REVISIONS",
        rating: "100+ PEOPLE RATED",
        cta: "START YOUR PROJECT",
        features: [
            "WordPress setup with Elementor",
            "Up to 3 professionally designed pages",
            "Responsive layout for all devices",
            "Clean UI based on Figma wireframe",
            "Contact form and basic integrations",
            "Performance and SEO fundamentals",
            "BEST FOR: Personal websites, Service landing pages, Early-stage businesses"
        ],
        theme: "white",
    },
    {
        name: "BUSINESS WEBSITE / STORE",
        price: "1000",
        desc: "For growing brands and online businesses",
        delivery: "UP TO 10 DAYS DELIVERY",
        revisions: "UP TO 10 REVISIONS",
        rating: "150+ PEOPLE RATED",
        cta: "START YOUR PROJECT",
        tag: "MOST POPULAR CHOICE",
        features: [
            "WordPress or Shopify development",
            "Custom UI/UX design in Figma",
            "Up to 8 pages or full store setup",
            "Elementor Pro or Shopify custom sections",
            "WooCommerce or Shopify configuration",
            "Payment gateway integration",
            "Speed, security, and SEO optimization",
            "Light plugin or feature customization",
            "BEST FOR: Established businesses, Ecommerce websites, Brand-focused projects"
        ],
        theme: "gold",
        featured: true,
        showScribble: true
    },
    {
        name: "CUSTOM",
        price: "2500+",
        desc: "For advanced and scalable solutions",
        delivery: "CUSTOM TIMELINE",
        revisions: "UNLIMITED REVISIONS",
        rating: "40+ PEOPLE RATED",
        cta: "REQUEST A QUOTE",
        features: [
            "Custom WordPress theme development",
            "Custom plugin development",
            "Advanced UI/UX from Figma to final build",
            "Shopify custom functionality",
            "API and third-party integrations",
            "Optimized, scalable codebase",
            "Testing, deployment, and documentation",
            "BEST FOR: SaaS platforms, High-traffic websites, Custom business systems"
        ],
        theme: "blue",
    }
];

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        <span className={styles.dot} /> Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        Big Or Small? I Have a Plan!
                    </motion.h2>

                    <p className={styles.subtext}>
                        Flexible design plans for startups, agencies & brands built for impact. 🚀
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${styles.card} ${plan.featured ? styles.cardFeatured : ""}`}
                        >
                            {plan.featured && (
                                <div className={styles.avatarBadge}>
                                    <div className={styles.avatarInner}>
                                        <div className={styles.seal}>
                                            <svg viewBox="0 0 100 100" className={styles.sealSvg}>
                                                <path d="M50 0 L58 12 L72 7 L77 21 L91 21 L90 35 L100 45 L93 57 L97 71 L83 74 L77 88 L63 88 L50 100 L37 88 L23 88 L17 74 L3 71 L7 57 L0 45 L10 35 L9 21 L23 21 L28 7 L42 12 Z" fill="#FF8c00" />
                                            </svg>
                                            <div className={styles.avatarImageWrapper}>
                                                <img src="/assets/heart-eyes-avatar.webp" alt="Heart Eyes Avatar" className={styles.avatarImg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={`${styles.innerBox} ${styles[plan.theme]}`}>
                                <div className={styles.pillHeader}>
                                    <div className={styles.nameWrapper}>
                                        <span className={styles.planName}>{plan.name}</span>
                                        {plan.showScribble && (
                                            <svg className={styles.scribble} viewBox="0 0 120 12" preserveAspectRatio="none">
                                                <path d="M2,10 Q30,2 60,10 T118,10" stroke="#FF8c00" strokeWidth="3" fill="none" strokeLinecap="round" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className={styles.headerIconCircle}>
                                        <HelpCircle size={14} strokeWidth={3} />
                                    </div>
                                </div>

                                <div className={styles.mainContent}>
                                    <div className={styles.priceSection}>
                                        <span className={styles.currency}>$</span>
                                        <span className={styles.price}>{plan.price}</span>
                                        <span className={styles.duration}>/STARTING</span>
                                    </div>

                                    <div className={styles.detailsRow}>
                                        <div className={styles.detailItem}>
                                            <Clock size={16} strokeWidth={2.5} />
                                            <span>{plan.delivery}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <RotateCcw size={16} strokeWidth={2.5} />
                                            <span>{plan.revisions}</span>
                                        </div>
                                    </div>

                                    <div className={styles.divider} />

                                    {/* Render the tag if it exists (for Most Popular) */}
                                    {plan.tag && <div className={styles.popularTag}>{plan.tag}</div>}

                                    <Link href="#contact" className={styles.ctaButton}>
                                        {plan.cta}
                                    </Link>

                                    <div className={styles.ratingBox}>
                                        <div className={styles.stars}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="#000000" stroke="none" />
                                            ))}
                                        </div>
                                        <span className={styles.ratingValue}>{plan.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.featuresArea}>
                                <ul className={styles.featuresList}>
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={styles.featureItem}>
                                            <div className={styles.checkBullet}>
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
