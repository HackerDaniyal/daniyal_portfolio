"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Animate Sections (Staggered Entrance)
        // 1. Animate Sections (Staggered Entrance) - DISABLED TO FIX PREMATURE HIDING
        // const sections = gsap.utils.toArray<HTMLElement>("section");
        // sections.forEach((section) => {
        //     gsap.fromTo(
        //         section,
        //         { opacity: 0, y: 50 },
        //         {
        //             opacity: 1,
        //             y: 0,
        //             duration: 1.2,
        //             ease: "power2.out",
        //             scrollTrigger: {
        //                 trigger: section,
        //                 start: "top 85%",
        //                 toggleActions: "play none none none",
        //             },
        //         }
        //     );
        // });

        // 2. Animate Headers and Titles (Cinematic Fade In)
        const headers = gsap.utils.toArray<HTMLElement>("h2, h3, .section-header");
        headers.forEach((header) => {
            gsap.fromTo(
                header,
                { opacity: 0, scale: 0.95, filter: "blur(10px)" },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // 3. Animate Staggered Cards (if they exist)
        const cards = gsap.utils.toArray<HTMLElement>(".magic-card, .service-card, [class*='card']");
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: cards[0],
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, { scope: mainRef });

    return (
        <div ref={mainRef} className="gsap-wrapper">
            {children}
        </div>
    );
}
