"use client";

import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

export function Stats() {
  const { t } = useI18n();

  return (
    <section style={{ paddingTop: 0, paddingBottom: 120, paddingLeft: 24, paddingRight: 24, background: "#2A2E33" }}>
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "rgba(207,199,190,0.1)",
              borderRadius: 20,
              overflow: "hidden",
            }}
            className="sm:grid-cols-4 grid-cols-2"
          >
            {t.stats.items.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#2A2E33",
                  padding: "48px 32px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    color: "#CFC7BE",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#A8A199",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
