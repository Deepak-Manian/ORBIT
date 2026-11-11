import { useState } from "react";
import { Logo } from "../common/Logo";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";

interface MarketingNavProps {
  onEnterApp: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export function MarketingNav({ onEnterApp }: MarketingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-[var(--black)]/80 border-b border-white/10 text-white transition-all">
      {/* Left Links */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => scrollTo("showcase")}
          className="text-white/85 hover:text-white font-display font-bold text-sm tracking-wide transition-colors cursor-pointer"
        >
          work
        </button>
        <button
          onClick={() => scrollTo("agents")}
          className="hidden sm:inline-block text-white/70 hover:text-white font-body text-sm tracking-wide transition-colors cursor-pointer"
        >
          agents
        </button>
        <button
          onClick={() => scrollTo("capabilities")}
          className="hidden md:inline-block text-white/70 hover:text-white font-body text-sm tracking-wide transition-colors cursor-pointer"
        >
          capabilities
        </button>
      </div>

      {/* Center Script Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo
          variant="script"
          light
          size="md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[var(--lime)]">
          <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse" />
          <span>8 agents ready</span>
        </div>

        <Button
          variant="primary"
          size="sm"
          icon="arrow"
          onClick={onEnterApp}
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
        <div className="md:hidden fixed inset-0 top-20 bg-[var(--black)]/95 flex flex-col items-center justify-center gap-6 p-8 z-50">
          <button
            onClick={() => scrollTo("showcase")}
            className="text-white text-xl font-display font-bold"
          >
            work
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="text-white/80 text-lg font-body"
          >
            philosophy
          </button>
          <button
            onClick={() => scrollTo("capabilities")}
            className="text-white/80 text-lg font-body"
          >
            capabilities
          </button>
          <button
            onClick={() => scrollTo("agents")}
            className="text-white/80 text-lg font-body"
          >
            agents
          </button>
          <button
            onClick={() => scrollTo("byoa")}
            className="text-white/80 text-lg font-body"
          >
            byoa
          </button>
          <Button variant="primary" size="lg" icon="arrow" onClick={onEnterApp}>
            enter workspace
          </Button>
        </div>
      )}
    </header>
  );
}
