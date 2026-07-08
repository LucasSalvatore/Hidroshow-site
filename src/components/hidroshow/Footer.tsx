import { Link } from "react-router-dom";
import hidroshowLogo from "@/assets/hidroshow-logo.png";

const FOOTER_NAV = [
  { label: "Problem", to: "/problem" },
  { label: "Solution", to: "/solution" },
  { label: "About", to: "/about" },
  { label: "Impact", to: "/impact" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--reservoir))] text-[hsl(var(--reservoir-foreground))]" style={{ padding: "72px 2rem 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="gauge-ticks gauge-ticks-on-dark mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={hidroshowLogo} alt="" className="h-16 w-auto object-contain" />
              <span className="heading-display text-xl tracking-[0.15em]">HIDROSHOW</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: "hsl(38 24% 92% / 0.6)" }}>
              Mobile hydration infrastructure for large-scale live events. Our mission: close the hydration gap at every large gathering with measured, low-waste water delivery.
            </p>
            <div className="mt-5 inline-flex">
              <span className="badge-label badge-on-dark">FOOD-GRADE MATERIALS</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono-num text-[11px] tracking-[0.22em] mb-5" style={{ color: "hsl(38 24% 92% / 0.5)" }}>NAVIGATION</h4>
            {FOOTER_NAV.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-sm mb-2.5 no-underline transition-colors"
                style={{ color: "hsl(38 24% 92% / 0.7)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-mono-num text-[11px] tracking-[0.22em] mb-5" style={{ color: "hsl(38 24% 92% / 0.5)" }}>SERVICES</h4>
            {["Event Rental", "Brand Sponsorship", "Reusable Bottles", "Venue Partnership"].map(s => (
              <p key={s} className="text-sm mb-2.5" style={{ color: "hsl(38 24% 92% / 0.7)" }}>{s}</p>
            ))}
          </div>

          <div>
            <h4 className="font-mono-num text-[11px] tracking-[0.22em] mb-5" style={{ color: "hsl(38 24% 92% / 0.5)" }}>CONTACT</h4>
            <p className="font-mono-num text-sm mb-2.5" style={{ color: "hsl(38 24% 92% / 0.75)" }}>hello@hidroshow.com</p>
          </div>
        </div>

        <div className="border-t border-[hsl(38_24%_92%/0.1)] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono-num text-[11px] tracking-wider" style={{ color: "hsl(38 24% 92% / 0.4)" }}>
            © 2026 HIDROSHOW · LUCAN COMPANY
          </p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map(name => (
              <span key={name} className="font-mono-num text-[11px] tracking-[0.18em] uppercase" style={{ color: "hsl(38 24% 92% / 0.55)" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
