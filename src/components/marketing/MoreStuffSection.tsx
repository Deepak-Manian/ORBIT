import { useState } from "react";

export function MoreStuffSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    {
      title: "your next story",
      tag: "ORBIT LIVE",
      image: "/showcase/showcase1.avif",
      tilt: "-rotate-4",
      sticker: "/stickers/smiley.svg",
      bgColor: "bg-zinc-900",
      accent: "text-[var(--lime)]",
    },
    {
      title: "brand campaign",
      tag: "★ 100",
      image: "/showcase/showcase2.avif",
      tilt: "rotate-2 md:-translate-y-6",
      sticker: "/stickers/100.svg",
      bgColor: "bg-[var(--orange)]",
      accent: "text-[var(--black)]",
    },
    {
      title: "netflix socials",
      tag: "VERIFIED",
      image: "/showcase/showcase3.avif",
      tilt: "rotate-5",
      sticker: "/stickers/lets-go.svg",
      bgColor: "bg-zinc-900",
      accent: "text-[var(--blue)]",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[var(--black)] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Organic Blue Floral Blob behind left card */}
        <svg
          viewBox="0 0 160 160"
          fill="none"
          className="absolute top-1/2 left-2 md:left-12 -translate-y-1/2 w-48 md:w-72 h-auto text-[var(--blue)] opacity-60 pointer-events-none"
        >
          <path
            d="M 80 15 C 115 5, 145 35, 140 75 C 155 110, 120 145, 80 145 C 45 155, 15 125, 20 85 C 10 45, 45 20, 80 15 Z"
            fill="currentColor"
          />
        </svg>

        {/* ---------------- Headline matching Screenshot 2: "more stuff to click on" ---------------- */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white">
            more{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              stuff
            </span>{" "}
            to click on
          </h2>
        </div>

        {/* ---------------- 3 Tilted Rounded Cards (Screenshot 2) ---------------- */}
        <div className="relative z-10 flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-8 my-10">
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative w-72 sm:w-80 p-3.5 rounded-3xl border-2 border-white/20 shadow-[6px_6px_0px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer ${
                  item.bgColor
                } ${item.tilt} ${
                  isHovered
                    ? "scale-105 rotate-0 shadow-[8px_8px_0px_var(--orange)] z-30 border-[var(--orange)]"
                    : ""
                }`}
                data-cursor-text="VIEW"
              >
                {/* Sticker badge */}
                <div className="absolute top-4 right-4 z-20 select-none">
                  <img
                    src={item.sticker}
                    alt="Sticker"
                    className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg"
                  />
                </div>

                {/* Card Media Preview */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom title inside card */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white/90 mb-1 border border-white/10">
                      {item.tag}
                    </span>
                    <h3 className="font-display font-black text-xl text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

