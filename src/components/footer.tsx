"use client";

import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.ventures, href: "#ventures" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer style={{ padding: "0 24px", background: "#2A2E33" }}>
      <div
        style={{
          maxWidth: 1120, marginLeft: "auto", marginRight: "auto",
          borderTop: "1px solid rgba(207,199,190,0.12)", paddingTop: 80, paddingBottom: 80,
        }}
      >
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo.png" alt="Saints Technologies" width={24} height={24} style={{ height: 24, width: "auto" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#CFC7BE" }}>Saints Technologies</span>
            </div>
            <p style={{ marginTop: 16, maxWidth: 280, fontSize: 14, lineHeight: 1.7, color: "#A8A199" }}>
              {t.footer.desc}
            </p>
          </div>

          <div style={{ display: "flex", gap: 64 }}>
            <div>
              <p style={{ marginBottom: 16, fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CFC7BE" }}>
                {t.footer.navigate}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {navItems.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{ fontSize: 14, color: "#A8A199", textDecoration: "none", transition: "color 0.3s" }}
                    className="hover:text-brand"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ marginBottom: 16, fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CFC7BE" }}>
                {t.footer.connect}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#A8A199", textDecoration: "none", transition: "color 0.3s" }}
                  className="hover:text-brand"
                >
                  <Linkedin style={{ width: 14, height: 14 }} />
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/saintstechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#A8A199", textDecoration: "none", transition: "color 0.3s" }}
                  className="hover:text-brand"
                >
                  <Instagram style={{ width: 14, height: 14 }} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-between sm:flex-row"
          style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(207,199,190,0.12)", gap: 12 }}
        >
          <p style={{ fontSize: 12, color: "#A8A199" }}>
            &copy; {new Date().getFullYear()} Saints Technologies
          </p>
          <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(207,199,190,0.3)" }}>
            Estd. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
