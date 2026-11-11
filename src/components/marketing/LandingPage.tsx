import { MarketingNav } from "./MarketingNav";
import { HeroSection } from "./HeroSection";
import { Marquee } from "../common/Marquee";
import { PhilosophySection } from "./PhilosophySection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { CareerIntelligenceSection } from "./CareerIntelligenceSection";
import { MeetAgentsSection } from "./MeetAgentsSection";
import { BYOASection } from "./BYOASection";
import { HowItWorksSection } from "./HowItWorksSection";
import { OpenSourceSection } from "./OpenSourceSection";
import { MarketingFooter } from "./MarketingFooter";

interface LandingPageProps {
  onEnterApp: () => void;
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-root min-h-screen bg-[var(--cream)] text-[var(--black)] font-body selection:bg-[var(--lavender)] selection:text-[var(--black)]">
      <MarketingNav onEnterApp={onEnterApp} onNavigateSection={scrollTo} />
      <main>
        {/* Section 1: Hero */}
        <HeroSection onExplore={onEnterApp} onMeetAgents={() => scrollTo("agents")} />

        {/* Playful Infinite Editorial Marquee */}
        <Marquee
          items={[
            "YOUR CAREER",
            "YOUR INTELLIGENCE",
            "YOUR NEXT MOVE",
            "8 SPECIALIZED AGENTS",
            "NO ROBOT SPAM",
            "EVIDENCE BEFORE CONFIDENCE",
            "100% PRIVATE BYOA",
            "INDIA-FIRST SIGNALS",
          ]}
          bgColor="bg-[var(--lime)]"
          textColor="text-[var(--black)]"
        />

        {/* Section 2: Our philosophy */}
        <PhilosophySection />

        {/* Section 3: Platform capabilities */}
        <CapabilitiesSection />

        {/* Section 4: Career intelligence */}
        <CareerIntelligenceSection />

        {/* Section 5: Meet the agents */}
        <MeetAgentsSection />

        {/* Section 6: Your AI, your choice */}
        <BYOASection />

        {/* Section 7: How it works */}
        <HowItWorksSection />

        {/* Section 8: Open source and community */}
        <OpenSourceSection />

        {/* Secondary Editorial Marquee */}
        <Marquee
          items={[
            "ORBIT CAREER OPERATING SYSTEM",
            "SCOUT",
            "LENS",
            "DRAFT",
            "TRACK",
            "COACH",
            "SIGNAL",
            "SENTINEL",
          ]}
          direction="right"
          speed="slow"
          bgColor="bg-[var(--orange)]"
          textColor="text-white"
        />
      </main>
      {/* Section 9: Footer */}
      <MarketingFooter onEnterApp={onEnterApp} />
    </div>
  );
}

