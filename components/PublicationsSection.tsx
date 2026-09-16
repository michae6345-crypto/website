"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionReveal from "./SectionReveal";

const PUBLICATIONS: never[] = [];

const FILTERS = ["All", "Journal", "Conference"];

export default function PublicationsSection() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="publications" className="relative py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal direction="fold">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Publications</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6 text-center" style={{ color: "var(--paper)" }}>
            Written <span className="shimmer-text">Work</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="flex gap-3 justify-center mt-8 mb-16">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: filter === f ? "var(--gold)" : "transparent",
                color: filter === f ? "#06080f" : "var(--text-dim)",
                border: "1px solid",
                borderColor: filter === f ? "var(--gold)" : "rgba(212,168,83,0.2)",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
            >
              {f}
            </button>
          ))}
        </SectionReveal>

        {PUBLICATIONS.length === 0 && (
          <div className="space-y-4">
            <AnimatePresence>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="glass p-6 min-h-[80px]"
                  style={{ clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
