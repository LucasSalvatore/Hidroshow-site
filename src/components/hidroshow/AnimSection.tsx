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
