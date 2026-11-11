import { useState } from "react";
import { Icon } from "../common/Icon";
import { Logo } from "../common/Logo";
import { mockJobs } from "../../mock/jobs";

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "discover",
      num: "01",
      label: "Discover",
      title: "Roles with genuine signal, not bulk spam.",
      desc: "Scout checks verified career portals, removes duplicate agency reposts, flags ghost listings, and prioritizes roles matching your exact trajectory.",
    },
    {
      id: "strengths",
      num: "02",
      label: "Strengths",
      title: "Ground your value in verified evidence.",
      desc: "Lens extracts accomplishments from your past projects, GitHub commits, and design systems work—generating explainable match scores.",
    },
    {
      id: "gaps",
      num: "03",
      label: "Skill gaps",
      title: "Know what's missing before you apply.",
      desc: "See the precise 1–2 competencies that separate you from candidate shortlist status, paired with actionable learning sprints.",
    },
    {
      id: "tracker",
      num: "04",
      label: "Applications",
      title: "One living pipeline from saved to offer.",
      desc: "Track status across 5 clean phases, log interactions, and receive calculated follow-up reminders before recruiter momentum cools down.",
    },
    {
      id: "interviews",
      num: "05",
      label: "Interviews",
      title: "Simulate tough conversations with Coach.",
      desc: "Practice role-specific behavioral questions aligned to company leadership rubrics, with real-time critiques on structure and clarity.",
    },
    {
      id: "market",
      num: "06",
      label: "Market",
      title: "Macro hiring velocity & compensation truth.",
      desc: "Signal delivers unvarnished India and global salary distributions, emerging skill premiums, and company headcount trajectories.",
    },
  ];

  return (
    <section
      id="platform"
      className="relative py-28 px-6 md:px-12 bg-[var(--black)] text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[var(--lime)]">
            03 / one connected platform
          </span>
        </div>

        {/* Section Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white">
              one place for every
              <br />
              <span className="font-serif italic font-normal text-[var(--orange)]">
                career move.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
              Not another disjointed icon grid. A living workspace where your profile,
              opportunities, applications, and specialized agents make each other smarter every
              single day.
            </p>
          </div>
        </div>

        {/* Interactive Capability Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {capabilities.map((cap, i) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 rounded-full font-body text-xs md:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === i
                  ? "bg-[var(--orange)] text-[var(--black)] shadow-[2px_2px_0px_white]"
                  : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">{cap.num}</span>
              <span>{cap.label}</span>
            </button>
          ))}
        </div>

        {/* Layered Interactive Mockup Container */}
        <div className="relative rounded-2xl bg-[#121214] border-2 border-white/15 overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)]">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Logo light size="sm" />
              <span className="text-white/30 text-xs hidden sm:inline">/</span>
              <span className="text-white/70 text-xs font-mono hidden sm:inline">
                orbit.app/workspace/{capabilities[activeTab].id}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-white/70">8 AGENTS ACTIVE</span>
            </div>
          </div>

          {/* Dynamic Mockup Body */}
          <div className="p-6 md:p-8">
            <div className="max-w-2xl mb-6">
              <span className="font-mono text-xs text-[var(--lime)] uppercase tracking-wider block mb-1">
                CAPABILITY // {capabilities[activeTab].num}
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                {capabilities[activeTab].title}
              </h3>
              <p className="font-body text-sm md:text-base text-white/70">
                {capabilities[activeTab].desc}
              </p>
            </div>

            {/* Tab 0: Job Discovery Preview */}
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockJobs.slice(0, 4).map((job) => (
                  <div
                    key={job.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg text-[var(--black)] font-display font-black grid place-items-center"
                          style={{ background: job.color }}
                        >
                          {job.logoLetter}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{job.title}</h4>
                          <span className="text-xs text-white/60">
                            {job.company} · {job.location}
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-[var(--lime)]/15 text-[var(--lime)] font-mono font-bold text-xs">
                        {job.match}% match
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.matchedSkills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-white/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 1: Strengths Preview */}
            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[var(--orange)]">EVIDENCE CLUSTER 01</div>
                  <h4 className="text-base font-bold text-white">Multi-brand Design Systems</h4>
                  <p className="text-xs text-white/60">
                    Validated from Blade 2.0 design token architecture and Figma variable tokens.
                  </p>
                  <div className="pt-2 text-xs font-bold text-emerald-400">
                    96% percentile match
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[var(--blue)]">EVIDENCE CLUSTER 02</div>
                  <h4 className="text-base font-bold text-white">0→1 Merchant Onboarding</h4>
                  <p className="text-xs text-white/60">
                    Validated from 31% activation improvement at Razorpay serving tier-1 merchants.
                  </p>
                  <div className="pt-2 text-xs font-bold text-emerald-400">
                    91% percentile match
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[var(--lavender)]">
                    EVIDENCE CLUSTER 03
                  </div>
                  <h4 className="text-base font-bold text-white">Cross-functional Strategy</h4>
                  <p className="text-xs text-white/60">
                    Leadership across engineering, risk, and commercial stakeholders.
                  </p>
                  <div className="pt-2 text-xs font-bold text-emerald-400">
                    89% percentile match
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Skill Gaps Preview */}
            {activeTab === 2 && (
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--lime)]">
                    RECOMMENDED 2-WEEK PATHWAY
                  </span>
                  <span className="text-xs text-white/50">Unlocks +₹8L–₹14L salary potential</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">
                        Motion Prototyping (Rive / Principle)
                      </div>
                      <div className="text-xs text-white/50">
                        Required by Linear and CRED for principal design roles.
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--orange)] text-[var(--black)] font-bold text-xs">
                      12h Sprint
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">
                        AI Workflow Ergonomics & Evaluation
                      </div>
                      <div className="text-xs text-white/50">
                        In-demand competency in 68% of new high-comp staff designer listings.
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--blue)] text-[var(--black)] font-bold text-xs">
                      8h Sprint
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Applications Preview */}
            {activeTab === 3 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Saved (3)", "Applied (2)", "Interview (2)", "Offer (1)"].map((col, ci) => (
                  <div
                    key={col}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2"
                  >
                    <div className="text-xs font-mono font-bold text-white/80 border-b border-white/10 pb-2">
                      {col}
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1">
                      <div className="font-bold text-white">
                        {ci === 0 ? "Linear" : ci === 1 ? "Razorpay" : ci === 2 ? "CRED" : "Zepto"}
                      </div>
                      <div className="text-[11px] text-white/60">
                        {ci === 0
                          ? "Tailoring resume"
                          : ci === 1
                            ? "Follow-up tomorrow"
                            : ci === 2
                              ? "Round 2 Thursday"
                              : "Written offer"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Interview Coach Preview */}
            {activeTab === 4 && (
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--blue)]">
                  <Icon name="bot" size={14} />
                  <span>COACH SIMULATION // CRED PRINCIPAL CRAFT INTERVIEW</span>
                </div>
                <div className="p-4 rounded-lg bg-black/50 border border-white/10 text-sm text-white/90 leading-relaxed font-mono">
                  &ldquo;Describe a time when engineering pushback threatened a high-craft design
                  decision. How did you quantify customer trust to justify the extra sprint?&rdquo;
                </div>
                <div className="flex items-center justify-between text-xs text-white/60 pt-1">
                  <span>Suggested STAR framework ready</span>
                  <span className="text-[var(--lime)] font-bold">
                    Feedback rubric: Systems + Influence
                  </span>
                </div>
              </div>
            )}

            {/* Tab 5: Market Intelligence Preview */}
            {activeTab === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-white/50">
                    MEDIAN SENIOR PAY (INDIA)
                  </span>
                  <div className="text-2xl font-display font-black text-white">₹38L – ₹52L</div>
                  <span className="text-xs text-emerald-400 font-bold">+18% YoY in Bengaluru</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-white/50">TOP DEMANDED SKILL</span>
                  <div className="text-2xl font-display font-black text-[var(--orange)]">
                    Design Systems
                  </div>
                  <span className="text-xs text-white/60">Tagged in 74% of lead roles</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-white/50">HIRING VELOCITY</span>
                  <div className="text-2xl font-display font-black text-[var(--lime)]">Surging</div>
                  <span className="text-xs text-white/60">34 new verified roles this week</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
