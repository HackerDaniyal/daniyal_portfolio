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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        <ServiceMarquee />
        <About />
        <WhatIDo />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LogoMarquee />
        <WorldMap />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
