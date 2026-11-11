import { Logo } from "../common/Logo";
import { Button } from "../common/Button";
import { CircularStamp } from "../common/Doodles";

interface MarketingFooterProps {
  onEnterApp: () => void;
}

export function MarketingFooter({ onEnterApp }: MarketingFooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--black)] text-white pt-24 pb-16 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Call to Action Banner */}
        <div className="p-8 md:p-14 rounded-3xl bg-[var(--cream)] text-[var(--black)] border-2 border-white/20 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[6px_6px_0px_var(--orange)]">
          <div className="text-center md:text-left">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight mb-3">
              make your next move
              <br />
              <span className="font-serif italic font-normal text-[var(--orange)]">
                an intelligent one.
              </span>
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--muted)] max-w-md">
              Start exploring curated opportunities with ORBIT and your specialized AI career team.
            </p>
          </div>
          <Button variant="primary" size="lg" icon="arrow" onClick={onEnterApp}>
            Start exploring now
          </Button>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-sm">
          <div className="col-span-2">
            <Logo light size="lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <p className="text-xs text-white/60 mt-4 max-w-xs leading-relaxed font-body">
              Your career. Your intelligence. Your next move. An open-source, privacy-first career
              operating system with user-owned AI.
            </p>
            <div className="mt-6">
              <CircularStamp
                text="ORBIT CAREER PLATFORM · "
                centerText="★"
                size={70}
                className="text-white/40"
              />
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--lime)] font-bold mb-4">
              PLATFORM
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  onClick={() => scrollTo("platform")}
                  className="hover:text-white cursor-pointer"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("intelligence")}
                  className="hover:text-white cursor-pointer"
                >
                  Career Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("agents")}
                  className="hover:text-white cursor-pointer"
                >
                  AI Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("byoa")}
                  className="hover:text-white cursor-pointer"
                >
                  BYOA System
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--lime)] font-bold mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("open")}
                  className="hover:text-white cursor-pointer"
                >
                  Open Source Policy
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Changelog & Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--lime)] font-bold mb-4">
              PRIVACY & LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security & Keys
                </a>
              </li>
              <li>
                <a href="mailto:contact@orbit.career" className="hover:text-white">
                  Contact Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Decorative Wordmark */}
        <div className="py-6 border-t border-b border-white/10 text-center select-none overflow-hidden">
          <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white/10 uppercase">
            orbit<span className="text-[var(--orange)]">.</span>
          </div>
        </div>

        {/* Copyright & Timestamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-mono text-white/50 gap-4">
          <div>Your career. Your intelligence. Your next move.</div>
          <div>© 2026 ORBIT Platform · All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
