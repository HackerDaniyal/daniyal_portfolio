"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../resources.module.css";

export default function SystemStatusPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>System Status</h1>
                <p className={styles.subtitle}>Current status of all systems and services.</p>

                <div className={styles.statusIndicator}>
                    <div className={styles.dot} />
                    <span style={{ fontWeight: 600 }}>All Systems Operational</span>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem' }}>Website Uptime</h3>
                        <p className={styles.cardText} style={{ marginBottom: 0, color: '#10b981' }}>99.99%</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem' }}>API Latency</h3>
                        <p className={styles.cardText} style={{ marginBottom: 0, color: '#10b981' }}>45ms</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem' }}>Email Servers</h3>
                        <p className={styles.cardText} style={{ marginBottom: 0, color: '#10b981' }}>Operational</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
