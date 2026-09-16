"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";

const SOCIALS = [
  { label: "Email",    href: "mailto:michae6345@gmail.com",  icon: "✉" },
  { label: "GitHub",   href: "#",                            icon: "⬡" },
  { label: "Scholar",  href: "#",                            icon: "◈" },
  { label: "LinkedIn", href: "#",                            icon: "◆" },
  { label: "Twitter",  href: "#",                            icon: "◇" },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal direction="fold">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Contact</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-20">
          <SectionReveal direction="left">
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ color: "var(--paper)" }}>
              Let&apos;s<br /><span className="shimmer-text">connect</span>
            </h2>
            <p className="text-sm font-light leading-loose mb-12" style={{ color: "var(--text-dim)" }}>
              Open to research collaborations, speaking engagements, and thoughtful conversations about AI and neuroscience.
            </p>
            <div className="space-y-3">
              {SOCIALS.map(({ label, href, icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 transition-all duration-300 group"
                  style={{ border: "1px solid rgba(212,168,83,0.1)", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ borderColor: "rgba(212,168,83,0.4)", x: 4 }}
                >
                  <span style={{ color: "var(--gold)" }}>{icon}</span>
                  <span className="text-xs tracking-widest uppercase transition-colors duration-300 group-hover:text-amber-400" style={{ color: "var(--text-dim)" }}>{label}</span>
                </motion.a>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15}>
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-display text-4xl shimmer-text">✓</div>
                <p className="text-sm tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>Message Sent</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name",    label: "Name",    type: "text",  value: form.name },
                  { id: "email",   label: "Email",   type: "email", value: form.email },
                ].map(({ id, label, type, value }) => (
                  <div key={id}>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-dim)" }}>{label}</label>
                    <input
                      type={type}
                      required
                      value={value}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className="w-full bg-transparent border-b py-3 text-sm font-light outline-none transition-colors duration-300 focus:border-amber-400"
                      style={{ borderColor: "rgba(212,168,83,0.2)", color: "var(--paper)" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-dim)" }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-transparent border-b py-3 text-sm font-light outline-none resize-none transition-colors duration-300 focus:border-amber-400"
                    style={{ borderColor: "rgba(212,168,83,0.2)", color: "var(--paper)" }}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="px-10 py-3 text-sm tracking-widest uppercase font-medium w-full transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, var(--gold), #a06c1e)", color: "#06080f", clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </SectionReveal>
        </div>

        <div className="mt-32 pt-12" style={{ borderTop: "1px solid rgba(212,168,83,0.1)" }}>
          <SectionReveal delay={0.3} className="text-center">
            <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>
              © {new Date().getFullYear()} Michael Tarekegn — Designed with intention
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
