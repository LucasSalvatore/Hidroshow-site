import { useRef, useState, useEffect, ReactNode } from "react";
import { usePrefersReducedMotion } from "./useCountUp";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

// Subtle vertical parallax for full-bleed image bands. Returns a translateY (px).
// Disabled entirely under prefers-reduced-motion.
export function useParallax(strength = 40) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (band entering from bottom) .. 1 (leaving at top)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      setOffset(Math.max(-1, Math.min(1, progress)) * strength);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, reduced]);
  return [ref, offset] as const;
}

interface AnimSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimSection({ children, className = "", delay = 0 }: AnimSectionProps) {
  const [ref, inView] = useInView();
  const reduced = usePrefersReducedMotion();
  const visible = inView || reduced;
  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
            }
      }
    >
      {children}
    </div>
  );
}
