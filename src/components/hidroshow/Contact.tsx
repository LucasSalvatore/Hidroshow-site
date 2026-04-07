import { useState, FormEvent } from "react";
import AnimSection from "./AnimSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", eventType: "", attendees: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-primary/20 bg-background text-foreground text-sm font-body outline-none focus:border-primary transition-colors";
  const labelClass = "block text-[10px] font-display font-bold tracking-widest text-primary mb-1.5";

  return (
    <section id="contact" className="section-padding section-light">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="text-center mb-16">
          <span className="badge-label mb-4 inline-block">GET IN TOUCH</span>
          <h2 className="heading-section text-foreground">Book Hidroshow for Your Event</h2>
          <p className="text-muted-foreground text-lg mt-4">Tell us about your event and we'll get back to you within 24 hours.</p>
        </AnimSection>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <AnimSection className="lg:col-span-2">
            <div className="p-6 rounded-2xl bg-background shadow-sm border border-border mb-6">
              {[
                { icon: "📧", label: "Email", val: "hello@hidroshow.com" },
                { icon: "📞", label: "Phone", val: "+1 (555) 000-AGUA" },
                { icon: "📍", label: "Based In", val: "New Jersey, USA" },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-4 py-3 border-b border-border last:border-none">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-muted-foreground text-xs">{c.label}</p>
                    <p className="font-display font-semibold text-foreground text-sm">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-secondary border border-primary/10">
              <h4 className="font-display font-bold text-sm text-primary mb-4">QUICK PRICING</h4>
              {[["1 Station", "$1,500"], ["6 Stations", "$9,000"], ["+ Sponsorship", "+$5,000"], ["Bottles (min 50)", "$500"]].map(([label, price]) => (
                <div key={label} className="flex justify-between py-2 border-b border-primary/10 last:border-none">
                  <span className="text-muted-foreground text-sm">{label}</span>
                  <span className="font-display font-bold text-foreground text-sm">{price}</span>
                </div>
              ))}
            </div>
          </AnimSection>

          {/* Form */}
          <AnimSection className="lg:col-span-3" delay={0.15}>
            {submitted ? (
              <div className="text-center p-12 rounded-2xl bg-background shadow-sm border border-border">
                <div className="text-6xl mb-4">💧</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Request Received!</h3>
                <p className="text-muted-foreground">Our team will reach out within 24 hours to discuss your event's hydration needs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-background shadow-sm border border-border">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { key: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
                    { key: "org", label: "Organization", type: "text", placeholder: "Event Co." },
                    { key: "date", label: "Event Date", type: "date", placeholder: "" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className={labelClass}>{f.label.toUpperCase()}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>EVENT TYPE</label>
                    <select value={form.eventType} onChange={e => setForm({ ...form, eventType: e.target.value })} className={inputClass}>
                      <option value="">Select type...</option>
                      {["Concert / Festival", "Stadium / Sports", "Corporate Event", "Public Festival", "Private Event", "Other"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>EXPECTED ATTENDEES</label>
                    <select value={form.attendees} onChange={e => setForm({ ...form, attendees: e.target.value })} className={inputClass}>
                      <option value="">Select range...</option>
                      {["Under 5,000", "5,000–15,000", "15,000–30,000", "30,000–60,000", "60,000+"].map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className={labelClass}>MESSAGE (OPTIONAL)</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-y"}
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center text-sm py-4">
                  SEND REQUEST 💧
                </button>
              </form>
            )}
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
