import { lazy, Suspense } from "react";
import AnimSection, { useInView } from "./AnimSection";
import { usePrefersReducedMotion } from "./useCountUp";
import blueprintImg from "@/assets/station-blueprint.jpg";
import adVideo from "@/assets/hidroshow-ad.mp4";

// three.js is ~800KB — load the 3D viewer only when this section nears the viewport.
const StationViewer = lazy(() => import("./StationViewer"));

function ViewerFrame() {
  const [ref, inView] = useInView(0);
  return (
    <div ref={ref}>
      {inView ? (
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center"
              style={{ height: 420, borderRadius: 3, background: "hsl(198 45% 9%)", border: "1px solid hsl(var(--tap) / 0.25)" }}
            >
              <span className="font-mono-num text-[11px] tracking-[0.2em] uppercase" style={{ color: "hsl(38 24% 92% / 0.5)" }}>
                Loading 3D model…
              </span>
            </div>
          }
        >
          <StationViewer />
        </Suspense>
      ) : (
        <div style={{ height: 420, borderRadius: 3, background: "hsl(198 45% 9%)", border: "1px solid hsl(var(--tap) / 0.25)" }} />
      )}
    </div>
  );
}

const SPECS = [
  { k: "Tank capacity", v: "400–500 L" },
  { k: "Dispensing", v: "Multi-tap · 4 outlets" },
  { k: "Footprint", v: "780 × 455 mm" },
  { k: "Height", v: "1425 mm" },
  { k: "Water", v: "Food-grade materials" },
  { k: "Supply", v: "Municipal connect + buffer" },
];

export default function Station() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="station"
      className="section-padding relative overflow-hidden"
      style={{ background: "hsl(198 45% 11%)", color: "hsl(var(--reservoir-foreground))" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }} className="relative z-10">
        <AnimSection className="mb-14 max-w-3xl">
          <span className="badge-label badge-on-dark mb-5 inline-block">HARDWARE · SPEC SHEET</span>
          <h2 className="heading-section text-[hsl(var(--reservoir-foreground))]">The Hidroshow Station</h2>
          <p className="text-lg mt-4 max-w-2xl" style={{ color: "hsl(38 24% 92% / 0.75)" }}>
            One durable, reusable, brandable unit — engineered for scale and sized to the venue.
          </p>
          <div className="gauge-ticks gauge-ticks-tap max-w-sm mt-6" />
        </AnimSection>

        {/* Blueprint + spec list */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16 items-stretch">
          <AnimSection className="h-full">
            {/* Blueprint drawing sits on a light panel to stay legible */}
            <div className="h-full p-6 md:p-8 flex flex-col" style={{ borderRadius: 3, background: "hsl(38 28% 94%)" }}>
              <span className="badge-label mb-5 inline-block">TECHNICAL DRAWING</span>
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={blueprintImg}
                  alt="Hidroshow station technical drawing showing front and side elevations with dimensions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimSection>

          <AnimSection delay={0.1} className="h-full">
            <div className="h-full flex flex-col justify-center">
              <span className="badge-label badge-on-dark mb-5 inline-block">AT A GLANCE</span>
              <div className="card-dark" style={{ borderRadius: 3 }}>
                {SPECS.map((s, i) => (
                  <div
                    key={s.k}
                    className="flex items-baseline justify-between px-6 py-4"
                    style={{ borderBottom: i === SPECS.length - 1 ? "none" : "1px solid hsl(38 24% 92% / 0.08)" }}
                  >
                    <span className="font-mono-num text-[11px] tracking-[0.16em] uppercase" style={{ color: "hsl(38 24% 92% / 0.55)" }}>{s.k}</span>
                    <span className="font-mono-num text-sm text-[hsl(var(--reservoir-foreground))]">{s.v}</span>
                  </div>
                ))}
              </div>
              {/* VERIFY: swap "food-grade materials" for an NSF-61 line only once certification is confirmed. */}
            </div>
          </AnimSection>
        </div>

        {/* Interactive 3D */}
        <AnimSection>
          <ViewerFrame />
        </AnimSection>

        {/* Field footage */}
        <AnimSection className="mt-16">
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="md:w-1/2">
              <span className="badge-label badge-on-dark mb-5 inline-block">FIELD FOOTAGE</span>
              <h3 className="heading-display text-2xl md:text-3xl text-[hsl(var(--reservoir-foreground))] mb-3">The system, deployed</h3>
              <div className="gauge-ticks gauge-ticks-tap max-w-xs mb-4" />
              <p className="text-base leading-relaxed max-w-md" style={{ color: "hsl(38 24% 92% / 0.7)" }}>
                Stations on the ground at a live event — multi-tap dispensing, reusable bottles, zero queue for water.
              </p>
            </div>
            <div className="md:w-1/2 flex md:justify-end">
              <div className="overflow-hidden w-full max-w-sm aspect-[9/16]" style={{ borderRadius: 3, border: "1px solid hsl(var(--tap) / 0.25)" }}>
                <video
                  src={adVideo}
                  controls
                  autoPlay={!reduced}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
