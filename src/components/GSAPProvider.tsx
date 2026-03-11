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

        // 2. Animate Headers and Titles (Cinematic Fade In)
        const headers = gsap.utils.toArray<HTMLElement>("h2:not(.hero-title), h3, .section-header");
        headers.forEach((header) => {
            gsap.fromTo(
                header,
                { opacity: 0, scale: 0.98, filter: "blur(5px)" },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
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

        // 3. Animate Staggered Cards (if they exist)
        const cards = gsap.utils.toArray<HTMLElement>(".magic-card, .service-card");
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 20 },
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
    }, { scope: mainRef, dependencies: [isReady] });

    return (
        <div ref={mainRef} className="gsap-wrapper">
            {children}
        </div>
    );
}
