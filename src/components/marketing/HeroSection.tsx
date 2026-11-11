import { Button } from "../common/Button";
import { Icon } from "../common/Icon";
import { CurvedArrow, Starburst, StickerBadge } from "../common/Doodles";

interface HeroSectionProps {
  onExplore: () => void;
  onMeetAgents: () => void;
}

export function HeroSection({ onExplore, onMeetAgents }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[var(--black)] text-white">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#718CFF_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Floating Stickers & Badges */}
      <div className="absolute top-28 right-8 md:right-28 z-20 hidden sm:block animate-bounce [animation-duration:4s]">
        <StickerBadge color="lime" rotate="6deg">
          <Icon name="spark" size={14} /> 94% Strong Match
        </StickerBadge>
      </div>

      <div className="absolute top-44 left-6 md:left-20 z-20 hidden md:block">
        <StickerBadge color="orange" rotate="-8deg">
          Next Move!
        </StickerBadge>
      </div>

      <div className="absolute bottom-28 left-8 md:left-24 z-20 hidden lg:block">
        <StickerBadge color="lavender" rotate="4deg">
          <Icon name="shield" size={14} /> 100% Private · BYOA
        </StickerBadge>
      </div>

      {/* Top Tag & Spark */}
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-4 md:pt-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-wider text-[var(--lime)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-ping" />
          <span>Open-Source Agentic Career Intelligence</span>
          <span className="text-white/40">·</span>
          <span>v3.0</span>
        </div>

        {/* Editorial Oversized Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white mb-8">
          your career deserves
          <br />
          more than a{" "}
          <span className="relative inline-block font-serif italic font-normal text-[var(--orange)] underline decoration-wavy decoration-[var(--lime)] underline-offset-8">
            job board.
          </span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-white/80 font-body font-normal leading-relaxed mb-10">
          Discover better-fit work, understand your true skill trajectory, and navigate every
          consequential move with <strong className="text-white font-semibold">ORBIT</strong>—a
          privacy-first collective of specialized AI agents.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <Button variant="primary" size="lg" icon="arrow" onClick={onExplore}>
            Explore your career
          </Button>
          <Button variant="secondary" size="lg" icon="bot" onClick={onMeetAgents}>
            Meet ORBIT
          </Button>
        </div>
      </div>

      {/* Live Career Intelligence Preview Canvas */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-12 pt-8">
        <div className="relative rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl p-5 md:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-white/80">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ORBIT INTELLIGENCE STREAM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-white/10 text-[var(--lime)] font-bold">
                LIVE
              </span>
              <span className="text-white/50 hidden sm:inline">TAMIL NADU + INDIA-WIDE PILOT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mini Job 1 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10 group cursor-pointer">
              <div className="w-11 h-11 rounded-lg bg-[#718CFF] text-[var(--black)] font-display font-black text-lg grid place-items-center shrink-0 shadow">
                L
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-white truncate group-hover:text-[var(--orange)] transition-colors">
                  Product Designer
                </div>
                <div className="text-xs text-white/60 truncate">Linear · Remote</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-base font-display font-black text-[var(--lime)]">94%</div>
                <div className="text-[10px] text-white/40 uppercase">fit</div>
              </div>
            </div>

            {/* Mini Job 2 */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10 group cursor-pointer">
              <div className="w-11 h-11 rounded-lg bg-[var(--orange)] text-[var(--black)] font-display font-black text-lg grid place-items-center shrink-0 shadow">
                R
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-white truncate group-hover:text-[var(--orange)] transition-colors">
                  Design Lead
                </div>
                <div className="text-xs text-white/60 truncate">Razorpay · Bengaluru</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-base font-display font-black text-[var(--lime)]">89%</div>
                <div className="text-[10px] text-white/40 uppercase">fit</div>
              </div>
            </div>

            {/* Agent Pulse Insight */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--blue)]/15 border border-[var(--blue)]/30 text-white">
              <div className="w-11 h-11 rounded-full bg-[var(--blue)] text-[var(--black)] font-display font-black text-sm grid place-items-center shrink-0 shadow">
                O
              </div>
              <div className="text-xs">
                <strong className="block text-[var(--blue)] font-bold mb-0.5">
                  ORBIT detected momentum
                </strong>
                <p className="text-white/80 line-clamp-1">
                  Your systems work matches 18 high-growth roles in fintech.
                </p>
              </div>
            </div>
          </div>

          {/* Signal wave vector */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-2">
              <Icon name="spark" size={14} className="text-[var(--orange)]" />
              <span>Evidence-based matching grounded in actual proof of work</span>
            </span>
            <CurvedArrow className="w-16 h-8 text-[var(--orange)] hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Note */}
      <div className="relative z-10 flex items-center justify-between max-w-5xl mx-auto w-full pt-8 text-xs font-mono text-white/50">
        <div className="flex items-center gap-2">
          <span>01 / 09</span>
          <span className="w-8 h-px bg-white/20" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <div className="flex items-center gap-2 animate-bounce">
          <span>get smarter</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}

