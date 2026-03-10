"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./reveal";
import { useI18n } from "@/lib/i18n";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const stepIcons = [Search, PenTool, Rocket, TrendingUp];

export function Process() {
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
      {/* Decorative gradient orb */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: "50%",
          right: -200,
          width: 600,
          height: 600,
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(207,199,190,0.04) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto", position: "relative" }}>
        <Reveal>
          <p
            style={{ fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }}
            className="font-medium uppercase"
          >
            {t.process.label}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            style={{
              marginTop: 24,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              maxWidth: 560,
              color: "#ffffff",
            }}
            className="font-semibold"
          >
            {t.process.title}
          </h2>
        </Reveal>

        <StaggerContainer
          className="grid gap-0 md:grid-cols-4"
          style={{ marginTop: 80 }}
        >
          {t.process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <StaggerItem key={i}>
                <div
                  style={{
                    position: "relative",
                    padding: "40px 32px 40px 0",
                    height: "100%",
                  }}
                >
                  {/* Connecting line */}
                  {i < t.process.steps.length - 1 && (
                    <div
                      className="hidden md:block"
                      style={{
                        position: "absolute",
                        top: 62,
                        right: 0,
                        width: "100%",
                        height: 1,
                        background: "linear-gradient(to right, rgba(207,199,190,0.2), rgba(207,199,190,0.05))",
                      }}
                    />
                  )}

                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      border: "1px solid rgba(207,199,190,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 28,
                      background: "rgba(207,199,190,0.05)",
                    }}
                  >
                    <Icon style={{ width: 18, height: 18, color: "#CFC7BE" }} strokeWidth={1.5} />
                  </div>

                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "rgba(207,199,190,0.3)",
                      marginBottom: 12,
                    }}
                  >
                    {step.num}
                  </span>

                  <h3 style={{ fontSize: 17, color: "#ffffff", marginBottom: 12 }} className="font-semibold">
                    {step.title}
                  </h3>

                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#A8A199", paddingRight: 16 }}>
                    {step.desc}
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
