import AnimSection from "./AnimSection";
import teamImg from "@/assets/team-photo.jpg";
import crowdImg from "@/assets/crowd-festival.jpg";

const TEAM = [
  { name: "Pedro Justa", role: "CEO" },
  { name: "Shery Imran", role: "COO & CFO" },
  { name: "Lucas Salvatore", role: "CSO & CTO" },
  { name: "Noah Mazard", role: "CRO & CMO" },
];

const MARKET = [
  { code: "01", title: "Concerts & Music Festivals", desc: "30K–80K+ attendees per event. High heat, high energy, critical hydration demand." },
  { code: "02", title: "Stadiums & Sports Venues", desc: "Recurring demand, long-term contracts, ideal for the venue partnership model." },
  { code: "03", title: "Eco-Conscious Organizers", desc: "Events pursuing zero-waste or sustainability certifications." },
  { code: "04", title: "Corporate & Public Events", desc: "Brand-conscious organizers who value sponsorship visibility." },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">DIVISION · ABOUT</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">Built for Live Event Infrastructure</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            A small team building the hydration layer that large events have always been missing.
          </p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Narrative column */}
          <AnimSection className="h-full">
            <div className="flex flex-col h-full gap-5">
              <div className="p-8 card-elevated flex-1" style={{ borderRadius: 3 }}>
                <h3 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-3">MISSION</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Eliminate the hydration gap at large-scale events by deploying mobile, sustainable water infrastructure that delivers free, clean water to every attendee — at the volumes real events demand.
                </p>
              </div>

              <div className="p-8 card-elevated flex-1" style={{ borderRadius: 3 }}>
                <h3 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-3">VISION</h3>
                <p className="text-foreground text-base leading-relaxed">
                  A live-events industry where no attendee suffers dehydration and every large gathering runs on a measurable, low-waste water system.
                </p>
              </div>

              <div className="p-8 card-elevated flex-1 flex flex-col" style={{ borderRadius: 3 }}>
                <h3 className="font-mono-num text-[11px] tracking-[0.22em] text-[hsl(var(--tap))] mb-4">TEAM</h3>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-6">
                  {TEAM.map(({ name, role }) => (
                    <div key={name} className="flex items-center gap-3 py-2 border-t border-border">
                      <span className="font-mono-num text-[10px] text-[hsl(var(--tap))] w-8 shrink-0">
                        {name.split(" ").map(n => n[0]).join("")}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-foreground text-sm font-medium leading-tight">{name}</span>
                        <span className="font-mono-num text-muted-foreground text-[10px] tracking-widest uppercase">{role}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="overflow-hidden border border-border" style={{ borderRadius: 3 }}>
                  <img
                    src={teamImg}
                    alt="Hidroshow founding team accepting recognition at the 2026 Social Entrepreneurship Poster Competition"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 md:h-64 object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </AnimSection>

          {/* Market column */}
          <AnimSection delay={0.12} className="h-full">
            <div className="flex flex-col h-full">
              <span className="badge-label mb-5 inline-block">TARGET MARKET</span>
              <h3 className="heading-display text-3xl md:text-4xl text-[hsl(var(--reservoir))] mb-6">Who We Serve</h3>

              <div className="flex flex-col gap-3 flex-1">
                {MARKET.map(item => (
                  <div key={item.code} className="flex gap-5 p-5 card-elevated" style={{ borderRadius: 3 }}>
                    <span className="font-mono-num text-2xl text-[hsl(var(--tap))] leading-none">{item.code}</span>
                    <div>
                      <h4 className="heading-display text-base text-[hsl(var(--reservoir))]">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="overflow-hidden border border-border relative flex-1 min-h-[18rem]" style={{ borderRadius: 3 }}>
                  <img
                    src={crowdImg}
                    alt="Festival crowd with the main stage in the distance"
                    loading="lazy"
                    decoding="async"
                    className="img-cinematic w-full h-full object-cover"
                  />
                  <div className="scrim-cinematic absolute inset-0" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="badge-label badge-on-dark mb-2 inline-block">EVENT SCALE</span>
                    <p className="font-mono-num text-[11px] tracking-[0.22em] uppercase text-on-image" style={{ color: "hsl(38 24% 96%)" }}>
                      30K – 80K+ attendees per deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>

        {/* Recognition */}
        <AnimSection className="mt-6">
          <div className="p-8 md:p-10 card-elevated" style={{ borderRadius: 3, borderLeft: "3px solid hsl(var(--signal))" }}>
            <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-4">
              <span className="badge-label badge-signal inline-block shrink-0">RECOGNITION</span>
              <div>
                <h4 className="heading-display text-xl md:text-2xl text-[hsl(var(--reservoir))]">
                  Recognized as an approved business concept
                </h4>
                <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed max-w-3xl">
                  Awarded at the 2026 Social Entrepreneurship Poster Competition. This recognition laid the foundation of Hidroshow, operating under the Lucan Company established in 2026.
                </p>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
