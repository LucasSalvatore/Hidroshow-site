import AnimSection from "./AnimSection";

// All logos and testimonials below are PLACEHOLDERS — replace with real,
// permissioned client names and quotes before launch. Do not fabricate clients.
const LOGO_SLOTS = ["CLIENT 01", "CLIENT 02", "CLIENT 03", "CLIENT 04", "CLIENT 05", "CLIENT 06"];

const TESTIMONIALS = [
  {
    quote: "[Testimonial placeholder — replace with a real quote from an event organizer.]",
    name: "[Name]",
    event: "[Event, Year]",
  },
  {
    quote: "[Testimonial placeholder — replace with a real quote from a venue or sponsor.]",
    name: "[Name]",
    event: "[Venue / Event, Year]",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-12 max-w-3xl">
          <span className="badge-label mb-5 inline-block">RECORD · 04 · TRUSTED AT</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">Trusted At</h2>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {LOGO_SLOTS.map((slot, i) => (
            <AnimSection key={slot} delay={i * 0.05}>
              <div
                className="flex flex-col items-center justify-center gap-2 h-24 bg-card border border-dashed border-border"
                style={{ borderRadius: 3 }}
              >
                <span className="font-mono-num text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{slot}</span>
                <span className="font-mono-num text-[9px] tracking-[0.15em] uppercase text-[hsl(var(--tap))]">LOGO PLACEHOLDER</span>
              </div>
            </AnimSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimSection key={t.event} delay={0.1 + i * 0.08}>
              <div className="p-8 card-elevated h-full flex flex-col" style={{ borderRadius: 3 }}>
                <span className="badge-label badge-signal mb-6 inline-flex self-start">PLACEHOLDER</span>
                <blockquote className="text-foreground text-base leading-relaxed flex-1 m-0">{t.quote}</blockquote>
                <div className="gauge-ticks my-4" />
                <p className="font-mono-num text-[11px] tracking-[0.15em] uppercase text-[hsl(var(--reservoir))] font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.event}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
