import AnimSection from "./AnimSection";

export default function Problem() {
  const stats = [
    { num: "80K+", label: "Event attendees", sub: "at major concerts & festivals" },
    { num: "1L/hr", label: "Water needed", sub: "per person in heat" },
    { num: "$5–8", label: "Bottled water", sub: "typical vendor price" },
    { num: "00", label: "Free refill points", sub: "at most large events" },
  ];

  return (
    <section id="problem" className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-16">
          <span className="badge-label mb-5 inline-block">THE PROBLEM · 01</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">The Hydration Capacity Gap</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Limited access to drinking water puts thousands at risk during large-scale events. Current solutions fail attendees at the volumes that matter.
          </p>
          <div className="gauge-ticks max-w-sm mx-auto mt-8" />
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <AnimSection key={i} delay={i * 0.08}>
              <div className="p-6 bg-card border border-border card-hover" style={{ borderRadius: 3 }}>
                <p className="stat-number text-3xl md:text-5xl">{s.num}</p>
                <div className="gauge-ticks my-3" />
                <p className="font-mono-num text-[11px] tracking-[0.15em] uppercase text-[hsl(var(--reservoir))] font-semibold">{s.label}</p>
                <p className="text-muted-foreground text-xs mt-1.5">{s.sub}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-card border border-border" style={{ borderRadius: 3 }}>
              <span className="badge-label mb-6 inline-block">CURRENT STATE</span>
              <h3 className="heading-display text-2xl mb-6 text-[hsl(var(--reservoir))]">Where Traditional Vending Fails</h3>
              {[
                "Long queues create crowd congestion at peak demand",
                "Bottled distribution generates massive plastic waste",
                "Vending models are not built for high-throughput hydration",
                "Cost ($5–8 per bottle) prices out most attendees",
                "No strategic placement tied to crowd-flow data",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 py-2 border-b border-border last:border-none">
                  <span className="font-mono-num text-[hsl(var(--destructive))] text-sm mt-0.5">×</span>
                  <span className="text-muted-foreground text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="p-8 border" style={{ borderRadius: 3, background: "hsl(var(--reservoir))", borderColor: "hsl(var(--reservoir))" }}>
              <span className="badge-label badge-on-dark mb-6 inline-block">SPEC · SAMPLE EVENT</span>
              <h4 className="heading-display text-2xl mb-6 text-[hsl(var(--reservoir-foreground))]">Capacity Calculation</h4>
              {[
                ["Event size", "50,000 people"],
                ["Water required", "120,000 L"],
                ["Bottled equivalent cost", "$600,000"],
                ["Plastic waste", "120,000 units"],
                ["With Hidroshow", "6 stations"],
              ].map(([k, v], i, arr) => (
                <div key={k} className="flex justify-between py-3" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid hsl(38 24% 92% / 0.12)" }}>
                  <span className="font-mono-num text-[11px] tracking-[0.15em] uppercase" style={{ color: "hsl(38 24% 92% / 0.6)" }}>{k}</span>
                  <span className="font-mono-num text-sm text-[hsl(var(--reservoir-foreground))]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
