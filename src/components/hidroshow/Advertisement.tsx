import adVideo from "@/assets/hidroshow-ad.mp4";

export default function Advertisement() {
  return (
    <section id="advertisement" className="py-24 px-6 bg-[hsl(var(--section-light))]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge-label mb-6 inline-block">FIELD FOOTAGE</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--reservoir))] mb-4">
            The system, deployed
          </h2>
          <div className="gauge-ticks max-w-xs mx-auto mt-6" />
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden bg-[hsl(var(--reservoir))] aspect-[9/16]" style={{ borderRadius: 3, border: "1px solid hsl(var(--reservoir) / 0.3)" }}>
            <video
              src={adVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
