import AnimSection from "./AnimSection";
import festivalImg from "@/assets/festival-panorama.jpg.asset.json";
import crowdVerticalImg from "@/assets/concert-crowd-vertical.jpg.asset.json";
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
                <img src={teamImg} alt="Hidroshow founding team at the 2026 Social Entrepreneurship Poster Competition" loading="lazy" decoding="async" className="w-full h-72 md:h-96 object-cover" />
              </div>
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

            <div className="mt-6 overflow-hidden border border-border relative" style={{ borderRadius: 3 }}>
              <img
                src={crowdVerticalImg.url}
                alt="Festival crowd silhouetted against warm stage lights"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, hsl(var(--reservoir) / 0.55) 100%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="badge-label badge-signal mb-2 inline-block">EVENT SCALE</span>
                <p className="font-mono-num text-[11px] tracking-[0.22em] uppercase" style={{ color: "hsl(38 24% 96%)" }}>
                  30K – 80K+ attendees per deployment
                </p>
              </div>
            </div>
          </AnimSection>
        </div>

        <AnimSection className="mt-10">
          <div className="p-8 md:p-10 border" style={{ borderRadius: 3, borderColor: "hsl(var(--signal) / 0.4)", borderLeft: "3px solid hsl(var(--signal))", background: "hsl(var(--signal) / 0.06)" }}>
            <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-4">
              <span className="badge-label badge-signal inline-block shrink-0">RECOGNITION</span>
              <div>
                <h4 className="heading-display text-xl md:text-2xl text-[hsl(var(--reservoir))]">
                  Won &amp; recognized as an approved business concept
                </h4>
                <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed max-w-3xl">
                  This recognition laid the foundation of Hidroshow, which operates under the Lucan Company 2026.
                </p>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>

      <div className="mt-24 relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <AnimSection>
          <div className="relative">
            <img
              src={festivalImg.url}
              alt="Nighttime music festival crowd bathed in warm stage light"
              loading="lazy"
              decoding="async"
              className="w-full h-[42vh] md:h-[56vh] object-cover"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24"
              style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)" }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{ background: "linear-gradient(0deg, hsl(var(--background)) 0%, transparent 100%)" }}
            />
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
