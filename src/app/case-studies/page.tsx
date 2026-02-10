"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { allProjects } from "@/lib/projects";
import styles from "../resources.module.css";

export default function CaseStudiesPage() {
    return (
        <main style={{ background: '#080808' }}>
            <Navbar />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.title}>Case Studies</h1>
                    <p className={styles.subtitle}>
                        A deep dive into the technical challenges and strategic solutions behind my most impactful projects.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {allProjects.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h2 className={styles.cardTitle}>{project.title}</h2>
                                </div>

                                <div className={styles.cardDetails}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>The Challenge</span>
                                        <p className={styles.detailText}>{project.challenge}</p>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>The Solution</span>
                                        <p className={styles.detailText}>{project.solution}</p>
                                    </div>
                                    <div className={styles.resultsBox}>
                                        <span className={styles.detailLabel} style={{ color: 'var(--primary)' }}>Key Results</span>
                                        <p className={styles.resultsText}>{project.results}</p>
                                    </div>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.cardLink}
                                    style={{ textDecoration: 'none', borderBottom: '1px solid currentColor', width: 'fit-content' }}
                                >
                                    Visit Live Site →
                                </a>
                            </div>

                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
