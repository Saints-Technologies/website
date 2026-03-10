"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const numMatch = target.match(/[\d.]+/);
    if (!numMatch) { setDisplay(target); return; }

    const numVal = parseFloat(numMatch[0]);
    const prefix = target.slice(0, target.indexOf(numMatch[0]));
    const suffix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length);
    const isDecimal = numMatch[0].includes(".");
    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numVal * eased;
      setDisplay(prefix + (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix);
      if (step >= steps) { clearInterval(timer); setDisplay(target); }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const display = useCountUp(value, inView);

  return (
    <div ref={ref} style={{ background: "#2A2E33", padding: "44px 28px", textAlign: "center" }}>
      <p style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#CFC7BE", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {display}
      </p>
      <p style={{ marginTop: 10, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A199", fontWeight: 500 }}>
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const { t } = useI18n();

  return (
    <section style={{ paddingTop: 0, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, background: "#2A2E33" }}>
      <div style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <Reveal>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(207,199,190,0.1)", borderRadius: 20, overflow: "hidden" }}
            className="sm:grid-cols-4 grid-cols-2"
          >
            {t.stats.items.map((stat, i) => (
              <StatItem key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
