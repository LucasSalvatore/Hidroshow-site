import AnimSection from "./AnimSection";
import StationViewer from "./StationViewer";

export default function Solution() {
  const features = [
    { code: "01", title: "400–500 L capacity", desc: "Large-volume tanks refillable on-site, serving thousands without service interruption." },
    { code: "02", title: "Multi-tap dispensing", desc: "Four-tap design eliminates queues and moves water to attendees faster." },
    { code: "03", title: "Food-grade materials", desc: "All wetted surfaces are NSF-61 food-grade certified for safe drinking water." },
    { code: "04", title: "Brand wrap system", desc: "Full-station branding for sponsors and event organizers." },
    { code: "05", title: "Zero single-use plastic", desc: "Reusable bottle model. Removes bottled distribution from the event footprint." },
    { code: "06", title: "Crowd-flow placement", desc: "Stations positioned using crowd-flow data to maximize coverage and reduce congestion." },
  ];

  return (
    <section id="solution" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">SYSTEM · SPEC SHEET</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">The Hidroshow Station</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Durable, reusable, brandable mobile hydration units — engineered for scale, certified for safety.
          </p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <AnimSection key={i} delay={i * 0.06}>
              <div className="p-6 bg-card border border-border card-hover h-full" style={{ borderRadius: 3 }}>
                <span className="font-mono-num text-xs text-[hsl(var(--tap))] tracking-widest">{f.code}</span>
                <h3 className="heading-display text-base text-[hsl(var(--reservoir))] mt-2 mb-2">{f.title}</h3>
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

        {/* SDGs */}
        <AnimSection className="mt-20">
          <div className="p-10 border border-border bg-card" style={{ borderRadius: 3 }}>
            <span className="badge-label mb-4 inline-block">IMPACT · UN SDG ALIGNMENT</span>
            <h3 className="heading-display text-2xl md:text-3xl text-[hsl(var(--reservoir))] mb-8">Three aligned goals</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { num: "03", title: "Good Health\n& Well-Being" },
                { num: "06", title: "Clean Water\n& Sanitation" },
                { num: "12", title: "Responsible\nConsumption" },
              ].map(sdg => (
                <div key={sdg.num} className="p-6 border border-border" style={{ borderRadius: 3, background: "hsl(var(--background))" }}>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="stat-number text-4xl">{sdg.num}</span>
                    <span className="font-mono-num text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--tap))]">SDG</span>
                  </div>
                  <div className="gauge-ticks mb-3" />
                  <p className="text-sm whitespace-pre-line text-foreground leading-snug">{sdg.title}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>

        <AnimSection>
          <StationViewer />
        </AnimSection>
      </div>
    </section>
  );
}
