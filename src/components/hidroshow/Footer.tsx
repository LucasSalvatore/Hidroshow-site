import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--reservoir))] text-[hsl(var(--reservoir-foreground))]" style={{ padding: "72px 2rem 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="gauge-ticks gauge-ticks-on-dark mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-2 h-6 bg-[hsl(var(--tap))]" />
              <span className="heading-display text-lg tracking-[0.15em]">HIDROSHOW</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: "hsl(38 24% 92% / 0.6)" }}>
              Mobile hydration infrastructure for large-scale live events. Measured delivery, food-grade certified.
            </p>
            <div className="mt-5 inline-flex">
              <span className="badge-label badge-on-dark">MFG · NEW JERSEY · USA</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono-num text-[11px] tracking-[0.22em] mb-5" style={{ color: "hsl(38 24% 92% / 0.5)" }}>NAVIGATION</h4>
            {["About", "Problem", "Solution", "Products", "Contact"].map(l => (
              <Link key={l} to={`/${l.toLowerCase()}`}
                className="block text-sm mb-2.5 no-underline transition-colors"
                style={{ color: "hsl(38 24% 92% / 0.7)" }}>
                {l}
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
            <p className="font-mono-num text-sm mb-2.5" style={{ color: "hsl(38 24% 92% / 0.75)" }}>+1 (555) 000-AGUA</p>
            <p className="font-mono-num text-sm" style={{ color: "hsl(38 24% 92% / 0.75)" }}>Newark, NJ</p>
          </div>
        </div>

        <div className="border-t border-[hsl(38_24%_92%/0.1)] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono-num text-[11px] tracking-wider" style={{ color: "hsl(38 24% 92% / 0.4)" }}>
            © 2026 HIDROSHOW · LUCAN COMPANY
          </p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map(name => (
              <a key={name} href="#" className="font-mono-num text-[11px] tracking-[0.18em] uppercase no-underline transition-colors" style={{ color: "hsl(38 24% 92% / 0.55)" }}>
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
