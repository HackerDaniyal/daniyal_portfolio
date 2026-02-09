"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ServiceMarquee from "@/components/Marquee/ServiceMarquee";
import About from "@/components/About/About";
import WhatIDo from "@/components/WhatIDo/WhatIDo";
import Process from "@/components/Process/Process";
import Portfolio from "@/components/Portfolio/Portfolio";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import WorldMap from "@/components/WorldMap/WorldMap";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import LogoMarquee from "@/components/Marquee/LogoMarquee";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
