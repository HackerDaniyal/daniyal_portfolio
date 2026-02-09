"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className="container">
                <div className={styles.wrapper}>
                    {/* Left Side: Info */}
                    <div className={styles.infoColumn}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={styles.header}
                        >
                            <div className={styles.badge}>
                                <span className={styles.dot} /> Get in Touch
                            </div>
                            <h2 className={styles.title}>
                                Let&apos;s working <br />
                                <span className={styles.highlight}>together.</span>
                            </h2>
                            <p className={styles.description}>
                                Creating something unique requires a connection. Let&apos;s start a conversation about your next big project.
                            </p>
                        </motion.div>

                        <div className={styles.contactDetails}>
                            <motion.a
                                href="mailto:hello@daniyal.design"
                                className={styles.contactItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <span className={styles.label}>Email Me</span>
                                    <span className={styles.value}>hello@daniyal.design</span>
                                </div>
                            </motion.a>

                            <motion.div
                                className={styles.contactItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <div>
                                    <span className={styles.label}>Location</span>
                                    <span className={styles.value}>Global / Remote</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        className={styles.formColumn}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <form className={styles.form}>
                            {/* Row 1: Name & Email */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Name *</label>
                                    <input type="text" id="name" placeholder="Daniyal Alam" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>Email *</label>
                                    <input type="email" id="email" placeholder="example@gmail.com" className={styles.input} />
                                </div>
                            </div>

                            {/* Row 2: Company Name */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="company" className={styles.label}>Company Name *</label>
                                <input type="text" id="company" placeholder="Ex. StaticMania" className={styles.input} />
                            </div>

                            {/* Row 3: Package & Budget */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="package" className={styles.label}>Select Package Plan *</label>
                                    <select id="package" className={styles.select} defaultValue="">
                                        <option value="" disabled>Select Your Plan</option>
                                        <option value="basic">Basic</option>
                                        <option value="standard">Standard</option>
                                        <option value="premium">Premium</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="budget" className={styles.label}>Project Budget *</label>
                                    <select id="budget" className={styles.select} defaultValue="">
                                        <option value="" disabled>Select Your Range</option>
                                        <option value="1k-5k">$1k - $5k</option>
                                        <option value="5k-10k">$5k - $10k</option>
                                        <option value="10k+">$10k+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 4: Details */}
                            <div className={styles.inputGroup} style={{ marginBottom: '60px' }}>
                                <label htmlFor="message" className={styles.label}>Project Details</label>
                                <textarea id="message" rows={1} placeholder="Tell us more about your project" className={styles.textarea}></textarea>
                            </div>

                            {/* Footer Area */}
                            <div className={styles.formFooter}>
                                <button type="submit" className={styles.submitBtn}>
                                    Submit
                                </button>
                                <span className={styles.expectText}>
                                    Expect to Hear from Me Within 24 Hours!
                                </span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
