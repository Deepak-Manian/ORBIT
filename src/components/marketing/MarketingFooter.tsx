import { OrbitScriptLogo } from "../common/OrbitScriptLogo";

interface MarketingFooterProps {
  onEnterApp: () => void;
}

export function MarketingFooter({ onEnterApp }: MarketingFooterProps) {
  return (
    <footer className="relative bg-[var(--color-orange)] text-[var(--color-dark)] pt-20 pb-12 px-6 md:px-12 border-t-2 border-[var(--color-dark)] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        {/* ---------------- 3 Structured Columns (Screenshot 2 & 3) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-16 border-b-2 border-[var(--color-dark)]">
          {/* Column 1: Open Opportunities */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-dark)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              career network
            </div>
            <div>
              <h4 className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight">
                experienced leader / engineer / designer
              </h4>
              <p className="mt-2 font-body text-sm text-[var(--color-dark)]/80">
                looking for your next high-signal career move?
              </p>
            </div>
            <div>
              <button
                onClick={onEnterApp}
                data-custom-cursor="click"
                className="inline-flex items-center gap-2 font-display font-black text-sm uppercase tracking-wider text-[var(--color-dark)] underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
              >
                <span>launch orbit workspace →</span>
              </button>
            </div>
          </div>

          {/* Column 2: Office / Hub Locations */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-dark)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              presence
            </div>
            <div>
              <p className="font-display font-black text-2xl md:text-3xl tracking-tight leading-snug">
                bengaluru & san francisco
              </p>
              <p className="font-body text-sm text-[var(--color-dark)]/80 mt-1">
                remote worldwide · open-source collective
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                data-custom-cursor="click"
                className="group relative inline-flex items-center gap-1 font-display font-bold text-sm text-[var(--color-dark)] cursor-pointer"
              >
                <span>Google Maps</span>
                {/* Hand-drawn sketch underline */}
                <svg
                  viewBox="0 0 100 8"
                  fill="none"
                  className="absolute -bottom-1 left-0 w-full h-2 text-[var(--color-dark)] pointer-events-none"
                >
                  <path
                    d="M 1 4 C 30 1, 70 1, 99 5 M 15 6 C 45 4, 75 4, 85 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-dark)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              contact
            </div>
            <div>
              <a
                href="mailto:hello@orbit.career"
                data-custom-cursor="click"
                className="font-display font-black text-2xl md:text-3xl tracking-tight block hover:text-white transition-colors"
              >
                hello@orbit.career
              </a>
              <p className="font-display font-bold text-lg md:text-xl text-[var(--color-dark)] mt-1">
                send us a message*
              </p>
              <p className="text-xs font-mono text-[var(--color-dark)]/70 mt-1 italic">
                *we’re millennials and gen-z: please do not call us.
              </p>
            </div>

            {/* Social Icons matching Screenshot 2/3 */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-custom-cursor="click"
                className="w-10 h-10 rounded-full border-2 border-[var(--color-dark)] bg-white grid place-items-center text-[var(--color-dark)] font-bold transition-transform hover:scale-125 hover:rotate-6 shadow-[2px_2px_0px_var(--color-dark)] cursor-pointer"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                data-custom-cursor="click"
                className="w-10 h-10 rounded-full border-2 border-[var(--color-dark)] bg-white grid place-items-center text-[var(--color-dark)] font-bold transition-transform hover:scale-125 hover:-rotate-6 shadow-[2px_2px_0px_var(--color-dark)] cursor-pointer"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                data-custom-cursor="click"
                className="w-10 h-10 rounded-full border-2 border-[var(--color-dark)] bg-white grid place-items-center text-[var(--color-dark)] font-bold transition-transform hover:scale-125 hover:rotate-6 shadow-[2px_2px_0px_var(--color-dark)] cursor-pointer"
                title="GitHub"
              >
                gh
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- Gigantic Script Wordmark with Overlapping Stickers (Screenshot 2 & 3) ---------------- */}
        <div data-inertia-init className="relative pt-12 pb-6 flex items-center justify-center overflow-visible">
          {/* Overlapping Interactive Inertia Stickers */}
          {/* 1. BAM! on left */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="3"
            className="absolute -top-2 left-2 sm:left-12 md:left-20 z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/bam.svg"
              alt="BAM"
              className="w-16 sm:w-24 md:w-32 h-auto drop-shadow-xl"
            />
          </div>

          {/* 2. Blue Smiley pinned on 'o' */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="2"
            className="absolute top-4 left-24 sm:left-48 md:left-64 z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/smiley.svg"
              alt="Smiley"
              className="w-12 sm:w-16 md:w-20 h-auto drop-shadow-xl"
            />
          </div>

          {/* 3. Hands Love / Heart pinned on 'r' */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="3"
            className="absolute top-12 left-44 sm:left-72 md:left-[42%] z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/hands-love.svg"
              alt="Love"
              className="w-14 sm:w-20 md:w-24 h-auto drop-shadow-xl"
            />
          </div>

          {/* 4. 100 pinned on 'b' */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="2"
            className="absolute -top-4 right-32 sm:right-64 md:right-[32%] z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/100.svg"
              alt="100"
              className="w-12 sm:w-16 md:w-20 h-auto drop-shadow-xl"
            />
          </div>

          {/* 5. Camera pinned on 'i' */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="3"
            className="absolute top-8 right-16 sm:right-36 md:right-48 z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/camera.svg"
              alt="Camera"
              className="w-14 sm:w-18 md:w-22 h-auto drop-shadow-xl"
            />
          </div>

          {/* 6. Fistbump pinned on right edge */}
          <div
            data-inertia-element
            data-custom-cursor="click"
            data-wiggle="4"
            className="absolute -bottom-2 right-4 sm:right-10 md:right-16 z-20 cursor-pointer"
          >
            <img
              data-inertia-child
              data-wiggle-target
              src="/stickers/fistbump.svg"
              alt="Fistbump"
              className="w-16 sm:w-22 md:w-26 h-auto drop-shadow-xl"
            />
          </div>

          {/* The Gigantic Handwritten Script Wordmark spanning full width */}
          <div className="w-full flex justify-center py-4 select-none">
            <OrbitScriptLogo
              width={1100}
              color="var(--color-dark)"
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>

        {/* Bottom Credits & Copyright matching Truus */}
        <div className="pt-8 border-t border-[var(--color-dark)]/20 flex flex-wrap items-center justify-between text-xs font-mono gap-4 text-[var(--color-dark)]/80">
          <div className="flex items-center gap-3">
            <span className="font-bold">ORBIT © 2026</span>
            <span>·</span>
            <span>Agentic Career Intelligence Platform</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-custom-cursor="home"
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              back to top ↑
            </button>
            <span>·</span>
            <span className="text-[var(--color-dark)]/60">BYOA · 100% Private</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
