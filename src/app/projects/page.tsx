"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/lib/projects";
import styles from "./projects.module.css";

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                {/* Header Section */}
                <div className={styles.header}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.titleWrapper}
                    >
                        <h1 className={styles.title}>Full Portfolio <span className={styles.highlight}>Archive</span></h1>
                        <p className={styles.description}>
                            A showcase of selected projects across E-commerce, SaaS, Branding, and Custom Development.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className={styles.projectCard}
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                                <div className={styles.browserFrame}>
                                    <div className={styles.browserHeader}>
                                        <div className={styles.dot} />
                                        <div className={styles.dot} />
                                        <div className={styles.dot} />
                                    </div>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.projectImg}
                                            unoptimized
                                        />
                                        <div className={styles.overlay}>
                                            <ExternalLink size={32} />
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div className={styles.info}>
                                <div className={styles.topInfo}>
                                    <span className={styles.category}>{project.category}</span>
                                    <span className={styles.index}>0{index + 1}</span>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <div className={styles.tools}>
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className={styles.toolBadge}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Message */}
                <div className={styles.footer}>
                    <p>Interested in working together? <Link href="/#pricing" className={styles.textLink}>Let's talk projects.</Link></p>
                </div>
            </div>
        </main>
    );
}
