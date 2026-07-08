import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-colors duration-200"
      style={{
        background: scrolled ? "hsl(198 45% 10% / 0.96)" : "hsl(198 45% 10% / 0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid hsl(38 24% 92% / ${scrolled ? 0.12 : 0.06})`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px" }} className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-block w-2 h-6 bg-[hsl(var(--tap))]" />
          <span className="heading-display text-[hsl(var(--reservoir-foreground))] text-lg tracking-[0.15em]">
            HIDROSHOW
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => {
            const active = pathname === l.path;
            return (
              <button
                key={l.path}
                onClick={() => go(l.path)}
                className="relative px-4 py-2 font-mono-num text-[11px] tracking-[0.18em] uppercase border-none cursor-pointer bg-transparent transition-colors"
                style={{
                  color: active ? "hsl(var(--tap))" : "hsl(38 24% 92% / 0.7)",
                }}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-[6px]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, hsl(var(--tap)) 0 1px, transparent 1px 5px)",
                      borderTop: "1px solid hsl(var(--tap))",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 no-underline font-mono-num text-[11px] tracking-[0.18em] uppercase transition-colors"
          style={{
            background: "hsl(var(--tap))",
            color: "hsl(var(--reservoir-foreground))",
            borderRadius: 3,
          }}
        >
          Request Quote
        </Link>

        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2 text-[hsl(var(--reservoir-foreground))]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[hsl(38_24%_92%/0.12)]" style={{ padding: "8px 24px 16px" }}>
          {NAV_LINKS.map(l => (
            <button
              key={l.path}
              onClick={() => go(l.path)}
              className="block w-full text-left px-2 py-3 font-mono-num text-xs tracking-[0.2em] uppercase border-none bg-transparent cursor-pointer"
              style={{ color: pathname === l.path ? "hsl(var(--tap))" : "hsl(38 24% 92% / 0.8)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
