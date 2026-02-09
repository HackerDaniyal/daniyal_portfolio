"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../legal.module.css";

export default function TermsOfService() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Terms of Service</h1>
                <span className={styles.lastUpdated}>Last Updated: February 2026</span>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                    <p className={styles.text}>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
                    <p className={styles.text}>
                        All content on this site, including text, graphics, logos, and images, is the property of Daniyal Alam and protected by international copyright laws. You may not reproduce, distribute, or create derivative works without express written consent.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Use License</h2>
                    <p className={styles.text}>
                        Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Disclaimer</h2>
                    <p className={styles.text}>
                        The materials on this website are provided "as is". Daniyal Alam makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
