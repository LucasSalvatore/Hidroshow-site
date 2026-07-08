import festival from "@/assets/hero-festival.jpg";
import waterdrop from "@/assets/hero-waterdrop.jpg";
import dripping from "@/assets/hero-dripping.jpg";
import splash from "@/assets/hero-splash.jpg";

const IMAGES = [waterdrop, splash, dripping, festival];
const TOTAL = 17; // seconds
const STEP = TOTAL / IMAGES.length; // 4.25s per image

export default function CyclingBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${src})`,
            animation: `backdropCycle ${TOTAL}s ease-in-out ${(i * STEP - STEP / 2).toFixed(3)}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
