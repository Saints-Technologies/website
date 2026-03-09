"use client";

export function GridOverlay() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(207,199,190,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(207,199,190,0.05) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
      }}
    />
  );
}
