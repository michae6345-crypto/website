"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import OrigamiCrane from "./OrigrameCrane";

const ROLES = [
  "Machine Learning Researcher",
  "Computational Neuroscientist",
  "AI Systems Designer",
  "Data-Driven Storyteller",
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = displayed.length;
    const tick = () => {
      if (typing) {
        if (i < target.length) { setDisplayed(target.slice(0, i + 1)); i++; timer = setTimeout(tick, 55); }
        else { timer = setTimeout(() => setTyping(false), 1800); }
      } else {
        if (i > 0) { setDisplayed(target.slice(0, i - 1)); i--; timer = setTimeout(tick, 30); }
        else { setRoleIndex(r => (r + 1) % ROLES.length); setTyping(true); }
      }
    };
    let timer = setTimeout(tick, 80);
    return () => clearTimeout(timer);
  }, [roleIndex, typing]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(212,168,83,0.07) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          <div className="flex-1 text-center lg:text-left">
            <motion.div className="mb-4 inline-flex items-center gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "var(--gold)" }}>Researcher &amp; Innovator</span>
            </motion.div>

            <motion.h1 className="font-display leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 300 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              <motion.span className="block" style={{ color: "var(--paper)" }} initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>Michael</motion.span>
              <motion.span className="block shimmer-text" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}>Tarekegn</motion.span>
            </motion.h1>

            <motion.div className="h-8 mb-8 flex items-center gap-2 lg:justify-start justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <span className="text-sm md:text-base tracking-wide font-light" style={{ color: "var(--text-dim)" }}>{displayed}</span>
              <motion.span className="inline-block w-0.5 h-5" style={{ background: "var(--gold)" }} animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }} />
            </motion.div>

            <motion.p className="max-w-md text-sm md:text-base font-light leading-relaxed mb-10 mx-auto lg:mx-0" style={{ color: "var(--text-dim)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
              Unfolding the complexity of intelligent systems — one crease at a time.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.8 }}>
              <a href="#research" className="px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, var(--gold), #a06c1e)", color: "#06080f", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>Explore Research</a>
              <a href="#contact" className="px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105" style={{ border: "1px solid rgba(212,168,83,0.4)", color: "var(--gold)", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>Get in Touch</a>
            </motion.div>

            <motion.div className="flex gap-10 mt-14 justify-center lg:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
              {[{ value: "40+", label: "Publications" }, { value: "8+", label: "Years Research" }, { value: "12+", label: "Collaborators" }].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-light" style={{ color: "var(--gold)" }}>{value}</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--text-dim)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="flex-1 flex justify-center items-center" initial={{ opacity: 0, scale: 0.7, rotate: -15 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative">
              <motion.div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(212,168,83,0.15)", margin: "-40px", animation: "spin-slow 20s linear infinite" }} />
              <motion.div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(212,168,83,0.08)", margin: "-80px", animation: "spin-slow 30s linear infinite reverse" }} />
              <div className="absolute inset-0" style={{ margin: "-20px", background: "radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)", borderRadius: "50%", animation: "glow-pulse 4s ease-in-out infinite" }} />
              <OrigamiCrane size={380} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--text-dim)" }}>Scroll</span>
        <motion.div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)", transformOrigin: "top center" }} animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}
