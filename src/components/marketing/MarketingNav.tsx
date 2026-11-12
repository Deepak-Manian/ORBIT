import { useState, useEffect } from "react";
import { Logo } from "../common/Logo";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";

interface MarketingNavProps {
  onEnterApp: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export function MarketingNav({ onEnterApp, onNavigateSection }: MarketingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-GB", { hour12: false })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex items-center justify-between px-6 md:px-12 transition-all select-none ${
        scrolled
          ? "bg-[var(--color-dark)] shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md border-b border-white/10"
          : "bg-[var(--color-dark)]/90 backdrop-blur-md border-b border-white/5"
      } text-white`}
    >
      {/* Left Links: Playful "work" button with Truus doodle blob */}
      <div className="flex items-center gap-5">
        <button
          data-wiggle="1"
          data-wiggle-target
          onClick={() => scrollTo("showcase")}
          data-custom-cursor="click"
          className="group relative px-4 py-2 rounded-full font-display font-black text-sm tracking-wide text-white transition-all cursor-pointer overflow-visible"
        >
          {/* Hand-drawn organic blob SVG that appears on hover */}
          <span className="absolute inset-0 -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-[var(--color-pink)]">
            <svg viewBox="0 0 80 40" fill="none" className="w-full h-full">
              <path
                d="M 12 20 C 10 8, 30 5, 50 6 C 70 7, 78 15, 75 26 C 72 36, 55 38, 32 37 C 15 36, 14 30, 12 20 Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="relative z-10 group-hover:text-[var(--color-dark)] transition-colors">
            work
          </span>
        </button>

        <button
          onClick={() => scrollTo("agents")}
          data-custom-cursor="click"
          className="hidden sm:inline-block text-white/70 hover:text-white font-body text-sm tracking-wide transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
        >
          agents
        </button>

        <button
          onClick={() => scrollTo("capabilities")}
          data-custom-cursor="click"
          className="hidden md:inline-block text-white/70 hover:text-white font-body text-sm tracking-wide transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
        >
          capabilities
        </button>
      </div>

      {/* Center Script Logo matching Truus */}
      <div
        data-wiggle="0.5"
        className="absolute left-1/2 -translate-x-1/2"
        data-custom-cursor="home"
      >
        <Logo
          variant="script"
          light
          size="md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      {/* Right Action: Live Ticking Clock + Say Hello + Enter Workspace */}
      <div className="flex items-center gap-4">
        {/* Live Digital Clock (Signature Truus feature) */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 font-mono text-xs text-[var(--color-lightgreen)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lightgreen)] animate-ping" />
          <span>{currentTime || "12:00:00"} IST</span>
        </div>

        {/* WhatsApp-style "say hello" pill */}
        <a
          href="mailto:hello@orbit.career"
          data-custom-cursor="click"
          className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-400 hover:bg-emerald-500/25 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          say hello
        </a>

        <Button
          variant="primary"
          size="sm"
          icon="arrow"
          onClick={onEnterApp}
          data-custom-cursor="click"
          className="shadow-[3px_3px_0px_white]"
        >
          enter workspace
        </Button>

        <button
          type="button"
          className="md:hidden p-2 text-white/90 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <Icon name={mobileMenuOpen ? "close" : "menu"} size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[var(--color-dark)]/98 flex flex-col items-center justify-center gap-6 p-8 z-50">
          <button
            onClick={() => scrollTo("showcase")}
            className="text-white text-2xl font-display font-black"
          >
            work
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="text-white/80 text-xl font-body"
          >
            philosophy
          </button>
          <button
            onClick={() => scrollTo("capabilities")}
            className="text-white/80 text-xl font-body"
          >
            capabilities
          </button>
          <button
            onClick={() => scrollTo("agents")}
            className="text-white/80 text-xl font-body"
          >
            agents
          </button>
          <button
            onClick={() => scrollTo("byoa")}
            className="text-white/80 text-xl font-body"
          >
            byoa
          </button>
          <div className="py-2 font-mono text-xs text-[var(--color-lightgreen)]">
            {currentTime} IST
          </div>
          <a
            href="mailto:hello@orbit.career"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-sm text-emerald-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            say hello
          </a>
          <Button variant="primary" size="lg" icon="arrow" onClick={onEnterApp}>
            enter workspace
          </Button>
        </div>
      )}
    </header>
  );
}
