import { useParallax } from "./AnimSection";

interface ImageBandProps {
  src: string;
  alt: string;
  /** section-relative height */
  height?: string;
  /** small mono eyebrow shown on a spec plate */
  eyebrow?: string;
  /** large editorial line over the image */
  caption?: string;
  /** optional supporting line under the caption */
  sub?: string;
  /** align the text block */
  align?: "left" | "center";
}

// Full-bleed cinematic photograph with a reservoir duotone scrim and subtle
// parallax. Decorative when no caption is supplied (alt="" + aria-hidden).
export default function ImageBand({ src, alt, height = "60vh", eyebrow, caption, sub, align = "left" }: ImageBandProps) {
  const [ref, offset] = useParallax(50);
  const hasText = Boolean(eyebrow || caption || sub);

  return (
    <section
      className="relative w-full overflow-hidden bg-[hsl(var(--reservoir))]"
      style={{ height }}
      aria-hidden={hasText ? undefined : true}
    >
      <div ref={ref} className="absolute inset-0" style={{ top: "-8%", bottom: "-8%", height: "116%" }}>
        <img
          src={src}
          alt={hasText ? alt : ""}
          loading="lazy"
          decoding="async"
          className="img-cinematic w-full h-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
        />
      </div>
      <div className="scrim-cinematic absolute inset-0" />

      {hasText && (
        <div className="relative h-full" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            className={`h-full flex flex-col justify-end pb-12 md:pb-16 ${align === "center" ? "items-center text-center" : "items-start"}`}
          >
            {eyebrow && (
              <span className="badge-label badge-on-dark mb-5 inline-flex">{eyebrow}</span>
            )}
            {caption && (
              <h2 className="heading-display text-on-image text-[hsl(var(--reservoir-foreground))] text-3xl md:text-5xl lg:text-6xl leading-[0.95] max-w-4xl">
                {caption}
              </h2>
            )}
            {sub && (
              <p
                className="text-on-image mt-4 text-base md:text-lg max-w-2xl"
                style={{ color: "hsl(38 24% 92% / 0.85)" }}
              >
                {sub}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
