"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Use IntersectionObserver for a high-performance active section detection
        const sections = ["home", "about", "services", "process", "presence", "testimonials", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when 20%-30% into the viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: "Home", anchor: "/#home" },
        { name: "About", anchor: "/#about" },
        { name: "Services", anchor: "/#services" },
        { name: "Process", anchor: "/#process" },
        { name: "Global Reach", anchor: "/#presence" },
        { name: "Projects", anchor: "/projects" },
        { name: "Testimonials", anchor: "/#testimonials" },
        { name: "Contact", anchor: "/#contact" },
    ];

    // Handle navigation with smooth scrolling
    const handleNavigation = (anchor: string) => {
        if (pathname !== '/') {
            // If we're not on the home page, redirect to home with anchor
            window.location.href = anchor;
        } else if (anchor.includes('#')) {
            // If we're on the home page, just scroll to the section
            const elementId = anchor.split('#')[1];
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className={styles.navWrapper}>
            <div className={`${styles.innerContainer} ${scrolled ? styles.scrolled : styles.fullWidth}`}>
                <div className={styles.flexContainer}>
                    {/* Logo */}
                    <Link
                        href="/#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/#home");
                        }}
                        className={styles.logo}
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="Daniyal Alam"
                            width={400}
                            height={165}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.anchor}
                                href={link.anchor}
                                onClick={(e) => {
                                    if (link.anchor.includes('#')) {
                                        e.preventDefault();
                                        handleNavigation(link.anchor);
                                    }
                                }}
                                className={`${styles.navLink} ${activeSection === link.anchor.split('#')[1]
                                    ? styles.active
                                    : ""
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => handleNavigation('/#contact')}
                            className={styles.ctaButton}
                        >
                            Let&apos;s Talk
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className={styles.mobileNav}>
                        <div className={styles.mobileLinkList}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.anchor}
                                    href={link.anchor}
                                    onClick={(e) => {
                                        if (link.anchor.includes('#')) {
                                            e.preventDefault();
                                            handleNavigation(link.anchor);
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                    className={`${styles.mobileLink} ${activeSection === link.anchor.split('#')[1]
                                        ? styles.active
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => handleNavigation('/#contact')}
                                className={styles.mobileCta}
                            >
                                Let&apos;s Talk
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
