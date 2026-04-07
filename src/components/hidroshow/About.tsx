import AnimSection from "./AnimSection";
import crowdImg from "@/assets/crowd-festival.jpg";

export default function About() {
  return (
    <section id="about" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Mission */}
          <AnimSection>
            <span className="badge-label mb-4 inline-block">OUR MISSION & VISION</span>
            <h2 className="heading-section text-foreground mb-8">Why We Built Hidroshow</h2>

            <div className="mb-6 p-6 rounded-2xl bg-background shadow-sm border border-border">
              <h4 className="font-display font-bold text-sm text-primary mb-2">🎯 MISSION</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To eliminate the hydration gap at large-scale events by providing mobile, sustainable water stations that deliver free, clean water to every attendee.
              </p>
            </div>

            <div className="mb-6 p-6 rounded-2xl bg-background shadow-sm border border-border">
              <h4 className="font-display font-bold text-sm text-primary mb-2">🔭 VISION</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A world where no event-goer suffers from dehydration, and where every large gathering becomes a model of sustainable water management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background shadow-sm border border-border">
              <h4 className="font-display font-bold text-sm text-primary mb-4">👥 THE TEAM</h4>
              <div className="flex flex-wrap gap-3">
                {["Pedro Justa", "Shery Imran", "Joshua Bracero", "Rocco Voglino", "Noah Mazard"].map(name => (
                  <div key={name} className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-[10px] text-primary">
                        {name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-foreground text-xs font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>

          {/* Right - Target Market */}
          <AnimSection delay={0.15}>
            <span className="badge-label mb-4 inline-block">TARGET MARKET ANALYSIS</span>
            <h2 className="heading-section text-foreground mb-8">Who We Serve</h2>

            {[
              { icon: "🎵", title: "Concerts & Music Festivals", desc: "30K–80K+ attendees per event. High heat, high energy = critical hydration need." },
              { icon: "🏟️", title: "Stadiums & Sports Events", desc: "Recurring demand, long-term contracts, ideal for venue partnership model." },
              { icon: "🌿", title: "Eco-Conscious Organizers", desc: "Events pursuing zero-waste or sustainability certifications." },
              { icon: "🏢", title: "Corporate & Public Events", desc: "Brand-conscious organizers who value sponsorship visibility." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-4 p-5 rounded-2xl bg-background shadow-sm border border-border card-hover">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
              <img src={crowdImg} alt="Festival crowd" loading="lazy" className="w-full h-48 object-cover" />
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
