"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";

const PROJECTS: never[] = [];

export default function ProjectsSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal direction="fold">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Projects</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
        </SectionReveal>

        <SectionReveal>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-16 text-center" style={{ color: "var(--paper)" }}>
            Built <span className="shimmer-text">Things</span>
          </h2>
        </SectionReveal>

        {PROJECTS.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="relative min-h-[240px] cursor-pointer"
                style={{ perspective: 1200 }}
                onClick={() => setFlipped(flipped === i ? null : i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: flipped === i ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="glass absolute inset-0 min-h-[240px]"
                    style={{ backfaceVisibility: "hidden", clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
                  />
                  <div
                    className="glass absolute inset-0 min-h-[240px]"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
