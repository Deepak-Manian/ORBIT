import { useState } from "react";
import { mockAgents } from "../../mock/agents";
import { Icon } from "../common/Icon";

export function MeetAgentsSection() {
  const [activeAgentId, setActiveAgentId] = useState("orbit");

  const activeAgent = mockAgents.find((a) => a.id === activeAgentId) || mockAgents[0];

  const agentDialogues: Record<string, { prompt: string; reply: string; portrait: string; sticker: string }> = {
    orbit: {
      prompt: "What is my strongest career move right now?",
      reply:
        "Based on your recent design token architecture work at Razorpay, Scout surfaced the Lead Design System role at Linear and Staff Product Designer at CRED. Linear deepens your tool-craft trajectory, while CRED gives you leadership scope. Shall Draft prepare bespoke briefs?",
      portrait: "/team/ferry.avif",
      sticker: "/stickers/smiley.svg",
    },
    scout: {
      prompt: "Find roles paying > ₹45L that value ergonomic systems.",
      reply:
        "Scout checked 18 company registries across Bengaluru and Remote. Linear (₹48–62L), BrowserStack (₹45–60L), and Razorpay (₹45–55L) have verified openings today. Zero agency reposts.",
      portrait: "/team/destiny.avif",
      sticker: "/stickers/good-vibes.svg",
    },
    lens: {
      prompt: "Evaluate my compatibility with Linear's Product Designer role.",
      reply:
        "94% compatibility match. Your design token refactor precisely matches their requirement for ergonomic, keyboard-first systems. One gap: they look for interactive Rive/Principle motion work.",
      portrait: "/team/patrick.avif",
      sticker: "/stickers/cute.svg",
    },
    draft: {
      prompt: "Draft an introduction to the Design Director at Linear.",
      reply:
        "I drafted a 3-paragraph peer note focused on your component ergonomics and how they parallel Linear Insights. Zero generic buzzwords like 'passionate' or 'synergy'. Ready for your review.",
      portrait: "/team/kevin.avif",
      sticker: "/stickers/lets-go.svg",
    },
    track: {
      prompt: "What follow-ups are due this week?",
      reply:
        "You have a day-3 follow-up due tomorrow for Razorpay. Your CRED design interview is confirmed for Thursday at 3 PM. Want Coach to run a 15-minute simulated practice?",
      portrait: "/team/kimmi.avif",
      sticker: "/stickers/100.svg",
    },
    coach: {
      prompt: "Simulate a tough question for CRED's craft rubric.",
      reply:
        "Here's CRED's favorite craft prompt: 'How do you defend high-effort visual polish when product managers are pushing to ship an MVP fast?' Let's run a live 2-minute response.",
      portrait: "/team/japie.avif",
      sticker: "/stickers/fistbump.svg",
    },
    signal: {
      prompt: "What is the compensation distribution for Staff Designers in India?",
      reply:
        "Median staff pay in Bengaluru is ₹42L–₹58L base, with Series C+ startups offering up to ₹72L total compensation including ESOPs. Roles requiring AI UX command a 14% premium.",
      portrait: "/team/nikki.avif",
      sticker: "/stickers/bam.svg",
    },
    sentinel: {
      prompt: "Verify this recruiter outreach message from LinkedIn.",
      reply:
        "The recruiter's domain was registered 12 days ago and asks for an upfront ₹1,500 'interview assessment fee'. This is a verified scam pattern. Sentinel flagged and quarantined it.",
      portrait: "/team/ferry.avif",
      sticker: "/stickers/hands-love.svg",
    },
  };

  const currentData = agentDialogues[activeAgentId] || agentDialogues.orbit;

  return (
    <section
      id="agents"
      className="relative py-28 px-6 md:px-12 bg-[var(--black)] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[var(--lime)]">
            <span>02</span> / the collective
          </div>
          <div className="hidden sm:inline-block px-3 py-1 rounded-full bg-[var(--orange)] text-[var(--black)] text-xs font-display font-black uppercase tracking-wider">
            8 autonomous agents
          </div>
        </div>

        {/* ---------------- Headline matching Screenshot 3 ---------------- */}
        <div className="mb-20 max-w-4xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-white">
            we are a{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              future-proof
            </span>{" "}
            collective of 8 specialized AI agents.
            <br />
            <span className="text-[var(--lime)] underline decoration-wavy underline-offset-8">
              not to brag!
            </span>
          </h2>
        </div>

        {/* ---------------- Staggered Scattered Portraits Grid (Screenshot 3) ---------------- */}
        <div className="relative my-20 py-12">
          {/* Background Organic Green Flower Blob */}
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="absolute top-10 right-10 w-64 md:w-96 h-auto text-[var(--green)] opacity-60 pointer-events-none"
          >
            <path
              d="M 100 20 C 130 5, 170 30, 180 70 C 190 110, 160 150, 120 175 C 80 200, 40 180, 25 140 C 10 100, 30 60, 60 30 Z"
              fill="currentColor"
            />
          </svg>

          {/* Background Electric Blue Organic Blob */}
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="absolute bottom-4 left-6 w-56 md:w-80 h-auto text-[var(--blue)] opacity-50 pointer-events-none"
          >
            <path
              d="M 80 25 C 120 10, 160 40, 170 80 C 180 120, 140 160, 100 170 C 60 180, 20 150, 15 110 C 10 70, 40 40, 80 25 Z"
              fill="currentColor"
            />
          </svg>

          {/* Connecting Curved Dashed Lines */}
          <svg
            viewBox="0 0 900 600"
            fill="none"
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          >
            <path
              d="M 220 160 Q 350 240, 480 180 T 720 280 T 450 480"
              stroke="white"
              strokeWidth="1.8"
              strokeDasharray="6 6"
              opacity="0.3"
            />
          </svg>

          {/* Staggered Agent Cards */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {/* 1. Patrick / Lens */}
            <div
              onClick={() => setActiveAgentId("lens")}
              className={`group relative p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                activeAgentId === "lens"
                  ? "border-[var(--orange)] shadow-[4px_4px_0px_var(--orange)] scale-105 z-20"
                  : "border-white/20 hover:border-white/50 -rotate-2 hover:rotate-0"
              }`}
              data-cursor-text="LENS"
            >
              <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden bg-zinc-800">
                <img
                  src="/team/patrick.avif"
                  alt="Patrick - Lens"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src="/stickers/cute.svg"
                  alt="Cute"
                  className="absolute bottom-2 left-2 w-10 h-10 drop-shadow-md"
                />
              </div>
              <div className="pt-2 text-center">
                <div className="font-display font-bold text-sm text-white">Lens</div>
                <div className="font-mono text-[11px] text-white/60">Resume & Skills</div>
              </div>
            </div>

            {/* 2. Ferry / ORBIT (staggered down) */}
            <div
              onClick={() => setActiveAgentId("orbit")}
              className={`group relative p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 cursor-pointer md:translate-y-8 ${
                activeAgentId === "orbit"
                  ? "border-[var(--lime)] shadow-[4px_4px_0px_var(--lime)] scale-105 z-20"
                  : "border-white/20 hover:border-white/50 rotate-3 hover:rotate-0"
              }`}
              data-cursor-text="ORBIT"
            >
              <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden bg-zinc-800">
                <img
                  src="/team/ferry.avif"
                  alt="Ferry - ORBIT"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src="/stickers/smiley.svg"
                  alt="Smiley"
                  className="absolute -top-2 -right-2 w-12 h-12 drop-shadow-md"
                />
              </div>
              <div className="pt-2 text-center">
                <div className="font-display font-bold text-sm text-[var(--lime)]">ORBIT</div>
                <div className="font-mono text-[11px] text-white/60">Orchestrator</div>
              </div>
            </div>

            {/* 3. Destiny / Scout (staggered up) */}
            <div
              onClick={() => setActiveAgentId("scout")}
              className={`group relative p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 cursor-pointer md:-translate-y-6 ${
                activeAgentId === "scout"
                  ? "border-[var(--blue)] shadow-[4px_4px_0px_var(--blue)] scale-105 z-20"
                  : "border-white/20 hover:border-white/50 -rotate-3 hover:rotate-0"
              }`}
              data-cursor-text="SCOUT"
            >
              <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden bg-zinc-800">
                <img
                  src="/team/destiny.avif"
                  alt="Destiny - Scout"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src="/stickers/good-vibes.svg"
                  alt="Good Vibes"
                  className="absolute -top-3 left-2 w-12 h-12 drop-shadow-md"
                />
              </div>
              <div className="pt-2 text-center">
                <div className="font-display font-bold text-sm text-white">Scout</div>
                <div className="font-mono text-[11px] text-white/60">Job Discovery</div>
              </div>
            </div>

            {/* 4. Japie / Coach (staggered down) */}
            <div
              onClick={() => setActiveAgentId("coach")}
              className={`group relative p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border-2 transition-all duration-300 cursor-pointer md:translate-y-12 ${
                activeAgentId === "coach"
                  ? "border-[var(--orange)] shadow-[4px_4px_0px_var(--orange)] scale-105 z-20"
                  : "border-white/20 hover:border-white/50 rotate-2 hover:rotate-0"
              }`}
              data-cursor-text="COACH"
            >
              <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden bg-zinc-800">
                <img
                  src="/team/japie.avif"
                  alt="Japie - Coach"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src="/stickers/fistbump.svg"
                  alt="Fistbump"
                  className="absolute bottom-1 right-1 w-12 h-12 drop-shadow-md"
                />
              </div>
              <div className="pt-2 text-center">
                <div className="font-display font-bold text-sm text-white">Coach</div>
                <div className="font-mono text-[11px] text-white/60">Interview Simulation</div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Interactive Agent Intelligence Dialogue Box ---------------- */}
        <div className="relative mt-24 p-6 sm:p-8 rounded-3xl bg-white/5 border-2 border-white/20 backdrop-blur-xl shadow-[6px_6px_0px_var(--black)]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-black text-xl text-white">
                {activeAgent.name.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-mono text-[var(--lime)]">
                {activeAgent.role}
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
                      ? "bg-[var(--orange)] text-[var(--black)] font-bold shadow-sm"
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
              <div className="w-8 h-8 rounded-full bg-white/20 text-white text-xs font-bold grid place-items-center shrink-0">
                YOU
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-white text-sm md:text-base font-body">
                {currentData.prompt}
              </div>
            </div>

            {/* Agent response */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--orange)] text-[var(--black)] text-xs font-display font-black grid place-items-center shrink-0 shadow">
                {activeAgent.name.charAt(0)}
              </div>
              <div className="p-4 rounded-2xl bg-[var(--cream)] text-[var(--black)] border-2 border-[var(--black)] text-sm md:text-base font-body shadow-[4px_4px_0px_var(--orange)] leading-relaxed max-w-2xl">
                {currentData.reply}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
