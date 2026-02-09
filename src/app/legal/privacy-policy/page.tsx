"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../legal.module.css";

export default function PrivacyPolicy() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <span className={styles.lastUpdated}>Last Updated: February 2026</span>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Introduction</h2>
                    <p className={styles.text}>
                        Welcome to Daniyal Alam&apos;s portfolio. Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Information Collection</h2>
                    <p className={styles.text}>
                        I collect information that you strictly provide to me, such as when you use the contact form to verify a project request. This includes:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Name</li>
                        <li className={styles.listItem}>Email Address</li>
                        <li className={styles.listItem}>Project Details</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Use of Information</h2>
                    <p className={styles.text}>
                        The information collected is used solely for the purpose of communication regarding your project inquiries or potential collaborations. I do not sell, trade, or otherwise transfer your personal information to outside parties.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Data Security</h2>
                    <p className={styles.text}>
                        I implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Contact</h2>
                    <p className={styles.text}>
                        If you have any questions regarding this privacy policy, you may contact me at hello@daniyal.design.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
