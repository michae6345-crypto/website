"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fold";
}

export default function SectionReveal({ children, className = "", delay = 0, direction = "up" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const variants = {
    fold:  { hidden: { opacity: 0, rotateX: -70, y: -30 }, visible: { opacity: 1, rotateX: 0, y: 0 } },
    up:    { hidden: { opacity: 0, y: 50 },  visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={direction === "fold" ? { transformOrigin: "top center" } : undefined}
    >
      {children}
    </motion.div>
  );
}
