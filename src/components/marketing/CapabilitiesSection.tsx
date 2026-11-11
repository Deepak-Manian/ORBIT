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

  return (
    <section
      id="capabilities"
      data-bg-section="light"
      data-theme-section="light"
      className="services"
    >
      <div className="container is--large">
        {/* ---------------- Headline matching Truus services: "call us if you need:" ---------------- */}
        <div className="services__row-title">
          <div className="services__col-title">
            <h2>
              call us if you{" "}
              <em>need:</em>
            </h2>
            {/* Double wavy underline SVG from Truus services */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 159 17"
              fill="none"
              data-scroll-animation="draw-stagger"
              className="services__line-svg"
            >
              <path
                d="M1 12.1515C53.0771 5.7187 105.529 2.30552 158 1.93652"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.2672 15.9461C64.1899 12.8158 98.2663 11.3583 132.33 11.5735"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ---------------- 5 Vertical Accordion Fan-out Cards (initMWG25) ---------------- */}
        <div className="services__row-cards">
          {cards.map((card, idx) => {
            const offsets = [
              { rot: 4, x: 0, y: -5.4 },
              { rot: -2, x: 0, y: -2.7 },
              { rot: 1, x: 0, y: 0 },
              { rot: -3, x: 0, y: -3.5 },
              { rot: 3, x: 0, y: -5 },
            ][idx] || { rot: 0, x: 0, y: 0 };

            return (
              <div
                key={card.title}
                data-offset-rot={offsets.rot}
                data-offset-x={offsets.x}
                data-offset-y={offsets.y}
                className={`services-card__wrap is--${idx + 1}`}
              >
                <div
                  className="services-card"
                  style={{
                    backgroundColor:
                      idx === 0
                        ? "#2D7864"
                        : idx === 1
                        ? "#82A0FF"
                        : idx === 2
                        ? "#F5693C"
                        : idx === 3
                        ? "#A0325A"
                        : "#F0BEFA",
                    color: idx === 1 || idx === 4 ? "#000000" : "#ffffff",
                  }}
                >
                  <div className="services-card__before"></div>
                  <div className="services-card__content">
                    <div className="services-card__sticker-camera">
                      <img src={card.sticker} alt={card.title} style={{ width: 44, height: "auto" }} />
                    </div>

                    <h3 className="services-card__h3" style={{ color: "inherit" }}>
                      {card.title}
                    </h3>

                    <ul role="list" className="services-card__list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="services-card__list-item">
                          <p className="services-card__bullet-p">{bullet}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
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
      </div>
    </section>
  );
}
