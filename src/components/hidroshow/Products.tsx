import { Link } from "react-router-dom";
import AnimSection from "./AnimSection";

export default function Products() {
  const products = [
    {
      icon: "🚰", badge: "MOST POPULAR", name: "Event Rental Package", tagline: "Per-event station rental",
      price: "$1,500", unit: "/ station", color: "hsl(217,91%,60%)",
      features: ["400–500L capacity tank", "Multi-tap system (4 taps)", "Food-grade materials", "Delivery & setup included", "Brand wrap optional (+$300)", "On-site support"],
      cta: "Book Now"
    },
    {
      icon: "🤝", badge: "BEST VALUE", name: "Brand Sponsorship", tagline: "Full-event branding rights",
      price: "$5,000", unit: "/ event", color: "hsl(189,94%,43%)",
      features: ["6 stations fully branded", "Logo on all signage", "Social media mentions", "Post-event analytics report", "Priority placement", "Co-marketing opportunities"],
      cta: "Get Sponsorship"
    },
    {
      icon: "♻️", badge: "ECO CHOICE", name: "Reusable Bottle Bundle", tagline: "Branded bottles for attendees",
      price: "$10", unit: "/ bottle", color: "hsl(152,69%,31%)",
      features: ["BPA-free materials", "Custom brand printing", "750ml capacity", "Compatible with our stations", "Bulk pricing available", "Your logo on every bottle"],
      cta: "Order Bottles"
    },
    {
      icon: "🏟️", badge: "LONG-TERM", name: "Venue Partnership", tagline: "Season-long stadium contracts",
      price: "Custom", unit: "pricing", color: "hsl(263,70%,50%)",
      features: ["Dedicated station fleet", "Annual maintenance included", "Smart tracking integration", "Revenue sharing model", "Staff training provided", "Exclusive territory rights"],
      cta: "Contact Us"
    },
  ];

  return (
    <section id="products" className="section-padding">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-16">
          <span className="badge-label mb-4 inline-block">PRODUCTS & SERVICES</span>
          <h2 className="heading-section text-foreground">Service Catalog</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Three revenue streams, one mission: hydration for everyone at every event.
          </p>
        </AnimSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:pb-0 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((p, i) => (
            <AnimSection key={i} delay={i * 0.1} className="min-w-[280px] snap-center sm:min-w-0">
              <div className="rounded-2xl bg-background shadow-sm border border-border overflow-hidden card-hover h-full flex flex-col">
                <div className="p-6 text-center" style={{ background: p.color + "0a" }}>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-display font-bold tracking-widest mb-3"
                    style={{ background: p.color + "15", color: p.color }}>{p.badge}</span>
                  <div className="text-4xl mb-2">{p.icon}</div>
                  <h3 className="font-display font-bold text-foreground">{p.name}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{p.tagline}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="font-display font-extrabold text-3xl text-foreground">{p.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">{p.unit}</span>
                  </div>

                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2 mb-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill={p.color}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-muted-foreground text-xs">{f}</span>
                    </div>
                  ))}

                  <Link to="/contact"
                    className="block mt-auto text-center py-3 rounded-xl font-display font-bold text-xs tracking-wider no-underline transition-opacity"
                    style={{ background: p.color, color: "white" }}>
                    {p.cta}
                  </Link>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="p-8 rounded-2xl bg-secondary border border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">💳 Payment Options</h3>
                <p className="text-muted-foreground text-sm mb-4">We make payment easy for event organizers.</p>
                <div className="flex flex-wrap gap-2">
                  {["PayPal Business", "Bank Transfer", "Credit Card (Stripe)", "Invoice / Net-30"].map(opt => (
                    <span key={opt} className="px-4 py-2 rounded-full bg-background text-foreground font-display font-semibold text-xs border border-border">{opt}</span>
                  ))}
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-background border border-border">
                <p className="text-muted-foreground text-xs mb-1">Processing Fee</p>
                <p className="font-display font-extrabold text-2xl text-foreground">2.9% + $0.30</p>
                <p className="text-muted-foreground text-xs mt-1">per transaction (standard)</p>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
