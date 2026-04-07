export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy text-navy-foreground" style={{ padding: "60px 2rem 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 44" width="24" height="33">
                <path d="M16 1 C16 1 1 17 1 27 C1 36.4 7.8 43 16 43 C24.2 43 31 36.4 31 27 C31 17 16 1 16 1Z" fill="hsl(217,91%,60%)"/>
              </svg>
              <span className="font-display font-extrabold text-lg">HIDROSHOW</span>
            </div>
            <p className="text-sm leading-relaxed opacity-60 max-w-[280px]">
              Hydration for large events. Done right. Free, safe water for every attendee — sustainable, scalable, impactful.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 opacity-80">NAVIGATION</h4>
            {["About", "Problem", "Solution", "Products", "Contact"].map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className="block bg-transparent border-none cursor-pointer text-sm opacity-50 hover:opacity-100 transition-opacity mb-2 p-0 text-navy-foreground">
                {l}
              </button>
            ))}
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 opacity-80">SERVICES</h4>
            {["Event Rental", "Brand Sponsorship", "Reusable Bottles", "Venue Partnership"].map(s => (
              <p key={s} className="text-sm opacity-50 mb-2">{s}</p>
            ))}
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 opacity-80">CONTACT</h4>
            <p className="text-sm opacity-50 mb-2">hello@hidroshow.com</p>
            <p className="text-sm opacity-50 mb-2">+1 (555) 000-AGUA</p>
            <p className="text-sm opacity-50">New Jersey, USA</p>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">© 2025 Hidroshow. All rights reserved. Montclair State University.</p>
          <div className="flex gap-4">
            {["📘", "📸", "👻", "🎵"].map(icon => (
              <span key={icon} className="w-8 h-8 rounded-full bg-navy-foreground/5 flex items-center justify-center text-sm cursor-pointer hover:bg-navy-foreground/10 transition-colors">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
