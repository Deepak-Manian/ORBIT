import { AppPage, Job } from "../../types";
import { mockJobs } from "../../mock/jobs";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { Starburst, StickerBadge } from "../common/Doodles";

interface DashboardPageProps {
  onNavigate: (page: AppPage, param?: string) => void;
  onSelectJob: (job: Job) => void;
}

export function DashboardPage({ onNavigate, onSelectJob }: DashboardPageProps) {
  const recommendedJobs = mockJobs.slice(0, 3);

  const agentActivities = [
    {
      agent: "Scout",
      avatar: "S",
      color: "#FF633D",
      action: "Discovered 4 verified openings",
      detail: "Matched Linear, BrowserStack, CRED, and Atlassian for design systems.",
      time: "12m ago",
    },
    {
      agent: "Lens",
      avatar: "L",
      color: "#718CFF",
      action: "Analyzed Linear job compatibility",
      detail: "Calculated 94% fit based on Blade 2.0 multi-brand tokens.",
      time: "38m ago",
    },
    {
      agent: "Track",
      avatar: "T",
      color: "#175C4A",
      action: "Scheduled follow-up reminder",
      detail: "Razorpay Design Lead application referral status check due tomorrow at 10 AM.",
      time: "1h ago",
    },
    {
      agent: "Signal",
      avatar: "M",
      color: "#DDA7F5",
      action: "Updated Bengaluru tech salary benchmark",
      detail: "Staff design compensation index adjusted upward to ₹38L–₹55L range.",
      time: "3h ago",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            MONDAY · 11 NOVEMBER 2026
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            Good morning, Naina.{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              Your signal is rising.
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="md"
            icon="bot"
            onClick={() => onNavigate("agents", "orbit")}
          >
            Ask ORBIT
          </Button>
          <Button variant="primary" size="md" icon="arrow" onClick={() => onNavigate("jobs")}>
            Explore roles
          </Button>
        </div>
      </div>

      {/* Daily Career Briefing Hero Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] relative overflow-hidden">
        <div className="absolute top-4 right-4 hidden sm:block">
          <StickerBadge color="lime" rotate="3deg">
            Daily Digest
          </StickerBadge>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[var(--black)] text-white font-display font-black text-2xl grid place-items-center shrink-0 border-2 border-[var(--black)] shadow-[2px_2px_0px_var(--orange)]">
            O
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                ORBIT CAREER ORCHESTRATION BRIEFING
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-[var(--black)]">
              Three high-signal opportunities deserve your focus today.
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--muted)] max-w-3xl leading-relaxed">
              Scout identified a rare 94% fit at Linear, your application at CRED moved forward into
              the craft interview round, and Razorpay requires a warm follow-up check tomorrow
              morning.
            </p>
          </div>
        </div>
      </div>

      {/* 2x2 Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Recommended Roles & Pipeline */}
        <div className="lg:col-span-7 space-y-8">
          {/* Recommended Roles */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  CURATED FOR YOU
                </span>
                <h3 className="font-display font-bold text-xl text-[var(--black)]">
                  High-Signal Matches
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigate("jobs")}
                className="text-xs font-mono font-bold text-[var(--orange)] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View all 8 roles</span>
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="space-y-3">
              {recommendedJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => {
                    onSelectJob(job);
                    onNavigate("job-detail", job.id);
                  }}
                  className="p-4 rounded-xl bg-[var(--cream)] border border-[var(--line)] hover:border-[var(--black)] hover:shadow-[3px_3px_0px_var(--black)] transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="w-12 h-12 rounded-xl text-[var(--black)] font-display font-black text-xl grid place-items-center shrink-0 shadow-sm"
                      style={{ background: job.color }}
                    >
                      {job.logoLetter}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-base text-[var(--black)] group-hover:text-[var(--orange)] transition-colors truncate">
                        {job.title}
                      </div>
                      <div className="text-xs text-[var(--muted)] truncate">
                        {job.company} · {job.location} · {job.salary}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {job.matchedSkills.slice(0, 2).map((s) => (
                          <span
                            key={s}
                            className="px-1.5 py-0.5 rounded bg-white text-[10px] text-[var(--muted)] font-mono border border-[var(--line)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-display font-black text-lg text-emerald-700">
                      {job.match}%
                    </div>
                    <div className="text-[10px] font-mono uppercase text-[var(--muted)]">match</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Pipeline Overview */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  ACTIVE OPPORTUNITIES
                </span>
                <h3 className="font-display font-bold text-xl text-[var(--black)]">
                  Pipeline Status
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigate("applications")}
                className="text-xs font-mono font-bold text-[var(--orange)] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Open Kanban board</span>
                <Icon name="arrow" size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stage: "Saved", count: 3, color: "bg-[var(--blue)]", textColor: "text-blue-900" },
                {
                  stage: "Applied",
                  count: 2,
                  color: "bg-[var(--orange)]",
                  textColor: "text-orange-900",
                },
                {
                  stage: "Interview",
                  count: 2,
                  color: "bg-[var(--lavender)]",
                  textColor: "text-purple-900",
                },
                {
                  stage: "Offer",
                  count: 1,
                  color: "bg-[var(--lime)]",
                  textColor: "text-emerald-900",
                },
              ].map((item) => (
                <div
                  key={item.stage}
                  onClick={() => onNavigate("applications")}
                  className="p-3.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] hover:border-[var(--black)] cursor-pointer text-center space-y-1 transition-all"
                >
                  <span className="font-mono text-xs font-bold uppercase text-[var(--muted)] block">
                    {item.stage}
                  </span>
                  <div className="font-display font-black text-2xl text-[var(--black)]">
                    {item.count}
                  </div>
                  <div className={`h-1.5 w-full rounded-full ${item.color}`} />
                </div>
              ))}
            </div>

            {/* Urgent Follow-up Alert Box */}
            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-900 grid place-items-center shrink-0">
                  <Icon name="clock" size={18} />
                </div>
                <div>
                  <div className="font-bold text-xs text-amber-900">
                    Follow up with Razorpay recruiter
                  </div>
                  <div className="text-[11px] text-amber-700">
                    Recommended tomorrow at 10:00 AM (Day 3 after internal referral submission)
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                icon="edit"
                onClick={() => onNavigate("applications")}
              >
                Prepare note
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Career Momentum & Agent Activity */}
        <div className="lg:col-span-5 space-y-8">
          {/* Career Momentum Score Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  CAREER INTELLIGENCE
                </span>
                <h3 className="font-display font-bold text-xl text-[var(--black)]">
                  Momentum Score
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                ↑ +8% this month
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0 grid place-items-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#F2EDE5" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#FF633D"
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - 0.87)}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-black text-2xl text-[var(--black)]">87</span>
                  <span className="text-[10px] font-mono text-[var(--muted)] uppercase">
                    strong
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between gap-4 font-mono">
                  <span className="text-[var(--muted)]">Profile completion:</span>
                  <span className="font-bold text-[var(--black)]">94%</span>
                </div>
                <div className="flex justify-between gap-4 font-mono">
                  <span className="text-[var(--muted)]">New weekly fits:</span>
                  <span className="font-bold text-[var(--black)]">18 roles</span>
                </div>
                <div className="flex justify-between gap-4 font-mono">
                  <span className="text-[var(--muted)]">Next target:</span>
                  <span className="font-bold text-[var(--orange)]">92 (Exceptional)</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] leading-relaxed pt-2 border-t border-[var(--line)]">
              Your profile momentum is in the <strong>top 6% of senior design candidates</strong> in
              India this quarter.
            </p>
          </div>

          {/* Live Agent Feed */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Live Agent Activity
                </h3>
              </div>
              <span className="text-xs font-mono text-[var(--muted)]">8 specialized</span>
            </div>

            <div className="space-y-3.5">
              {agentActivities.map((act) => (
                <div key={act.detail} className="flex items-start gap-3 text-xs">
                  <div
                    className="w-7 h-7 rounded-full text-[var(--black)] font-display font-black text-xs grid place-items-center shrink-0 shadow-xs"
                    style={{ background: act.color }}
                  >
                    {act.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <strong className="font-bold text-[var(--black)]">{act.agent}</strong>
                      <span className="text-[10px] font-mono text-[var(--muted)]">{act.time}</span>
                    </div>
                    <div className="font-medium text-[var(--black)]/90">{act.action}</div>
                    <div className="text-[11px] text-[var(--muted)] line-clamp-1">{act.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="pill"
              size="sm"
              icon="bot"
              fullWidth
              onClick={() => onNavigate("agents")}
            >
              Open Agent Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
