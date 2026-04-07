import AnimSection from "./AnimSection";

export default function Problem() {
  const stats = [
    { num: "80K+", label: "Event attendees", sub: "at major concerts & festivals" },
    { num: "1L/hr", label: "Water needed", sub: "per person in heat" },
    { num: "$5–8", label: "Bottled water cost", sub: "traditional vendors charge" },
    { num: "0", label: "Free refill stations", sub: "at most large events" },
  ];

  return (
    <section id="problem" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0,0%,100%) 0%, hsl(210,33%,97%) 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-16">
          <span className="badge-label mb-4 inline-block">THE PROBLEM</span>
          <h2 className="heading-section text-foreground">The Hydration Capacity Gap</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Limited access to drinking water puts thousands at risk during large-scale events. Current solutions fail attendees.
          </p>
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <AnimSection key={i} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-background shadow-sm border border-border">
                <p className="stat-number text-3xl md:text-4xl">{s.num}</p>
                <p className="font-display font-semibold text-foreground text-sm mt-2">{s.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.sub}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background shadow-sm border border-border">
              <h3 className="font-display font-bold text-xl mb-6 text-foreground">Traditional Vendors Fall Short</h3>
              {[
                "Long wait times cause congestion",
                "Bottled water generates massive plastic waste",
                "Not designed for high-volume hydration flow",
                "Expensive ($5–$8 per bottle)",
                "No strategic placement for crowd management",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 mb-3">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-secondary border border-primary/10">
              <h4 className="font-display font-bold text-sm tracking-widest text-primary mb-6">EXAMPLE CALCULATION</h4>
              {[
                ["Event Size", "50,000 people"],
                ["Water Needed", "120,000L/event"],
                ["With Bottles", "$600,000 cost"],
                ["Plastic Waste", "120,000 bottles"],
                ["With Hidroshow", "6 stations = sorted ✓"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 border-b border-primary/10 last:border-none">
                  <span className="text-muted-foreground text-sm">{k}</span>
                  <span className="font-display font-bold text-foreground text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
