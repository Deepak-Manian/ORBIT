import { CircularStamp } from "../common/Doodles";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-28 px-6 md:px-12 bg-[var(--cream)] text-[var(--black)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top playful label & circular stamp */}
        <div className="flex items-center justify-between mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span className="text-[var(--orange)]">01</span> / the philosophy
          </div>
          <CircularStamp
            text="EVIDENCE BEFORE CONFIDENCE · "
            centerText="✦"
            size={76}
            className="text-[var(--black)] hidden sm:inline-grid"
          />
        </div>

        {/* ---------------- Playful Headline with floating letters & loop scribble ---------------- */}
        <div className="relative mb-20 max-w-4xl">
          {/* Thread loop scribble above letters */}
          <svg
            viewBox="0 0 140 70"
            fill="none"
            className="absolute -top-12 left-32 md:left-64 w-28 md:w-36 text-[var(--black)] pointer-events-none overflow-visible"
          >
            <path
              d="M 5 45 C 25 10, 65 5, 75 35 C 85 65, 40 70, 35 45 C 30 15, 80 5, 125 30"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>

          {/* Cute sticker near headline */}
          <div className="absolute -top-10 left-16 md:left-36 select-none animate-[bounce_3s_infinite]">
            <img
              src="/stickers/cute.svg"
              alt="Cute"
              className="w-10 h-10 md:w-14 md:h-14 drop-shadow-md"
            />
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-[var(--black)]">
            we wanna be where they{" "}
            <span className="inline-block relative">
              ar
              <span className="inline-block -rotate-12 translate-y-2 text-[var(--orange)]">
                e
              </span>
            </span>
            <span className="inline-block translate-x-1 rotate-6 font-serif italic text-[var(--blue)]">
              .
            </span>
          </h2>
        </div>

        {/* ---------------- Editorial Statement: "a career engine built for the future..." ---------------- */}
        <div className="mb-16">
          <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-[var(--black)]">
            a career platform
            <br />
            built for the future.
            <br />
            <span className="font-serif italic font-normal text-[var(--orange)]">
              from campus to VP.
            </span>
          </h3>
        </div>

        {/* ---------------- Staggered Polaroid Cards Stack ---------------- */}
        <div className="relative my-20 py-8">
          {/* Floating organic blue flower blob behind cards */}
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 w-48 md:w-72 h-auto text-[var(--blue)] opacity-80 pointer-events-none"
          >
            <path
              d="M 80 20 C 110 5, 140 35, 135 70 C 150 100, 125 140, 95 135 C 70 150, 30 135, 30 100 C 5 75, 25 30, 60 30 Z"
              fill="currentColor"
            />
          </svg>

          {/* 4 Overlapping Cards */}
          <div className="relative z-10 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6">
            {/* Card 1 */}
            <div
              className="w-64 md:w-72 p-3 bg-white rounded-2xl border-2 border-[var(--black)] shadow-[5px_5px_0px_var(--black)] -rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              <div className="relative h-64 rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src="/showcase/showcase1.avif"
                  alt="Showcase 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <img src="/stickers/100.svg" alt="100" className="w-10 h-10" />
                </div>
              </div>
              <div className="p-3 text-left">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Scout · Discovery
                </div>
                <div className="font-display font-bold text-base text-[var(--black)]">
                  High-signal tech roles
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-64 md:w-72 p-3 bg-white rounded-2xl border-2 border-[var(--black)] shadow-[5px_5px_0px_var(--black)] rotate-2 md:-translate-y-4 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer"
              data-cursor-text="LENS"
            >
              <div className="relative h-64 rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src="/showcase/showcase2.avif"
                  alt="Showcase 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <img
                    src="/stickers/good-vibes.svg"
                    alt="Good Vibes"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="p-3 text-left">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Lens · Trajectory
                </div>
                <div className="font-display font-bold text-base text-[var(--black)]">
                  Evidence-backed matching
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="w-64 md:w-72 p-3 bg-white rounded-2xl border-2 border-[var(--black)] shadow-[5px_5px_0px_var(--black)] rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer"
              data-cursor-text="ORBIT"
            >
              <div className="relative h-64 rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src="/showcase/showcase3.avif"
                  alt="Showcase 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <img src="/stickers/bam.svg" alt="BAM" className="w-14 h-auto" />
                </div>
              </div>
              <div className="p-3 text-left">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Coach · Simulation
                </div>
                <div className="font-display font-bold text-base text-[var(--black)]">
                  Executive mock interviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative columns underneath cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--line)]">
          <div>
            <p className="font-body text-lg md:text-xl font-medium leading-relaxed text-[var(--black)]">
              job search devolved into an exhausting numbers game of bots applying to bots. we built
              ORBIT to reverse that spiral.
            </p>
          </div>
          <div>
            <p className="font-body text-sm md:text-base text-[var(--muted)] leading-relaxed">
              every recommendation is grounded in real job-portal telemetry and verified candidate
              accomplishments. no ghost listings, no fabricated match percentages, and 100% private
              user-owned AI keys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
