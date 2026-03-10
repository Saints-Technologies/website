"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#ventures", label: t.nav.ventures },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div
          style={{
            transition: "all 0.7s",
            borderBottom: scrolled ? "1px solid rgba(207,199,190,0.1)" : "1px solid transparent",
            background: scrolled ? "rgba(42,46,51,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(40px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(40px)" : "none",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 24px",
              height: 72,
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
            }}
          >
            {/* Left — Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Image src="/logo.png" alt="Saints Technologies" width={30} height={30} style={{ height: 30, width: "auto" }} />
              <span className="hidden sm:inline" style={{ fontSize: 13, fontWeight: 500, color: "#ffffff", letterSpacing: "0.02em" }}>
                Saints Technologies
              </span>
            </a>

            {/* Center — Nav Links */}
            <nav
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: 4,
                background: "rgba(207,199,190,0.08)",
                borderRadius: 999,
                padding: "4px 6px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 18px",
                    fontSize: 13,
                    color: "#CFC7BE",
                    textDecoration: "none",
                    borderRadius: 999,
                    transition: "color 0.3s, background 0.3s",
                  }}
                  className="hover:text-white hover:bg-white/[0.08]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right — Language + CTA */}
            <div
              className="hidden md:flex"
              style={{ alignItems: "center", justifyContent: "flex-end", gap: 16 }}
            >
              <button
                onClick={() => setLang(lang === "en" ? "tr" : "en")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  padding: "6px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(207,199,190,0.15)",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  transition: "border-color 0.3s",
                }}
                className="hover:border-brand-dark"
              >
                <span style={{ color: lang === "en" ? "#ffffff" : "#A8A199" }}>EN</span>
                <span style={{ color: "rgba(207,199,190,0.25)", margin: "0 4px" }}>/</span>
                <span style={{ color: lang === "tr" ? "#ffffff" : "#A8A199" }}>TR</span>
              </button>

              <Link
                href="/contact"
                style={{
                  padding: "10px 22px",
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: 999,
                  background: "#CFC7BE",
                  color: "#2A2E33",
                  textDecoration: "none",
                  transition: "background 0.3s",
                }}
                className="hover:bg-brand-light"
              >
                {t.nav.cta}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex justify-end md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
              >
                {mobileOpen ? (
                  <X style={{ width: 20, height: 20, color: "#CFC7BE" }} />
                ) : (
                  <Menu style={{ width: 20, height: 20, color: "#CFC7BE" }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "#2A2E33", display: "flex", flexDirection: "column" }}
            className="md:hidden"
          >
            <div style={{ height: 72 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: 8 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  style={{ padding: "12px 0", fontSize: 32, fontWeight: 300, color: "#ffffff", textDecoration: "none" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <button
                  onClick={() => setLang(lang === "en" ? "tr" : "en")}
                  style={{
                    width: "fit-content", padding: "10px 20px", borderRadius: 999,
                    border: "1px solid rgba(207,199,190,0.15)", background: "transparent",
                    cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#CFC7BE",
                  }}
                >
                  {lang === "en" ? "Türkçe'ye geç" : "Switch to English"}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: "fit-content", padding: "14px 32px", borderRadius: 999,
                    background: "#CFC7BE", color: "#2A2E33", fontSize: 15, fontWeight: 500, textDecoration: "none",
                  }}
                >
                  {t.nav.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
