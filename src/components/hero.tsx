"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      style={{ minHeight: "100vh", paddingTop: 160, paddingBottom: 100, background: "#2A2E33" }}
      className="relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glow — top center */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 900, height: 700, marginTop: -250,
          background: "radial-gradient(ellipse at center, rgba(207,199,190,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Floating geometric ring — left */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          top: "20%", left: "5%",
          width: 280, height: 280,
          borderRadius: "50%",
          border: "1px solid rgba(207,199,190,0.06)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric ring — right */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          bottom: "15%", right: "8%",
          width: 200, height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(207,199,190,0.05)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Small accent dot — top right */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          top: "30%", right: "15%",
          width: 6, height: 6,
          borderRadius: "50%",
          background: "rgba(207,199,190,0.15)",
        }}
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small accent dot — bottom left */}
      <motion.div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          bottom: "35%", left: "18%",
          width: 4, height: 4,
          borderRadius: "50%",
          background: "rgba(207,199,190,0.12)",
        }}
        animate={{ opacity: [0.12, 0.35, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Subtle horizontal line accent */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          top: "50%", left: 0, right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent 5%, rgba(207,199,190,0.04) 30%, rgba(207,199,190,0.04) 70%, transparent 95%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full text-center" style={{ maxWidth: 780, padding: "0 24px" }}>
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
        }}
      >
        {t.hero.trusted}
      </motion.p>
    </section>
  );
}
