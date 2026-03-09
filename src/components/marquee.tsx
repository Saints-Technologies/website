"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const techStack = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "AWS", "PostgreSQL", "Docker", "Kubernetes", "OpenAI",
  "Pinecone", "Redis", "Terraform", "GraphQL", "Prisma",
  "TensorFlow", "LangChain", "Supabase",
];

export function Marquee() {
  const { t } = useI18n();
  const doubled = [...techStack, ...techStack];

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80, background: "#2A2E33", overflow: "hidden" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#A8A199",
          fontWeight: 500,
          marginBottom: 48,
        }}
      >
        {t.marquee.label}
      </p>

      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #2A2E33, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #2A2E33, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 48, width: "fit-content" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                padding: "12px 28px",
                borderRadius: 999,
                border: "1px solid rgba(207,199,190,0.12)",
                fontSize: 14,
                color: "#A8A199",
                fontWeight: 400,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                transition: "color 0.3s, border-color 0.3s",
              }}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
