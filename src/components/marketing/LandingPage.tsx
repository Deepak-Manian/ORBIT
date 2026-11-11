import { MarketingNav } from "./MarketingNav";
import { HeroSection } from "./HeroSection";
import { Marquee } from "../common/Marquee";
import { HorizontalWordsSection } from "./HorizontalWordsSection";
import { PhilosophySection } from "./PhilosophySection";
import { MeetAgentsSection } from "./MeetAgentsSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { BYOASection } from "./BYOASection";
import { MoreStuffSection } from "./MoreStuffSection";
import { MarketingFooter } from "./MarketingFooter";
import { useTruusInteractions } from "../../hooks/useTruusInteractions";

interface LandingPageProps {
  onEnterApp: () => void;
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  // Activate Truus momentum inertia, draw button SVGs, and accordion card physics
  useTruusInteractions();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-root min-h-screen bg-[var(--cream)] text-[var(--black)] font-body selection:bg-[var(--lavender)] selection:text-[var(--black)]">
      {/* Fixed Editorial Navigation */}
      <MarketingNav onEnterApp={onEnterApp} onNavigateSection={scrollTo} />

      <main>
        {/* Section 1: Hero ("hello we are orbit" + full-bleed showcase banner) */}
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

        {/* Truus Scrolled Horizontal Words Section */}
        <HorizontalWordsSection />

        {/* Section 2: Philosophy ("an agency built for the future... from campus to VP") */}
        <PhilosophySection />

        {/* Section 3: Meet the Agents ("we are a future-proof collective... not to brag!") */}
        <MeetAgentsSection />

        {/* Section 4: Capabilities ("call us if you need:" + 5 vertical fan-out cards + client logos) */}
        <CapabilitiesSection />

        {/* Section 5: BYOA Architecture (Privacy & Own Keys) */}
        <BYOASection />

        {/* Section 6: More Stuff To Click On (Tilted Cards with custom cursor text) */}
        <MoreStuffSection />

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
          bgColor="bg-[var(--blue)]"
          textColor="text-white"
        />
      </main>

      {/* Section 7: Vivid Editorial Footer with Giant Script Logo & Stickers */}
      <MarketingFooter onEnterApp={onEnterApp} />
    </div>
  );
}
