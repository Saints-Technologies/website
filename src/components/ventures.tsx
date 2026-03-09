"use client";

import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

export function Ventures() {
  const { t } = useI18n();

  return (
    <section
      id="ventures"
      style={{ paddingTop: 200, paddingBottom: 200, paddingLeft: 24, paddingRight: 24, background: "#2A2E33" }}
    >
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ height: 1, background: "rgba(207,199,190,0.12)", marginBottom: 120 }} />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">
          <Reveal>
            <div>
              <p style={{ fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }} className="font-medium uppercase">
                {t.ventures.label}
              </p>
              <h2
                style={{ marginTop: 24, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#ffffff" }}
                className="font-semibold"
              >
                {t.ventures.title}
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, maxWidth: 380, color: "#A8A199" }}>
                {t.ventures.desc}
              </p>
              <a
                href="#contact"
                style={{
                  marginTop: 40, display: "inline-block", padding: "14px 28px", fontSize: 14,
                  borderRadius: 999, border: "1px solid rgba(207,199,190,0.2)", background: "transparent",
                  color: "#CFC7BE", textDecoration: "none", transition: "all 0.3s",
                }}
                className="hover:border-brand-dark hover:text-white"
              >
                {t.ventures.cta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col" style={{ paddingTop: 8 }}>
              {t.ventures.items.map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    display: "flex", gap: 24, paddingTop: 32, paddingBottom: 32,
                    borderBottom: i !== t.ventures.items.length - 1 ? "1px solid rgba(207,199,190,0.12)" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, color: "rgba(207,199,190,0.3)", marginTop: 2, fontVariantNumeric: "tabular-nums" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 17, color: "#ffffff" }} className="font-medium">
                      {item.title}
                    </h3>
                    <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.7, color: "#A8A199" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
