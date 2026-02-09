"use client";

import React, { useRef, MouseEvent, useId } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./MagicCard.module.css";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    children?: React.ReactNode;
}

export const MagicCard = ({
    imageUrl,
    children,
    className,
    ...props
}: MagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const id = useId();
    // Sanitize ID for use in URL
    const filterId = `magic-card-blur-${id.replace(/:/g, '')}`;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const relativeX = e.clientX - centerX;
        const relativeY = e.clientY - centerY;

        // Normalize to -1 to 1 range
        const x = (relativeX / (rect.width / 2)).toFixed(3);
        const y = (relativeY / (rect.height / 2)).toFixed(3);

        card.style.setProperty('--pointer-x', x);
        card.style.setProperty('--pointer-y', y);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        // Reset to default "off-screen" position
        card.style.setProperty('--pointer-x', '-10');
        card.style.setProperty('--pointer-y', '-10');
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(styles.card, className)}
            {...props}
        >
            {/* Inner Content Wrapper */}
            <div className={styles.innerWrapper}>

                {/* Magic Image Layer (Effect) */}
                <div
                    className={styles.effectLayer}
                    style={{
                        filter: `url(#${filterId}) saturate(5) brightness(1.3) contrast(1.4)`,
                    }}
                >
                    <Image
                        src={imageUrl}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.effectImg}
                        unoptimized
                    />
                </div>

                {/* Content Area */}
                <div className={styles.content}>
                    {children}
                </div>
            </div>

            {/* Border/Glass Effect */}
            <div className={styles.borderEffect} />

            {/* SVG Filter Definition */}
            <svg className={styles.svgFilter}>
                <defs>
                    <filter id={filterId} width="500%" height="500%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="28" />
                    </filter>
                </defs>
            </svg>
        </article>
    );
};
