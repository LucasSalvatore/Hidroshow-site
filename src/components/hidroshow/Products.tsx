import { Link } from "react-router-dom";
import AnimSection from "./AnimSection";

export default function Products() {
  const products = [
    {
      code: "SKU-01", badge: "MOST BOOKED", name: "Event Rental", tagline: "Per-event station rental",
      price: "1,500", unit: "USD / station",
      features: ["500 L tank capacity", "Multi-tap system (4 taps)", "Food-grade certified", "Delivery + setup included", "Brand wrap add-on: +$300", "On-site technical support"],
      cta: "Book Now",
      accent: false,
    },
    {
      code: "SKU-02", badge: "BEST VALUE", name: "Brand Sponsorship", tagline: "Full-event branding rights",
      price: "5,000", unit: "USD / event",
      features: ["6 stations fully wrapped", "Logo on all signage", "Social media inclusions", "Post-event analytics report", "Priority station placement", "Co-marketing opportunities"],
      cta: "Get Sponsorship",
      accent: true,
    },
    {
      code: "SKU-03", badge: "LOW-WASTE", name: "Reusable Bottle", tagline: "Branded bottles for attendees",
      price: "10", unit: "USD / bottle",
      features: ["BPA-free construction", "Custom brand printing", "750 mL capacity", "Compatible with all stations", "Bulk pricing available", "Client logo on every bottle"],
      cta: "Order Bottles",
      accent: false,
    },
    {
      code: "SKU-04", badge: "CONTRACT", name: "Venue Partnership", tagline: "Season-long stadium contracts",
      price: "Custom", unit: "quote",
      features: ["Dedicated station fleet", "Annual maintenance included", "Smart flow-tracking", "Revenue-sharing model", "Staff training included", "Exclusive territory rights"],
      cta: "Contact Us",
      accent: false,
    },
  ];

  return (
    <section id="products" className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-16 max-w-3xl">
          <span className="badge-label mb-5 inline-block">CATALOG · PRODUCTS & SERVICES</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">Service Catalog</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Four revenue lines. One mission: measured hydration at every event.
          </p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:pb-0 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((p, i) => (
            <AnimSection key={i} delay={i * 0.08} className="min-w-[280px] snap-center sm:min-w-0">
              <div
                className="bg-card border h-full flex flex-col card-hover"
                style={{
                  borderRadius: 3,
                  borderColor: p.accent ? "hsl(var(--tap))" : "hsl(var(--border))",
                  borderWidth: p.accent ? 2 : 1,
                }}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-num text-[11px] tracking-[0.2em] text-[hsl(var(--tap))]">{p.code}</span>
                    <span className={`badge-label ${p.accent ? "" : ""}`} style={p.accent ? { color: "hsl(var(--signal))", borderColor: "hsl(var(--signal) / 0.5)", borderLeftColor: "hsl(var(--signal))" } : undefined}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="heading-display text-xl text-[hsl(var(--reservoir))]">{p.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{p.tagline}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="stat-number text-4xl">{p.price === "Custom" ? "—" : `$${p.price}`}</span>
                    </div>
                    <p className="font-mono-num text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{p.unit}</p>
                    <div className="gauge-ticks mt-3" />
                  </div>

                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2 py-1.5">
                      <span className="font-mono-num text-[hsl(var(--tap))] text-xs mt-0.5">›</span>
                      <span className="text-muted-foreground text-xs leading-relaxed">{f}</span>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    className="block mt-6 text-center py-3 font-mono-num text-[11px] tracking-[0.2em] uppercase no-underline transition-colors"
                    style={{
                      background: p.accent ? "hsl(var(--tap))" : "hsl(var(--reservoir))",
                      color: "hsl(var(--reservoir-foreground))",
                      borderRadius: 3,
                    }}
                  >
                    {p.cta} →
                  </Link>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="p-8 border border-border bg-card" style={{ borderRadius: 3 }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge-label mb-4 inline-block">PAYMENT · TERMS</span>
                <h3 className="heading-display text-2xl text-[hsl(var(--reservoir))] mb-3">Payment Options</h3>
                <p className="text-muted-foreground text-sm mb-4">Flexible payment for event organizers of any size.</p>
                <div className="flex flex-wrap gap-2">
                  {["PayPal Business", "Bank Transfer", "Credit Card (Stripe)", "Invoice / Net-30"].map(opt => (
                    <span key={opt} className="px-3 py-1.5 font-mono-num text-[10px] tracking-widest uppercase text-foreground border border-border" style={{ borderRadius: 2 }}>{opt}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-border" style={{ borderRadius: 3, background: "hsl(var(--background))" }}>
                <p className="font-mono-num text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Processing Fee</p>
                <p className="stat-number text-3xl">2.9%<span className="text-lg"> + $0.30</span></p>
                <div className="gauge-ticks mt-3" />
                <p className="font-mono-num text-[10px] uppercase tracking-widest text-muted-foreground mt-3">Per transaction · standard</p>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
