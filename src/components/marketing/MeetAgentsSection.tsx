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
      data-bg-section="dark"
      data-theme-section="dark"
      className="team"
    >
      <div className="container is--large">
        {/* ---------------- Truus .team headline with hand-drawn SVG decorations ---------------- */}
        <div className="team__row-text">
          <div className="team__col-text">
            <h2 className="is--text-balance">
              <span>We are a </span>
              <em className="is--relative">
                <span>young, </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 201 86"
                  fill="none"
                  data-scroll-animation="draw"
                  className="team__h2-circle-svg"
                >
                  <path
                    d="M94.2928 1.00027C123.974 0.963816 154.146 4.60865 181.273 16.5546C189.974 20.3907 199.369 26.6143 199.971 36.0452C200.401 42.8702 195.929 49.03 190.946 53.75C180.208 63.9191 166.386 70.3066 152.306 74.9538C125.258 83.8745 96.2711 86.9179 67.9394 83.8289C50.4851 81.9245 33.011 77.6054 17.9651 68.6209C9.40333 63.509 1.07316 55.618 1.00038 45.7041C0.960683 39.7721 4.01088 34.1226 8.27852 29.9767C12.5461 25.8307 17.9452 23.015 23.4369 20.6915C48.2553 10.2126 75.8527 8.8093 102.795 7.54272"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </em>
              <span>future-proof team of </span>
              <span data-count-display="team">8</span>
              <span> specialized career agents </span>
              <em className="is--relative is--inline-block">
                <span>wunderkinder.</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 403 17"
                  fill="none"
                  data-scroll-animation="draw"
                  className="team__h2-line-svg"
                >
                  <path
                    d="M1 16C25.8389 14.2222 50.643 12.2137 75.2387 9.47009C107.364 5.99145 144.414 1.26496 174.898 1C178.242 1.35897 168.254 2.8718 166.786 3.22223C163.842 3.76924 160.464 4.41881 157.146 5.11966C152.23 6.22223 134.982 9.64957 144.171 12.1282C152.23 13.8974 167.551 13.4701 178.572 13.094C200.11 12.2393 222.066 10.2137 243.639 8.99146C296.296 5.69231 349.291 6.34188 402 8.58975"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </em>
              <span> not to brag!</span>
            </h2>
          </div>
        </div>

        {/* ---------------- Authentic Team Grid with Organic Blobs and Cards ---------------- */}
        <div data-team-grid-init="" className="team__grid">
          <div className="team__grid-before"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 436 511" fill="none" className="team-grid__blob-1">
            <path d="M436 199.141V199.315C435.019 225.786 426.015 251.582 410.908 273.329C402.123 287.217 392.574 300.975 380.039 311.75C374.873 318.564 368.442 324.05 361.422 328.926C357.302 331.473 353.487 334.346 349.476 337.046C344.244 339.985 338.772 342.597 333.213 344.861C325.605 347.887 316.994 347.995 309.058 349.432C308.208 349.606 307.14 349.846 306.595 350.434C305.636 351.37 306.072 352.893 306.464 354.047C307.816 357.748 309.146 361.361 310.606 364.844C314.312 372.616 316.492 380.866 317.43 389.465C319.152 403.985 316.187 418.439 310.911 431.892C304.459 447.348 292.316 459.669 279.628 470.227C263.845 481.177 246.907 490.537 228.922 497.242C222.294 500.246 215.318 502.336 208.233 503.903C204.048 505.471 199.993 506.864 195.524 507.277C186.019 508.388 176.754 511.152 167.053 511C154.562 511.043 141.765 509.367 130.298 504.186C127.661 503.163 125.306 501.618 123.279 499.658C119.268 495.936 114.668 492.671 111.725 487.947C104.465 475.626 103.572 460.148 106.166 446.412C107.67 438.271 108.302 429.846 110.94 421.922C113.73 414.499 116.87 407.272 119.769 399.849C121.535 395.8 118.374 396.453 115.823 397.476C105.861 401.046 95.9416 405.073 85.4994 406.88C76.5614 408.926 67.3836 407.903 58.4674 406.88C54.2382 406.662 49.9872 406.118 45.976 404.812C34.9234 401.416 25.2442 394.145 17.2654 385.917C9.91877 376.317 4.97017 365.149 2.63757 353.329C-0.654231 342.074 -0.458031 330.014 0.849969 318.433C0.762769 290.439 16.0664 256.284 34.1386 235.103C39.8502 226.656 47.8072 219.864 56.1566 214.096C62.4568 210.852 68.3864 206.586 75.515 204.975C84.9326 203.494 94.5464 202.188 104.008 203.429C116.325 205.932 128.642 209.677 139.672 215.75C152.36 224.697 145.188 209.524 143.248 203.581C138.277 189.932 135.465 175.63 131.715 161.611C129.819 152.773 128.816 143.783 128.009 134.792C126.767 128.37 126.331 121.883 125.917 115.374C125.306 102.727 127.312 90.1662 128.227 77.6274C131.04 65.1974 134.266 52.898 139.869 41.2953C154.104 10.9279 189.093 -21.1593 214.446 18.3075C221.488 32 226.872 47.0422 229.27 62.2804C229.728 68.7239 231.254 75.0586 231.843 81.5022C232.017 86.9879 231.93 92.4736 232.235 97.9594C232.322 109.344 231.974 120.795 231.93 132.202C232.039 134.117 228.595 150.183 233.805 142.607C241.435 129.35 246.798 114.721 255.932 102.313C261.077 95.456 266.527 88.7512 272.325 82.4382C275.617 79.5865 278.647 77.3879 281.503 73.992C292.621 66.1552 304.764 56.4899 319.239 60.8219C343.197 70.7702 308.644 125.715 300.469 140.321C297.548 145.546 294.561 150.814 290.921 155.581C288.654 158.716 290.376 158.672 292.861 157.17C304.371 150.509 316.536 144.653 329.485 141.366C349.476 133.53 371.755 131.331 392.879 135.315C401.599 138.362 409.949 142.498 417.143 148.376C422.571 152.49 425.47 158.564 428.37 164.55C431.378 168.686 432.403 173.671 433.427 178.678C434.757 185.339 436.022 192.458 435.891 199.162L436 199.141Z" fill="#2D7864"></path>
          </svg>

          {/* Cards for each of the core agents */}
          {agentCards.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setActiveAgentId(agent.id)}
              className="team-card__wrap cursor-pointer"
            >
              <div className="team-card">
                <div className="before__125"></div>
                <div className="team-card__target">
                  <img
                    src={
                      agent.id === "orbit"
                        ? "/team/ferry.avif"
                        : agent.id === "scout"
                        ? "/team/destiny.avif"
                        : agent.id === "lens"
                        ? "/team/kimmi.avif"
                        : agent.id === "coach"
                        ? "/team/kevin.avif"
                        : agent.id === "draft"
                        ? "/team/japie.avif"
                        : "/team/patrick.avif"
                    }
                    alt={agent.name}
                    className="cover-image"
                  />
                </div>
                <div className="team-card__content">
                  <div className="tag__wrap">
                    <div data-theme={agent.id === "orbit" ? "Lime" : agent.id === "scout" ? "Orange" : "Pink"} className="tag">
                      <h4 className="tag__h4">{agent.name}</h4>
                    </div>
                  </div>
                  <h3 className="team-card__h3">{agent.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- Interactive Agent Intelligence Dialogue Box ---------------- */}
        <div className="relative mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border-2 border-white/20 backdrop-blur-xl shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-black text-2xl text-white">
                {activeAgentId.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[var(--color-lightgreen)]">
                {currentData.roleTitle}
              </span>
              <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-orange)] text-black text-[10px] font-mono font-bold">
                {currentData.stats}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {mockAgents.map((ag) => (
                <button
                  key={ag.id}
                  type="button"
                  onClick={() => setActiveAgentId(ag.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    activeAgentId === ag.id
                      ? "bg-[var(--color-orange)] text-black font-bold shadow-sm"
                      : "bg-white/10 text-white/70 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {ag.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 mt-0.5">U</div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/10 text-white font-mono text-sm leading-relaxed max-w-2xl border border-white/10">
                "{currentData.prompt}"
              </div>
            </div>
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
