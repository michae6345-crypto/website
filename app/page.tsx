import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import { OrigamiBackground, PageTransition } from "@/components/ClientShell";

function OrigamiDivider() {
  return (
    <div className="relative h-16 overflow-hidden" aria-hidden>
      <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <polyline points="0,32 180,8 360,48 540,16 720,40 900,12 1080,44 1260,20 1440,32" stroke="rgba(212,168,83,0.18)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative" style={{ background: "var(--bg)" }}>
      <OrigamiBackground />
      <PageTransition />
      <Navigation />
      <HeroSection />
      <OrigamiDivider />
      <AboutSection />
      <OrigamiDivider />
      <ResearchSection />
      <OrigamiDivider />
      <ProjectsSection />
      <OrigamiDivider />
      <PublicationsSection />
      <OrigamiDivider />
      <ContactSection />
    </main>
  );
}
