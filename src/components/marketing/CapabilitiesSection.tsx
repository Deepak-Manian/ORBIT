import { useState } from "react";

export function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "scout",
      subtitle: "job discovery",
      color: "bg-[#2D7864]",
      textColor: "text-white",
      borderColor: "border-[#1b4e41]",
      sticker: "/stickers/camera.svg",
      bullets: [
        "portal & board scraping",
        "ghost listing incinerator",
        "salary transparency filter",
        "direct hiring-team signals",
        "daily curated briefings",
      ],
    },
    {
      title: "lens",
      subtitle: "skill intelligence",
      color: "bg-[#82A0FF]",
      textColor: "text-[var(--color-dark)]",
      borderColor: "border-[#5277e8]",
      sticker: "/stickers/cute.svg",
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
      color: "bg-[#F5693C]",
      textColor: "text-white",
      borderColor: "border-[#d8401b]",
      sticker: "/stickers/lets-go.svg",
      bullets: [
        "human-toned cover notes",
        "referral intro requests",
        "case study pitch snippets",
        "zero corporate buzzwords",
        "one-click edit & copy",
      ],
    },
    {
      title: "coach",
      subtitle: "interview mastery",
      color: "bg-[#A0325A]",
      textColor: "text-white",
      borderColor: "border-[#7b1f3f]",
      sticker: "/stickers/fistbump.svg",
      bullets: [
        "company-specific rubrics",
        "star framework simulation",
        "real-time craft critiques",
        "ctc poker & salary defense",
        "stress question practice",
      ],
    },
    {
      title: "track",
      subtitle: "application autopilot",
      color: "bg-[#F0BEFA]",
      textColor: "text-[var(--color-dark)]",
      borderColor: "border-[#d89ae8]",
      sticker: "/stickers/100.svg",
      bullets: [
        "5-phase visual pipeline",
        "calendar sync & alarms",
        "recruiter momentum radar",
        "offer comparison matrix",
        "private offline archive",
      ],
    },
  ];

  // High-signal tech teams whose ATS feeds ORBIT monitors
  const techEcosystem = [
    { name: "Stripe", role: "Payments Infra", bg: "bg-[#4B69F0]", text: "text-white" },
    { name: "Linear", role: "Product Systems", bg: "bg-zinc-900", text: "text-white" },
    { name: "CRED", role: "Craft & Design", bg: "bg-[#1C1C1E]", text: "text-[#E6FAB9]" },
    { name: "Razorpay", role: "Fintech Core", bg: "bg-[#0C2340]", text: "text-[#82A0FF]" },
    { name: "Google", role: "Systems & AI", bg: "bg-[#82A0FF]", text: "text-zinc-950" },
    { name: "Atlassian", role: "Work Graph", bg: "bg-[#0052CC]", text: "text-white" },
    { name: "Swiggy", role: "Consumer Tech", bg: "bg-[#F5693C]", text: "text-white" },
    { name: "Zomato", role: "Hyperlocal Scale", bg: "bg-[#A0325A]", text: "text-white" },
    { name: "Zerodha", role: "Frugal Tech", bg: "bg-[#2D7864]", text: "text-white" },
  ];

  // Authentic client partner logos from Truus design system
  const partnerLogos = [
    { name: "Netflix", src: "/clients/686bc2c7844be9421f0335c7_netflix_logo.svg" },
    { name: "Jumbo", src: "/clients/69afd2b481ba1ce6a9b7e4d4_Jumbo_logo.svg" },
    { name: "Bol", src: "/clients/69afd1136c83261079802b27_bol_logo.svg" },
    { name: "KFC", src: "/clients/686bc2b720d4c815b09435c2_KFC_Logo.svg" },
    { name: "HEMA", src: "/clients/686bc2d117d329bcecd8377b_hema_logo.svg" },
    { name: "Swapfiets", src: "/clients/686bc2d7cace3b14a9d8aa44_swapfiets_logo.svg" },
    { name: "ANWB", src: "/clients/686bc2a8f4b310a3d6a5ce7d_anwb_logo.svg" },
    { name: "Douwe Egberts", src: "/clients/69afd1bf9b4c43deca731b40_DE_logo.svg" },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-28 px-6 md:px-12 bg-[var(--color-offwhite)] text-[var(--color-dark)] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-dark)]/5 border border-[var(--color-dark)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span>03</span> / capabilities
          </div>
          <div className="text-xs font-mono text-[var(--muted)]">
            5 MODULES · 100% PRIVATE
          </div>
        </div>

        {/* ---------------- Headline matching Truus services: "call us if you need:" ---------------- */}
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight text-[var(--color-dark)]">
            call us if you{" "}
            <span className="font-serif italic font-normal text-[var(--color-orange)]">
              need:
            </span>
          </h2>
          {/* Double wavy underline SVG from Truus services */}
          <svg
            viewBox="0 0 160 18"
            fill="none"
            className="w-44 text-[var(--color-dark)] mt-2"
          >
            <path
              d="M 2 12 C 55 5, 105 2, 158 2 M 30 16 C 65 12, 100 11, 135 11"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ---------------- 5 Vertical Accordion Fan-out Cards ---------------- */}
        <div className="services__row-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 my-12 items-stretch">
          {cards.map((card, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div
                key={card.title}
                data-inertia-element
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`services-card__wrap relative rounded-3xl p-6 flex flex-col justify-between border-2 border-[var(--color-dark)] shadow-[5px_5px_0px_var(--color-dark)] transition-all duration-300 cursor-pointer ${
                  card.color
                } ${card.textColor} ${
                  isHovered
                    ? "scale-105 -translate-y-2 shadow-[8px_8px_0px_var(--color-dark)] z-20"
                    : ""
                }`}
                data-custom-cursor={card.title.toUpperCase()}
              >
                {/* Sticker pinned top-right with physical inertia */}
                <div data-inertia-child className="absolute -top-3 -right-2 select-none">
                  <img
                    src={card.sticker}
                    alt={card.title}
                    className="w-11 h-11 md:w-14 md:h-14 drop-shadow-md transition-transform duration-300 hover:rotate-12"
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

        {/* ---------------- Authentic Ecosystem Block: "roles indexed from teams you actually want" ---------------- */}
        <div className="mt-28 pt-16 border-t border-[var(--line)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline with organic blue blob & spiral thread doodle */}
            <div className="md:col-span-5 relative">
              {/* Organic blue fluid blob behind headline */}
              <svg
                viewBox="0 0 160 140"
                fill="none"
                className="absolute -top-10 -left-10 w-44 h-auto text-[var(--color-blue)] opacity-50 pointer-events-none"
              >
                <path
                  d="M 50 15 C 100 8, 145 35, 140 80 C 135 125, 80 135, 40 120 C 10 105, 10 45, 50 15 Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-orange)] text-white font-mono text-[11px] font-bold tracking-wider uppercase mb-3">
                  Direct ATS Ingestion
                </span>
                <h3 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[var(--color-dark)]">
                  roles indexed
                  <br />
                  from teams
                  <br />
                  <span className="font-serif italic font-normal text-[var(--color-orange)]">
                    you actually want:
                  </span>
                </h3>
              </div>

              {/* Looping thread spiral doodle SVG */}
              <svg
                viewBox="0 0 140 70"
                fill="none"
                className="w-32 text-[var(--color-dark)] mt-6 pointer-events-none"
              >
                <path
                  d="M 5 45 C 30 10, 75 8, 85 35 C 95 62, 50 65, 45 42 C 40 15, 90 12, 135 38"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <p className="font-body text-sm text-[var(--muted)] mt-4 max-w-sm leading-relaxed">
                We intercept live ATS endpoints (Greenhouse, Lever, Ashby) so you bypass the 10,000-applicant
                LinkedIn queue and reach hiring leads before the listing gets flooded.
              </p>
            </div>

            {/* Right Column: 3x3 Colorful Brand Tile Block (Truus aesthetic, real tech teams) */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-3 gap-3.5 max-w-md mx-auto md:ml-auto">
                {techEcosystem.map((tile) => (
                  <div
                    key={tile.name}
                    data-inertia-element
                    data-wiggle="2"
                    data-custom-cursor="click"
                    className={`h-24 sm:h-28 rounded-2xl ${tile.bg} ${tile.text} border-2 border-[var(--color-dark)] shadow-[3px_3px_0px_var(--color-dark)] flex flex-col items-center justify-center p-3 text-center transition-all duration-200 hover:scale-105 hover:-rotate-2 cursor-pointer group`}
                  >
                    <div
                      data-wiggle-target
                      data-inertia-child
                      className="font-display font-black text-lg sm:text-xl tracking-tight leading-none group-hover:scale-110 transition-transform duration-200"
                    >
                      {tile.name}
                    </div>
                    <div className="font-mono text-[10px] sm:text-[11px] opacity-75 mt-1 tracking-wider uppercase">
                      {tile.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Partner Ecosystem Strip (Truus double-marquee) ---------------- */}
        <div className="mt-20 pt-10 border-t border-[var(--line)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl md:text-2xl text-[var(--color-dark)]">
                proud to have placed talent{" "}
                <span className="font-serif italic font-normal text-[var(--color-orange)]">
                  with:
                </span>
              </span>
            </div>
            <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
              ✦ 400+ Candidates Placed
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                data-inertia-element
                data-wiggle="1"
                data-custom-cursor="click"
                className="h-16 px-4 py-2 rounded-2xl bg-white border-2 border-[var(--color-dark)] shadow-[3px_3px_0px_var(--color-dark)] flex items-center justify-center transition-all duration-200 hover:scale-105 hover:-rotate-2 cursor-pointer group"
                title={logo.name}
              >
                <img
                  data-inertia-child
                  data-wiggle-target
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
