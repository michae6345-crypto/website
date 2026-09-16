"use client";
import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";

const RESEARCH_AREAS: never[] = [];

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal direction="fold">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Research</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6 text-center" style={{ color: "var(--paper)" }}>
            Areas of <span className="shimmer-text">Inquiry</span>
          </h2>
          <p className="text-sm font-light text-center max-w-xl mx-auto mb-16" style={{ color: "var(--text-dim)" }}>
            Exploring the folds where neuroscience, AI, and human experience converge.
          </p>
        </SectionReveal>

        {RESEARCH_AREAS.length === 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="glass p-8 min-h-[200px]"
                style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
                initial={{ opacity: 0, rotateX: -30, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
