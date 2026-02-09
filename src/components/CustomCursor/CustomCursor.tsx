"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import styles from "./CustomCursor.module.css";
import { MousePointer2, ExternalLink, Plus } from "lucide-react";

const CustomCursor = () => {
    const [hoverType, setHoverType] = useState<string | null>(null);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = (e: any) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.closest('a')) {
                setHoverType('link');
            } else if (target.tagName === 'BUTTON' || target.closest('button')) {
                setHoverType('button');
            } else {
                setHoverType('interactive');
            }
        };

        const handleMouseLeave = () => setHoverType(null);

        window.addEventListener("mousemove", moveCursor);

        const clickables = document.querySelectorAll(
            'a, button, [role="button"], input, select, textarea, .clickable'
        );

        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className={styles.cursor}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                animate={{
                    scale: hoverType ? 1.5 : 1,
                    rotate: hoverType ? 45 : 0,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
            />
            <motion.div
                className={styles.cursorIconContainer}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                animate={{
                    scale: hoverType ? 1.2 : 1,
                    rotate: hoverType ? -15 : 0,
                }}
            >
                <div className={styles.iconWrapper}>
                    {hoverType === 'link' ? (
                        <ExternalLink size={14} className={styles.icon} />
                    ) : hoverType === 'button' ? (
                        <Plus size={14} className={styles.icon} />
                    ) : (
                        <MousePointer2 size={18} fill="currentColor" strokeWidth={2.5} className={styles.mainIcon} />
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
