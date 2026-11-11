import { useState } from "react";
import { mockAgents } from "../../mock/agents";
import { Icon } from "../common/Icon";
import { Starburst, StickerBadge } from "../common/Doodles";

export function MeetAgentsSection() {
  const [activeAgentId, setActiveAgentId] = useState("orbit");

  const activeAgent = mockAgents.find((a) => a.id === activeAgentId) || mockAgents[0];

  const agentSampleDialogues: Record<string, { prompt: string; reply: string }> = {
    orbit: {
      prompt: "What's the best next move for my leadership trajectory?",
      reply:
        "Based on your 31% merchant activation uplift at Razorpay, Scout identified the Design Lead role at Razorpay and Senior Product Designer at Linear. Razorpay gives you immediate team leadership scope, while Linear sharpens developer-tool craft. Would you like Draft to prepare a tailored narrative for both?",
    },
    scout: {
      prompt: "Find roles that value design systems and pay above ₹40L.",
      reply:
        "Found 4 verified positions in Bengaluru & Remote matching those criteria today. Linear (₹42–58L), BrowserStack (₹45–65L), CRED (₹50–70L), and Atlassian (₹40–55L). None are through third-party recruiters; all verified through Sentinel.",
    },
    lens: {
      prompt: "How well do my past projects match Linear's requirements?",
      reply:
        "94% compatibility match. Your Blade 2.0 design token refactor matches their requirement for ergonomic, keyboard-friendly systems. One minor gap: Linear looks for Principle or Rive motion prototypes, which aren't highlighted in your primary case study.",
    },
    draft: {
      prompt: "Draft an introduction to the hiring manager at Linear.",
      reply:
        "I drafted a 3-paragraph peer-to-peer note highlighting how your approach to systematic craft aligns with their recent Linear Insights launch. I avoided generic AI buzzwords like 'synergy' or 'passionate'. Ready for your review before you send.",
    },
    track: {
      prompt: "What follow-ups are due this week?",
      reply:
        "You have a follow-up due tomorrow morning for your Razorpay application (day 3 after referral). Your CRED interview is locked in for Thursday at 3:00 PM. Would you like Coach to run a 15-minute practice session?",
    },
    coach: {
      prompt: "Simulate a tough question for my upcoming CRED interview.",
      reply:
        "Let's practice CRED's craft rubric: 'How do you defend high-effort visual polish when product managers are pushing to ship an MVP fast?' Think through your answer using the STAR framework, then hit send for real-time feedback.",
    },
    signal: {
      prompt: "What's happening with staff designer salaries in Bengaluru right now?",
      reply:
        "Median senior/staff pay is holding steady between ₹38L and ₹55L, with top-tier Series C+ companies paying up to ₹70L inclusive of ESOPs. Roles asking for 'AI product workflows' are commanding a 14% premium over standard UI roles.",
    },
    sentinel: {
      prompt: "Can you verify this recruiter message on LinkedIn?",
      reply:
        "I checked the domain and recruiter credentials. The agency domain was registered 12 days ago and asks for an upfront 'assessment processing fee' of ₹1,500. This is a confirmed scam pattern. I have flagged and quarantined the listing.",
    },
  };

  return (
    <section
      id="agents"
      className="relative py-28 px-6 md:px-12 bg-[var(--black)] text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[var(--lime)]">
            05 / coordinated intelligence
          </span>
          <StickerBadge color="orange" rotate="-4deg">
            8 Specialized Agents
          </StickerBadge>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white">
              meet your new
              <br />
              <span className="font-serif italic font-normal text-[var(--orange)]">
                career team.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
              Not a monolithic chatbot. A coordinated collective of specialized autonomous agents,
              each focused on one critical dimension of your career progression.
            </p>
          </div>
        </div>

        {/* Agent Roster Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {mockAgents.map((agent) => {
            const isSelected = agent.id === activeAgentId;
            return (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border-2 ${
                  isSelected
                    ? "bg-white/15 border-[var(--orange)] shadow-[3px_3px_0px_var(--orange)] translate-x-[-1px] translate-y-[-1px]"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-8 h-8 rounded-full font-display font-black text-xs text-[var(--black)] grid place-items-center"
                    style={{
                      background:
                        agent.color === "orange"
                          ? "#FF633D"
                          : agent.color === "blue"
                            ? "#718CFF"
                            : agent.color === "lavender"
                              ? "#DDA7F5"
                              : agent.color === "green"
                                ? "#175C4A"
                                : "#FFFFFF",
                    }}
                  >
                    {agent.avatarChar}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="font-display font-bold text-base text-white">{agent.name}</div>
                <div className="text-[11px] text-white/60 truncate">{agent.role}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Agent Interactive Showcase */}
        <div className="rounded-2xl bg-[#121214] border-2 border-white/20 p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl font-display font-black text-2xl text-[var(--black)] grid place-items-center shadow"
                style={{
                  background:
                    activeAgent.color === "orange"
                      ? "#FF633D"
                      : activeAgent.color === "blue"
                        ? "#718CFF"
                        : activeAgent.color === "lavender"
                          ? "#DDA7F5"
                          : activeAgent.color === "green"
                            ? "#175C4A"
                            : "#FFFFFF",
                }}
              >
                {activeAgent.avatarChar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-2xl text-white">{activeAgent.name}</h3>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-[var(--lime)] font-bold">
                    {activeAgent.codename}
                  </span>
                </div>
                <p className="text-sm text-white/60">{activeAgent.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[var(--lime)]">
                Default: {activeAgent.defaultModel}
              </span>
              <span className="hidden sm:inline">· 100% User Owned</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Agent Details */}
            <div className="lg:col-span-5 space-y-4">
              <p className="font-body text-base text-white/90 leading-relaxed">
                {activeAgent.description}
              </p>

              <div>
                <span className="font-mono text-xs text-[var(--orange)] uppercase tracking-wider block mb-2 font-bold">
                  CORE SPECIALIZATIONS
                </span>
                <ul className="space-y-1.5 text-xs text-white/70">
                  {activeAgent.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <Icon name="check" size={13} className="text-[var(--lime)] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live Interactive Dialogue Simulation */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-black/60 border border-white/10 space-y-4 font-body">
              <div className="flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/10 pb-2">
                <span>INTERACTIVE DIALOGUE PREVIEW</span>
                <span className="text-emerald-400">● SIMULATED RESPONSE</span>
              </div>

              {/* User Prompt */}
              <div className="flex items-start gap-3 text-right justify-end">
                <div className="p-3.5 rounded-xl bg-white/15 border border-white/20 text-xs md:text-sm text-white max-w-md">
                  {agentSampleDialogues[activeAgent.id]?.prompt || "How does this role fit me?"}
                </div>
                <div className="w-7 h-7 rounded-full bg-white/20 text-white font-mono text-xs grid place-items-center font-bold shrink-0">
                  NK
                </div>
              </div>

              {/* Agent Reply */}
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-full text-[var(--black)] font-display font-black text-xs grid place-items-center shrink-0"
                  style={{
                    background:
                      activeAgent.color === "orange"
                        ? "#FF633D"
                        : activeAgent.color === "blue"
                          ? "#718CFF"
                          : activeAgent.color === "lavender"
                            ? "#DDA7F5"
                            : activeAgent.color === "green"
                              ? "#175C4A"
                              : "#FFFFFF",
                  }}
                >
                  {activeAgent.avatarChar}
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-white/90 leading-relaxed max-w-lg">
                  {agentSampleDialogues[activeAgent.id]?.reply}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
