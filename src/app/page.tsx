"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

// Dynamic imports for below-the-fold components
const ServiceMarquee = dynamic(() => import("@/components/Marquee/ServiceMarquee"));
const About = dynamic(() => import("@/components/About/About"));
const WhatIDo = dynamic(() => import("@/components/WhatIDo/WhatIDo"));
const Process = dynamic(() => import("@/components/Process/Process"));
const Portfolio = dynamic(() => import("@/components/Portfolio/Portfolio"));
const Pricing = dynamic(() => import("@/components/Pricing/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ/FAQ"));
const LogoMarquee = dynamic(() => import("@/components/Marquee/LogoMarquee"));
const WorldMap = dynamic(() => import("@/components/WorldMap/WorldMap"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "@/components/Loading/Loading";
import LazySection from "@/components/Common/LazySection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during loading and trigger ready event
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Trigger global ready signal after a small delay to ensure exit animation has room
      const timer = setTimeout(() => {
        window.dispatchEvent(new CustomEvent("app-ready"));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Loading key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main
        key="main-content"
        className="w-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        
        <LazySection minHeight="100px"><ServiceMarquee /></LazySection>
        <LazySection minHeight="600px" offset="400px"><About /></LazySection>
        <LazySection minHeight="400px" offset="400px"><WhatIDo /></LazySection>
        <LazySection minHeight="600px" offset="400px"><Process /></LazySection>
        <LazySection minHeight="800px" offset="400px"><Portfolio /></LazySection>
        <LazySection minHeight="500px" offset="400px"><Pricing /></LazySection>
        <LazySection minHeight="400px" offset="400px"><Testimonials /></LazySection>
        <LazySection minHeight="400px" offset="400px"><FAQ /></LazySection>
        <LazySection minHeight="150px" offset="400px"><LogoMarquee /></LazySection>
        <LazySection minHeight="600px" offset="400px"><WorldMap /></LazySection>
        <LazySection minHeight="600px" offset="400px"><Contact /></LazySection>
        <LazySection minHeight="300px" offset="400px"><Footer /></LazySection>
      </motion.main>
    </>
  );
}
