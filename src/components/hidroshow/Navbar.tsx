import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "@/assets/hidroshow-logo.png";

const NAV_LINKS: { label: string; path: string }[] = [
  { label: "About", path: "/about" },
  { label: "Problem", path: "/problem" },
  { label: "Solution", path: "/solution" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logoImg} alt="Hidroshow logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => {
            const active = pathname === l.path;
            return (
              <button
                key={l.path}
                onClick={() => go(l.path)}
                className={`px-3.5 py-1.5 rounded-lg font-display font-semibold text-xs tracking-wide transition-all duration-200 border-none cursor-pointer ${
                  active
                    ? "text-primary bg-primary/[0.08]"
                    : "text-foreground/70 hover:text-foreground bg-transparent"
                }`}
              >
                {l.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        <Link to="/contact" className="btn-primary hidden md:inline-block text-xs py-2.5 px-6 no-underline">
          GET STARTED
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden" style={{ padding: "8px 24px 16px", borderTop: "1px solid hsl(var(--border))" }}>
          {NAV_LINKS.map(l => (
            <button
              key={l.path}
              onClick={() => go(l.path)}
              className="block w-full text-left px-4 py-3 font-display font-semibold text-sm border-none bg-transparent cursor-pointer text-foreground/80 hover:text-primary"
            >
              {l.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
