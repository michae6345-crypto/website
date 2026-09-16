"use client";
import { motion } from "motion/react";

export default function OrigamiCrane({ size = 320 }: { size?: number }) {
  return (
    <motion.div className="crane-float relative select-none" style={{ width: size, height: size * 0.75 }}>
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 30px rgba(212,168,83,0.3))" }}>
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0ebe1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c8c2b4" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0ebe1" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#d4a853" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c8c2b4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="wingGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0ebe1" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#d4a853" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c8c2b4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0ebe1" />
            <stop offset="100%" stopColor="#c8c2b4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <motion.polygon points="200,80 260,160 200,220 140,160" fill="url(#bodyGrad)" stroke="#d4a853" strokeWidth="0.8" strokeOpacity="0.6" animate={{ scaleY: [1,1.02,1], scaleX: [1,0.99,1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "200px 150px" }} />
        <line x1="200" y1="80" x2="200" y2="220" stroke="#d4a853" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="140" y1="160" x2="260" y2="160" stroke="#d4a853" strokeWidth="0.5" strokeOpacity="0.3" />
        <motion.g style={{ transformOrigin: "140px 160px" }} animate={{ rotateY: [0,-15,0], rotateZ: [0,-12,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <polygon points="140,160 20,90 80,200" fill="url(#wingGrad)" stroke="#d4a853" strokeWidth="0.6" strokeOpacity="0.5" />
          <polygon points="140,160 20,90 80,140" fill="rgba(240,235,225,0.3)" stroke="#d4a853" strokeWidth="0.4" strokeOpacity="0.3" />
        </motion.g>
        <motion.g style={{ transformOrigin: "260px 160px" }} animate={{ rotateY: [0,15,0], rotateZ: [0,12,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <polygon points="260,160 380,90 320,200" fill="url(#wingGrad2)" stroke="#d4a853" strokeWidth="0.6" strokeOpacity="0.5" />
          <polygon points="260,160 380,90 320,140" fill="rgba(240,235,225,0.3)" stroke="#d4a853" strokeWidth="0.4" strokeOpacity="0.3" />
        </motion.g>
        <motion.polygon points="200,220 170,280 200,260 230,280" fill="url(#bodyGrad)" stroke="#d4a853" strokeWidth="0.6" strokeOpacity="0.4" animate={{ rotateX: [0,5,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} style={{ transformOrigin: "200px 240px" }} />
        <motion.g animate={{ rotate: [-3,3,-3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "200px 80px" }}>
          <polygon points="200,80 185,40 200,20 215,40" fill="url(#headGrad)" stroke="#d4a853" strokeWidth="0.6" strokeOpacity="0.5" />
          <polygon points="200,20 188,5 200,0 212,5" fill="url(#headGrad)" stroke="#d4a853" strokeWidth="0.5" strokeOpacity="0.6" filter="url(#glow)" />
          <polygon points="200,0 193,-8 207,-8" fill="#d4a853" opacity="0.9" />
          <circle cx="196" cy="3" r="1.2" fill="#d4a853" opacity="0.9" />
        </motion.g>
        <motion.polygon points="200,80 260,160 200,220 140,160" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeOpacity="0" filter="url(#glow)" animate={{ strokeOpacity: [0,0.6,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
      </svg>
    </motion.div>
  );
}
