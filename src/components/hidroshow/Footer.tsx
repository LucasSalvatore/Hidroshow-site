import hidroshowLogo from "@/assets/hidroshow-logo.png";

const FOOTER_NAV = [
  { label: "Problem", id: "problem" },
  { label: "Solution", id: "solution" },
  { label: "About", id: "about" },
  { label: "Impact", id: "impact" },
  { label: "Contact", id: "contact" },
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
            {/* VERIFY: only display an NSF-61 badge here if equipment is actually certified;
                otherwise keep the "food-grade materials" wording below. */}
            <div className="mt-5 inline-flex">
              <span className="badge-label badge-on-dark">FOOD-GRADE MATERIALS</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono-num text-[11px] tracking-[0.22em] mb-5" style={{ color: "hsl(38 24% 92% / 0.5)" }}>NAVIGATION</h4>
            {FOOTER_NAV.map(l => (
              <a key={l.id} href={`#${l.id}`}
                className="block text-sm mb-2.5 no-underline transition-colors"
                style={{ color: "hsl(38 24% 92% / 0.7)" }}>
                {l.label}
              </a>
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
            {/* PLACEHOLDER contact details — replace with real address/email/phone before launch */}
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
            {/* PLACEHOLDER socials — swap these spans for <a> tags once real profile URLs exist,
                kept as plain text for now so the page ships with no dead links */}
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
