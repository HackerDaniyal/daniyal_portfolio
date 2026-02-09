import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('LOADING');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "8a60a4c3-a63e-4cef-a4ef-1b9220cc3ebf");
        formData.append("subject", "New Portfolio Inquiry from " + formData.get("name"));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('SUCCESS');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            } else {
                setErrorMessage(data.message || "Something went wrong.");
                setStatus('ERROR');
            }
        } catch (error) {
            setErrorMessage("Failed to send message. Please try again later.");
            setStatus('ERROR');
        }
    };

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
                                href="mailto:daniyalalam.uk9@gmail.com"
                                className={styles.contactItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <span className={styles.label}>Email Me</span>
                                    <span className={styles.value}>daniyalalam.uk9@gmail.com</span>
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
                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* Row 1: Name & Email */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Name *</label>
                                    <input type="text" id="name" name="name" placeholder="Daniyal Alam" className={styles.input} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>Email *</label>
                                    <input type="email" id="email" name="email" placeholder="example@gmail.com" className={styles.input} required />
                                </div>
                            </div>

                            {/* Row 2: Company Name */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="company" className={styles.label}>Company Name *</label>
                                <input type="text" id="company" name="company" placeholder="Ex. StaticMania" className={styles.input} required />
                            </div>

                            {/* Row 3: Package & Budget */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="package" className={styles.label}>Select Package Plan *</label>
                                    <select id="package" name="package" className={styles.select} defaultValue="" required>
                                        <option value="" disabled>Select Your Plan</option>
                                        <option value="basic">Basic</option>
                                        <option value="standard">Standard</option>
                                        <option value="premium">Premium</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="budget" className={styles.label}>Project Budget *</label>
                                    <select id="budget" name="budget" className={styles.select} defaultValue="" required>
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
                                <textarea id="message" name="message" rows={1} placeholder="Tell us more about your project" className={styles.textarea}></textarea>
                            </div>

                            {/* Footer Area */}
                            <div className={styles.formFooter}>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={status === 'LOADING'}
                                >
                                    {status === 'LOADING' ? (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Loader2 size={18} className={styles.spinner} /> Sending...
                                        </span>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>

                                <AnimatePresence mode="wait">
                                    {status === 'SUCCESS' && (
                                        <motion.span
                                            key="success"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className={styles.statusSuccess}
                                        >
                                            <CheckCircle size={18} /> Sent Successfully!
                                        </motion.span>
                                    )}
                                    {status === 'ERROR' && (
                                        <motion.span
                                            key="error"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className={styles.statusError}
                                        >
                                            <AlertCircle size={18} /> {errorMessage}
                                        </motion.span>
                                    )}
                                    {status === 'IDLE' && (
                                        <motion.span
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className={styles.expectText}
                                        >
                                            Expect to Hear from Me Within 24 Hours!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
