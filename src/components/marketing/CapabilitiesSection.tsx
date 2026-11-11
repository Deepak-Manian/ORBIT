import { useState } from "react";

export function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "scout",
      subtitle: "job discovery",
      color: "bg-[#175C4A]",
      textColor: "text-white",
      borderColor: "border-[#0d362b]",
      sticker: "/stickers/100.svg",
      bullets: [
        "portal & board scraping",
        "ghost listing filtration",
        "salary transparency filter",
        "direct hiring-team signals",
        "daily curated briefings",
      ],
    },
    {
      title: "lens",
      subtitle: "skill intelligence",
      color: "bg-[#718CFF]",
      textColor: "text-[var(--black)]",
      borderColor: "border-[#4062e0]",
      sticker: "/stickers/good-vibes.svg",
      bullets: [
        "deep resume extraction",
        "github & case-study sync",
        "verifiable match scores",
        "targeted skill gap audits",
        "salary unlock benchmarks",
      ],
    },
    {
      title: "draft",
      subtitle: "tailored outreach",
      color: "bg-[#FF633D]",
      textColor: "text-white",
      borderColor: "border-[#d8401b]",
      sticker: "/stickers/lets-go.svg",
      bullets: [
        "human-toned cover notes",
        "referral intro requests",
        "case study pitch snippets",
        "zero robot buzzwords",
        "one-click edit & copy",
      ],
    },
    {
      title: "coach",
      subtitle: "interview mastery",
      color: "bg-[#E63946]",
      textColor: "text-white",
      borderColor: "border-[#b8222e]",
      sticker: "/stickers/fistbump.svg",
      bullets: [
        "company-specific rubrics",
        "star framework simulation",
        "real-time craft critiques",
        "salary negotiation scripts",
        "stress question practice",
      ],
    },
    {
      title: "track",
      subtitle: "application autopilot",
      color: "bg-[#DDA7F5]",
      textColor: "text-[var(--black)]",
      borderColor: "border-[#b876d6]",
      sticker: "/stickers/cute.svg",
      bullets: [
        "5-phase visual pipeline",
        "calendar sync & alarms",
        "recruiter momentum radar",
        "offer comparison matrix",
        "private offline archive",
      ],
    },
  ];

  const clientLogos = [
    { name: "Netflix", src: "/clients/netflix_logo.svg" },
    { name: "Hema", src: "/clients/hema_logo.svg" },
    { name: "KFC", src: "/clients/KFC_Logo.svg" },
    { name: "Swapfiets", src: "/clients/swapfiets_logo.svg" },
    { name: "Bol", src: "/clients/bol_logo.svg" },
    { name: "Oxxio", src: "/clients/oxxio_logo.svg" },
    { name: "DE", src: "/clients/DE_logo.svg" },
    { name: "Jumbo", src: "/clients/Jumbo_logo.svg" },
    { name: "ANWB", src: "/clients/anwb_logo.svg" },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-28 px-6 md:px-12 bg-[var(--cream)] text-[var(--black)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span>03</span> / capabilities
          </div>
          <div className="text-xs font-mono text-[var(--muted)]">
            5 MODULES · 100% PRIVATE
          </div>
        </div>

        {/* ---------------- Headline matching Screenshot 3: "call us if you need:" ---------------- */}
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight text-[var(--black)]">
            call us if you{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              need:
            </span>
          </h2>
        </div>

        {/* ---------------- 5 Vertical Accordion Fan-out Cards (Screenshot 3) ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 my-12 items-stretch">
          {cards.map((card, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-3xl p-6 flex flex-col justify-between border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] transition-all duration-300 cursor-pointer ${
                  card.color
                } ${card.textColor} ${
                  isHovered
                    ? "scale-105 -translate-y-2 shadow-[7px_7px_0px_var(--black)] z-20"
                    : ""
                }`}
                data-cursor-text={card.title.toUpperCase()}
              >
                {/* Sticker pinned top-right */}
                <div className="absolute -top-3 -right-2 select-none">
                  <img
                    src={card.sticker}
                    alt={card.title}
                    className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider opacity-75 mb-1">
                    {card.subtitle}
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-6">
                    {card.title}
                  </h3>

                  <ul className="space-y-3 font-body text-xs md:text-sm">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 text-[10px] opacity-60">✦</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-current/20 flex items-center justify-between text-xs font-mono">
                  <span>0{idx + 1}</span>
                  <span className="font-bold underline">explore →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- "proud to have worked with" logo grid (Screenshot 3) ---------------- */}
        <div className="mt-28 pt-16 border-t border-[var(--line)]">
          <div className="relative mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="relative">
              {/* Organic blue blob behind text */}
              <svg
                viewBox="0 0 120 100"
                fill="none"
                className="absolute -top-6 -left-8 w-28 h-auto text-[var(--blue)] opacity-40 pointer-events-none"
              >
                <path
                  d="M 40 10 C 80 5, 110 30, 105 60 C 100 90, 60 95, 30 85 C 5 75, 10 35, 40 10 Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-[var(--black)]">
                proud to have worked{" "}
                <span className="font-serif italic font-normal text-[var(--orange)]">
                  with
                </span>
              </h3>
            </div>
            <div className="text-xs font-mono text-[var(--muted)]">
              COMPANIES CONNECTED THROUGH OUR JOB INGESTION ENGINE
            </div>
          </div>

          {/* Grid of brand logos */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 items-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-2xl bg-white border border-[var(--line)] hover:border-[var(--black)] hover:shadow-[3px_3px_0px_var(--black)] transition-all duration-200 flex items-center justify-center h-20 group cursor-pointer"
                data-cursor-text={client.name.toUpperCase()}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
