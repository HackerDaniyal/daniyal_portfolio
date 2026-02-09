"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "../resources.module.css";

const faqs = [
    {
        question: "What services do you provide?",
        answer: "I specialize in custom web design, high-performance development (Next.js, React), and WordPress solutions. I focus on creating digital experiences that are visually stunning and technically robust."
    },
    {
        question: "How much does a typical project cost?",
        answer: "Project costs vary depending on the scope and complexity. A simple landing page typically starts from $1,500, while custom corporate websites can range from $5,000 to $15,000+."
    },
    {
        question: "How long does it take to build a website?",
        answer: "Timelines depend on the project size. A standard website usually takes 2-4 weeks from design to launch. Complex platforms may take 6-10 weeks."
    },
    {
        question: "Do you offer maintenance?",
        answer: "Yes, I offer ongoing maintenance packages to ensure your site remains secure, updated, and performing optimally after launch."
    },
    {
        question: "Do you work with startups?",
        answer: "Absolutely! I love working with startups to help define their digital presence and build scalable products from the ground up."
    }
];

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Frequently Asked Questions</h1>
                <p className={styles.subtitle}>Everything you need to know about working with me.</p>

                <div className={styles.faqList}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.faqItem}>
                            <h3 className={styles.question}>{faq.question}</h3>
                            <p className={styles.answer}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
