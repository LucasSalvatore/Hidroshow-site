import AnimSection from "./AnimSection";

const STEPS = [
  { code: "01", title: "Site survey & flow planning", desc: "We map crowd density, entrances, and peak-demand zones with the organizer, then fix station count and placement before load-in." },
  { code: "02", title: "Connect to municipal water supply", desc: "Stations tie into the venue's municipal supply. Large-volume tanks buffer demand, so service holds through surges." },
  { code: "03", title: "Filter & dispense food-grade water", desc: "Water passes through on-board filtration and food-grade wetted surfaces, then dispenses through a multi-tap array built to clear queues fast." },
  { code: "04", title: "Monitor & refill on event day", desc: "Our crew tracks levels and throughput across the fleet during the event, refilling and rebalancing stations before any tap runs dry." },
];

const FEATURES = [
  { code: "01", title: "400–500 L capacity", desc: "Large-volume tanks refillable on-site, serving thousands without service interruption." },
  { code: "02", title: "Multi-tap dispensing", desc: "Four-tap design eliminates queues and moves water to attendees faster." },
  // VERIFY: restore an NSF-61 reference here only if equipment certification is confirmed.
  { code: "03", title: "Food-grade materials", desc: "All wetted surfaces use food-grade materials for safe drinking water." },
  { code: "04", title: "Brand wrap system", desc: "Full-station branding for sponsors and event organizers." },
  { code: "05", title: "Zero single-use plastic", desc: "Reusable bottle model. Removes bottled distribution from the event footprint." },
  { code: "06", title: "Crowd-flow placement", desc: "Stations positioned using crowd-flow data to maximize coverage and reduce congestion." },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {STEPS.map((s, i) => (
            <AnimSection key={s.code} delay={i * 0.08}>
              <div className="p-6 bg-card border border-border card-hover h-full" style={{ borderRadius: 3 }}>
                <span className="stat-number text-4xl md:text-5xl" style={{ color: "hsl(var(--tap))" }}>{s.code}</span>
                <div className="gauge-ticks my-4" />
                <h3 className="heading-display text-lg text-[hsl(var(--reservoir))] mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Station spec */}
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">SYSTEM · SPEC SHEET</span>
          <h3 className="heading-display text-2xl md:text-3xl text-[hsl(var(--reservoir))]">The Hidroshow Station</h3>
          <p className="text-muted-foreground text-base mt-3 max-w-2xl">
            Durable, reusable, brandable mobile hydration units — engineered for scale.
          </p>
        </AnimSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURES.map((f, i) => (
            <AnimSection key={f.code} delay={i * 0.06}>
              <div className="p-6 bg-card border border-border card-hover h-full" style={{ borderRadius: 3 }}>
                <span className="font-mono-num text-xs text-[hsl(var(--tap))] tracking-widest">{f.code}</span>
                <h4 className="heading-display text-base text-[hsl(var(--reservoir))] mt-2 mb-2">{f.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={0.2} className="mt-10">
          <div className="p-6 border border-border bg-card" style={{ borderRadius: 3 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="badge-label mb-4 inline-block">UNIT DIMENSIONS</span>
                <div className="gauge-ticks max-w-xs mt-4" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
                {[["780", "mm", "Width"], ["1425", "mm", "Height"], ["500", "L", "Capacity"], ["04", "", "Taps"]].map(([val, unit, label]) => (
                  <div key={label as string}>
                    <div className="flex items-baseline gap-0.5">
                      <span className="stat-number text-xl md:text-2xl">{val}</span>
                      {unit && <span className="font-mono-num text-xs text-[hsl(var(--tap))]">{unit}</span>}
                    </div>
                    <p className="font-mono-num text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimSection>

        {/* Reported cases — single-source, dated, illustrative only */}
        <AnimSection className="mt-16">
          <span className="badge-label mb-5 inline-block">FIELD RECORD · REPORTED CASES</span>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            {[
              "In one reported case, mobile stations across 51 events dispensed ~22,500L, avoiding ~45,000 single-use bottles (Richmond, British Columbia, Canada, 2019).",
              "~60,000 disposable bottles avoided in one year (Caloundra Music Festival, Australia).",
            ].map(text => (
              <div key={text} className="p-8 bg-card border border-border h-full" style={{ borderRadius: 3, borderLeft: "3px solid hsl(var(--tap))" }}>
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
