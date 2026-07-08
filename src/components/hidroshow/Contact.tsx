import { useState, FormEvent } from "react";
import AnimSection from "./AnimSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", eventType: "", attendees: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 border border-input bg-background text-foreground text-sm font-body outline-none focus:border-[hsl(var(--tap))] transition-colors";
  const labelClass = "block font-mono-num text-[10px] font-semibold tracking-[0.22em] uppercase text-[hsl(var(--tap))] mb-2";

  return (
    <section id="contact" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-14 max-w-3xl">
          <span className="badge-label mb-5 inline-block">DISPATCH · CONTACT</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">Book Hidroshow for Your Event</h2>
          <p className="text-muted-foreground text-lg mt-4">Tell us about your event. We respond within 24 hours with a station plan and quote.</p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid lg:grid-cols-5 gap-6">
          <AnimSection className="lg:col-span-2">
            <div className="p-6 bg-card border border-border mb-4" style={{ borderRadius: 3 }}>
              <span className="badge-label mb-4 inline-block">DIRECT CHANNELS</span>
              {[
                { label: "Email", val: "hello@hidroshow.com" },
                { label: "Phone", val: "+1 (555) 000-AGUA" },
                { label: "Based In", val: "Newark, NJ · USA" },
              ].map(c => (
                <div key={c.label} className="py-3 border-b border-border last:border-none">
                  <p className="font-mono-num text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-mono-num text-sm text-foreground">{c.val}</p>
                </div>
              ))}
            </div>

            <div className="p-6 border border-border" style={{ borderRadius: 3, background: "hsl(var(--reservoir))" }}>
              <span className="badge-label badge-on-dark mb-4 inline-block">QUICK PRICING</span>
              <div className="gauge-ticks gauge-ticks-on-dark mb-4" />
              {[["1 Station", "$1,500"], ["6 Stations", "$9,000"], ["+ Sponsorship", "+$5,000"], ["Bottles (min 50)", "$500"]].map(([label, price], i, arr) => (
                <div key={label} className="flex justify-between py-3" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid hsl(38 24% 92% / 0.12)" }}>
                  <span className="font-mono-num text-[11px] uppercase tracking-[0.15em]" style={{ color: "hsl(38 24% 92% / 0.6)" }}>{label}</span>
                  <span className="font-mono-num text-sm" style={{ color: "hsl(var(--reservoir-foreground))" }}>{price}</span>
                </div>
              ))}
            </div>
          </AnimSection>

          <AnimSection className="lg:col-span-3" delay={0.1}>
            {submitted ? (
              <div className="p-12 bg-card border border-border" style={{ borderRadius: 3 }}>
                <span className="badge-label badge-signal mb-6 inline-block">TICKET · RECEIVED</span>
                <h3 className="heading-display text-3xl text-[hsl(var(--reservoir))] mb-3">Request logged</h3>
                <div className="gauge-ticks max-w-xs mb-4" />
                <p className="text-muted-foreground">Our team will reach out within 24 hours to discuss station count, placement, and delivery for your event.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 bg-card border border-border" style={{ borderRadius: 3 }}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { key: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
                    { key: "org", label: "Organization", type: "text", placeholder: "Event Co." },
                    { key: "date", label: "Event Date", type: "date", placeholder: "" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className={labelClass}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        className={inputClass}
                        style={{ borderRadius: 2 }}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Event Type</label>
                    <select value={form.eventType} onChange={e => setForm({ ...form, eventType: e.target.value })} className={inputClass} style={{ borderRadius: 2 }}>
                      <option value="">Select type…</option>
                      {["Concert / Festival", "Stadium / Sports", "Corporate Event", "Public Festival", "Private Event", "Other"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Expected Attendees</label>
                    <select value={form.attendees} onChange={e => setForm({ ...form, attendees: e.target.value })} className={inputClass} style={{ borderRadius: 2 }}>
                      <option value="">Select range…</option>
                      {["Under 5,000", "5,000–15,000", "15,000–30,000", "30,000–60,000", "60,000+"].map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className={labelClass}>Message (optional)</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-y"}
                    style={{ borderRadius: 2 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  style={{ background: "hsl(var(--tap))", borderColor: "hsl(var(--tap))" }}
                >
                  Send Request →
                </button>
              </form>
            )}
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
