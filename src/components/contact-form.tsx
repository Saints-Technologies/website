"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

const countryCodes = [
  { code: "+90", country: "TR", flag: "🇹🇷" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+48", country: "PL", flag: "🇵🇱" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid rgba(207,199,190,0.15)",
  background: "transparent",
  padding: "12px 0",
  fontSize: 15,
  color: "#ffffff",
  outline: "none",
  fontFamily: "inherit",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  WebkitAppearance: "none",
  appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A8A199' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  backgroundSize: 16,
  paddingRight: 24,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#A8A199",
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+90",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      style={{ paddingTop: 120, paddingBottom: 120, paddingLeft: 24, paddingRight: 24, background: "#2A2E33" }}
    >
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ height: 1, background: "rgba(207,199,190,0.12)", marginBottom: 80 }} />

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-2">
            <Reveal>
              <div>
                <p style={{ fontSize: 12, letterSpacing: "0.25em", color: "#A8A199" }} className="font-medium uppercase">
                  {t.contact.label}
                </p>
                <h2
                  style={{ marginTop: 24, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#ffffff" }}
                  className="font-semibold"
                >
                  {t.contact.title}
                </h2>
                <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, maxWidth: 340, color: "#A8A199" }}>
                  {t.contact.desc}
                </p>

                <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 16 }}>
                  {t.contact.checks.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Check style={{ width: 14, height: 14, color: "#CFC7BE" }} strokeWidth={2.5} />
                      <span style={{ fontSize: 14, color: "#A8A199" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            <Reveal delay={0.12}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center", borderRadius: 16, border: "1px solid rgba(207,199,190,0.15)", padding: "112px 32px",
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 999, border: "1px solid #CFC7BE",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
                  }}>
                    <Check style={{ width: 20, height: 20, color: "#CFC7BE" }} />
                  </div>
                  <h3 style={{ fontSize: 20, color: "#ffffff" }} className="font-medium">{t.contact.form.successTitle}</h3>
                  <p style={{ marginTop: 12, fontSize: 15, maxWidth: 280, color: "#A8A199" }}>{t.contact.form.successDesc}</p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center", borderRadius: 16, border: "1px solid rgba(207,199,190,0.15)", padding: "112px 32px",
                  }}
                >
                  <AlertCircle style={{ width: 32, height: 32, marginBottom: 24, color: "#CFC7BE" }} />
                  <h3 style={{ fontSize: 20, color: "#ffffff" }} className="font-medium">{t.contact.form.errorTitle}</h3>
                  <p style={{ marginTop: 12, fontSize: 15, maxWidth: 320, color: "#A8A199" }}>{t.contact.form.errorDesc}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: 24, padding: "10px 24px", borderRadius: 999,
                      border: "1px solid rgba(207,199,190,0.2)", background: "transparent",
                      color: "#CFC7BE", fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    ← Try again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{t.contact.form.name}</label>
                      <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={t.contact.form.namePh} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{t.contact.form.company}</label>
                      <input name="company" type="text" required value={formData.company} onChange={handleChange} placeholder={t.contact.form.companyPh} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2" style={{ marginTop: 32 }}>
                    <div>
                      <label style={labelStyle}>{t.contact.form.email}</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t.contact.form.emailPh} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{t.contact.form.phone}</label>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
                        <select name="countryCode" value={formData.countryCode} onChange={handleChange} style={{ ...selectStyle, width: 100, minWidth: 100, fontSize: 14 }}>
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code} style={{ background: "#2A2E33", color: "#fff" }}>{c.flag} {c.code}</option>
                          ))}
                        </select>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t.contact.form.phonePh} style={{ ...inputStyle, flex: 1 }} />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2" style={{ marginTop: 32 }}>
                    <div>
                      <label style={labelStyle}>{t.contact.form.type}</label>
                      <select
                        name="projectType" required value={formData.projectType} onChange={handleChange}
                        style={{ ...selectStyle, color: formData.projectType ? "#ffffff" : "#A8A199" }}
                      >
                        <option value="" disabled>{t.contact.form.typePh}</option>
                        {t.contact.projectTypes.map((tp) => (
                          <option key={tp} value={tp} style={{ background: "#2A2E33", color: "#fff" }}>{tp}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>{t.contact.form.budget}</label>
                      <input name="budget" type="text" value={formData.budget} onChange={handleChange} placeholder={t.contact.form.budgetPh} style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ marginTop: 32 }}>
                    <label style={labelStyle}>{t.contact.form.details}</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={t.contact.form.detailsPh} style={{ ...inputStyle, resize: "none", fontFamily: "inherit" }} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      marginTop: 40, width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                      gap: 8, padding: "14px 32px", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 500,
                      cursor: status === "sending" ? "wait" : "pointer", fontFamily: "inherit",
                      background: status === "sending" ? "#A8A199" : "#CFC7BE", color: "#2A2E33", transition: "background 0.3s",
                    }}
                  >
                    {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                    {status !== "sending" && <ArrowRight style={{ width: 16, height: 16 }} />}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
