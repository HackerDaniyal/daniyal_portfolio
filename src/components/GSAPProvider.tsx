"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const handleReady = () => setIsReady(true);
        window.addEventListener("app-ready", handleReady);
        return () => window.removeEventListener("app-ready", handleReady);
    }, []);

    useGSAP(() => {
        if (!isReady) return;

        // Spread the initialization over time to avoid a single long task (>50ms)
        // Task 1: Headers and Main Titles
        const headerTask = setTimeout(() => {
            const headers = gsap.utils.toArray<HTMLElement>("h2:not(.hero-title), h3, .section-header");
            headers.forEach((header) => {
                gsap.fromTo(
                    header,
                    { opacity: 0, scale: 0.98, y: 10 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        overwrite: "auto",
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: header,
                            start: "top 95%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, 50);

        // Task 2: Service Cards and Staggered Elements
        const cardTask = setTimeout(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".magic-card, .service-card");
            if (cards.length > 0) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.05,
                        overwrite: "auto",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: cards[0],
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, 200);

        return () => {
            clearTimeout(headerTask);
            clearTimeout(cardTask);
        };
    }, { scope: mainRef, dependencies: [isReady] });

    return (
        <div ref={mainRef} className="gsap-wrapper">
            {children}
        </div>
    );
}
