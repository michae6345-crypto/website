"use client";
import { motion, useScroll, useTransform } from "motion/react";

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + i * 7.5}%`,
  delay: i * 0.18,
  duration: 6 + (i % 4) * 1.5,
  size: 6 + (i % 3) * 4,
}));

export default function PageTransition() {
  const { scrollYProgress } = useScroll();
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.6, 0.6, 0]);

  return (
    <>
      {PARTICLES.map(({ id, left, delay, duration, size }) => (
        <motion.div
          key={id}
          className="fixed pointer-events-none z-0"
          style={{ left, bottom: 0, width: size, height: size, opacity: 0.15, background: "var(--gold)", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{ y: [0, "-110vh"] }}
          transition={{ duration, delay, repeat: Infinity, ease: "linear", repeatDelay: Math.random() * 3 }}
        />
      ))}
      <motion.div
        className="fixed left-1/2 top-0 bottom-0 pointer-events-none z-0"
        style={{ width: 1, background: "linear-gradient(to bottom, transparent, rgba(212,168,83,0.3), transparent)", opacity: lineOpacity }}
      />
    </>
  );
}
