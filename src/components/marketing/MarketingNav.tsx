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
    <header className="site-nav fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-[var(--black)]/85 border-b border-white/10 text-white transition-all">
      <Logo light size="md" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

      <nav
        className={`fixed md:static inset-0 top-20 md:top-auto bg-[var(--black)]/95 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:gap-8 p-8 md:p-0 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        }`}
      >
        <button
          onClick={() => scrollTo("philosophy")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          Philosophy
        </button>
        <button
          onClick={() => scrollTo("platform")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          Platform
        </button>
        <button
          onClick={() => scrollTo("intelligence")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          Intelligence
        </button>
        <button
          onClick={() => scrollTo("agents")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          AI Agents
        </button>
        <button
          onClick={() => scrollTo("byoa")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          BYOA
        </button>
        <button
          onClick={() => scrollTo("open")}
          className="text-white/80 hover:text-white font-body text-base md:text-sm tracking-wide transition-colors cursor-pointer"
        >
          Open Source
        </button>

        <div className="pt-4 md:pt-0 border-t md:border-t-0 border-white/10 w-full md:w-auto flex justify-center">
          <Button
            variant="primary"
            size="md"
            icon="arrow"
            onClick={() => {
              setMobileMenuOpen(false);
              onEnterApp();
            }}
          >
            Enter Workspace
          </Button>
        </div>
      </nav>

      <button
        type="button"
        className="md:hidden p-2 text-white/90 hover:text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <Icon name={mobileMenuOpen ? "close" : "menu"} size={26} />
      </button>
    </header>
  );
}

