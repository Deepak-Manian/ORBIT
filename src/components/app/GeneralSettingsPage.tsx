import { useState } from "react";
import { AppPage } from "../../types";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { StickerBadge } from "../common/Doodles";

interface GeneralSettingsPageProps {
  onNavigate: (page: AppPage, param?: string) => void;
}

export function GeneralSettingsPage({ onNavigate }: GeneralSettingsPageProps) {
  const [searchStatus, setSearchStatus] = useState("actively-looking");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [interviewReminders, setInterviewReminders] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [exportNotice, setExportNotice] = useState(false);

  const handleExportData = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            ACCOUNT & WORKSPACE SETTINGS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            General{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">Preferences.</span>
          </h1>
        </div>
        <Button variant="outline" size="sm" icon="key" onClick={() => onNavigate("ai-settings")}>
          Manage AI Providers
        </Button>
      </div>

      <div className="space-y-6">
        {/* User Account Details */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Account Information
            </h3>
            <span className="text-xs font-mono text-[var(--muted)]">ID: user_nk_2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
            <div className="space-y-1">
              <label className="font-mono text-[11px] font-bold uppercase text-[var(--muted)] block">
                FULL NAME
              </label>
              <input
                type="text"
                defaultValue="Naina Kapoor"
                className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-sm font-bold text-[var(--black)] outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-[11px] font-bold uppercase text-[var(--muted)] block">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                defaultValue="naina.kapoor@example.com"
                className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-sm font-mono text-[var(--black)] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Career Search Status */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Search Status & Visibility
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Controls Scout&apos;s alert frequency and how aggressively ORBIT prioritizes matches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                id: "actively-looking",
                title: "Actively Looking",
                desc: "High alert priority, daily briefings, instant high-match notifications.",
              },
              {
                id: "open-to-offers",
                title: "Open to Exceptional Moves",
                desc: "Only surface roles with >90% match and significant compensation uplift.",
              },
              {
                id: "not-looking",
                title: "Paused / Not Looking",
                desc: "Silence job notifications while preserving application tracking.",
              },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setSearchStatus(opt.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer space-y-1.5 ${
                  searchStatus === opt.id
                    ? "bg-[var(--cream)] border-[var(--black)] shadow-[3px_3px_0px_var(--black)]"
                    : "bg-white border-[var(--line)] hover:border-[var(--black)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <strong className="font-display font-bold text-sm text-[var(--black)]">
                    {opt.title}
                  </strong>
                  <span
                    className={`w-3 h-3 rounded-full border-2 border-[var(--black)] ${
                      searchStatus === opt.id ? "bg-[var(--orange)]" : "bg-white"
                    }`}
                  />
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Notifications & Reminders
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Choose how you want Track and Scout to reach you.
            </p>
          </div>

          <div className="space-y-3 max-w-xl">
            {[
              {
                title: "Daily Career Intelligence Briefing",
                desc: "Morning summary of new verified roles and follow-up tasks.",
                checked: emailAlerts,
                toggle: () => setEmailAlerts(!emailAlerts),
              },
              {
                title: "Interview & Follow-up Timers",
                desc: "Alerts 24 hours and 1 hour before scheduled interviews or follow-ups.",
                checked: interviewReminders,
                toggle: () => setInterviewReminders(!interviewReminders),
              },
              {
                title: "Weekly Market Salary Pulse",
                desc: "Signal digest on shifting compensation bands in India.",
                checked: weeklyDigest,
                toggle: () => setWeeklyDigest(!weeklyDigest),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-3.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-xs text-[var(--black)]">{item.title}</div>
                  <div className="text-[11px] text-[var(--muted)]">{item.desc}</div>
                </div>
                <button
                  type="button"
                  onClick={item.toggle}
                  className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer shrink-0 border ${
                    item.checked
                      ? "bg-emerald-600 border-emerald-700"
                      : "bg-neutral-300 border-neutral-400"
                  }`}
                >
                  <span
                    className={`block w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                      item.checked ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Data Ownership & Export */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Data Ownership & Portability
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Your career history belongs to you. Export your complete profile, applications, and
              logs anytime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm" icon="external-link" onClick={handleExportData}>
              Export Workspace JSON Archive
            </Button>
            {exportNotice && (
              <span className="text-xs font-mono font-bold text-emerald-700">
                ✓ Export archive downloaded to local filesystem.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
