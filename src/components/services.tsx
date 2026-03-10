"use client";

import { Brain, Building2, Code2, Cpu, Network, BarChart3, Smartphone, Database } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./reveal";
import { useI18n } from "@/lib/i18n";

const icons = [Brain, Building2, Code2, Cpu];
const cornerIcons = [Network, BarChart3, Smartphone, Database];

export function Services() {
  const { t } = useI18n();

  return (
    <section
      id="services"
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        paddingLeft: 24,
        paddingRight: 24,
        background: "#2A2E33",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }} className="font-medium uppercase">
            {t.services.label}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            style={{ marginTop: 24, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.025em", maxWidth: 420, color: "#ffffff" }}
            className="font-semibold"
          >
            {t.services.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, maxWidth: 420, color: "#A8A199" }}>
            {t.services.desc}
          </p>
        </Reveal>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2"
          style={{ marginTop: 80 }}
        >
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            const CornerIcon = cornerIcons[i];
            return (
              <StaggerItem key={i}>
                <div
                  style={{
                    padding: 40,
                    borderRadius: 16,
                    border: "1px solid #CFC7BE",
                    background: "rgba(0,0,0,0.25)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s",
                  }}
                  className="group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(207,199,190,0.12), 0 0 60px rgba(207,199,190,0.05)";
                    e.currentTarget.style.background = "rgba(0,0,0,0.35)";
                    const cornerIcon = e.currentTarget.querySelector<HTMLElement>("[data-corner-icon]");
                    if (cornerIcon) cornerIcon.style.opacity = "0.15";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "rgba(0,0,0,0.25)";
                    const cornerIcon = e.currentTarget.querySelector<HTMLElement>("[data-corner-icon]");
                    if (cornerIcon) cornerIcon.style.opacity = "0.08";
                  }}
                >
                  {/* Corner decorative icon */}
                  <CornerIcon
                    data-corner-icon
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 24,
                      width: 48,
                      height: 48,
                      color: "#CFC7BE",
                      opacity: 0.08,
                      transition: "opacity 0.5s",
                    }}
                    strokeWidth={1}
                  />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <Icon
                      style={{ marginBottom: 28, width: 22, height: 22, color: "#CFC7BE" }}
                      strokeWidth={1.5}
                    />

                    <h3 style={{ fontSize: 19, color: "#ffffff" }} className="font-semibold">
                      {service.title}
                    </h3>

                    <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7, color: "#A8A199", paddingRight: 40 }}>
                      {service.desc}
                    </p>

                    <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                      {service.details.map((detail) => (
                        <div key={detail} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ width: 4, height: 4, borderRadius: 999, background: "#CFC7BE", flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: "#CFC7BE", letterSpacing: "0.01em" }}>
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
