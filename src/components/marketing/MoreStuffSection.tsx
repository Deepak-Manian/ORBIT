import { useState } from "react";

export function MoreStuffSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    {
      id: "ghost-job-incinerator",
      title: "ghost-job incinerator",
      tag: "86% OF LISTINGS ARE FAKE",
      tagTheme: "Orange",
      tilt: "-rotate-3",
      sticker: "/stickers/bam.svg",
      cardBorder: "border-2 border-red-500/60 shadow-[6px_6px_0px_#dc2626]",
      bg: "bg-zinc-950 text-white",
      body: (
        <div className="p-4 bg-black/60 rounded-xl font-mono text-xs space-y-2.5 border border-red-500/20">
          <div className="flex items-center justify-between text-red-400 font-bold">
            <span>[GHOST DETECTED]</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20">REPOST #8</span>
          </div>
          <div className="text-zinc-400 space-y-1 text-[11px] leading-relaxed">
            <div><span className="text-zinc-500">Target:</span> Staff Backend Engineer</div>
            <div><span className="text-zinc-500">Listing Age:</span> 214 days old</div>
            <div><span className="text-zinc-500">LinkedIn Applicants:</span> 4,812 desperate souls</div>
            <div><span className="text-zinc-500">Reality:</span> Role filled in Q1. Kept online to look like they're growing.</div>
          </div>
          <div className="pt-2 border-t border-red-500/30 text-amber-300 font-bold text-[11px] flex items-center justify-between">
            <span>ORBIT ACTION:</span>
            <span className="text-red-400">INCINERATED 🔥</span>
          </div>
        </div>
      ),
      caption: "Stop sending 500 cold easy-applies to zombie roles.",
    },
    {
      id: "brutal-resume-roaster",
      title: "brutal resume roaster",
      tag: "0% CORPORATE CRINGE",
      tagTheme: "Pink",
      tilt: "rotate-2 md:-translate-y-4",
      sticker: "/stickers/cute.svg",
      cardBorder: "border-2 border-[var(--color-dark)] shadow-[6px_6px_0px_var(--color-dark)]",
      bg: "bg-[#F5693C] text-[var(--color-dark)]",
      body: (
        <div className="p-4 bg-white/95 rounded-xl font-mono text-xs space-y-3 border border-black/20 text-zinc-900 shadow-inner">
          <div className="space-y-1">
            <div className="line-through text-red-600 text-[11px] font-medium">
              "Synergy-driven evangelist leveraging cross-functional paradigms..."
            </div>
            <div className="text-[11px] text-zinc-950 font-bold pl-2 border-l-2 border-black">
              ↳ LENS: "Bro, what did you actually build? Did the database crash or not?"
            </div>
          </div>
          <div className="space-y-1 pt-2 border-t border-zinc-200">
            <div className="line-through text-red-600 text-[11px] font-medium">
              "Passionate self-starter with an insatiable hunger to learn..."
            </div>
            <div className="text-[11px] text-zinc-950 font-bold pl-2 border-l-2 border-black">
              ↳ LENS: "Recruiters spend 6 seconds on your PDF. Make them choke on their matcha."
            </div>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 p-1.5 rounded text-center">
            Verdict: Rewritten with verifiable telemetry metrics.
          </div>
        </div>
      ),
      caption: "Proof > Confidence. We turn buzzwords into audited PR diffs.",
    },
    {
      id: "ctc-poker-simulator",
      title: "ctc poker simulator",
      tag: "NEVER SAY FIRST NUMBER",
      tagTheme: "Lime",
      tilt: "-rotate-2 md:translate-y-2",
      sticker: "/stickers/fistbump.svg",
      cardBorder: "border-2 border-[var(--color-dark)] shadow-[6px_6px_0px_var(--color-dark)]",
      bg: "bg-[#4B69F0] text-white",
      body: (
        <div className="p-4 bg-zinc-950/90 rounded-xl font-mono text-xs space-y-2.5 border border-white/20 text-white shadow-inner">
          <div className="bg-white/10 p-2 rounded text-[11px]">
            <span className="text-[var(--color-orange)] font-bold">Recruiter:</span> "So what is your current in-hand CTC right now?"
          </div>
          <div className="bg-emerald-950/80 border border-emerald-500/40 p-2 rounded text-[11px] text-emerald-200">
            <span className="text-emerald-400 font-bold">COACH:</span> "Our target is calibrated to market median (₹54L–₹68L). Let's align on engineering scope first."
          </div>
          <div className="bg-white/10 p-2 rounded text-[11px] text-zinc-300">
            <span className="text-[var(--color-orange)] font-bold">Recruiter:</span> "...alright yeah, we can budget ₹62L base + ESOPs."
          </div>
          <div className="text-[11px] font-bold text-center text-[#E6FAB9] bg-white/10 p-1.5 rounded tracking-wider">
            RESULT: +₹16L SALARY UNLOCKED 🎯
          </div>
        </div>
      ),
      caption: "Don't let a corporate recruiter lowball you into 2021 pay bands.",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[var(--color-dark)] text-white overflow-hidden select-none">
      <div className="max-w-5xl mx-auto">
        {/* Organic Blue Flower Blob behind cards */}
        <svg
          viewBox="0 0 160 160"
          fill="none"
          className="absolute top-1/2 left-2 md:left-12 -translate-y-1/2 w-48 md:w-72 h-auto text-[var(--color-blue)] opacity-50 pointer-events-none"
        >
          <path
            d="M 80 15 C 115 5, 145 35, 140 75 C 155 110, 120 145, 80 145 C 45 155, 15 125, 20 85 C 10 45, 45 20, 80 15 Z"
            fill="currentColor"
          />
        </svg>

        {/* ---------------- Headline: "more stuff to click on" ---------------- */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[var(--color-lightgreen)] font-mono text-xs font-bold tracking-wider uppercase mb-3">
            Interactive Agent War Room
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white">
            more{" "}
            <span className="font-serif italic font-normal text-[var(--color-orange)]">
              stuff
            </span>{" "}
            to click on
          </h2>
        </div>

        {/* ---------------- 3 Unhinged Career Cards ---------------- */}
        <div className="relative z-10 flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-6 md:gap-8 my-10">
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.id}
                data-inertia-element
                data-custom-cursor="click"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative w-full sm:w-80 p-5 rounded-3xl ${item.bg} ${item.cardBorder} ${item.tilt} transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered ? "scale-105 rotate-0 z-30" : ""
                }`}
              >
                {/* Sticker badge */}
                <div data-inertia-child className="absolute -top-4 -right-3 z-20 select-none">
                  <img
                    src={item.sticker}
                    alt="Sticker"
                    className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg transition-transform duration-300 hover:rotate-12"
                  />
                </div>

                <div>
                  {/* Asymmetric Pill Tag */}
                  <div className="mb-4">
                    <span className="tag" data-theme={item.tagTheme}>
                      <span className="tag__h4 text-[11px] font-mono font-bold tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl tracking-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Body interactive UI preview */}
                  <div className="my-2">{item.body}</div>
                </div>

                <div className="mt-5 pt-3 border-t border-current/20 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-80 italic">{item.caption}</span>
                  <span className="font-bold underline">test it →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
