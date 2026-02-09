"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "What services do you strictly specialize in?",
        answer: "I specialize in high-end Web Development (Next.js, WordPress, Shopify) and UI/UX Design (Figma). My focus is on creating performance-driven, visually stunning digital experiences that convert."
    },
    {
        question: "Do you accept international clients?",
        answer: "Absolutely. I work with clients globally, including businesses in the UK, USA, Australia, Qatar, and Italy. I'm accustomed to working across different time zones to ensure smooth communication."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by project scope. A standard high-performance landing page typically takes 4-7 days, while a full custom e-commerce or corporate site may take 2-4 weeks. I prioritize quality and timely delivery."
    },
    {
        question: "Do you adhere to my design or create one from scratch?",
        answer: "Both. If you have a Figma file ready, I can develop it pixel-perfectly. If not, I offer full UI/UX design services to rigorously plan and design your site before development begins."
    },
    {
        question: "Do you provide support after the project is launched?",
        answer: "Yes, I believe in long-term partnerships. I offer 2 weeks of complimentary post-launch support to ensure everything runs smoothly. Ongoing maintenance packages are also available."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className={styles.section} id="faq">
            <div className="container">
                <div className={styles.layout}>
                    {/* Left Column: Sticky Title */}
                    <div className={styles.headerColumn}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={styles.headerContent}
                        >
                            <div className={styles.badge}>
                                <span className={styles.dot} /> Common Queries
                            </div>
                            <h2 className={styles.title}>
                                Frequently Asked <br />
                                <span className={styles.highlight}>Questions</span>
                            </h2>
                            <p className={styles.description}>
                                Can't find what you're looking for? <br />
                                <a href="#contact" className={styles.link}>Get in touch</a> directly.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Questions */}
                    <div className={styles.questionsColumn}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <div className={styles.questionHeader}>
                                    <span className={styles.index}>0{index + 1}</span>
                                    <h3 className={styles.question}>{faq.question}</h3>
                                    <div className={styles.iconWrapper}>
                                        <Plus size={20} className={styles.icon} />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className={styles.answerWrapper}
                                        >
                                            <p className={styles.answer}>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
