import AnimSection, { useInView } from "./AnimSection";
import { useCountUp } from "./useCountUp";

// Global drinking-water figures: WHO/UNICEF Joint Monitoring Programme (JMP),
// Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024 (2025).
// The event-waste figures are secondary-source ESTIMATES and are labeled as such in the UI.
export default function Problem() {
  const [ref, inView] = useInView(0.2);
  const billions = useCountUp(2.1, inView, 1800, 1);
  const coverage = useCountUp(74, inView);
  const gained = useCountUp(961, inView);

  return (
    <section id="problem" ref={ref} className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-14 max-w-3xl">
          <span className="badge-label mb-5 inline-block">CONTEXT · 01</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">The Global Context We Operate In</h2>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        {/* Primary figure */}
        <AnimSection delay={0.05} className="mb-12">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="stat-number text-7xl md:text-9xl leading-none tabular-nums">
              {billions.toFixed(1)}
            </span>
            <span className="heading-display text-3xl md:text-5xl text-[hsl(var(--tap))]">BILLION</span>
          </div>
          <p className="font-mono-num mt-4 text-[11px] md:text-xs uppercase tracking-[0.22em] text-[hsl(var(--reservoir))] max-w-2xl">
            People, 1 in 4 worldwide, lack safely managed drinking water
          </p>
        </AnimSection>

        {/* Supporting figures */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4 max-w-3xl">
          {[
            { num: coverage.toString(), unit: "%", label: "Global coverage, 2024", sub: "Up from 68% in 2015" },
            { num: gained.toLocaleString(), unit: "M", label: "People gained access", sub: "2015–2024" },
          ].map((s, i) => (
            <AnimSection key={s.label} delay={0.1 + i * 0.08}>
              <div className="p-6 bg-card border border-border card-hover h-full" style={{ borderRadius: 3 }}>
                <div className="flex items-baseline gap-1">
                  <span className="stat-number text-4xl md:text-5xl tabular-nums">{s.num}</span>
                  <span className="font-mono-num text-xl md:text-2xl font-medium text-[hsl(var(--tap))]">{s.unit}</span>
                </div>
                <div className="gauge-ticks my-3" />
                <p className="font-mono-num text-[11px] tracking-[0.15em] uppercase text-[hsl(var(--reservoir))] font-semibold">{s.label}</p>
                <p className="text-muted-foreground text-xs mt-1.5">{s.sub}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={0.2} className="mb-14">
          <p className="font-mono-num text-[11px] tracking-[0.08em] text-muted-foreground max-w-3xl">
            Source: WHO/UNICEF Joint Monitoring Programme (JMP), Progress on Household Drinking Water, Sanitation and Hygiene 2000–2024 (2025).
          </p>
        </AnimSection>

        {/* Contrast: waste at events — secondary-source estimates, labeled as such */}
        <AnimSection>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: "~40,000",
                label: "Single-use bottles per day",
                sub: "At a 20,000-person event (estimate, MeetGreen)",
              },
              {
                num: "~23,500",
                label: "Tons of festival plastic waste per year",
                sub: "US & UK combined (estimate) [Source: ___]",
              },
            ].map(c => (
              <div key={c.label} className="p-8 border" style={{ borderRadius: 3, background: "hsl(var(--reservoir))", borderColor: "hsl(var(--reservoir))" }}>
                <span className="badge-label badge-on-dark mb-6 inline-block" style={{ borderLeftColor: "hsl(var(--signal))" }}>ESTIMATE</span>
                <p className="font-mono-num tabular-nums text-4xl md:text-5xl font-semibold text-[hsl(var(--reservoir-foreground))]">{c.num}</p>
                <div className="gauge-ticks gauge-ticks-on-dark my-4" />
                <p className="font-mono-num text-[11px] tracking-[0.15em] uppercase text-[hsl(var(--reservoir-foreground))]">{c.label}</p>
                <p className="text-xs mt-1.5" style={{ color: "hsl(38 24% 92% / 0.6)" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div className="p-8 md:p-10 border border-border bg-card max-w-4xl" style={{ borderRadius: 3, borderLeft: "3px solid hsl(var(--tap))" }}>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Access to safe water is deeply unequal. At large events, hydration is often abundant and wasteful. We build infrastructure to make event hydration efficient, safe, and low-waste — informed by this bigger picture.
            </p>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
