import { useState } from "react";
import { Button } from "../common/Button";
import { OrbitScriptLogo } from "../common/OrbitScriptLogo";

interface HeroSectionProps {
  onExplore: () => void;
  onMeetAgents: () => void;
}

export function HeroSection({ onExplore, onMeetAgents }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-[var(--black)] text-white overflow-hidden pt-28 md:pt-36">
      {/* --------------------- PART 1: EXACT MATCH TO SCREENSHOT 1 --------------------- */}
      <div className="relative min-h-[82vh] md:min-h-[88vh] flex flex-col items-center justify-between px-6 md:px-12 pb-12">
        {/* Ambient subtle noise/texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#718CFF_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Top-Left: Organic Orange Blob + White Looping Spiral Scribble */}
        <div className="absolute top-12 left-4 md:top-16 md:left-24 z-10 pointer-events-none select-none">
          <div className="relative w-28 h-20 md:w-44 md:h-28">
            {/* Orange organic blob */}
            <svg
              viewBox="0 0 180 120"
              fill="none"
              className="w-full h-full text-[var(--orange)]"
            >
              <path
                d="M 25 65 C 20 25, 65 15, 115 22 C 165 30, 175 75, 140 100 C 105 125, 40 115, 25 65 Z"
                fill="currentColor"
              />
            </svg>
            {/* White looping spiral thread doodle */}
            <svg
              viewBox="0 0 160 120"
              fill="none"
              className="absolute -top-4 -left-4 w-36 md:w-52 h-auto text-white overflow-visible"
            >
              <path
                d="M -10 60 C 20 10, 80 5, 85 45 C 90 85, 35 105, 30 65 C 25 25, 75 10, 120 20 C 150 28, 175 60, 195 90"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Blue Circular Smiley Sticker + Downward Curved Arrow */}
        <div className="absolute top-8 left-36 md:top-14 md:left-80 z-20 select-none animate-[wiggle_4s_ease-in-out_infinite]">
          <div className="relative group cursor-pointer" data-hover>
            <img
              src="/stickers/smiley.svg"
              alt="Smiley"
              className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110 hover:-rotate-12"
            />
            {/* Downward pointing curved arrow */}
            <svg
              viewBox="0 0 60 70"
              fill="none"
              className="absolute -bottom-10 right-0 w-8 md:w-11 text-white overflow-visible pointer-events-none"
            >
              <path
                d="M 10 5 C 35 10, 48 30, 42 55 M 42 55 L 30 45 M 42 55 L 52 45"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Top-Right: Stylized Cartoon Flame Doodle + White Zigzag Spark */}
        <div className="absolute top-12 right-6 md:top-14 md:right-32 z-10 pointer-events-none select-none">
          <div className="relative w-20 h-24 md:w-28 md:h-36">
            {/* Cartoon Flame SVG */}
            <svg
              viewBox="0 0 100 120"
              fill="none"
              className="w-full h-full text-[var(--orange)] drop-shadow-[0_4px_20px_rgba(255,99,61,0.4)]"
            >
              <path
                d="M 50 5 C 65 30, 95 55, 90 85 C 85 110, 60 118, 50 118 C 30 118, 10 105, 10 80 C 10 55, 35 35, 50 5 Z"
                fill="currentColor"
                stroke="#FF8A65"
                strokeWidth="3"
              />
              <path
                d="M 50 55 C 58 70, 70 80, 65 95 C 60 105, 48 108, 42 105 C 32 100, 32 85, 40 75 C 45 68, 48 60, 50 55 Z"
                fill="#FFF3E0"
              />
            </svg>
            {/* White zigzag scribble behind flame */}
            <svg
              viewBox="0 0 40 50"
              fill="none"
              className="absolute -left-6 top-8 w-6 md:w-8 text-white overflow-visible"
            >
              <path
                d="M 25 5 L 8 18 L 24 30 L 5 45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Bottom-Left: Jagged "BAM!" Explosion Sticker + Blue 8-Point Star Doodle */}
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-24 z-20 select-none">
          <div className="relative flex items-center gap-2">
            <div
              className="group cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
              data-hover
            >
              <img
                src="/stickers/bam.svg"
                alt="BAM!"
                className="w-20 md:w-32 h-auto drop-shadow-[0_8px_20px_rgba(255,99,61,0.4)]"
              />
            </div>
            {/* Electric Blue 8-Point Star Doodle */}
            <svg
              viewBox="0 0 80 80"
              fill="none"
              className="w-12 h-12 md:w-20 md:h-20 text-[var(--blue)] animate-[spin_20s_linear_infinite]"
            >
              <path
                d="M 40 0 L 44 32 L 76 16 L 48 40 L 80 40 L 48 44 L 76 68 L 44 48 L 40 80 L 36 48 L 4 68 L 32 44 L 0 40 L 32 40 L 4 16 L 36 32 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Bottom-Right: Electric Blue Fluid Wavy Blob */}
        <div className="absolute bottom-10 right-4 md:bottom-14 md:right-28 z-10 pointer-events-none select-none">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-28 h-28 md:w-48 md:h-48 text-[var(--blue)] drop-shadow-[0_8px_24px_rgba(113,140,255,0.3)]"
          >
            <path
              d="M 60 15 C 95 10, 135 35, 145 70 C 155 110, 120 145, 80 150 C 45 155, 15 130, 20 90 C 25 50, 40 18, 60 15 Z"
              fill="currentColor"
            />
            {/* Internal cutouts creating finger/wave grooves */}
            <path
              d="M 45 100 C 60 70, 95 65, 120 85"
              stroke="var(--black)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 55 125 C 75 105, 105 105, 125 120"
              stroke="var(--black)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Spacer top */}
        <div className="w-full" />

        {/* ----------------- CENTER HEADLINE: "hello we are orbit" ----------------- */}
        <div className="relative z-20 my-auto text-center py-12 md:py-16">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-6 gap-y-3">
            <span className="leading-none">hello</span>
            <span className="leading-none">we</span>
            <span className="font-serif italic font-normal text-white leading-none">
              are
            </span>
            {/* The wire-oval encased "orbit" */}
            <span className="relative inline-flex items-center justify-center px-6 sm:px-9 md:px-12 py-1 md:py-2 rounded-full leading-none group cursor-pointer">
              <span className="relative z-10 font-display font-black tracking-tight text-white">
                orbit
              </span>
              {/* Hand-drawn double oval wire loop SVG */}
              <svg
                viewBox="0 0 260 90"
                fill="none"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                {/* Primary oval wire */}
                <ellipse
                  cx="130"
                  cy="45"
                  rx="125"
                  ry="40"
                  stroke="white"
                  strokeWidth="2.8"
                  className="transition-all duration-300 group-hover:stroke-[var(--orange)]"
                />
                {/* Secondary sketch loop stroke */}
                <path
                  d="M 12 50 C 15 15, 245 12, 248 48 C 250 78, 18 82, 16 52"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeDasharray="4 3"
                  opacity="0.75"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle statement */}
          <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/70 font-body leading-relaxed px-4">
            your career deserves more than a job board.
            <br />
            an agentic career operating system coordinating 8 specialized AI partners.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon="arrow"
              onClick={onExplore}
              className="shadow-[4px_4px_0px_white]"
            >
              explore your career
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon="bot"
              onClick={onMeetAgents}
              className="border-2 border-white/60 text-white hover:bg-white/10"
            >
              meet ORBIT
            </Button>
          </div>
        </div>

        {/* Bottom-Center Signature: Small White Script Wordmark "orbit." */}
        <div className="relative z-20 flex flex-col items-center select-none pt-4">
          <OrbitScriptLogo width={85} color="#FFFFFF" className="opacity-90" />
        </div>
      </div>

      {/* --------------------- PART 2: FULL-WIDTH SHOWCASE BANNER (SCREENSHOT 3) --------------------- */}
      <div id="showcase" className="relative w-full overflow-hidden border-t-2 border-[var(--black)]">
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] group">
          {/* Background photograph from showcase */}
          <img
            src="/showcase/banner.avif"
            alt="Career Intelligence Platform Team"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark gradient overlay for editorial readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-transparent to-[var(--black)]/40 pointer-events-none" />

          {/* Top-left sticker badge on banner */}
          <div className="absolute top-6 left-6 z-20">
            <div className="px-3 py-1 rounded-full bg-[var(--black)]/70 backdrop-blur-md border border-white/20 text-xs font-mono text-[var(--lime)] uppercase tracking-wider">
              ✦ mainstream careers
            </div>
          </div>

          {/* Bottom Headline: "we make career moves for the new mainstream" */}
          <div className="absolute bottom-8 left-6 md:bottom-14 md:left-14 z-20 max-w-4xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              we make{" "}
              <span className="font-serif italic font-normal text-white underline decoration-wavy decoration-[var(--orange)] underline-offset-8">
                career moves
              </span>
              <br />
              for the new mainstream.
            </h2>
          </div>

          {/* Bottom Right Audio / Interactive Pill */}
          <div className="absolute bottom-8 right-6 md:bottom-14 md:right-14 z-20">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--black)]/80 hover:bg-[var(--black)] border border-white/20 text-white text-xs font-mono uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-105"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? "bg-[var(--orange)] animate-ping" : "bg-emerald-400"
                }`}
              />
              <span>{isPlaying ? "playing audio" : "listen briefing"}</span>
              <span className="text-white/50">· 0:38</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
