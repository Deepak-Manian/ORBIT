import { useState, useEffect } from "react";
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
  // Toggle between the authentic Dennis Snellenberg HTML experience and the React 19 component tree
  const [viewMode, setViewMode] = useState<"html" | "react">("html");

  // Activate Truus momentum inertia and card accordion physics in React mode
  useTruusInteractions();

  // Listen for navigation messages sent from the embedded HTML iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (
        e.data?.type === "ORBIT_NAVIGATE" ||
        e.data?.type === "ENTER_APP" ||
        e.data?.type === "NAVIGATE_APP"
      ) {
        onEnterApp();
      }
    };

    const handleHashChange = () => {
      if (window.location.hash.includes("dashboard")) {
        onEnterApp();
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [onEnterApp]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-root min-h-screen bg-[var(--cream)] text-[var(--black)] font-body selection:bg-[var(--lavender)] selection:text-[var(--black)] relative">
      {/* ---------------- Top Viewport Engine Switcher Bar ---------------- */}
      <aside
        aria-label="Engine switcher"
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[99999] bg-black/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2 sm:gap-3 text-xs font-mono select-none"
      >
        <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-full">
          <button
            type="button"
            onClick={() => setViewMode("html")}
            className={`px-3 py-1 rounded-full font-bold transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === "html"
                ? "bg-[#F5693C] text-white shadow-sm"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            <span>✨</span>
            <span>HTML Engine</span>
            <span className="hidden sm:inline text-[10px] opacity-80">(Truus GSAP)</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("react")}
            className={`px-3 py-1 rounded-full font-bold transition-all duration-200 flex items-center gap-1.5 ${
              viewMode === "react"
                ? "bg-[#4B69F0] text-white shadow-sm"
                : "text-zinc-300 hover:text-white"
            }`}
          >
            <span>⚛️</span>
            <span>React Mode</span>
          </button>
        </div>

        <div className="h-3.5 w-px bg-white/20 hidden sm:block"></div>

        {/* Action Shortcuts */}
        <div className="flex items-center gap-2">
          <a
            href="/landing.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Open pure HTML in new browser tab"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors text-[11px]"
          >
            <span>↗</span>
            <span>New Tab</span>
          </a>

          <button
            type="button"
            onClick={onEnterApp}
            className="px-3 py-1 rounded-full bg-[#E6FAB9] hover:bg-[#d8f59a] text-black font-bold tracking-tight text-[11px] transition-transform hover:scale-105"
          >
            Launch OS 🚀
          </button>
        </div>
      </aside>

      {/* ---------------- View Mode 1: Authentic Dennis Snellenberg HTML Engine ---------------- */}
      {viewMode === "html" ? (
        <section aria-label="Authentic Dennis Snellenberg HTML landing experience" className="w-full h-screen overflow-hidden pt-0">
          <iframe
            src="/landing.html"
            title="Orbit Career Intelligence Platform - Truus Dennis Snellenberg Experience"
            className="w-full h-full border-none m-0 p-0 block"
            style={{ width: "100%", height: "100vh", border: "none" }}
          />
        </section>
      ) : (
        /* ---------------- View Mode 2: React 19 Component Suite ---------------- */
        <>
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
        </>
      )}
    </div>
  );
}
