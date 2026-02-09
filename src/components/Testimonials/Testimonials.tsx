"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/magicui/marquee";
import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Legacy Nutracare",
        role: "Pakistan",
        content: "Daniyal bhai ne kamaal ka kaam kiya hai. Website bohat fast aur user-friendly hai, business mein kafi farq para hai!",
        rating: 5
    },
    {
        name: "Galliford Try",
        role: "UK",
        content: "Daniyal is just amazing. Our website is an Example of it.",
        rating: 5
    },
    {
        name: "Fresha",
        role: "United Kingdom",
        content: "Incredible attention to detail. The integration with our booking systems was handled perfectly. A top-tier developer.",
        rating: 5
    },
    {
        name: "Negative Apparel",
        role: "Pakistan",
        content: "Bohat hi modern UI design hai. Website look aur usability dono mein behtreen hai, highly recommended!",
        rating: 5
    },
    {
        name: "Acron Aviation",
        role: "Spain",
        content: "Professional and reliable. The educational portal they built for us is robust and easy for our students to navigate.",
        rating: 5
    },
    {
        name: "Nisa Fashion",
        role: "Pakistan",
        content: "Daniyal ka kaam pixel-perfect hota hai. Client handling aur communication bohat achi hai. Thanks for the great site!",
        rating: 5
    },
    {
        name: "Sovash",
        role: "Pakistan",
        content: "Excellent execution on a complex project. They understood our brand vision and translated it into a stunning digital experience.",
        rating: 5
    },
    {
        name: "Simba Car Hire",
        role: "Australia",
        content: "The booking engine is seamless. We've seen a significant increase in online reservations since the new site went live.",
        rating: 5
    },
    {
        name: "Rayyan Dental",
        role: "Qatar",
        content: "Our clinic's online presence has been completely transformed. The custom features are exactly what we needed to scale.",
        rating: 5
    },
    {
        name: "Al-Falah Solutions",
        role: "Qatar",
        content: "Very high-quality work. The performance optimization made our enterprise platform significantly faster. Great experience.",
        rating: 5
    },
    {
        name: "Moda Italia",
        role: "Italy",
        content: "Beautifully designed and technically sound. A perfect balance of aesthetics and functionality. Bravissimo!",
        rating: 5
    }
];

const ReviewCard = ({ name, role, content, rating }: any) => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.stars}>
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--primary)" stroke="none" />
                ))}
            </div>
        </div>
        <p className={styles.content}>"{content}"</p>
        <div className={styles.cardFooter}>
            <div className={styles.info}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.role}>{role}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.fullWidthContainer}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        <span className={styles.dot} /> Testimonials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        What The Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.subtext}
                    >
                        I've received hundreds of reviews and I take it with a lot of pride.
                    </motion.p>
                </div>

                <div className={styles.marqueeSection}>
                    <div className={styles.marqueeRow}>
                        <Marquee duration={500}>
                            {testimonials.map((t, i) => (
                                <ReviewCard key={i} {...t} />
                            ))}
                        </Marquee>
                    </div>

                    <div className={styles.marqueeRow}>
                        <Marquee duration={550} reverse>
                            {testimonials.slice().reverse().map((t, i) => (
                                <ReviewCard key={i} {...t} />
                            ))}
                        </Marquee>
                    </div>

                    <div className={styles.gradientLeft} />
                    <div className={styles.gradientRight} />
                </div>
            </div>
        </section>
    );
}
