"use client";

import Link from "next/link";
import { Reveal } from "./reveal";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CtaBanner() {
  const { t } = useI18n();

  return (
    <section style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 24, paddingRight: 24, background: "#2A2E33" }}>
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <Reveal>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 24,
              border: "1px solid rgba(207,199,190,0.15)",
              background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(207,199,190,0.06) 100%)",
              padding: "80px 48px",
              textAlign: "center",
            }}
          >
            {/* Decorative corner accents */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(207,199,190,0.06) 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                bottom: -80,
                left: -80,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(207,199,190,0.04) 0%, transparent 70%)",
              }}
            />

            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#A8A199",
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              {t.ctaBanner.label}
            </p>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#ffffff",
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="font-semibold"
            >
              {t.ctaBanner.title}
            </h2>

            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#A8A199",
                maxWidth: 440,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {t.ctaBanner.desc}
            </p>

            <div style={{ marginTop: 36, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 999,
                  background: "#CFC7BE",
                  color: "#2A2E33",
                  textDecoration: "none",
                  transition: "background 0.3s",
                }}
                className="hover:bg-brand-light"
              >
                {t.ctaBanner.cta}
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <span style={{ fontSize: 13, color: "rgba(207,199,190,0.4)" }}>{t.ctaBanner.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
