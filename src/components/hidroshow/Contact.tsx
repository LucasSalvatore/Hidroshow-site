import { useState, FormEvent } from "react";
import AnimSection from "./AnimSection";

type FormState = { name: string; email: string; eventName: string; attendance: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const ATTENDANCE_RANGES = ["Under 5,000", "5,000–15,000", "15,000–30,000", "30,000–60,000", "60,000+"];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", eventName: "", attendance: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!form.email.trim()) e.email = "Enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.eventName.trim()) e.eventName = "Enter the event name.";
    if (!form.attendance) e.attendance = "Select an attendance range.";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // TODO: POST the form payload to a real quote-request endpoint here
    // (e.g. fetch("/api/quote", { method: "POST", body: JSON.stringify(form) })).
    // Until then this is a no-op submit that only shows the success state.
    setSubmitted(true);
  };

  const set = (key: keyof FormState) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: ev.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const inputClass =
    "w-full px-4 py-3 border bg-background text-foreground text-sm outline-none transition-colors focus-visible:border-[hsl(var(--tap))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--tap))/0.35]";
  const labelClass = "block font-mono-num text-[10px] font-semibold tracking-[0.22em] uppercase text-[hsl(var(--tap))] mb-2";
  const errorClass = "font-mono-num text-[10px] tracking-[0.1em] uppercase mt-1.5 text-[hsl(var(--destructive))]";
  const borderFor = (key: keyof FormState) => (errors[key] ? "hsl(var(--destructive))" : "hsl(var(--input))");

  return (
    <section id="contact" className="section-padding" style={{ background: "hsl(var(--background))" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection className="mb-14 max-w-3xl">
          <span className="badge-label mb-5 inline-block">DISPATCH · 05 · REQUEST A QUOTE</span>
          <h2 className="heading-section text-[hsl(var(--reservoir))]">Book Hidroshow for Your Event</h2>
          <p className="text-muted-foreground text-lg mt-4">Tell us about your event. We respond within 24 hours with a station plan and quote.</p>
          <div className="gauge-ticks max-w-sm mt-6" />
        </AnimSection>

        <div className="grid lg:grid-cols-5 gap-6">
          <AnimSection className="lg:col-span-2">
            {/* PLACEHOLDER contact details — replace with real channels before launch */}
            <div className="p-6 card-elevated" style={{ borderRadius: 3 }}>
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

            <div className="p-6 border mt-4" style={{ borderRadius: 3, background: "hsl(var(--reservoir))", borderColor: "hsl(var(--reservoir))" }}>
              <span className="badge-label badge-on-dark mb-4 inline-block">WHAT YOU GET</span>
              <div className="gauge-ticks gauge-ticks-on-dark mb-4" />
              {["Station count & placement plan", "Delivery, setup & on-site crew", "Water supply & filtration spec", "Itemized quote within 24 hours"].map((item, i, arr) => (
                <div key={item} className="py-3" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid hsl(38 24% 92% / 0.12)" }}>
                  <span className="font-mono-num text-[11px] uppercase tracking-[0.15em]" style={{ color: "hsl(38 24% 92% / 0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
          </AnimSection>

          <AnimSection className="lg:col-span-3" delay={0.1}>
            {submitted ? (
              <div className="p-12 card-elevated" style={{ borderRadius: 3 }} role="status">
                <span className="badge-label badge-signal mb-6 inline-block">TICKET · RECEIVED</span>
                <h3 className="heading-display text-3xl text-[hsl(var(--reservoir))] mb-3">Request logged</h3>
                <div className="gauge-ticks max-w-xs mb-4" />
                <p className="text-muted-foreground">Our team will reach out within 24 hours to discuss station count, placement, and delivery for your event.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="p-8 card-elevated" style={{ borderRadius: 3 }}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-name" className={labelClass}>Name</label>
                    <input
                      id="quote-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={set("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "quote-name-error" : undefined}
                      className={inputClass}
                      style={{ borderRadius: 2, borderColor: borderFor("name") }}
                    />
                    {errors.name && <p id="quote-name-error" className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-email" className={labelClass}>Email</label>
                    <input
                      id="quote-email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                      className={inputClass}
                      style={{ borderRadius: 2, borderColor: borderFor("email") }}
                    />
                    {errors.email && <p id="quote-email-error" className={errorClass}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="quote-event" className={labelClass}>Event Name</label>
                    <input
                      id="quote-event"
                      type="text"
                      placeholder="Summer Sound Festival"
                      value={form.eventName}
                      onChange={set("eventName")}
                      aria-invalid={!!errors.eventName}
                      aria-describedby={errors.eventName ? "quote-event-error" : undefined}
                      className={inputClass}
                      style={{ borderRadius: 2, borderColor: borderFor("eventName") }}
                    />
                    {errors.eventName && <p id="quote-event-error" className={errorClass}>{errors.eventName}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-attendance" className={labelClass}>Expected Attendance</label>
                    <select
                      id="quote-attendance"
                      value={form.attendance}
                      onChange={set("attendance")}
                      aria-invalid={!!errors.attendance}
                      aria-describedby={errors.attendance ? "quote-attendance-error" : undefined}
                      className={inputClass}
                      style={{ borderRadius: 2, borderColor: borderFor("attendance") }}
                    >
                      <option value="">Select range…</option>
                      {ATTENDANCE_RANGES.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    {errors.attendance && <p id="quote-attendance-error" className={errorClass}>{errors.attendance}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="quote-message" className={labelClass}>Message (optional)</label>
                  <textarea
                    id="quote-message"
                    rows={4}
                    placeholder="Dates, venue, water access, anything we should know."
                    value={form.message}
                    onChange={set("message")}
                    className={inputClass + " resize-y"}
                    style={{ borderRadius: 2, borderColor: "hsl(var(--input))" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--tap))]"
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
