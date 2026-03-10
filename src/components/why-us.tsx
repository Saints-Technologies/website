"use client";

import { Shield, Eye, Zap, Users, Lock, HeartHandshake } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./reveal";
import { useI18n } from "@/lib/i18n";

const featureIcons = [Zap, Shield, Eye, Users, Lock, HeartHandshake];

export function WhyUs() {
  const { t } = useI18n();

  return (
    <section
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        paddingLeft: 24,
        paddingRight: 24,
        background: "#2A2E33",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(207,199,190,0.04) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto", position: "relative" }}>
        <div style={{ height: 1, background: "rgba(207,199,190,0.12)", marginBottom: 80 }} />

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal>
            <p style={{ fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }} className="font-medium uppercase">
              {t.whyUs.label}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              style={{ marginTop: 24, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#ffffff", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
              className="font-semibold"
            >
              {t.whyUs.title}
            </h2>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          style={{ marginTop: 0 }}
        >
          {t.whyUs.items.map((item, i) => {
            const Icon = featureIcons[i];
            return (
              <StaggerItem key={i}>
                <div
                  style={{
                    padding: "36px 32px",
                    borderRadius: 16,
                    border: "1px solid rgba(207,199,190,0.1)",
                    background: "rgba(0,0,0,0.15)",
                    height: "100%",
                    transition: "border-color 0.4s, background 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(207,199,190,0.25)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(207,199,190,0.1)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.15)";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(207,199,190,0.06)",
                      border: "1px solid rgba(207,199,190,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon style={{ width: 18, height: 18, color: "#CFC7BE" }} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: 16, color: "#ffffff", marginBottom: 8 }} className="font-semibold">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#A8A199" }}>
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
