"use client";

import { motion } from "framer-motion";
import { DottedMap } from "./DottedMap";
import styles from "./WorldMap.module.css";

const markers = [
    { name: "USA", lat: 37.0902, lng: -95.7129, size: 0.8 },
    { name: "UK", lat: 55.3781, lng: -3.436, size: 0.6 },
    { name: "Italy", lat: 41.8719, lng: 12.5674, size: 0.6 },
    { name: "Spain", lat: 40.4637, lng: -3.7492, size: 0.6 },
    { name: "Qatar", lat: 25.3548, lng: 51.1839, size: 0.4 },
    { name: "Pakistan", lat: 30.3753, lng: 69.3451, size: 0.8 },
    { name: "Australia", lat: -25.2744, lng: 133.7751, size: 0.8 },
    { name: "New Zealand", lat: -40.9006, lng: 174.886, size: 0.5 },
];

export default function WorldMap() {
    return (
        <section className={styles.section} id="presence">
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        Global Reach
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Trusted <span className={styles.highlight}>Worldwide</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.subtitle}
                    >
                        Delivering premium digital solutions to visionary clients across the globe.
                    </motion.p>
                </div>

                <div className={styles.mapContainer}>
                    <div className={styles.mapInner}>
                        <DottedMap
                            markers={markers}
                            dotRadius={0.15}
                            markerColor="#FF8c00"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
