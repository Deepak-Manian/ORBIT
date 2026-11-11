import { OrbitScriptLogo } from "../common/OrbitScriptLogo";

interface MarketingFooterProps {
  onEnterApp: () => void;
}

export function MarketingFooter({ onEnterApp }: MarketingFooterProps) {
  return (
    <footer className="relative bg-[var(--orange)] text-[var(--black)] pt-20 pb-12 px-6 md:px-12 border-t-2 border-[var(--black)] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        {/* ---------------- 3 Structured Columns (Screenshot 2 & 3) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-16 border-b-2 border-[var(--black)]">
          {/* Column 1: Open Opportunities */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--black)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              career network
            </div>
            <div>
              <h4 className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight">
                experienced leader / engineer / designer
              </h4>
              <p className="mt-2 font-body text-sm text-[var(--black)]/80">
                looking for your next high-signal career move?
              </p>
            </div>
            <div>
              <button
                onClick={onEnterApp}
                className="inline-flex items-center gap-2 font-display font-black text-sm uppercase tracking-wider text-[var(--black)] underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
              >
                <span>launch orbit workspace →</span>
              </button>
            </div>
          </div>

          {/* Column 2: Office / Hub Locations */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--black)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              presence
            </div>
            <div>
              <p className="font-display font-black text-2xl md:text-3xl tracking-tight leading-snug">
                bengaluru & san francisco
              </p>
              <p className="font-body text-sm text-[var(--black)]/80 mt-1">
                remote worldwide · open-source collective
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-1 font-display font-bold text-sm text-[var(--black)] cursor-pointer"
              >
                <span>Google Maps</span>
                {/* Hand-drawn sketch underline */}
                <svg
                  viewBox="0 0 100 8"
                  fill="none"
                  className="absolute -bottom-1 left-0 w-full h-2 text-[var(--black)] pointer-events-none"
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
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--black)] text-white text-xs font-mono uppercase tracking-wider font-bold">
              contact
            </div>
            <div>
              <a
                href="mailto:hello@orbit.career"
                className="font-display font-black text-2xl md:text-3xl tracking-tight block hover:text-white transition-colors"
              >
                hello@orbit.career
              </a>
              <p className="font-display font-bold text-lg md:text-xl text-[var(--black)] mt-1">
                send us a message*
              </p>
              <p className="text-xs font-mono text-[var(--black)]/70 mt-1 italic">
                *we’re millennials and gen-z: please do not call us.
              </p>
            </div>

            {/* Social Icons matching Screenshot 2/3 */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[var(--black)] bg-white grid place-items-center text-[var(--black)] font-bold transition-transform hover:scale-125 hover:rotate-6 shadow-[2px_2px_0px_var(--black)] cursor-pointer"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[var(--black)] bg-white grid place-items-center text-[var(--black)] font-bold transition-transform hover:scale-125 hover:-rotate-6 shadow-[2px_2px_0px_var(--black)] cursor-pointer"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[var(--black)] bg-white grid place-items-center text-[var(--black)] font-bold transition-transform hover:scale-125 hover:rotate-6 shadow-[2px_2px_0px_var(--black)] cursor-pointer"
                title="GitHub"
              >
                gh
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- Gigantic Script Wordmark with Overlapping Stickers (Screenshot 2 & 3) ---------------- */}
        <div className="relative pt-12 pb-6 flex items-center justify-center overflow-visible">
          {/* Overlapping Interactive Stickers */}
          {/* 1. BAM! on left */}
          <div
            className="absolute -top-2 left-2 sm:left-12 md:left-20 z-20 transition-transform duration-200 hover:scale-125 hover:-rotate-12 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/bam.svg"
              alt="BAM"
              className="w-16 sm:w-24 md:w-32 h-auto drop-shadow-xl"
            />
          </div>

          {/* 2. Blue Smiley pinned on 'o' */}
          <div
            className="absolute top-4 left-24 sm:left-48 md:left-64 z-20 transition-transform duration-200 hover:scale-125 hover:rotate-12 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/smiley.svg"
              alt="Smiley"
              className="w-12 sm:w-16 md:w-20 h-auto drop-shadow-xl"
            />
          </div>

          {/* 3. Hands Love / Heart pinned on 'r' */}
          <div
            className="absolute top-12 left-44 sm:left-72 md:left-[42%] z-20 transition-transform duration-200 hover:scale-125 hover:-rotate-6 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/hands-love.svg"
              alt="Love"
              className="w-14 sm:w-20 md:w-24 h-auto drop-shadow-xl"
            />
          </div>

          {/* 4. 100 pinned on 'b' */}
          <div
            className="absolute -top-4 right-32 sm:right-64 md:right-[32%] z-20 transition-transform duration-200 hover:scale-125 hover:rotate-12 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/100.svg"
              alt="100"
              className="w-12 sm:w-16 md:w-20 h-auto drop-shadow-xl"
            />
          </div>

          {/* 5. Cute sticker pinned on 'i' */}
          <div
            className="absolute bottom-4 right-16 sm:right-36 md:right-[20%] z-20 transition-transform duration-200 hover:scale-125 hover:-rotate-12 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/cute.svg"
              alt="Cute"
              className="w-12 sm:w-16 md:w-20 h-auto drop-shadow-xl"
            />
          </div>

          {/* 6. Fistbump on right */}
          <div
            className="absolute -bottom-2 right-2 sm:right-12 md:right-16 z-20 transition-transform duration-200 hover:scale-125 hover:rotate-12 cursor-pointer"
            data-hover
          >
            <img
              src="/stickers/fistbump.svg"
              alt="Fistbump"
              className="w-14 sm:w-20 md:w-24 h-auto drop-shadow-xl"
            />
          </div>

          {/* The Gigantic Script Wordmark */}
          <div className="w-full max-w-5xl px-2">
            <OrbitScriptLogo
              width="100%"
              color="#080808"
              className="w-full h-auto drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Footer Sub-row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs font-mono font-bold text-[var(--black)]/70 gap-2 border-t border-[var(--black)]/20">
          <div>Your career. Your intelligence. Your next move.</div>
          <div>© 2026 ORBIT Collective · All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
