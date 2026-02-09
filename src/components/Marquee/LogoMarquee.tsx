"use client";

import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import styles from "./LogoMarquee.module.css";

const logos = [
    { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/white" },
    { name: "Elementor", src: "https://cdn.simpleicons.org/elementor/white" },
    { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/white" },
    { name: "Figma", src: "https://cdn.simpleicons.org/figma/white" },
    { name: "WooCommerce", src: "https://cdn.simpleicons.org/woocommerce/white" },
    { name: "Google", src: "https://cdn.simpleicons.org/google/white" },
    { name: "Webflow", src: "https://cdn.simpleicons.org/webflow/white" },
    { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss/white" },
    { name: "React", src: "https://cdn.simpleicons.org/react/white" },
    { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/white" },
];

export default function LogoMarquee() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.labelWrapper}>
                        <span className={styles.dot} />
                        <p className={styles.label}>PARTNERING WITH GLOBAL LEADERS</p>
                    </div>
                    <h2 className={styles.title}>Bringing big ideas to life.</h2>
                </div>

                <div className={styles.marqueesStacks}>
                    <Marquee duration={35}>
                        {logos.map((logo) => (
                            <LogoItem key={logo.name} {...logo} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

const LogoItem = ({ name, src }: { name: string; src: string }) => (
    <div className={styles.logoItem}>
        <div className={styles.logoInner}>
            <Image
                src={src}
                alt={name}
                width={120}
                height={48}
                className={styles.logoImage}
                unoptimized
            />
            <span className={styles.logoName}>{name}</span>
        </div>
    </div>
);
