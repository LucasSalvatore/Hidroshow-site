import AnimSection from "./AnimSection";

const SDGS = [
  { num: "06", title: "Clean Water & Sanitation", line: "Safe on-site drinking water at events, delivered through infrastructure built for more efficient water use." },
  { num: "12", title: "Responsible Consumption", line: "Refill stations displace single-use plastic bottles from the event footprint." },
  { num: "13", title: "Climate Action", line: "Dispensing municipal water on-site carries lower lifecycle emissions than producing and hauling bottled water." },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(198 45% 13%)", color: "hsl(var(--reservoir-foreground))" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }} className="relative z-10">
        <AnimSection className="mb-14 max-w-3xl">
          <span className="badge-label badge-on-dark mb-5 inline-block">IMPACT · 03 · UN SDG ALIGNMENT</span>
          <h2 className="heading-section text-[hsl(var(--reservoir-foreground))]">Three Aligned Goals</h2>
          <p className="text-lg mt-4 max-w-2xl" style={{ color: "hsl(38 24% 92% / 0.75)" }}>
            Our operations contribute to three UN Sustainable Development Goals. Alignment, not solved problems — measured one event at a time.
          </p>
          <div className="gauge-ticks gauge-ticks-tap max-w-sm mt-6" />
        </AnimSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {SDGS.map((sdg, i) => (
            <AnimSection key={sdg.num} delay={i * 0.08}>
              <div className="card-dark p-8 h-full" style={{ borderRadius: 3 }}>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono-num tabular-nums text-5xl font-semibold text-[hsl(var(--reservoir-foreground))]">{sdg.num}</span>
                  <span className="font-mono-num text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--tap))]">SDG</span>
                </div>
                <div className="gauge-ticks gauge-ticks-tap mb-4" />
                <h3 className="heading-display text-base text-[hsl(var(--reservoir-foreground))] mb-2">{sdg.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(38 24% 92% / 0.72)" }}>{sdg.line}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
