"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../legal.module.css";

export default function CookiePolicy() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Cookie Policy</h1>
                <span className={styles.lastUpdated}>Last Updated: February 2026</span>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
                    <p className={styles.text}>
                        Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. How I Use Cookies</h2>
                    <p className={styles.text}>
                        This website uses strictly necessary cookies to ensure the website functions properly. I do not track your personal browsing habits across other websites.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Managing Cookies</h2>
                    <p className={styles.text}>
                        You can change your browser settings to block or notify you when you receive a cookie, delete cookies, or browse this website using your browser&apos;s usage settings.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
