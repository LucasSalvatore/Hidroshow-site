import AnimSection from "./AnimSection";
import { useInView } from "./AnimSection";
import { useCountUp } from "./useCountUp";

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
      style={{ color: "hsl(var(--reservoir-foreground))", background: "hsl(198 45% 14%)" }}
    >

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
            <span className="font-mono-num tabular-nums text-6xl md:text-8xl lg:text-9xl font-semibold text-[hsl(var(--reservoir-foreground))] leading-none animate-headline-glow">
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
              <div className="relative pt-5 group stat-card">
                <div
                  className="absolute top-0 left-0 h-px stat-bar"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, hsl(var(--tap) / 0.9), hsl(var(--tap) / 0.2))",
                    transform: inView ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${0.25 + i * 0.1}s`,
                  }}
                />
                <div className="flex items-baseline gap-1">
                  <span className="font-mono-num tabular-nums text-4xl md:text-5xl font-semibold text-[hsl(var(--reservoir-foreground))] leading-none group-hover:text-[hsl(var(--tap))] transition-colors duration-300">
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
      </div>
    </section>
  );
}
