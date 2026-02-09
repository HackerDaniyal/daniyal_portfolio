"use client";

import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import styles from "./ServiceMarquee.module.css";

const services = [
    {
        name: "WordPress",
        username: "@wp_expert",
        body: "Expert WordPress development, custom themes, and high-performance solutions.",
        img: "https://cdn.simpleicons.org/wordpress",
    },
    {
        name: "Elementor",
        username: "@elementor_pro",
        body: "Pixel-perfect drag & drop designs with advanced Elementor capabilities.",
        img: "https://cdn.simpleicons.org/elementor",
    },
    {
        name: "Shopify",
        username: "@shopify_dev",
        body: "Scalable e-commerce stores with custom Liquid themes and app integrations.",
        img: "https://cdn.simpleicons.org/shopify",
    },
    {
        name: "Figma UI/UX",
        username: "@uiux_design",
        body: "Modern, user-centric designs focused on conversions and premium aesthetics.",
        img: "https://cdn.simpleicons.org/figma",
    },
    {
        name: "WooCommerce",
        username: "@woo_store",
        body: "Powerful WooCommerce engines for complex online retail needs.",
        img: "https://cdn.simpleicons.org/woocommerce",
    },
    {
        name: "Theme Dev",
        username: "@custom_themes",
        body: "Bespoke theme development from scratch, optimized for core web vitals.",
        img: "https://cdn.simpleicons.org/codeigniter",
    },
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                    <Image src={img} alt={name} width={40} height={40} className={styles.avatar} unoptimized />
                </div>
                <div className={styles.userInfo}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.username}>{username}</span>
                </div>
            </div>
            <p className={styles.bodyText}>{body}</p>
        </div>
    );
};

export default function ServiceMarquee() {
    return (
        <div className={styles.section}>
            <div className={styles.gradientLeft} />
            <div className={styles.gradientRight} />

            <div className={styles.marqueeRow}>
                <Marquee duration={25}>
                    {firstRow.map((service) => (
                        <ServiceCard key={service.name} {...service} />
                    ))}
                </Marquee>
            </div>

            <div className={styles.marqueeRow}>
                <Marquee reverse duration={30}>
                    {secondRow.map((service) => (
                        <ServiceCard key={service.name} {...service} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
