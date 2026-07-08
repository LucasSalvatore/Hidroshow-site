import AnimSection from "./AnimSection";
import festivalImg from "@/assets/festival-panorama.jpg.asset.json";
import teamImg from "@/assets/team-photo.jpg";

export default function About() {
  return (
    <section id="about" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">DIVISION · ABOUT</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))] mb-5">Built for Live Event Infrastructure</h2>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid lg:grid-cols-2 gap-10">
          <AnimSection>
            <div className="mb-5 p-8 bg-card border border-border" style={{ borderRadius: 3 }}>
              <h4 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-3">MISSION</h4>
              <p className="text-foreground text-base leading-relaxed">
                Eliminate the hydration gap at large-scale events by deploying mobile, sustainable water infrastructure that delivers free, clean water to every attendee — at the volumes real events demand.
              </p>
            </div>

            <div className="mb-5 p-8 bg-card border border-border" style={{ borderRadius: 3 }}>
              <h4 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-3">VISION</h4>
              <p className="text-foreground text-base leading-relaxed">
                A live-events industry where no attendee suffers dehydration and every large gathering runs on a measurable, closed-loop water system.
              </p>
            </div>

            <div className="p-8 bg-card border border-border" style={{ borderRadius: 3 }}>
              <h4 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-4">TEAM</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Pedro Justa", role: "CEO" },
                  { name: "Shery Imran", role: "Co-CEO" },
                  { name: "Joshua Bracero", role: "CFO & CMO" },
                  { name: "Noah Mazard", role: "COO" },
                ].map(({ name, role }) => (
                  <div key={name} className="flex items-center gap-3 py-2 border-t border-border">
                    <span className="font-mono-num text-[10px] text-[hsl(var(--tap))] w-8">
                      {name.split(" ").map(n => n[0]).join("")}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-foreground text-sm font-medium">{name}</span>
                      <span className="font-mono-num text-muted-foreground text-[10px] tracking-widest uppercase">{role}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden border border-border" style={{ borderRadius: 3 }}>
                <img src={teamImg} alt="Hidroshow founding team at the 2026 Social Entrepreneurship Poster Competition" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="mt-5 p-6 border" style={{ borderRadius: 3, borderColor: "hsl(var(--signal) / 0.4)", borderLeft: "3px solid hsl(var(--signal))", background: "hsl(var(--signal) / 0.06)" }}>
              <span className="badge-label badge-signal mb-3 inline-block">RECOGNITION</span>
              <h4 className="heading-display text-lg text-[hsl(var(--reservoir))]">3rd Place · Social Entrepreneurship Poster Competition</h4>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Business concept recognized and approved by faculty at the Lucan Company 2026 Social Entrepreneurship Poster Competition.
              </p>
            </div>
          </AnimSection>

          <AnimSection delay={0.15}>
            <span className="badge-label mb-5 inline-block">TARGET MARKET</span>
            <h3 className="heading-display text-3xl md:text-4xl text-[hsl(var(--reservoir))] mb-6">Who We Serve</h3>

            {[
              { code: "01", title: "Concerts & Music Festivals", desc: "30K–80K+ attendees per event. High heat, high energy, critical hydration demand." },
              { code: "02", title: "Stadiums & Sports Venues", desc: "Recurring demand, long-term contracts, ideal for the venue partnership model." },
              { code: "03", title: "Eco-Conscious Organizers", desc: "Events pursuing zero-waste or sustainability certifications." },
              { code: "04", title: "Corporate & Public Events", desc: "Brand-conscious organizers who value sponsorship visibility." },
            ].map((item) => (
              <div key={item.code} className="flex gap-5 mb-3 p-5 bg-card border border-border card-hover" style={{ borderRadius: 3 }}>
                <span className="font-mono-num text-2xl text-[hsl(var(--tap))] leading-none">{item.code}</span>
                <div>
                  <h4 className="heading-display text-base text-[hsl(var(--reservoir))]">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

          </AnimSection>
        </div>

        <AnimSection className="mt-16">
          <div
            className="relative overflow-hidden border border-border"
            style={{ borderRadius: 3, aspectRatio: "21 / 6" }}
          >
            <img
              src={noWaterImg.url}
              alt="Hidroshow · No Water, No Show — mobile hydration infrastructure for live events"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
