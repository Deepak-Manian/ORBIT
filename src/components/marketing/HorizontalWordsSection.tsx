import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalWordsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const phrase = "we wanna be where you are";
  const letters = phrase.split("");

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Horizontal Scroll Scrubbing Animation (Exact physics from Truus 40171.js)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { xPercent: 25 },
        {
          xPercent: -75,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );

      // Letter wave bouncing and rotation along the horizontal scroll path
      const letterEls = track.querySelectorAll(".letter-char");
      letterEls.forEach((char, i) => {
        const amplitude = 40 + (i % 4) * 25;
        const rotAmplitude = 8 + (i % 5) * 4;
        const phase = i * 0.7;

        gsap.fromTo(
          char,
          {
            y: amplitude * Math.sin(phase),
            rotation: rotAmplitude * Math.cos(phase),
          },
          {
            y: -amplitude * Math.sin(phase),
            rotation: -rotAmplitude * Math.cos(phase),
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Floating interactive stickers scaling along the track with elastic bounce
      const stickers = track.querySelectorAll(".track-sticker");
      stickers.forEach((sticker, idx) => {
        gsap.fromTo(
          sticker,
          { scale: 0.4, rotation: idx % 2 === 0 ? -25 : 25 },
          {
            scale: 1.15,
            rotation: idx % 2 === 0 ? 15 : -15,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 0.6,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-bg-section="light"
      data-theme-section="light"
      className="horizontal-words relative py-28 md:py-36 bg-[var(--cream)] text-[var(--black)] overflow-hidden select-none border-b-2 border-[var(--black)]"
    >
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          <div className="flex items-center text-7xl sm:text-8xl md:text-9xl lg:text-[13rem] font-display font-black leading-none tracking-tight">
            {letters.map((char, idx) => (
              <span
                key={idx}
                className={`letter-char inline-block will-change-transform ${
                  char === " " ? "w-8 sm:w-16" : ""
                } ${
                  idx === 18
                    ? "text-[var(--orange)]"
                    : idx >= 22
                    ? "text-[var(--blue)] font-serif italic"
                    : ""
                }`}
              >
                {char}
              </span>
            ))}

            {/* Sticker 1: Watch / Camera */}
            <div className="track-sticker inline-block mx-6 sm:mx-10 shrink-0">
              <img
                src="/stickers/camera.svg"
                alt="Camera"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 drop-shadow-xl"
              />
            </div>

            {/* Loop thread scribble SVG */}
            <svg
              viewBox="0 0 160 80"
              fill="none"
              className="inline-block w-32 md:w-56 h-auto text-[var(--black)] overflow-visible shrink-0 ml-4"
            >
              <path
                d="M 5 45 C 30 10, 80 5, 95 40 C 110 75, 55 80, 50 50 C 45 15, 105 10, 155 40"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Sticker 2: Smiley */}
            <div className="track-sticker inline-block mx-6 sm:mx-10 shrink-0">
              <img
                src="/stickers/smiley.svg"
                alt="Smiley"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
