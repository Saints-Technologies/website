"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { CtaBanner } from "@/components/cta-banner";
import { Ventures } from "@/components/ventures";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { GridOverlay } from "@/components/grid-overlay";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "#2A2E33" }}>
      <GridOverlay />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <CtaBanner />
        <Ventures />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
