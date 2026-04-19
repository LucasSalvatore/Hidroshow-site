import adVideo from "@/assets/hidroshow-ad.mp4";

export default function Advertisement() {
  return (
    <section id="advertisement" className="py-24 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge-label mb-4 inline-block">🎬 WATCH</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            SEE HIDROSHOW <span className="text-primary">IN ACTION</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hydration that turns events into safer, greener, unforgettable experiences.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16]">
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
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
