import AnimSection from "./AnimSection";

const STEPS = [
  { code: "01", title: "Site survey & flow planning", desc: "We map crowd density, entrances, and peak-demand zones with the organizer, then fix station count and placement before load-in." },
  { code: "02", title: "Connect to municipal water supply", desc: "Stations tie into the venue's municipal supply. Large-volume tanks buffer demand, so service holds through surges." },
  { code: "03", title: "Filter & dispense food-grade water", desc: "Water passes through on-board filtration and food-grade wetted surfaces, then dispenses through a multi-tap array built to clear queues fast." },
  { code: "04", title: "Monitor & refill on event day", desc: "Our crew tracks levels and throughput across the fleet during the event, refilling and rebalancing stations before any tap runs dry." },
];

export default function Solution() {
  return (
    <section id="solution" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">SYSTEM · 02 · HOW IT WORKS</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">From Site Survey to Last Refill</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            A repeatable deployment sequence — planned against your crowd, connected to your supply, staffed through your event.
          </p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        {/* Deployment steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STEPS.map((s, i) => (
            <AnimSection key={s.code} delay={i * 0.08}>
              <div className="p-7 card-elevated h-full" style={{ borderRadius: 3 }}>
                <span className="stat-number text-4xl md:text-5xl" style={{ color: "hsl(var(--tap))" }}>{s.code}</span>
                <div className="gauge-ticks my-4" />
                <h3 className="heading-display text-lg text-[hsl(var(--reservoir))] mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Reported cases — single-source, dated, illustrative only */}
        <AnimSection>
          <span className="badge-label mb-5 inline-block">FIELD RECORD · REPORTED CASES</span>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            {[
              "In one reported case, mobile stations across 51 events dispensed ~22,500L, avoiding ~45,000 single-use bottles (Richmond, British Columbia, Canada, 2019).",
              "~60,000 disposable bottles avoided in one year (Caloundra Music Festival, Australia).",
            ].map(text => (
              <div key={text} className="p-8 card-elevated h-full" style={{ borderRadius: 3, borderLeft: "3px solid hsl(var(--tap))" }}>
                <p className="text-foreground text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="font-mono-num text-[11px] tracking-[0.08em] text-muted-foreground mt-4 max-w-3xl">
            Illustrative reported cases from comparable mobile refill deployments — not Hidroshow results, and not universal outcomes.
          </p>
        </AnimSection>
      </div>
    </section>
  );
}
