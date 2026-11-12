import { useState } from "react";
import { CareerProfileData, AppPage } from "../../types";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { StickerBadge } from "../common/Doodles";

interface CareerProfilePageProps {
  profile: CareerProfileData;
  onUpdateProfile: (updated: Partial<CareerProfileData>) => void;
  onNavigate: (page: AppPage, param?: string) => void;
}

export function CareerProfilePage({
  profile,
  onUpdateProfile,
  onNavigate,
}: CareerProfilePageProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioText, setBioText] = useState(profile.summary);
  const [newSkillName, setNewSkillName] = useState("");
  const [isAddSkillOpen, setIsAddSkillOpen] = useState(false);
  const [githubSyncing, setGithubSyncing] = useState(false);

  const handleSaveBio = () => {
    onUpdateProfile({ summary: bioText });
    setIsEditingBio(false);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    const updatedSkills = [
      ...profile.skills,
      { name: newSkillName.trim(), level: "Growing" as const, endorsementCount: 1 },
    ];
    onUpdateProfile({ skills: updatedSkills });
    setNewSkillName("");
    setIsAddSkillOpen(false);
  };

  const handleRemoveSkill = (skillName: string) => {
    const updatedSkills = profile.skills.filter((s) => s.name !== skillName);
    onUpdateProfile({ skills: updatedSkills });
  };

  const handleToggleGithub = () => {
    setGithubSyncing(true);
    setTimeout(() => {
      setGithubSyncing(false);
      onUpdateProfile({ githubConnected: !profile.githubConnected });
    }, 800);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            CAREER PROFILE · INTELLIGENCE LAYER
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            The intelligence behind{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">every match.</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="md"
            icon="bot"
            onClick={() => onNavigate("agents", "lens")}
          >
            Ask Lens for Profile Audit
          </Button>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (4 cols): User Identity & Strength Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] text-center space-y-4">
            <div className="relative inline-block mx-auto">
              <div className="w-20 h-20 rounded-full bg-[var(--black)] text-white font-mono text-2xl font-bold grid place-items-center mx-auto border-2 border-[var(--black)] shadow-sm">
                {profile.avatarInitials}
              </div>
              <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[var(--lime)] text-[var(--black)] font-mono text-[11px] font-bold border border-[var(--black)]">
                {profile.profileStrength}%
              </span>
            </div>

            <div>
              <h2 className="font-display font-bold text-xl text-[var(--black)]">{profile.name}</h2>
              <div className="text-xs text-[var(--orange)] font-bold font-mono mt-0.5">
                {profile.headline}
              </div>
              <div className="text-xs text-[var(--muted)] mt-1">
                {profile.location} · {profile.remotePreference}
              </div>
            </div>

            {/* Profile Strength Progress */}
            <div className="p-3.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] text-left space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>PROFILE STRENGTH</span>
                <span className="text-emerald-700">{profile.profileStrength}% STRONG</span>
              </div>
              <div className="h-2 rounded-full bg-white border border-[var(--line)] overflow-hidden">
                <div
                  className="h-full bg-[var(--orange)] rounded-full"
                  style={{ width: `${profile.profileStrength}%` }}
                />
              </div>
              <p className="text-[11px] text-[var(--muted)] leading-tight">
                Add 1 motion prototype or open-source repo to unlock 94% Exceptional tier.
              </p>
            </div>

            {/* GitHub Integration Card */}
            <div className="p-4 rounded-xl bg-white border border-[var(--line)] text-left space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="github" size={18} />
                  <span className="font-bold text-xs">GitHub Verification</span>
                </div>
                <span
                  className={`w-2 h-2 rounded-full ${
                    profile.githubConnected ? "bg-emerald-500" : "bg-neutral-300"
                  }`}
                />
              </div>
              <p className="text-[11px] text-[var(--muted)]">
                {profile.githubConnected
                  ? `Connected as @${profile.githubUsername}. Lens indexes repository code for proof of work.`
                  : "Connect GitHub to let Lens extract design token and frontend evidence."}
              </p>
              <button
                type="button"
                onClick={handleToggleGithub}
                disabled={githubSyncing}
                className="w-full py-1.5 px-3 rounded-lg border border-[var(--line)] hover:border-[var(--black)] text-xs font-mono font-bold transition-all text-center"
              >
                {githubSyncing
                  ? "Syncing commits..."
                  : profile.githubConnected
                    ? "Disconnect GitHub"
                    : "Connect GitHub profile"}
              </button>
            </div>
          </div>
        </aside>

        {/* Right Column (8 cols): Sections */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: Professional Story / Bio */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--orange)]">01</span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Professional Narrative
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditingBio(!isEditingBio)}
                className="text-xs font-mono font-bold text-[var(--orange)] hover:underline cursor-pointer"
              >
                {isEditingBio ? "Cancel" : "Edit Bio"}
              </button>
            </div>

            {isEditingBio ? (
              <div className="space-y-3">
                <textarea
                  value={bioText}
                  onChange={(e) => setBioText(e.target.value)}
                  rows={4}
                  className="w-full p-3 rounded-xl border-2 border-[var(--black)] bg-[var(--cream)] text-sm font-body outline-none"
                />
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setIsEditingBio(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleSaveBio}>
                    Save Narrative
                  </Button>
                </div>
              </div>
            ) : (
              <p className="font-body text-sm md:text-base text-[var(--black)]/90 leading-relaxed">
                {profile.summary}
              </p>
            )}
          </div>

          {/* Section 2: Skills & Evidence */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--orange)]">02</span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Skills & Evidence Overlap
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddSkillOpen(true)}
                className="text-xs font-mono font-bold text-[var(--orange)] hover:underline cursor-pointer"
              >
                + Add Skill
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] text-xs font-medium text-[var(--black)] group"
                >
                  <span className="font-bold">{skill.name}</span>
                  <span className="text-[10px] font-mono text-[var(--muted)]">· {skill.level}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill.name)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity ml-1"
                    title="Remove skill"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {isAddSkillOpen && (
              <form
                onSubmit={handleAddSkill}
                className="flex items-center gap-2 pt-3 border-t border-[var(--line)]"
              >
                <input
                  type="text"
                  placeholder="Enter skill name (e.g. Design Tokens, Next.js, Rive)..."
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="flex-1 p-2 rounded-lg border border-[var(--line)] bg-[var(--cream)] text-xs outline-none"
                  autoFocus
                />
                <Button type="submit" variant="primary" size="sm">
                  Add
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsAddSkillOpen(false)}>
                  Cancel
                </Button>
              </form>
            )}
          </div>

          {/* Section 3: Experience Timeline */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--orange)]">03</span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Verified Experience
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="flex items-start gap-4 text-xs font-body">
                  <div className="w-10 h-10 rounded-xl bg-[var(--black)] text-white font-display font-bold text-base grid place-items-center shrink-0">
                    {exp.company[0]}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-bold text-base text-[var(--black)]">
                        {exp.role} · <span className="text-[var(--orange)]">{exp.company}</span>
                      </h4>
                      <span className="font-mono text-[11px] text-[var(--muted)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{exp.description}</p>
                    {exp.highlightMetric && (
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono text-[11px] font-bold">
                        ★ {exp.highlightMetric}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Projects Showcase */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--orange)]">04</span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Key Projects & Proof of Work
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-2"
                >
                  <h4 className="font-display font-bold text-base text-[var(--black)]">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-[var(--muted)] border border-[var(--line)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Career Preferences */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--orange)]">05</span>
                <h3 className="font-display font-bold text-lg text-[var(--black)]">
                  Career Preferences
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <span className="text-[10px] text-[var(--muted)] block">TARGET ROLE</span>
                <strong className="text-[var(--black)]">{profile.preferences.targetRole}</strong>
              </div>
              <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <span className="text-[10px] text-[var(--muted)] block">LOCATIONS</span>
                <strong className="text-[var(--black)]">
                  {profile.preferences.preferredLocations.join(", ")}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <span className="text-[10px] text-[var(--muted)] block">MIN COMPENSATION</span>
                <strong className="text-emerald-700">{profile.preferences.minCompensation}</strong>
              </div>
              <div className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)]">
                <span className="text-[10px] text-[var(--muted)] block">COMPANY STAGE</span>
                <strong className="text-[var(--black)]">
                  {profile.preferences.preferredCompanyStages.join(" / ")}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
