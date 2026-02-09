"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../resources.module.css";

const cases = [
    {
        title: "FinTech Dashboard Redesign",
        category: "UI/UX Design",
        desc: "Complete overhaul of a legacy financial platform, resulting in a 40% increase in user engagement."
    },
    {
        title: "E-Commerce for Luxury Fashion",
        category: "Development",
        desc: "Custom Shopify Plus storefront with headless architecture using Next.js for a premium fashion brand."
    },
    {
        title: "AI Startup Landing Page",
        category: "Web Design",
        desc: "High-converting landing page with 3D interactive elements for a Series A funded AI startup."
    }
];

export default function CaseStudiesPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Case Studies</h1>
                <p className={styles.subtitle}>A selection of my recent work and the stories behind them.</p>

                <div className={styles.grid}>
                    {cases.map((study, i) => (
                        <div key={i} className={styles.card}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>{study.category}</span>
                            <h2 className={styles.cardTitle}>{study.title}</h2>
                            <p className={styles.cardText}>{study.desc}</p>
                            <a href="#" className={styles.cardLink}>View Case Study →</a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
