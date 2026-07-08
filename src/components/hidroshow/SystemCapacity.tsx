import { useEffect, useState } from "react";
import dropImg from "@/assets/hero-waterdrop.jpg";
import festivalImg from "@/assets/hero-festival.jpg";
import AnimSection from "./AnimSection";
import { useInView } from "./AnimSection";

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

export default function SystemCapacity() {
  const [ref, inView] = useInView(0.2);
  const headline = useCountUp(120000, inView);
  const tank = useCountUp(500, inView);
  const attendees = useCountUp(50000, inView);
  const foodGrade = useCountUp(100, inView);

  return (
    <section
      id="capacity"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(var(--reservoir))", color: "hsl(var(--reservoir-foreground))" }}
    >
      {/* Static water-drop backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(198 45% 14% / 0.94) 0%, hsl(198 45% 14% / 0.78) 50%, hsl(198 45% 14% / 0.6) 100%), url(${dropImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10" style={{ maxWidth: 1200, margin: "0 auto" }}>

        <AnimSection className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "hsl(var(--tap))", animation: "fade-up 2.4s ease-in-out infinite alternate" }}
              aria-hidden
            />
            <span className="badge-label badge-on-dark">SYSTEM CAPACITY · THROUGHPUT</span>
          </div>
          <span className="badge-label badge-on-dark" style={{ borderLeftColor: "hsl(var(--signal))" }}>
            SPEC SHEET
          </span>
        </AnimSection>

        <AnimSection delay={0.05} className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-num tabular-nums text-6xl md:text-8xl lg:text-9xl font-semibold text-[hsl(var(--reservoir-foreground))] leading-none">
              {headline.toLocaleString()}
            </span>
            <span className="font-mono-num text-2xl md:text-4xl font-medium text-[hsl(var(--tap))]">L</span>
          </div>
          <p
            className="font-mono-num mt-4 text-[11px] md:text-xs uppercase tracking-[0.22em]"
            style={{ color: "hsl(38 24% 92% / 0.65)" }}
          >
            Delivered per 50,000 attendees · per event day (capacity)
          </p>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div className="gauge-ticks gauge-ticks-on-dark mb-10" />
        </AnimSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 md:gap-x-12">
          {[
            { value: tank.toLocaleString(), unit: "L", label: "Per-station tank capacity" },
            { value: attendees.toLocaleString(), unit: "+", label: "Attendees served per deployment" },
            { value: "03", unit: "", label: "UN SDGs aligned (SDG 6 · 12 · 13)" },
            { value: foodGrade.toString(), unit: "%", label: "Food-grade water system" },
          ].map((s, i) => (
            <AnimSection key={i} delay={0.15 + i * 0.08}>
              <div
                className="pt-5"
                style={{ borderTop: "1px solid hsl(var(--tap) / 0.55)" }}
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-mono-num tabular-nums text-4xl md:text-5xl font-semibold text-[hsl(var(--reservoir-foreground))] leading-none">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="font-mono-num text-xl md:text-2xl font-medium text-[hsl(var(--tap))]">
                      {s.unit}
                    </span>
                  )}
                </div>
                <p
                  className="font-mono-num mt-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "hsl(38 24% 92% / 0.65)" }}
                >
                  {s.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Festival image strip — field context, full-bleed within container */}
        <AnimSection delay={0.4} className="mt-20">
          <div className="relative overflow-hidden" style={{ borderRadius: 2 }}>
            <img
              src={festivalImg}
              alt="Festival crowd at a live event served by Hidroshow stations"
              loading="lazy"
              className="w-full h-40 md:h-56 lg:h-64 object-cover"
              style={{ filter: "saturate(0.9)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(198 45% 14% / 0.65) 0%, hsl(198 45% 14% / 0.15) 45%, hsl(198 45% 14% / 0.55) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-end p-5 md:p-7">
              <span className="badge-label badge-on-dark">DEPLOYED · EVENTS NATIONWIDE</span>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
