"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GridOverlay } from "@/components/grid-overlay";
import { useI18n } from "@/lib/i18n";

export default function ProductsPage() {
  const { t, lang, setLang } = useI18n();

  const products = [
    {
      tagEn: "Customs automation SaaS",
      tagTr: "Gümrük otomasyon SaaS",
      name: "Ecogümrük",
      url: "https://ecogumruk.com",
      year: "2026",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "AWS"],
      highlightsEn: [
        "End-to-end customs process automation for brokerage firms",
        "Real-time status tracking and document management",
        "Multi-tenant architecture with granular role-based access",
      ],
      highlightsTr: [
        "Gümrük müşavirlikleri için uçtan uca süreç otomasyonu",
        "Gerçek zamanlı durum takibi ve doküman yönetimi",
        "Granüler rol tabanlı erişim ile çok kiracılı mimari",
      ],
    },
  ];

  const p = {
    titleEn: "Products in production.",
    titleTr: "Üretimdeki ürünlerimiz.",
    subtitleEn:
      "A snapshot of the platforms we operate and evolve in the real world.",
    subtitleTr:
      "Gerçek dünyada işlettiğimiz ve sürekli geliştirdiğimiz platformlardan bir kesit.",
  };

  const title = lang === "en" ? p.titleEn : p.titleTr;
  const subtitle = lang === "en" ? p.subtitleEn : p.subtitleTr;

  return (
    <div style={{ position: "relative", background: "#2A2E33", minHeight: "100vh" }}>
      <GridOverlay />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top bar */}
        <div
          style={{
            padding: "20px 24px",
            maxWidth: 1120,
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "#A8A199",
              fontSize: 14,
              transition: "color 0.3s",
            }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} />
            {lang === "en" ? "Back to home" : "Ana sayfaya dön"}
          </Link>

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
            }}
          >
            <span style={{ color: lang === "en" ? "#ffffff" : "#A8A199" }}>EN</span>
            <span style={{ color: "rgba(207,199,190,0.25)", margin: "0 4px" }}>/</span>
            <span style={{ color: lang === "tr" ? "#ffffff" : "#A8A199" }}>TR</span>
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            maxWidth: 1120,
            marginLeft: "auto",
            marginRight: "auto",
            padding: "40px 24px 120px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#A8A199",
              }}
            >
              {lang === "en" ? "Products" : "Ürünler"}
            </p>
            <h1
              style={{
                marginTop: 20,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#ffffff",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 520,
                color: "#A8A199",
              }}
            >
              {subtitle}
            </p>
          </motion.div>

          <div
            className="grid gap-8 lg:gap-10 lg:grid-cols-2"
            style={{ marginTop: 56 }}
          >
            {products.map((product) => {
              const tag = lang === "en" ? product.tagEn : product.tagTr;
              const highlights =
                lang === "en" ? product.highlightsEn : product.highlightsTr;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    borderRadius: 24,
                    border: "1px solid rgba(207,199,190,0.18)",
                    background: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#A8A199",
                          marginBottom: 8,
                        }}
                      >
                        {tag}
                      </div>
                      <h2
                        style={{
                          fontSize: 22,
                          color: "#ffffff",
                          marginBottom: 4,
                        }}
                      >
                        {product.name}
                      </h2>
                      <p style={{ fontSize: 13, color: "rgba(207,199,190,0.7)" }}>
                        {lang === "en"
                          ? "Live production platform"
                          : "Canlı üretim platformu"}
                      </p>
                    </div>
                    <div
                      style={{
                        alignSelf: "flex-start",
                        padding: "6px 12px",
                        borderRadius: 999,
                        border: "1px solid rgba(207,199,190,0.2)",
                        fontSize: 11,
                        color: "#CFC7BE",
                      }}
                    >
                      {product.year}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "6px 12px",
                          borderRadius: 999,
                          border: "1px solid rgba(207,199,190,0.18)",
                          fontSize: 12,
                          color: "#CFC7BE",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul
                    style={{
                      marginTop: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontSize: 14,
                          color: "#A8A199",
                          lineHeight: 1.6,
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 8 }}>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 18px",
                        borderRadius: 999,
                        background: "#CFC7BE",
                        color: "#2A2E33",
                        fontSize: 13,
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      {lang === "en" ? "View live product" : "Canlı ürünü gör"}
                      <ExternalLink style={{ width: 14, height: 14 }} />
                    </a>
                  </div>
                </motion.article>
              );
            })}

            <div
              style={{
                borderRadius: 24,
                border: "1px dashed rgba(207,199,190,0.25)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#A8A199",
                    marginBottom: 8,
                  }}
                >
                  {lang === "en" ? "Your product here" : "Sıradaki ürün"}
                </div>
                <h2
                  style={{
                    fontSize: 20,
                    color: "#ffffff",
                  }}
                >
                  {lang === "en"
                    ? "Launching something new soon?"
                    : "Yeni bir ürün mü çıkarıyorsunuz?"}
                </h2>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#A8A199",
                    maxWidth: 340,
                  }}
                >
                  {lang === "en"
                    ? "We partner with teams to design, build, and operate production-grade platforms — and then list them here."
                    : "Üretim kalitesinde platformları birlikte tasarlıyor, geliştiriyor ve işletiyoruz — sonra da burada listeliyoruz."}
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#CFC7BE",
                  textDecoration: "none",
                }}
              >
                {lang === "en"
                  ? "Talk to us about your product →"
                  : "Ürününüz hakkında konuşalım →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

