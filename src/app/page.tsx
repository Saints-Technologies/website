"use client";

import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Ventures } from "@/components/ventures";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { GridOverlay } from "@/components/grid-overlay";

export default function Home() {
  return (
    <I18nProvider>
      <div style={{ position: "relative", background: "#2A2E33" }}>
        <GridOverlay />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar />
          <Hero />
          <Stats />
          <Marquee />
          <Services />
          <Process />
          <Ventures />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
