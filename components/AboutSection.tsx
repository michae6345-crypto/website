"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import SectionReveal from "./SectionReveal";

const SKILLS = [
  { name: "Machine Learning", level: 92 },
  { name: "Neural Networks", level: 88 },
  { name: "Python / PyTorch", level: 95 },
  { name: "Statistical Modeling", level: 85 },
  { name: "NLP & Transformers", level: 87 },
  { name: "Scientific Writing", level: 90 },
];

const TIMELINE = [
  { year: "2024", title: "Senior Research Scientist", org: "AI Research Institute" },
  { year: "2022", title: "Postdoctoral Fellow", org: "Computational Neuroscience Lab" },
  { year: "2019", title: "PhD — Computational Neuroscience", org: "University" },
  { year: "2015", title: "BSc — Mathematics & CS", org: "University" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xLeft  = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal direction="fold">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>About</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div style={{ x: xLeft }}>
            <SectionReveal direction="left">
              <h2 className="font-display text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ color: "var(--paper)" }}>
                Folding complexity<br />
                <span className="shimmer-text">into clarity</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-sm md:text-base font-light leading-loose mb-6" style={{ color: "var(--text-dim)" }}>
                I study how intelligence emerges — in biological systems and artificial ones. My research sits at the crossroads of computational neuroscience, machine learning, and equitable AI design.
              </p>
              <p className="text-sm md:text-base font-light leading-loose mb-6" style={{ color: "var(--text-dim)" }}>
                Like origami, I believe the most elegant solutions come not from adding complexity, but from discovering the precise folds already latent in a problem.
              </p>
              <p className="text-sm md:text-base font-light leading-loose" style={{ color: "var(--text-dim)" }}>
                My work has been applied to healthcare diagnostics, language models for low-resource communities, and neuromorphic computing architectures.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2} className="mt-12">
              <div ref={skillsRef} className="space-y-5">
                {SKILLS.map(({ name, level }, i) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-dim)" }}>{name}</span>
                      <span className="text-xs" style={{ color: "var(--gold)" }}>{level}%</span>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(212,168,83,0.15)" }}>
                      <motion.div
                        className="h-px"
                        style={{ background: "linear-gradient(to right, var(--gold), #a06c1e)", transformOrigin: "left" }}
                        initial={{ scaleX: 0 }}
                        animate={skillsInView ? { scaleX: level / 100 } : { scaleX: 0 }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </motion.div>

          <motion.div style={{ x: xRight }} className="space-y-8">
            <SectionReveal direction="right">
              <div className="glass p-8" style={{ clipPath: "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)" }}>
                <div className="font-display text-6xl font-light mb-2 text-center shimmer-text">MT</div>
                <div className="text-xs tracking-[0.3em] uppercase text-center" style={{ color: "var(--text-dim)" }}>Michael Tarekegn</div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="space-y-1">
                {TIMELINE.map(({ year, title, org }, i) => (
                  <motion.div
                    key={year}
                    className="flex gap-6 py-5 border-b"
                    style={{ borderColor: "rgba(212,168,83,0.1)" }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-xs font-medium mt-0.5 shrink-0 w-10" style={{ color: "var(--gold)" }}>{year}</div>
                    <div>
                      <div className="text-sm font-medium mb-0.5" style={{ color: "var(--paper)" }}>{title}</div>
                      <div className="text-xs" style={{ color: "var(--text-dim)" }}>{org}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
