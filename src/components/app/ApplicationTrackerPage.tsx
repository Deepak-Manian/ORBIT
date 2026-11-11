import { useState, useMemo } from "react";
import { Application, ApplicationStatus, AppPage } from "../../types";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { StickerBadge } from "../common/Doodles";

interface ApplicationTrackerPageProps {
  applications: Application[];
  onUpdateStatus: (id: string, newStatus: ApplicationStatus) => void;
  onUpdateNotes: (id: string, newNotes: string) => void;
  onAddApplication: (app: Omit<Application, "id">) => void;
  onNavigate: (page: AppPage, param?: string) => void;
}

export function ApplicationTrackerPage({
  applications,
  onUpdateStatus,
  onUpdateNotes,
  onAddApplication,
  onNavigate,
}: ApplicationTrackerPageProps) {
  const [filterQuery, setFilterQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeNoteEditId, setActiveNoteEditId] = useState<string | null>(null);
  const [editedNotes, setEditedNotes] = useState("");

  // New application form state
  const [newCompany, setNewCompany] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newLocation, setNewLocation] = useState("Bengaluru · Remote");
  const [newSalary, setNewSalary] = useState("₹40L – ₹55L");
  const [newStatus, setNewStatus] = useState<ApplicationStatus>("saved");
  const [newNotes, setNewNotes] = useState("");

  const columns: { status: ApplicationStatus; label: string; color: string; badgeBg: string }[] = [
    { status: "saved", label: "SAVED", color: "#718CFF", badgeBg: "bg-blue-100 text-blue-900" },
    {
      status: "applied",
      label: "APPLIED",
      color: "#FF633D",
      badgeBg: "bg-orange-100 text-orange-900",
    },
    {
      status: "interview",
      label: "INTERVIEW",
      color: "#DDA7F5",
      badgeBg: "bg-purple-100 text-purple-900",
    },
    {
      status: "offer",
      label: "OFFER",
      color: "#175C4A",
      badgeBg: "bg-emerald-100 text-emerald-900",
    },
    {
      status: "rejected",
      label: "REJECTED",
      color: "#080808",
      badgeBg: "bg-neutral-200 text-neutral-800",
    },
  ];

  const filteredApps = useMemo(() => {
    if (!filterQuery.trim()) return applications;
    return applications.filter(
      (app) =>
        app.company.toLowerCase().includes(filterQuery.toLowerCase()) ||
        app.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
        app.notes.toLowerCase().includes(filterQuery.toLowerCase()),
    );
  }, [applications, filterQuery]);

  const handleCreateApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.trim() || !newTitle.trim()) return;

    onAddApplication({
      jobId: `custom-${Date.now()}`,
      company: newCompany.trim(),
      title: newTitle.trim(),
      location: newLocation,
      salary: newSalary,
      status: newStatus,
      match: 88,
      color: "#FF633D",
      notes: newNotes.trim() || "Added manually to pipeline.",
      stageDetails: "Manual entry",
    });

    setNewCompany("");
    setNewTitle("");
    setNewNotes("");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            APPLICATION TRACKER · FULL LIFECYCLE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            Every opportunity,{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">in motion.</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="md" icon="arrow" onClick={() => setIsAddModalOpen(true)}>
            + Add application
          </Button>
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border-2 border-[var(--black)] shadow-[3px_3px_0px_var(--black)]">
          <span className="text-[11px] font-mono font-bold uppercase text-[var(--muted)]">
            ACTIVE PIPELINE
          </span>
          <div className="font-display font-black text-3xl text-[var(--black)] mt-1">
            {applications.filter((a) => a.status !== "rejected").length}
          </div>
          <span className="text-[11px] font-mono text-[var(--muted)]">in motion</span>
        </div>

        <div className="p-4 rounded-xl bg-white border-2 border-[var(--black)] shadow-[3px_3px_0px_var(--black)]">
          <span className="text-[11px] font-mono font-bold uppercase text-[var(--muted)]">
            INTERVIEW VELOCITY
          </span>
          <div className="font-display font-black text-3xl text-emerald-700 mt-1">32%</div>
          <span className="text-[11px] font-mono text-emerald-800">
            response rate (India top 10%)
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border-2 border-[var(--black)] shadow-[3px_3px_0px_var(--black)]">
          <span className="text-[11px] font-mono font-bold uppercase text-[var(--muted)]">
            FOLLOW-UPS DUE
          </span>
          <div className="font-display font-black text-3xl text-[var(--orange)] mt-1">
            {applications.filter((a) => a.nextFollowUp).length || 1}
          </div>
          <span className="text-[11px] font-mono text-[var(--muted)]">requires action</span>
        </div>

        <div className="p-4 rounded-xl bg-white border-2 border-[var(--black)] shadow-[3px_3px_0px_var(--black)]">
          <span className="text-[11px] font-mono font-bold uppercase text-[var(--muted)]">
            AVG. TIME TO RESPONSE
          </span>
          <div className="font-display font-black text-3xl text-[var(--black)] mt-1">12 days</div>
          <span className="text-[11px] font-mono text-[var(--muted)]">across tech hubs</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 p-2 rounded-xl bg-white border-2 border-[var(--black)] flex items-center gap-2 shadow-[2px_2px_0px_var(--black)]">
          <Icon name="search" size={16} className="text-[var(--muted)] ml-2" />
          <input
            type="text"
            placeholder="Search applications by company, title, or notes..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full text-xs md:text-sm font-body bg-transparent border-none outline-none text-[var(--black)] placeholder:text-[var(--muted)]"
          />
        </div>
      </div>

      {/* Kanban Board Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        {columns.map((col) => {
          const colApps = filteredApps.filter((a) => a.status === col.status);
          return (
            <div
              key={col.status}
              className="p-4 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col min-h-[500px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--black)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} />
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-[var(--black)]">
                    {col.label}
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full font-mono text-xs font-bold ${col.badgeBg}`}
                >
                  {colApps.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3 flex-1">
                {colApps.length === 0 ? (
                  <div className="py-8 text-center text-xs text-[var(--muted)] font-mono border border-dashed border-[var(--line)] rounded-xl">
                    No roles here
                  </div>
                ) : (
                  colApps.map((app) => (
                    <article
                      key={app.id}
                      className="p-4 rounded-xl bg-[var(--cream)] border border-[var(--line)] hover:border-[var(--black)] hover:shadow-[2px_2px_0px_var(--black)] transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-lg text-[var(--black)] font-display font-black text-xs grid place-items-center shrink-0 shadow-xs"
                            style={{ background: app.color }}
                          >
                            {app.company[0]}
                          </span>
                          <div>
                            <h4 className="font-bold text-xs text-[var(--black)] leading-tight">
                              {app.company}
                            </h4>
                            <span className="text-[10px] text-[var(--muted)]">{app.location}</span>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono font-bold text-emerald-800 border border-[var(--line)]">
                          {app.match}%
                        </span>
                      </div>

                      <div className="font-display font-bold text-sm text-[var(--black)]">
                        {app.title}
                      </div>

                      {app.salary && (
                        <div className="text-[11px] font-mono text-[var(--muted)]">
                          {app.salary}
                        </div>
                      )}

                      {/* Follow-up or Interview Alert */}
                      {app.interviewDate && (
                        <div className="p-2 rounded-lg bg-purple-100 border border-purple-300 text-purple-900 text-[11px] font-bold flex items-center gap-1.5">
                          <Icon name="clock" size={13} />
                          <span>Interview: {app.interviewDate}</span>
                        </div>
                      )}

                      {app.nextFollowUp && (
                        <div className="p-2 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold flex items-center gap-1.5">
                          <Icon name="clock" size={13} />
                          <span>Due: {app.nextFollowUp}</span>
                        </div>
                      )}

                      {/* Notes Box with inline edit */}
                      {activeNoteEditId === app.id ? (
                        <div className="space-y-2 pt-2 border-t border-[var(--line)]">
                          <textarea
                            value={editedNotes}
                            onChange={(e) => setEditedNotes(e.target.value)}
                            rows={2}
                            className="w-full p-2 text-xs rounded border border-[var(--black)] bg-white text-[var(--black)] outline-none"
                          />
                          <div className="flex justify-end gap-1">
                            <button
                              type="button"
                              onClick={() => setActiveNoteEditId(null)}
                              className="px-2 py-0.5 rounded text-[10px] text-[var(--muted)]"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                onUpdateNotes(app.id, editedNotes);
                                setActiveNoteEditId(null);
                              }}
                              className="px-2 py-0.5 rounded bg-[var(--orange)] text-white text-[10px] font-bold"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setActiveNoteEditId(app.id);
                            setEditedNotes(app.notes);
                          }}
                          className="pt-2 border-t border-[var(--line)] text-[11px] text-[var(--muted)] italic line-clamp-2 cursor-pointer hover:text-[var(--black)]"
                          title="Click to edit notes"
                        >
                          &ldquo;{app.notes}&rdquo;
                        </div>
                      )}

                      {/* Stage Selector Dropdown */}
                      <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-[11px]">
                        <span className="text-[10px] font-mono text-[var(--muted)]">MOVE:</span>
                        <select
                          value={app.status}
                          onChange={(e) =>
                            onUpdateStatus(app.id, e.target.value as ApplicationStatus)
                          }
                          className="text-[11px] font-mono font-bold bg-white px-2 py-1 rounded border border-[var(--line)] outline-none cursor-pointer"
                        >
                          <option value="saved">Saved</option>
                          <option value="applied">Applied</option>
                          <option value="interview">Interview</option>
                          <option value="offer">Offer</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Application Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateApplication}
            className="bg-white rounded-3xl border-2 border-[var(--black)] shadow-[8px_8px_0px_var(--black)] max-w-lg w-full p-6 md:p-8 space-y-5 animate-scaleUp"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <h3 className="font-display font-bold text-xl text-[var(--black)]">
                Add Opportunity to Pipeline
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg hover:bg-[var(--cream)]"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="space-y-4 text-xs font-body">
              <div>
                <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Notion, Canva, Swiggy"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-sm outline-none focus:border-[var(--black)]"
                />
              </div>

              <div>
                <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                  Role Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lead Product Designer"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-sm outline-none focus:border-[var(--black)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                    Initial Status
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as ApplicationStatus)}
                    className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-xs outline-none focus:border-[var(--black)]"
                  >
                    <option value="saved">Saved</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                    Expected Comp
                  </label>
                  <input
                    type="text"
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-xs outline-none focus:border-[var(--black)] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                  Notes or Next Action
                </label>
                <textarea
                  placeholder="Recruiter contact, referral status, or deadlines..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  rows={3}
                  className="w-full p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-xs outline-none focus:border-[var(--black)]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--line)]">
              <Button variant="ghost" size="sm" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md" icon="check">
                Add to Tracker
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
