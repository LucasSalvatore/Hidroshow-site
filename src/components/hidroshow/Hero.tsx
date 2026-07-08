import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-waterdrop.jpg";
import heroVideo1 from "@/assets/hero-waterdrop-1.mp4.asset.json";
import heroVideo2 from "@/assets/hero-waterdrop-2.mp4.asset.json";
import heroVideo3 from "@/assets/hero-waterdrop-3.mp4.asset.json";

const HERO_CLIPS = [heroVideo1.url, heroVideo2.url, heroVideo3.url];
const MIN_CYCLE_MS = 12000;

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--reservoir))]">
      {/* Full-bleed animated water drop */}
      <video
        src={heroVideo.url}
        poster={heroImg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark scrim from left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(198 45% 8% / 0.95) 0%, hsl(198 45% 10% / 0.85) 40%, hsl(198 45% 12% / 0.55) 70%, hsl(198 45% 14% / 0.25) 100%)",
        }}
      />
      {/* Bottom vignette for text contrast on small screens */}
      <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(180deg, hsl(198 45% 10% / 0.55) 0%, hsl(198 45% 10% / 0.85) 100%)" }} />

      <div className="relative w-full" style={{ maxWidth: 1280, margin: "0 auto", padding: "140px 24px 220px" }}>
        <div className="max-w-2xl text-[hsl(var(--reservoir-foreground))]">
          {/* Spec plate */}
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="badge-label badge-on-dark">
              <span className="inline-block w-1.5 h-1.5 bg-[hsl(var(--tap))]" />
              UNIT 001 · SERVING EVENTS NATIONWIDE
            </span>
          </div>

          <h1 className="heading-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.88] mb-1">
            NO WATER,
          </h1>
          <h1 className="heading-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.88] mb-8 text-[hsl(var(--tap))]">
            NO SHOW.
          </h1>

          <p className="text-[hsl(var(--reservoir-foreground))/0.75] text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{ color: "hsl(38 24% 92% / 0.78)" }}>
            Mobile hydration infrastructure for festivals, stadiums, and large-scale live events. Food-grade water delivered at volume — measured, monitored, and free at the point of use.
          </p>

          {/* Stat block — the visual anchor */}
          <div className="mb-10 border-y border-[hsl(38_24%_92%/0.15)] py-6">
            <div className="gauge-ticks gauge-ticks-on-dark mb-5" />
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {[
                { num: "500", unit: "L", label: "Per station" },
                { num: count.toLocaleString(), unit: "L", label: "Per 50K attendees" },
                { num: "03", unit: "", label: "UN SDGs aligned" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono-num text-3xl md:text-5xl font-semibold text-[hsl(var(--reservoir-foreground))] tabular-nums">
                      {s.num}
                    </span>
                    {s.unit && (
                      <span className="font-mono-num text-lg md:text-2xl font-medium text-[hsl(var(--tap))]">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-mono-num mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: "hsl(38 24% 92% / 0.6)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary no-underline" style={{ background: "hsl(var(--tap))", borderColor: "hsl(var(--tap))", color: "hsl(var(--reservoir-foreground))" }}>
              Book for your event →
            </Link>
            <Link to="/solution" className="btn-outline-hero no-underline">
              How the system works
            </Link>
          </div>

          {/* Certification plate */}
          <div className="mt-10 inline-flex items-center gap-3">
            <span className="badge-label" style={{ color: "hsl(var(--signal))", borderColor: "hsl(var(--signal) / 0.5)", borderLeftColor: "hsl(var(--signal))" }}>
              FOOD-GRADE CERTIFIED · NSF-61
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
