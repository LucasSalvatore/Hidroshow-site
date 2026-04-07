import AnimSection from "./AnimSection";

export default function SWOT() {
  const quadrants = [
    { label: "Strengths", color: "hsl(152,69%,31%)", bg: "hsl(152,69%,31%,0.06)", items: ["Scales with large crowds", "Faster hydration (multi-tap)", "Improves safety + experience", "Sustainable (less plastic waste)"] },
    { label: "Weaknesses", color: "hsl(0,84%,60%)", bg: "hsl(0,84%,60%,0.06)", items: ["High equipment cost", "Depends on event contracts", "New concept needs education", "Limited brand recognition"] },
    { label: "Opportunities", color: "hsl(217,91%,60%)", bg: "hsl(217,91%,60%,0.06)", items: ["Expansion into sports leagues", "Partnerships with beverage brands", "Smart hydration tracking tech", "Festival circuit partnerships"] },
    { label: "Threats", color: "hsl(38,92%,50%)", bg: "hsl(38,92%,50%,0.06)", items: ["Large beverage companies", "Venue resistance to upfront cost", "Liability concerns", "Economic downturn events"] },
  ];

  return (
    <section className="section-padding">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-12">
          <span className="badge-label mb-4 inline-block">COMPETITIVE ANALYSIS</span>
          <h2 className="heading-section text-foreground">SWOT Analysis</h2>
        </AnimSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {quadrants.map((q, i) => (
            <AnimSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border-2" style={{ background: q.bg, borderColor: q.color + "30" }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: q.color }}>{q.label}</h3>
                {q.items.map(item => (
                  <div key={item} className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: q.color }} />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
