"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, AlertCircle, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { GridOverlay } from "@/components/grid-overlay";

const countryCodes = [
  { code: "+90", flag: "🇹🇷" }, { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" },
  { code: "+49", flag: "🇩🇪" }, { code: "+33", flag: "🇫🇷" }, { code: "+971", flag: "🇦🇪" },
  { code: "+91", flag: "🇮🇳" }, { code: "+81", flag: "🇯🇵" }, { code: "+86", flag: "🇨🇳" },
  { code: "+82", flag: "🇰🇷" }, { code: "+61", flag: "🇦🇺" }, { code: "+55", flag: "🇧🇷" },
  { code: "+31", flag: "🇳🇱" }, { code: "+46", flag: "🇸🇪" }, { code: "+41", flag: "🇨🇭" },
  { code: "+48", flag: "🇵🇱" }, { code: "+39", flag: "🇮🇹" }, { code: "+34", flag: "🇪🇸" },
];

const inputStyle: React.CSSProperties = {
  width: "100%", border: "none", borderBottom: "1px solid rgba(207,199,190,0.15)",
  background: "transparent", padding: "14px 0", fontSize: 15, color: "#ffffff",
  outline: "none", fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block", marginBottom: 8, fontSize: 11, fontWeight: 500,
  letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#A8A199",
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const { lang, setLang, t } = useI18n();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", countryCode: "+90", phone: "", budget: "", message: "",
  });

  const toggleReason = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, reasons: selectedReasons }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const cp = t.contactPage;
  const infoItems = [
    { icon: Mail, label: cp.info.emailLabel, value: cp.info.emailValue },
    { icon: Clock, label: cp.info.responseLabel, value: cp.info.responseValue },
    { icon: MapPin, label: cp.info.locationLabel, value: cp.info.locationValue },
  ];

  return (
    <div style={{ position: "relative", background: "#2A2E33", minHeight: "100vh" }}>
      <GridOverlay />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top bar */}
        <div style={{ padding: "20px 24px", maxWidth: 1120, marginLeft: "auto", marginRight: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#A8A199", fontSize: 14, transition: "color 0.3s" }}>
            <ArrowLeft style={{ width: 16, height: 16 }} />
            {cp.back}
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setLang(lang === "en" ? "tr" : "en")}
              style={{
                display: "flex", alignItems: "center", gap: 2, padding: "6px 12px",
                borderRadius: 999, border: "1px solid rgba(207,199,190,0.15)",
                background: "transparent", cursor: "pointer", fontSize: 12, fontWeight: 500,
              }}
            >
              <span style={{ color: lang === "en" ? "#ffffff" : "#A8A199" }}>EN</span>
              <span style={{ color: "rgba(207,199,190,0.25)", margin: "0 4px" }}>/</span>
              <span style={{ color: lang === "tr" ? "#ffffff" : "#A8A199" }}>TR</span>
            </button>

            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <Image src="/logo.png" alt="Saints Technologies" width={24} height={24} style={{ height: 24, width: "auto" }} />
              <span className="hidden sm:inline" style={{ fontSize: 13, fontWeight: 500, color: "#CFC7BE" }}>Saints Technologies</span>
            </Link>
          </div>
        </div>

        {/* Page content */}
        <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto", padding: "40px 24px 120px" }}>
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Left column — Info */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#ffffff" }} className="font-semibold">
                  {cp.title}
                </h1>
                <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "#A8A199", maxWidth: 380 }}>
                  {cp.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 28 }}
              >
                {infoItems.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, background: "rgba(207,199,190,0.06)",
                      border: "1px solid rgba(207,199,190,0.12)", display: "flex", alignItems: "center",
                      justifyContent: "center", flexShrink: 0,
                    }}>
                      <item.icon style={{ width: 16, height: 16, color: "#CFC7BE" }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#A8A199", marginBottom: 4 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 15, color: "#ffffff" }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center", borderRadius: 24, border: "1px solid rgba(207,199,190,0.15)",
                    padding: "100px 32px", background: "rgba(0,0,0,0.15)",
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 999, border: "1px solid #CFC7BE",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28,
                  }}>
                    <Check style={{ width: 24, height: 24, color: "#CFC7BE" }} />
                  </div>
                  <h2 style={{ fontSize: 24, color: "#ffffff" }} className="font-semibold">{cp.form.successTitle}</h2>
                  <p style={{ marginTop: 12, fontSize: 15, maxWidth: 320, color: "#A8A199", lineHeight: 1.6 }}>{cp.form.successDesc}</p>
                  <Link
                    href="/"
                    style={{
                      marginTop: 32, display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 28px", borderRadius: 999, background: "#CFC7BE", color: "#2A2E33",
                      fontSize: 14, fontWeight: 500, textDecoration: "none",
                    }}
                  >
                    <ArrowLeft style={{ width: 16, height: 16 }} />
                    {cp.form.successBack}
                  </Link>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    textAlign: "center", borderRadius: 24, border: "1px solid rgba(207,199,190,0.15)",
                    padding: "100px 32px", background: "rgba(0,0,0,0.15)",
                  }}
                >
                  <AlertCircle style={{ width: 36, height: 36, marginBottom: 24, color: "#CFC7BE" }} />
                  <h2 style={{ fontSize: 24, color: "#ffffff" }} className="font-semibold">{cp.form.errorTitle}</h2>
                  <p style={{ marginTop: 12, fontSize: 15, maxWidth: 360, color: "#A8A199" }}>{cp.form.errorDesc}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: 28, padding: "12px 28px", borderRadius: 999,
                      border: "1px solid rgba(207,199,190,0.2)", background: "transparent",
                      color: "#CFC7BE", fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    ← {cp.form.retry}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Reason selection */}
                  <div style={{ marginBottom: 40 }}>
                    <label style={labelStyle}>{cp.reasonLabel}</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                      {cp.reasons.map((reason) => {
                        const selected = selectedReasons.includes(reason);
                        return (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => toggleReason(reason)}
                            style={{
                              padding: "10px 20px",
                              borderRadius: 999,
                              fontSize: 13,
                              fontWeight: 500,
                              cursor: "pointer",
                              fontFamily: "inherit",
                              transition: "all 0.25s",
                              border: selected ? "1px solid #CFC7BE" : "1px solid rgba(207,199,190,0.15)",
                              background: selected ? "rgba(207,199,190,0.12)" : "transparent",
                              color: selected ? "#CFC7BE" : "#A8A199",
                            }}
                          >
                            {reason}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label style={labelStyle}>{cp.form.name}</label>
                      <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={cp.form.namePh} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{cp.form.email}</label>
                      <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={cp.form.emailPh} style={inputStyle} />
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid gap-8 sm:grid-cols-2" style={{ marginTop: 28 }}>
                    <div>
                      <label style={labelStyle}>{cp.form.company}</label>
                      <input name="company" type="text" value={formData.company} onChange={handleChange} placeholder={cp.form.companyPh} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>{cp.form.phone}</label>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
                        <select
                          name="countryCode" value={formData.countryCode} onChange={handleChange}
                          style={{
                            ...inputStyle, width: 100, minWidth: 100, fontSize: 14, cursor: "pointer",
                            WebkitAppearance: "none", appearance: "none" as const,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A8A199' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat", backgroundPosition: "right center", backgroundSize: 16, paddingRight: 24,
                          }}
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code} style={{ background: "#2A2E33", color: "#fff" }}>{c.flag} {c.code}</option>
                          ))}
                        </select>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={cp.form.phonePh} style={{ ...inputStyle, flex: 1 }} />
                      </div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div style={{ marginTop: 28 }}>
                    <label style={labelStyle}>{cp.form.budget}</label>
                    <input name="budget" type="text" value={formData.budget} onChange={handleChange} placeholder={cp.form.budgetPh} style={inputStyle} />
                  </div>

                  {/* Message */}
                  <div style={{ marginTop: 28 }}>
                    <label style={labelStyle}>{cp.form.message}</label>
                    <textarea
                      name="message" required rows={5} value={formData.message} onChange={handleChange}
                      placeholder={cp.form.messagePh}
                      style={{ ...inputStyle, resize: "none", fontFamily: "inherit", lineHeight: 1.7 }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      marginTop: 36, width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                      gap: 8, padding: "16px 32px", borderRadius: 14, border: "none", fontSize: 15, fontWeight: 500,
                      cursor: status === "sending" ? "wait" : "pointer", fontFamily: "inherit",
                      background: status === "sending" ? "#A8A199" : "#CFC7BE", color: "#2A2E33", transition: "background 0.3s",
                    }}
                  >
                    {status === "sending" ? cp.form.sending : cp.form.submit}
                    {status !== "sending" && <ArrowRight style={{ width: 16, height: 16 }} />}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
