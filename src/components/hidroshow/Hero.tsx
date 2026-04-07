import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-festival.jpg";

function WaterDrop({ style }: { style: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 44" style={{ position: "absolute", opacity: 0.06, ...style }}>
      <path d="M16 1 C16 1 1 17 1 27 C1 36.4 7.8 43 16 43 C24.2 43 31 36.4 31 27 C31 17 16 1 16 1Z" fill="hsl(217,91%,60%)" />
    </svg>
  );
}

export default function Hero() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 120000;
    const dur = 2000;
    const step = end / (dur / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(210,33%,97%) 0%, hsl(213,94%,95%) 100%)" }}>
      {[
        { top: "8%", left: "5%", width: 80 }, { top: "15%", right: "8%", width: 60 },
        { bottom: "20%", left: "3%", width: 50 }, { top: "40%", right: "4%", width: 90 },
        { bottom: "8%", right: "15%", width: 45 }, { top: "60%", left: "8%", width: 35 }
      ].map((s, i) => <WaterDrop key={i} style={s} />)}

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", display: "grid", gridTemplateColumns: "1fr", gap: 60, width: "100%" }}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left */}
          <div>
            <span className="badge-label mb-6 inline-block">🌊 NOW SERVING EVENTS NATIONWIDE</span>

            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl leading-none mb-2 text-foreground">
              NO WATER,
            </h1>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl leading-none mb-6 text-primary">
              NO SHOW.
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              Mobile hydration stations delivering free, safe, clean water to thousands of event attendees. Turning hydration into safety and sustainability.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary no-underline">
                BOOK FOR YOUR EVENT
              </a>
              <a href="#solution" onClick={(e) => { e.preventDefault(); document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline-hero no-underline">
                SEE HOW IT WORKS
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[["400–500L", "Per Station"], [count.toLocaleString() + "L", "Per 50K People"], ["3 SDGs", "Aligned"]].map(([num, label]) => (
                <div key={label} className="text-center p-3 rounded-xl bg-background/60">
                  <p className="stat-number text-xl md:text-2xl">{num}</p>
                  <p className="text-muted-foreground text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:block relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Festival crowd at sunset" className="w-full h-auto object-cover" fetchPriority="high" loading="eager" decoding="async" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-success text-primary-foreground font-display font-bold text-xs tracking-wider shadow-lg" style={{ background: "hsl(152,69%,31%)" }}>
                FOOD-GRADE ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
