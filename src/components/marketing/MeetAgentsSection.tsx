import { useState } from "react";
import { mockAgents } from "../../mock/agents";

export function MeetAgentsSection() {
  const [activeAgentId, setActiveAgentId] = useState("orbit");

  const agentDialogues: Record<
    string,
    {
      codename: string;
      roleTitle: string;
      prompt: string;
      reply: string;
      unhingedQuote: string;
      sticker: string;
      badgeColor: string;
      textColor: string;
      tagTheme: string;
      stats: string;
    }
  > = {
    orbit: {
      codename: "ORBIT-01",
      roleTitle: "Swarm Orchestrator",
      prompt: "What is my strongest career move right now?",
      reply:
        "Scout found unlisted Staff openings at Linear and CRED before they hit LinkedIn. Linear doubles your product ergonomics authority; CRED gives you high-scale compensation (₹58L–₹72L). I already had Lens audit your proof points. Ready to deploy Draft?",
      unhingedQuote: "Runs your career intelligence swarm while you sleep. Zero data sold.",
      sticker: "/stickers/smiley.svg",
      badgeColor: "bg-[#E6FAB9]",
      textColor: "text-zinc-950",
      tagTheme: "Lime",
      stats: "8 LOCAL AGENTS · 0 PRIVACY LEAKS",
    },
    scout: {
      codename: "SCOUT-02",
      roleTitle: "Ghost-Job Slayer",
      prompt: "Find roles paying > ₹45L that value ergonomic systems.",
      reply:
        "Scanned 18 direct ATS endpoints across Bengaluru, Hyderabad, and Remote. Filtered out 43 ghost jobs that were reposted 6 times just to fake company growth. Linear (₹48–62L) and Razorpay (₹45–55L) have verified open backdoors today.",
      unhingedQuote: "Throws zombie job postings directly into the sun. 0 recruiter spam.",
      sticker: "/stickers/camera.svg",
      badgeColor: "bg-[#2D7864]",
      textColor: "text-white",
      tagTheme: "Lime",
      stats: "86% GHOST REJECTION RATE",
    },
    lens: {
      codename: "LENS-03",
      roleTitle: "Evidence Interrogator",
      prompt: "Evaluate my compatibility with Linear's Product Designer role.",
      reply:
        "94% compatibility match. Your component architecture proof directly aligns with their keyboard-first workflow. I purged 3 buzzwords from your overview ('synergistic', 'passionate', 'rockstar') and replaced them with your verified GitHub commits.",
      unhingedQuote: "Recruiters spend 6 seconds on your PDF. Make them choke on their matcha.",
      sticker: "/stickers/cute.svg",
      badgeColor: "bg-[#82A0FF]",
      textColor: "text-zinc-950",
      tagTheme: "Pink",
      stats: "4.2s AUDIT · 0% CORPORATE SLOP",
    },
    coach: {
      codename: "COACH-04",
      roleTitle: "CTC Poker & Sparring",
      prompt: "Simulate a tough salary question from HR.",
      reply:
        "HR just asked: 'What is your current CTC and expected hike?' DO NOT SAY A NUMBER. Here's your line: 'Our budget target is calibrated to market median (₹55L–₹68L). Let's align on engineering scope first.' Now let's practice defending it.",
      unhingedQuote: "Slaps your hand away when you're about to lowball yourself in an offer call.",
      sticker: "/stickers/fistbump.svg",
      badgeColor: "bg-[#A0325A]",
      textColor: "text-white",
      tagTheme: "Orange",
      stats: "AVERAGE SALARY LIFT: +₹14L",
    },
    draft: {
      codename: "DRAFT-05",
      roleTitle: "Anti-Slop Ghostwriter",
      prompt: "Draft an introduction to the Engineering Director at Linear.",
      reply:
        "Generated a concise 3-paragraph peer note focused on your component ergonomics and zero generic boilerplate. No 'I hope this email finds you well', no begging, just high-signal engineering proof.",
      unhingedQuote: "Cold outreach emails that humans actually reply to, written in plain English.",
      sticker: "/stickers/lets-go.svg",
      badgeColor: "bg-[#F5693C]",
      textColor: "text-white",
      tagTheme: "Orange",
      stats: "68% RECRUITER RESPONSE RATE",
    },
    track: {
      codename: "TRACK-06",
      roleTitle: "Application Autopilot",
      prompt: "What follow-ups are due this week?",
      reply:
        "Day-4 follow-up due for Razorpay. CRED design round confirmed for Thursday 3 PM. Company X hasn't responded in 7 days—I flagged them on your radar so you don't waste mental RAM waiting.",
      unhingedQuote: "Radar monitoring that keeps recruiters sweating instead of ghosting you.",
      sticker: "/stickers/100.svg",
      badgeColor: "bg-[#F0BEFA]",
      textColor: "text-zinc-950",
      tagTheme: "Pink",
      stats: "100% PRIVATE OFFLINE ARCHIVE",
    },
    signal: {
      codename: "SIGNAL-07",
      roleTitle: "Compensation Intel",
      prompt: "What is the real compensation distribution for Staff roles in India?",
      reply:
        "Bengaluru median staff base is ₹44L–₹60L, with Series C+ startups topping ₹74L total comp with liquid ESOPs. Anyone offering under ₹38L for Staff is lowballing. We know their budget before you say hi.",
      unhingedQuote: "Real salaries from verified offer letters, not fake Glassdoor averages.",
      sticker: "/stickers/bam.svg",
      badgeColor: "bg-[#FDE047]",
      textColor: "text-zinc-950",
      tagTheme: "Lime",
      stats: "VERIFIED CTC TELEMETRY",
    },
    sentinel: {
      codename: "SENTINEL-08",
      roleTitle: "Scam & Phishing Quarantine",
      prompt: "Verify this recruiter outreach message from LinkedIn.",
      reply:
        "The recruiter domain was registered 9 days ago and requests an upfront ₹1,500 'assessment platform fee'. Verified fraud pattern. Sentinel quarantined the thread and blacklisted the domain.",
      unhingedQuote: "Sniffs out Telegram job scammers and quarantine-nukes them instantly.",
      sticker: "/stickers/hands-love.svg",
      badgeColor: "bg-[#1E293B]",
      textColor: "text-emerald-400",
      tagTheme: "Lime",
      stats: "0 SCAMS · 100% VERIFIED LEADS",
    },
  };

  const currentData = agentDialogues[activeAgentId] || agentDialogues.orbit;

  const agentCards = [
    { id: "orbit", name: "ORBIT", role: "Orchestrator", color: "bg-[#E6FAB9]", textColor: "text-black", sticker: "/stickers/smiley.svg", tilt: "-rotate-3" },
    { id: "scout", name: "SCOUT", role: "Job Discovery", color: "bg-[#2D7864]", textColor: "text-white", sticker: "/stickers/camera.svg", tilt: "rotate-2 md:-translate-y-6" },
    { id: "lens", name: "LENS", role: "Skill Proof", color: "bg-[#82A0FF]", textColor: "text-black", sticker: "/stickers/cute.svg", tilt: "-rotate-2" },
    { id: "coach", name: "COACH", role: "CTC Poker", color: "bg-[#A0325A]", textColor: "text-white", sticker: "/stickers/fistbump.svg", tilt: "rotate-3 md:translate-y-4" },
    { id: "draft", name: "DRAFT", role: "Anti-Slop", color: "bg-[#F5693C]", textColor: "text-white", sticker: "/stickers/lets-go.svg", tilt: "-rotate-3" },
    { id: "track", name: "TRACK", role: "Autopilot", color: "bg-[#F0BEFA]", textColor: "text-black", sticker: "/stickers/100.svg", tilt: "rotate-2" },
  ];

  return (
    <section
      id="agents"
      className="relative py-28 px-6 md:px-12 bg-[var(--color-dark)] text-white overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-lightgreen)]">
            <span>02</span> / the collective
          </div>
          <div className="hidden sm:inline-block px-3 py-1 rounded-full bg-[var(--color-orange)] text-[var(--color-dark)] text-xs font-display font-black uppercase tracking-wider">
            8 autonomous agents
          </div>
        </div>

        {/* ---------------- Top Fanned-out Showcase Deck (Truus 'flick' mechanics) ---------------- */}
        <div className="relative py-8 mb-20 flex items-center justify-center overflow-visible" data-custom-cursor="drag">
          <div className="relative w-full max-w-2xl h-64 sm:h-80 flex items-center justify-center">
            {/* Card 1: Scout */}
            <div
              onClick={() => setActiveAgentId("scout")}
              className="absolute w-44 sm:w-56 h-56 sm:h-72 p-4 rounded-2xl border-2 border-white/20 shadow-2xl -translate-x-32 sm:-translate-x-44 -rotate-12 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 z-10 bg-[#2D7864] text-white flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase opacity-75">SCOUT · 02</span>
                <img src="/stickers/camera.svg" alt="Camera" className="w-8 h-8" />
              </div>
              <div>
                <div className="font-display font-black text-xl leading-tight">Ghost-Job Slayer</div>
                <div className="font-mono text-[11px] opacity-80 mt-1">Cuts 86% of fake listings</div>
              </div>
            </div>

            {/* Card 2: Lens */}
            <div
              onClick={() => setActiveAgentId("lens")}
              className="absolute w-44 sm:w-56 h-56 sm:h-72 p-4 rounded-2xl border-2 border-white/30 shadow-2xl -translate-x-16 sm:-translate-x-20 -rotate-6 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 z-20 bg-[#82A0FF] text-black flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase opacity-75">LENS · 03</span>
                <img src="/stickers/cute.svg" alt="Cute" className="w-8 h-8" />
              </div>
              <div>
                <div className="font-display font-black text-xl leading-tight">Evidence Audit</div>
                <div className="font-mono text-[11px] opacity-80 mt-1">Zero resume fluff</div>
              </div>
            </div>

            {/* Center Active Showcase Card: ORBIT */}
            <div
              onClick={() => setActiveAgentId("orbit")}
              className="absolute w-48 sm:w-64 h-60 sm:h-80 p-5 rounded-2xl border-3 border-[var(--color-pink)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-105 z-30 bg-[#E6FAB9] text-black flex flex-col justify-between cursor-pointer group"
              data-custom-cursor="click"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[var(--color-orange)]">Core Conductor</span>
                  <div className="font-display font-black text-2xl">ORBIT-01</div>
                </div>
                <img src="/stickers/smiley.svg" alt="Smiley" className="w-10 h-10 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="p-3 bg-black/10 rounded-xl font-mono text-xs leading-relaxed">
                "Coordinates 8 agents on your own private AI keys. No telemetry sold."
              </div>
              <div className="font-mono text-[11px] font-bold text-center bg-black text-white py-1.5 rounded-lg uppercase tracking-wider">
                Click to Inspect
              </div>
            </div>

            {/* Card 4: Coach */}
            <div
              onClick={() => setActiveAgentId("coach")}
              className="absolute w-44 sm:w-56 h-56 sm:h-72 p-4 rounded-2xl border-2 border-white/30 shadow-2xl translate-x-16 sm:translate-x-20 rotate-6 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 z-20 bg-[#A0325A] text-white flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase opacity-75">COACH · 04</span>
                <img src="/stickers/fistbump.svg" alt="Fistbump" className="w-8 h-8" />
              </div>
              <div>
                <div className="font-display font-black text-xl leading-tight">CTC Poker Spar</div>
                <div className="font-mono text-[11px] opacity-80 mt-1">Never say a number first</div>
              </div>
            </div>

            {/* Card 5: Draft */}
            <div
              onClick={() => setActiveAgentId("draft")}
              className="absolute w-44 sm:w-56 h-56 sm:h-72 p-4 rounded-2xl border-2 border-white/20 shadow-2xl translate-x-32 sm:translate-x-44 rotate-12 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 z-10 bg-[#F5693C] text-white flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase opacity-75">DRAFT · 05</span>
                <img src="/stickers/lets-go.svg" alt="Lets go" className="w-8 h-8" />
              </div>
              <div>
                <div className="font-display font-black text-xl leading-tight">Anti-Slop Pitch</div>
                <div className="font-mono text-[11px] opacity-80 mt-1">Zero AI-generated cringe</div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Headline with hand-drawn loop ---------------- */}
        <div className="mb-16 max-w-4xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-white">
            we are a{" "}
            <span className="relative inline-block px-3 py-1 mx-1">
              <span className="relative z-10 font-serif italic font-normal text-[var(--color-orange)]">
                future-proof
              </span>
              {/* Hand-drawn oval loop encircling future-proof */}
              <svg
                viewBox="0 0 240 70"
                fill="none"
                className="absolute inset-0 w-full h-full pointer-events-none text-white overflow-visible"
              >
                <ellipse
                  cx="120"
                  cy="35"
                  rx="115"
                  ry="30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            </span>{" "}
            collective of 8 specialized AI agents.
            <br />
            <span className="text-[var(--color-lightgreen)] underline decoration-wavy underline-offset-8">
              not to brag!
            </span>
          </h2>
        </div>

        {/* ---------------- Staggered Agent Swarm Cards (Zero Random Dutch Photos!) ---------------- */}
        <div className="relative my-16 py-8">
          {/* Background Organic Blobs */}
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="absolute top-10 right-10 w-64 md:w-96 h-auto text-[var(--color-green)] opacity-40 pointer-events-none"
          >
            <path
              d="M 100 20 C 130 5, 170 30, 180 70 C 190 110, 160 150, 120 175 C 80 200, 40 180, 25 140 C 10 100, 30 60, 60 30 Z"
              fill="currentColor"
            />
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {agentCards.map((agent) => {
              const isActive = activeAgentId === agent.id;
              return (
                <div
                  key={agent.id}
                  onClick={() => setActiveAgentId(agent.id)}
                  data-inertia-element
                  data-custom-cursor="click"
                  className={`group relative p-4 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between h-56 sm:h-64 ${
                    agent.color
                  } ${agent.textColor} ${agent.tilt} ${
                    isActive
                      ? "scale-105 rotate-0 z-30 shadow-[6px_6px_0px_white] border-white"
                      : "border-black/30 hover:scale-102 hover:rotate-0 hover:z-20 shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {/* Sticker badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-80">
                      AI AGENT
                    </span>
                    <img
                      src={agent.sticker}
                      alt={agent.name}
                      className="w-8 h-8 drop-shadow-md group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div>
                    <div className="font-display font-black text-2xl leading-none">
                      {agent.name}
                    </div>
                    <div className="font-mono text-xs opacity-80 mt-1 font-medium">
                      {agent.role}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-current/20 flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold underline">
                      {isActive ? "active" : "inspect →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Interactive Agent Intelligence Dialogue Box ---------------- */}
        <div className="relative mt-20 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border-2 border-white/20 backdrop-blur-xl shadow-[8px_8px_0px_var(--color-dark)]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-black text-2xl text-white">
                {activeAgentId.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[var(--color-lightgreen)]">
                {currentData.roleTitle}
              </span>
              <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-orange)] text-[var(--color-dark)] text-[10px] font-mono font-bold">
                {currentData.stats}
              </span>
            </div>

            {/* Agent Selector Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {mockAgents.map((ag) => (
                <button
                  key={ag.id}
                  onClick={() => setActiveAgentId(ag.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    activeAgentId === ag.id
                      ? "bg-[var(--color-orange)] text-[var(--color-dark)] font-bold shadow-sm"
                      : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {ag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dialogue Stream */}
          <div className="mt-6 space-y-4">
            {/* User prompt */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 mt-0.5">
                U
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/10 text-white font-mono text-sm leading-relaxed max-w-2xl border border-white/10">
                "{currentData.prompt}"
              </div>
            </div>

            {/* Agent response */}
            <div className="flex items-start gap-3">
              <div className={`w-7 h-7 rounded-full ${currentData.badgeColor} ${currentData.textColor} flex items-center justify-center font-display font-black text-xs shrink-0 mt-0.5 shadow-sm`}>
                {activeAgentId.charAt(0).toUpperCase()}
              </div>
              <div className="space-y-3 max-w-3xl">
                <div className="p-4 rounded-2xl rounded-tl-sm bg-white/15 text-white font-mono text-sm leading-relaxed border border-white/20 shadow-inner">
                  {currentData.reply}
                </div>
                <div className="text-xs font-mono text-[var(--color-lightgreen)] italic pl-1 flex items-center gap-2">
                  <span>✦</span>
                  <span>{currentData.unhingedQuote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
