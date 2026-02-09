"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../resources.module.css";

const posts = [
    {
        title: "The Future of Web Design: 2026 Trends",
        excerpt: "Exploring the rise of immersive 3D web experiences, AI-driven layouts, and the return of brutalism.",
        date: "Feb 2, 2026"
    },
    {
        title: "Why Next.js is the Best Choice for SEO",
        excerpt: "A deep dive into server-side rendering, static site generation, and how Next.js boosts your Google rankings.",
        date: "Jan 18, 2026"
    },
    {
        title: "Mastering Framer Motion for React",
        excerpt: "Tips and tricks for creating butter-smooth animations in your React applications without performance hits.",
        date: "Dec 30, 2025"
    },
    {
        title: "Designing for Accessibility",
        excerpt: "How to ensure your beautiful designs are usable by everyone, including compliance with WCAG 2.1 standards.",
        date: "Nov 12, 2025"
    }
];

export default function BlogPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Insights & Thoughts</h1>
                <p className={styles.subtitle}>Thinking out loud about design, code, and the future of the web.</p>

                <div className={styles.grid}>
                    {posts.map((post, i) => (
                        <article key={i} className={styles.card}>
                            <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '8px' }}>{post.date}</span>
                            <h2 className={styles.cardTitle}>{post.title}</h2>
                            <p className={styles.cardText}>{post.excerpt}</p>
                            <a href="#" className={styles.cardLink}>Read Article →</a>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
