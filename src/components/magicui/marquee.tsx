"use client";

import { motion } from "framer-motion";
import styles from "./Marquee.module.css";

interface MarqueeProps {
    children: React.ReactNode;
    reverse?: boolean;
    pauseOnHover?: boolean;
    duration?: number;
}

export default function Marquee({
    children,
    reverse = false,
    duration = 20
}: MarqueeProps) {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.content}
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                style={{ width: "max-content", display: "flex", gap: "2rem" }}
            >
                <div className={styles.row}>{children}</div>
                <div className={styles.row}>{children}</div>
            </motion.div>
        </div>
    );
}
