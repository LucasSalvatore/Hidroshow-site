import AnimSection from "./AnimSection";
import StationViewer from "./StationViewer";
import stationImg from "@/assets/stations-outdoor.jpg";

export default function Solution() {
  const features = [
    { icon: "💧", title: "400–500L Capacity", desc: "Large-volume tanks refillable on-site, serving thousands without interruption." },
    { icon: "⚡", title: "Multiple Taps", desc: "Multi-tap design eliminates lines and gets water to people faster." },
    { icon: "🏗️", title: "Food-Grade Materials", desc: "All materials are certified food-grade, ensuring safe drinking water." },
    { icon: "🎨", title: "Brand Customization", desc: "Full wrap branding for sponsors and event organizers." },
    { icon: "♻️", title: "Zero Single-Use Plastic", desc: "Encourages reusable bottles. Dramatically reduces event plastic waste." },
    { icon: "📍", title: "Strategic Placement", desc: "Placed using crowd-flow data to maximize coverage and minimize congestion." },
  ];

  return (
    <section id="solution" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-16">
          <span className="badge-label mb-4 inline-block">OUR SOLUTION</span>
          <h2 className="heading-section text-foreground">Hidroshow's System</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Durable, reusable, and customizable mobile hydration units — designed for scale, built for safety.
          </p>
        </AnimSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <AnimSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-background shadow-sm border border-border card-hover cursor-default">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={stationImg} alt="Hidroshow stations at outdoor event" loading="eager" decoding="async" className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-6">
              {[["780mm", "Width"], ["1425mm", "Height"], ["500L", "Capacity"], ["4 Taps", "Per Unit"]].map(([val, label]) => (
                <div key={label} className="text-center p-3 rounded-xl bg-background shadow-sm border border-border">
                  <p className="stat-number text-lg">{val}</p>
                  <p className="text-muted-foreground text-xs">{label}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>

        {/* SDGs */}
        <AnimSection className="mt-20">
          <div className="text-center p-10 rounded-3xl bg-background shadow-sm border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Our Impact</h3>
            <p className="text-muted-foreground text-sm mb-8">Supporting Global Sustainability Goals</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { bg: "#4c9a2a", num: "3", title: "Good Health\n& Well-Being" },
                { bg: "#26bde2", num: "6", title: "Clean Water\n& Sanitation" },
                { bg: "#bf8b2e", num: "12", title: "Responsible\nConsumption" },
              ].map(sdg => (
                <div key={sdg.num} className="flex items-center gap-3 px-6 py-4 rounded-2xl" style={{ background: sdg.bg + "12", border: `2px solid ${sdg.bg}30` }}>
                  <span className="font-display font-extrabold text-3xl" style={{ color: sdg.bg }}>{sdg.num}</span>
                  <span className="text-xs text-left whitespace-pre-line text-foreground/70">{sdg.title}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
