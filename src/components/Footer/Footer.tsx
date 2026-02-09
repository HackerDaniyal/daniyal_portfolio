"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topSection}>
                    {/* Left Column: Brand & Info */}
                    <div className={styles.brandColumn}>
                        <h2 className={styles.headline}>Think Deeper,<br />Build Better</h2>
                        <p className={styles.copyright}>
                            &copy; 2025 <span style={{ textDecoration: 'underline' }}>DANIYAL ALAM</span> All rights reserved.
                        </p>

                        <div className={styles.actions}>
                            <div className={styles.socialIcons}>
                                <a href="#" className={styles.iconLink}><Twitter size={20} /></a>
                                <a href="#" className={styles.iconLink}><Github size={20} /></a>
                                <a href="#" className={styles.iconLink}><Linkedin size={20} /></a>
                                <a href="#" className={styles.iconLink}><Instagram size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Links Grid */}
                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h3 className={styles.colTitle}>Main</h3>
                            <Link href="/" className={styles.link}>Home</Link>
                            <Link href="#about" className={styles.link}>About</Link>
                            <Link href="#services" className={styles.link}>Services</Link>
                            <Link href="#process" className={styles.link}>Process</Link>
                            <Link href="/projects" className={styles.link}>Projects</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.colTitle}>Resources</h3>
                            <Link href="/faqs" className={styles.link}>FAQs</Link>
                            <Link href="/blog" className={styles.link}>Blog</Link>
                            <Link href="/case-studies" className={styles.link}>Case Studies</Link>
                            <Link href="/status" className={styles.link}>System Status</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.colTitle}>Legal</h3>
                            <Link href="/legal/privacy-policy" className={styles.link}>Privacy Policy</Link>
                            <Link href="/legal/terms-of-service" className={styles.link}>Terms of Service</Link>
                            <Link href="/legal/cookie-policy" className={styles.link}>Cookie Policy</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.colTitle}>Connect</h3>
                            <Link href="#contact" className={styles.link}>Contact</Link>
                            <a href="mailto:daniyalalam.uk9@gmail.com" className={styles.link}>Email</a>
                            <a href="https://www.tiktok.com/tag/wordpess_wallah" target="_blank" className={styles.link}>TikTok</a>
                            <a href="https://linkedin.com" target="_blank" className={styles.link}>LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Big Background Text */}
                <div className={styles.bigTextContainer}>
                    <h1 className={styles.bigText}>DANIYAL</h1>
                    <button
                        className={styles.backToTop}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Back to top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
