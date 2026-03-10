"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { NeuralNetwork } from "./neural-network";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      style={{ minHeight: "100vh", paddingTop: 160, paddingBottom: 100, background: "#2A2E33" }}
      className="relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Interactive Neural Network background */}
      <NeuralNetwork />

      {/* Ambient glow — top center */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 900, height: 700, marginTop: -250, zIndex: 2,
          background: "radial-gradient(ellipse at center, rgba(42,46,51,0.8) 0%, transparent 65%)",
        }}
      />

      {/* Center content vignette for readability */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: 0, zIndex: 2,
          background: "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(42,46,51,0.85) 0%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative mx-auto w-full text-center" style={{ maxWidth: 780, padding: "0 24px", zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: 48, fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }}
          className="font-medium uppercase"
        >
          {t.hero.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#ffffff" }}
          className="font-semibold"
        >
          {t.hero.h1_1}{" "}
          <span style={{ color: "#CFC7BE" }}>{t.hero.h1_2}</span>{" "}
          {t.hero.h1_3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{ marginTop: 32, fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginLeft: "auto", marginRight: "auto", color: "#A8A199" }}
          className="font-light"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}
        >
          <a
            href="#contact"
            style={{ padding: "14px 32px", fontSize: 14, borderRadius: 999, background: "#CFC7BE", color: "#2A2E33", textDecoration: "none", transition: "background 0.3s" }}
            className="font-medium hover:bg-brand-light"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#services"
            style={{ fontSize: 14, color: "#A8A199", textDecoration: "none", transition: "color 0.3s" }}
            className="hover:text-brand"
          >
            {t.hero.cta2} ↓
          </a>
        </motion.div>
      </div>

      {/* Trust line at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          marginTop: 100,
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(207,199,190,0.3)",
          fontWeight: 500,
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {t.hero.trusted}
      </motion.p>
    </section>
  );
}
