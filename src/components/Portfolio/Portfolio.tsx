"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/lib/projects";
import styles from "./Portfolio.module.css";

// Display only the first 4 projects on the home page
const featuredProjects = allProjects.slice(0, 4);

export default function Portfolio() {
    return (
        <section className={styles.section} id="portfolio">
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        <span className={styles.dot} /> Selected Work
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        Studio <span className={styles.highlight}>Projects</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {featuredProjects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <span className={styles.cardIndex}>0{index + 1}</span>

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
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                            </div>

                            <div className={styles.cardInfo}>
                                <span className={styles.projectCategory}>{project.category}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.toolsList}>
                                    {project.tools.slice(0, 2).map((tool, i) => (
                                        <span key={i} className={styles.toolBadge}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.allProjectsWrapper}
                >
                    <Link href="/projects" className={styles.allProjectsLink}>
                        VIEW ALL PROJECTS <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
