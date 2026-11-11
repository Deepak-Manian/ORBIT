import { Starburst, StickerBadge } from "../common/Doodles";

export function CareerIntelligenceSection() {
  return (
    <section
      id="intelligence"
      className="relative py-28 px-6 md:px-12 bg-[var(--cream)] text-[var(--black)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span className="text-[var(--orange)]">04</span> / career intelligence
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--black)] mb-6 max-w-3xl">
          not just where you can work.
          <br />
          <span className="font-serif italic font-normal text-[var(--orange)]">
            where you can grow.
          </span>
        </h2>
        <p className="max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-12">
          ORBIT doesn&apos;t just score your resume against static job posts. It constructs a
          dynamic competency graph from your accomplishments to forecast your next career
          trajectory.
        </p>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Panel 1: Profile Strength (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                PROFILE STRENGTH
              </span>
              <span className="text-xs font-mono text-emerald-600 font-bold">UPDATED TODAY</span>
            </div>

            <div className="flex items-baseline gap-2">
              <div className="font-display font-black text-6xl text-[var(--black)]">87</div>
              <div className="text-lg text-[var(--muted)] font-mono">/100</div>
              <span className="ml-auto px-2.5 py-1 rounded-full bg-[var(--lime)] font-mono text-xs font-bold text-[var(--black)] border border-[var(--black)]">
                Strong Signal
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { label: "Verified Experience", value: 92 },
                { label: "Core Systems Skills", value: 84 },
                { label: "Proof of Work (Projects)", value: 78 },
                { label: "Preference Alignment", value: 95 },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[var(--black)]">
                    <span>{item.label}</span>
                    <span className="font-mono">{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--cream)] overflow-hidden border border-[var(--line)]">
                    <div
                      className="h-full bg-[var(--orange)] rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[var(--muted)] font-body pt-2 border-t border-[var(--line)]">
              Add motion design artifacts to reach <strong>94% Exceptional</strong> tier.
            </p>
          </div>

          {/* Panel 2: Compatibility Analysis (7 cols) */}
          <div className="lg:col-span-7 p-7 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  TRAJECTORY COMPATIBILITY
                </span>
                <StickerBadge color="blue" rotate="2deg">
                  Fintech & DevTools
                </StickerBadge>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 text-center">
                <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                  <div className="font-display font-black text-2xl text-[var(--black)]">9.4</div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase mt-0.5">
                    Trajectory Fit
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                  <div className="font-display font-black text-2xl text-[var(--black)]">9.1</div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase mt-0.5">
                    Culture & Values
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                  <div className="font-display font-black text-2xl text-[var(--orange)]">9.5</div>
                  <div className="text-[11px] font-mono text-[var(--muted)] uppercase mt-0.5">
                    Skill Precision
                  </div>
                </div>
              </div>

              <p className="font-body text-sm text-[var(--black)] leading-relaxed mt-2">
                Your highest compatibility clusters around{" "}
                <strong>Lead & Staff Product Design</strong> roles at high-craft companies. Your
                background at Razorpay and Flipkart gives you credibility in high-velocity Indian
                scale-ups.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--blue)]/10 border border-[var(--blue)]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Starburst size={20} color="var(--blue)" />
                <span className="text-xs font-bold text-[var(--black)]">
                  ORBIT recommendation: 18 high-confidence roles in India
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[var(--blue)]">VIEW ROLES →</span>
            </div>
          </div>

          {/* Panel 3: Recommended Next Skills (7 cols) */}
          <div className="lg:col-span-7 p-7 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              RECOMMENDED NEXT
            </span>
            <h3 className="font-display font-bold text-2xl text-[var(--black)]">
              Three skills could unlock{" "}
              <span className="text-[var(--orange)] font-serif italic text-3xl">31%</span> more
              roles.
            </h3>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "AI Product Interaction Design",
                  time: "18h pathway",
                  boost: "+14% roles",
                },
                {
                  title: "Experimentation & Statistical Design",
                  time: "11h pathway",
                  boost: "+10% roles",
                },
                { title: "Executive Product Storytelling", time: "8h pathway", boost: "+7% roles" },
              ].map((s, idx) => (
                <div
                  key={s.title}
                  className="p-3.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--black)] text-white font-mono text-xs grid place-items-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-sm text-[var(--black)]">{s.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--muted)] font-mono">{s.time}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold">
                      {s.boost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 4: Market Pulse (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                MARKET PULSE · INDIA TECH
              </span>
              <div className="mt-3 space-y-1">
                <div className="font-display font-black text-3xl text-[var(--black)]">
                  ₹38L – ₹55L
                </div>
                <div className="text-xs text-[var(--muted)] font-mono">
                  Median base for 7+ yrs Staff Product Designers (Bengaluru / NCR)
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[var(--line)]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--black)]">AI Product Roles</span>
                <span className="font-mono font-bold text-emerald-600">+24% QoQ</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--black)]">Remote Opportunities</span>
                <span className="font-mono font-bold text-emerald-600">Stable (38%)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[var(--black)]">Time-to-Offer</span>
                <span className="font-mono font-bold text-[var(--orange)]">21 days avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
