import { useState } from "react";
import { AppPage, Job } from "../../types";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { Starburst, StickerBadge } from "../common/Doodles";

interface JobDetailPageProps {
  job: Job;
  onNavigate: (page: AppPage, param?: string) => void;
  isSaved: boolean;
  onToggleSave: (jobId: string) => void;
  onApply: (job: Job) => void;
}

export function JobDetailPage({
  job,
  onNavigate,
  isSaved,
  onToggleSave,
  onApply,
}: JobDetailPageProps) {
  const [draftModalOpen, setDraftModalOpen] = useState(false);
  const [draftStatus, setDraftStatus] = useState<"idle" | "generating" | "ready">("idle");
  const [draftContent, setDraftContent] = useState("");

  const handleGenerateDraft = () => {
    setDraftStatus("generating");
    setDraftModalOpen(true);
    setTimeout(() => {
      setDraftStatus("ready");
      setDraftContent(
        `Dear ${job.company} Hiring Team,\n\nI’m writing to express my strong interest in the ${job.title} role. Having led the Blade design system refactor at Razorpay—which unified 300+ product surfaces and drove a 31% merchant onboarding lift—I deeply admire ${job.company}’s uncompromising bar for ergonomic, high-craft systems.\n\nMy background combines hands-on token architecture, multi-brand Figma variables, and close cross-functional partnership with engineering leads. I would love the opportunity to contribute to ${job.company}’s next design phase.\n\nBest regards,\nNaina Kapoor\nhttps://blade.razorpay.com`,
      );
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Back to Discovery Link */}
      <button
        type="button"
        onClick={() => onNavigate("jobs")}
        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted)] hover:text-[var(--black)] transition-colors cursor-pointer"
      >
        <span>← Back to Job Discovery</span>
      </button>

      {/* Hero Job Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--line)]">
          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-2xl text-[var(--black)] font-display font-black text-3xl grid place-items-center shrink-0 border-2 border-[var(--black)] shadow-sm"
              style={{ background: job.color }}
            >
              {job.logoLetter}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase font-bold text-[var(--orange)]">
                  {job.company}
                </span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-[var(--muted)] font-mono">{job.location}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                  Verified Direct
                </span>
              </div>
              <h1 className="font-display font-black text-2xl md:text-3xl text-[var(--black)]">
                {job.title}
              </h1>
              <div className="text-xs text-[var(--muted)] mt-1 font-mono">
                {job.department} · {job.type} · Posted {job.postedAgo}
              </div>
            </div>
          </div>

          {/* Match Score Badge & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)] text-right">
              <div className="font-display font-black text-2xl text-emerald-700 leading-none">
                {job.match}%
              </div>
              <div className="text-[10px] font-mono uppercase text-[var(--muted)] mt-0.5">
                Strong Trajectory Fit
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleSave(job.id)}
                className={`p-3 rounded-xl border border-[var(--line)] hover:border-[var(--black)] transition-all cursor-pointer ${
                  isSaved
                    ? "bg-[var(--orange)] text-white shadow-xs"
                    : "bg-white text-[var(--black)]"
                }`}
                title={isSaved ? "Saved" : "Save to shortlist"}
              >
                <Icon name="bookmark" size={18} />
              </button>
              <Button variant="primary" size="md" icon="arrow" onClick={handleGenerateDraft}>
                Prepare with Draft
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
            <span className="text-[var(--muted)] uppercase block text-[10px]">ESTIMATED PAY</span>
            <strong className="text-sm font-bold text-[var(--black)]">{job.salary}</strong>
          </div>
          <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
            <span className="text-[var(--muted)] uppercase block text-[10px]">EXPERIENCE</span>
            <strong className="text-sm font-bold text-[var(--black)]">{job.experience}</strong>
          </div>
          <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
            <span className="text-[var(--muted)] uppercase block text-[10px]">WORK MODEL</span>
            <strong className="text-sm font-bold text-[var(--black)]">{job.location}</strong>
          </div>
          <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
            <span className="text-[var(--muted)] uppercase block text-[10px]">
              APPLICATION TYPE
            </span>
            <strong className="text-sm font-bold text-emerald-700">Direct Portal / Referral</strong>
          </div>
        </div>
      </div>

      {/* 2-Column Detail Layout: Description & AI Analysis Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Full Job Specification */}
        <div className="lg:col-span-7 space-y-6">
          {/* Role Overview */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              ABOUT THE OPPORTUNITY
            </span>
            <p className="font-body text-base text-[var(--black)] leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              KEY RESPONSIBILITIES
            </span>
            <ul className="space-y-3 font-body text-sm text-[var(--black)]">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] mt-2 shrink-0" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills Matrix */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              REQUIRED SKILLS & EVIDENCE OVERLAP
            </span>
            <div className="space-y-3">
              <div className="text-xs text-[var(--muted)]">
                Skills you have documented with verifiable projects:
              </div>
              <div className="flex flex-wrap gap-2">
                {job.matchedSkills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold"
                  >
                    <Icon name="check" size={13} className="text-emerald-600" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>

              {job.missingSkills.length > 0 && (
                <div className="pt-3 border-t border-[var(--line)] space-y-2">
                  <div className="text-xs text-amber-800 font-bold flex items-center gap-1.5">
                    <span>Identified skill gap for this role:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.missingSkills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold"
                      >
                        <span>!</span>
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Lens AI Analysis Panel */}
        <aside className="lg:col-span-5 space-y-6 sticky top-24">
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[var(--line)]">
              <div className="w-9 h-9 rounded-full bg-[var(--blue)] text-[var(--black)] font-display font-black text-sm grid place-items-center shadow-xs">
                L
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-[var(--muted)]">
                  LENS // SKILL INTELLIGENCE
                </span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Why this fits you
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                  <Icon name="check" size={14} className="text-emerald-700" />
                  <span>Demonstrated Systems Scale</span>
                </div>
                <p>
                  Your Blade 2.0 multi-brand token system at Razorpay directly matches {job.company}
                  &apos;s need for ergonomic component architecture.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-blue-900">
                  <Icon name="spark" size={14} className="text-blue-700" />
                  <span>High Autonomy Match</span>
                </div>
                <p>
                  {job.company} relies heavily on self-directed product builders. Your experience
                  guiding 4 cross-functional squads validates this trait.
                </p>
              </div>

              {job.missingSkills.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900">
                    <span>! Recommendation</span>
                  </div>
                  <p>
                    Add a quick interactive Principle or Rive prototype to your portfolio case study
                    to address the motion gap.
                  </p>
                </div>
              )}
            </div>

            {/* Dimensional Score Breakdown */}
            <div className="pt-4 border-t border-[var(--line)] grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <div className="font-display font-black text-lg text-[var(--black)]">
                  {job.trajectoryFitScore}
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                  Trajectory
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <div className="font-display font-black text-lg text-[var(--black)]">
                  {job.cultureFitScore}
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Culture</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <div className="font-display font-black text-lg text-[var(--orange)]">
                  {job.skillFitScore}
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                  Skill Exact
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              icon="bot"
              fullWidth
              onClick={() => onNavigate("agents", "lens")}
            >
              Ask Lens more about this role
            </Button>
          </div>
        </aside>
      </div>

      {/* Draft Tailored Narrative Modal */}
      {draftModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-2 border-[var(--black)] shadow-[8px_8px_0px_var(--black)] max-w-2xl w-full p-6 md:p-8 space-y-6 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--lavender)] text-[var(--black)] font-display font-black text-lg grid place-items-center">
                  D
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--black)]">
                    Tailored Application Note
                  </h3>
                  <span className="text-xs text-[var(--muted)] font-mono">
                    Crafted by Draft for {job.company} · Human Approval Required
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDraftModalOpen(false)}
                className="p-1 rounded-lg hover:bg-[var(--cream)]"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {draftStatus === "generating" ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-8 h-8 rounded-full border-4 border-[var(--orange)] border-t-transparent animate-spin mx-auto" />
                <p className="font-mono text-xs text-[var(--muted)]">
                  Draft is tailoring your Blade 2.0 achievements to {job.company}&apos;s specific
                  requirements...
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={draftContent}
                  onChange={(e) => setDraftContent(e.target.value)}
                  rows={8}
                  className="w-full p-4 rounded-xl bg-[var(--cream)] border-2 border-[var(--black)] text-sm font-body text-[var(--black)] focus:outline-none"
                />
                <div className="text-xs text-[var(--muted)] flex items-center gap-1.5">
                  <Icon name="shield" size={14} className="text-emerald-600 shrink-0" />
                  <span>
                    ORBIT Human-Control Guarantee: Nothing is sent or submitted automatically.
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--line)]">
              <Button variant="ghost" size="sm" onClick={() => setDraftModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                icon="check"
                onClick={() => {
                  onApply(job);
                  setDraftModalOpen(false);
                  onNavigate("applications");
                }}
              >
                Approve & Move to Applications
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
