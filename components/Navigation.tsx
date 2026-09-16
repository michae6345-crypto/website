"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const NAV_ITEMS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Research",     href: "#research" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.2]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12">
        <motion.div className="absolute inset-0 backdrop-blur-md" style={{ opacity: bgOpacity }} />
        <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-amber-400" style={{ opacity: borderOpacity }} />
        <div className="relative flex items-center justify-between py-5 max-w-7xl mx-auto">
          <motion.a href="#hero" className="font-display text-xl font-light tracking-widest" style={{ color: "var(--paper)" }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            MT<span style={{ color: "var(--gold)" }}>.</span>
          </motion.a>
          <motion.ul className="hidden md:flex items-center gap-8" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {NAV_ITEMS.map(({ label, href }, i) => (
              <motion.li key={label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.06 }}>
                <a href={href} className="relative text-xs tracking-widest uppercase font-medium transition-colors duration-300 group" style={{ color: active === href.slice(1) ? "var(--gold)" : "var(--text-dim)" }}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-amber-400 to-transparent transition-all duration-300 ${active === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <motion.span className="block w-6 h-px" style={{ background: "var(--paper)" }} animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="block w-6 h-px" style={{ background: "var(--paper)" }} animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
            <motion.span className="block w-6 h-px" style={{ background: "var(--paper)" }} animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </button>
        </div>
      </motion.nav>

      <motion.div className="fixed inset-0 z-40 md:hidden" style={{ pointerEvents: menuOpen ? "all" : "none" }} initial={false} animate={menuOpen ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.3 }}>
        <div className="absolute inset-0 backdrop-blur-xl" style={{ background: "rgba(6,8,15,0.97)" }} />
        <div className="relative flex flex-col items-center justify-center h-full gap-10">
          {NAV_ITEMS.map(({ label, href }, i) => (
            <motion.a key={label} href={href} className="font-display text-4xl font-light" style={{ color: "var(--paper)" }} initial={{ opacity: 0, y: 20 }} animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: i * 0.07 }} onClick={() => setMenuOpen(false)}>
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {NAV_ITEMS.map(({ href }) => (
          <a key={href} href={href}>
            <div className="nav-dot" style={{ background: active === href.slice(1) ? "var(--gold)" : undefined, transform: active === href.slice(1) ? "scale(1.5)" : undefined }} />
          </a>
        ))}
      </div>
    </>
  );
}
