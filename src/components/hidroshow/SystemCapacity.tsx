import { useEffect, useState } from "react";
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
      className="section-padding"
      style={{ background: "hsl(var(--reservoir))", color: "hsl(var(--reservoir-foreground))" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "hsl(38 24% 92% / 0.12)" }}>
          {[
            { value: tank.toLocaleString(), unit: "L", label: "Per-station tank capacity" },
            { value: attendees.toLocaleString(), unit: "+", label: "Attendees served per deployment" },
            { value: "03", unit: "", label: "UN SDGs aligned (SDG 6 · 12 · 13)" },
            { value: foodGrade.toString(), unit: "%", label: "Food-grade water system" },
          ].map((s, i) => (
            <AnimSection
              key={i}
              delay={0.15 + i * 0.08}
              className="stat-card p-6 md:p-8"
            >
              <div
                className="h-full"
                style={{
                  background: "hsl(var(--reservoir))",
                  padding: "8px 4px",
                }}
              >
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-mono-num tabular-nums text-3xl md:text-5xl font-semibold text-[hsl(var(--reservoir-foreground))]">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="font-mono-num text-lg md:text-2xl font-medium text-[hsl(var(--tap))]">
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  className="h-px w-10 mb-3"
                  style={{ background: "hsl(var(--tap))" }}
                />
                <p
                  className="font-mono-num text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "hsl(38 24% 92% / 0.65)" }}
                >
                  {s.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
