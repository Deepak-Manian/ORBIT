import { useState, useMemo } from "react";
import { AppPage, Job } from "../../types";
import { mockJobs } from "../../mock/jobs";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { StickerBadge } from "../common/Doodles";

interface JobDiscoveryPageProps {
  onNavigate: (page: AppPage, param?: string) => void;
  onSelectJob: (job: Job) => void;
  savedJobIds: string[];
  onToggleSaveJob: (jobId: string) => void;
}

export function JobDiscoveryPage({
  onNavigate,
  onSelectJob,
  savedJobIds,
  onToggleSaveJob,
}: JobDiscoveryPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [minSalaryFilter, setMinSalaryFilter] = useState<number>(0);
  const [sortOption, setSortOption] = useState<"match" | "salary" | "newest">("match");

  // Filtered jobs calculation
  const filteredJobs = useMemo(() => {
    return mockJobs
      .filter((job) => {
        // Keyword match
        const matchesQuery =
          !searchTerm ||
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.requiredSkills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

        // Location match
        const matchesLocation =
          locationFilter === "all" ||
          (locationFilter === "remote" && job.location.toLowerCase().includes("remote")) ||
          (locationFilter === "bengaluru" && job.location.toLowerCase().includes("bengaluru")) ||
          (locationFilter === "mumbai" && job.location.toLowerCase().includes("mumbai"));

        // Salary match
        const matchesSalary = !minSalaryFilter || (job.minSalary || 0) >= minSalaryFilter;

        return matchesQuery && matchesLocation && matchesSalary;
      })
      .sort((a, b) => {
        if (sortOption === "match") return b.match - a.match;
        if (sortOption === "salary") return (b.minSalary || 0) - (a.minSalary || 0);
        return 0;
      });
  }, [searchTerm, locationFilter, minSalaryFilter, sortOption]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            JOB DISCOVERY · VERIFIED SOURCES ONLY
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            Roles with{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              real potential.
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-white border border-[var(--black)] shadow-[2px_2px_0px_var(--black)] text-xs font-mono font-bold text-[var(--black)]">
            {filteredJobs.length} of {mockJobs.length} roles shown
          </span>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="p-2 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex items-center gap-3">
        <div className="pl-3 text-[var(--muted)]">
          <Icon name="search" size={20} />
        </div>
        <input
          type="text"
          placeholder="Filter by role title, company, or skill (e.g. Figma, Design systems, Linear)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 py-2 text-sm md:text-base font-body bg-transparent border-none outline-none text-[var(--black)] placeholder:text-[var(--muted)]"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="p-1.5 text-xs text-[var(--muted)] hover:text-[var(--black)] font-mono"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Chips Row */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        {/* Location Filter */}
        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--line)] shadow-xs">
          <Icon name="pin" size={14} className="text-[var(--orange)]" />
          <span className="font-bold text-[var(--black)]">Location:</span>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="bg-transparent border-none outline-none font-medium cursor-pointer"
          >
            <option value="all">All Locations (India & Remote)</option>
            <option value="remote">Remote Only</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        {/* Salary Filter */}
        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--line)] shadow-xs">
          <span className="font-bold text-[var(--black)]">Min. Base:</span>
          <select
            value={minSalaryFilter}
            onChange={(e) => setMinSalaryFilter(Number(e.target.value))}
            className="bg-transparent border-none outline-none font-medium cursor-pointer font-mono"
          >
            <option value={0}>Any Compensation</option>
            <option value={35}>₹35L+ CTC</option>
            <option value={40}>₹40L+ CTC</option>
            <option value={45}>₹45L+ CTC</option>
            <option value={50}>₹50L+ CTC</option>
          </select>
        </div>

        {/* Sort Option */}
        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[var(--line)] shadow-xs">
          <span className="font-bold text-[var(--black)]">Sort by:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as any)}
            className="bg-transparent border-none outline-none font-medium cursor-pointer"
          >
            <option value="match">Highest Match Score</option>
            <option value="salary">Highest Compensation</option>
          </select>
        </div>

        {(searchTerm || locationFilter !== "all" || minSalaryFilter > 0) && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setLocationFilter("all");
              setMinSalaryFilter(0);
            }}
            className="text-[var(--orange)] hover:underline font-mono text-xs cursor-pointer ml-auto"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Main Jobs Discovery Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Job Cards List */}
        <div className="lg:col-span-8 space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white border-2 border-dashed border-[var(--line)] space-y-3">
              <Icon name="search" size={32} className="mx-auto text-[var(--muted)]" />
              <h3 className="font-display font-bold text-lg text-[var(--black)]">
                No roles matching your filters
              </h3>
              <p className="text-xs text-[var(--muted)] max-w-sm mx-auto">
                Try widening your location or lowering your minimum salary threshold.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("all");
                  setMinSalaryFilter(0);
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isSaved = savedJobIds.includes(job.id);
              return (
                <article
                  key={job.id}
                  onClick={() => {
                    onSelectJob(job);
                    onNavigate("job-detail", job.id);
                  }}
                  className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] hover:shadow-[6px_6px_0px_var(--black)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer space-y-4 group"
                >
                  {/* Job Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="w-14 h-14 rounded-2xl text-[var(--black)] font-display font-black text-2xl grid place-items-center shrink-0 shadow-sm border border-[var(--black)]"
                        style={{ background: job.color }}
                      >
                        {job.logoLetter}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {job.isNew && (
                            <span className="px-2 py-0.5 rounded-full bg-[var(--orange)] text-white font-mono text-[10px] font-bold">
                              NEW TODAY
                            </span>
                          )}
                          <span className="text-[11px] font-mono text-[var(--muted)]">
                            {job.postedAgo}
                          </span>
                        </div>
                        <h2 className="font-display font-bold text-xl text-[var(--black)] group-hover:text-[var(--orange)] transition-colors truncate">
                          {job.title}
                        </h2>
                        <div className="text-xs text-[var(--muted)] truncate">
                          <strong>{job.company}</strong> · {job.location} · {job.department}
                        </div>
                      </div>
                    </div>

                    {/* Bookmark Save Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveJob(job.id);
                      }}
                      className={`p-2.5 rounded-xl border border-[var(--line)] hover:border-[var(--black)] transition-all cursor-pointer shrink-0 ${
                        isSaved
                          ? "bg-[var(--orange)] text-white shadow-xs"
                          : "bg-[var(--cream)] text-[var(--muted)]"
                      }`}
                      aria-label={isSaved ? "Saved to applications" : "Save role"}
                    >
                      <Icon name="bookmark" size={18} />
                    </button>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--cream)] text-[var(--black)] font-mono font-bold border border-[var(--line)]">
                      {job.salary}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[var(--cream)] text-[var(--muted)] font-mono border border-[var(--line)]">
                      {job.experience}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[var(--cream)] text-[var(--muted)] font-mono border border-[var(--line)]">
                      {job.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[11px] border border-emerald-200">
                      ✓ Direct verified portal
                    </span>
                  </div>

                  {/* Skills Compatibility Section */}
                  <div className="pt-2 border-t border-[var(--line)]">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-1.5">
                      SKILL COMPATIBILITY MATCH
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.matchedSkills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-medium"
                        >
                          <Icon name="check" size={12} className="text-emerald-600" />
                          <span>{s}</span>
                        </span>
                      ))}
                      {job.missingSkills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium"
                        >
                          <span className="text-amber-600 font-bold">!</span>
                          <span>Gap: {s}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Insight & Match Score */}
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--line)] gap-4">
                    <p className="text-xs text-[var(--muted)] line-clamp-1 italic font-body flex items-center gap-1.5">
                      <Icon name="spark" size={14} className="text-[var(--orange)] shrink-0" />
                      <span>{job.whyFits}</span>
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="text-right">
                        <div className="font-display font-black text-xl text-emerald-700 leading-none">
                          {job.match}%
                        </div>
                        <div className="text-[10px] font-mono uppercase text-[var(--muted)]">
                          Match Fit
                        </div>
                      </div>
                      <Icon
                        name="arrow"
                        size={16}
                        className="text-[var(--muted)] group-hover:text-[var(--black)] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Right Column (4 cols): Sticky Signal Sidebar */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6">
          <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-5">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                SEARCH CALIBRATION
              </span>
              <h3 className="font-display font-bold text-xl text-[var(--black)] mt-0.5">
                Well Tuned Signal
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-1">
                Your filters balance high match confidence with realistic compensation bands.
              </p>
            </div>

            {/* Signal Meter */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>Signal Precision</span>
                <span className="text-emerald-600">92% High Precision</span>
              </div>
              <div className="h-2.5 rounded-full bg-[var(--cream)] border border-[var(--line)] overflow-hidden">
                <div className="h-full bg-[var(--lime)] border-r border-[var(--black)] w-[92%]" />
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)] space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">
                TOP REWARDED SKILLS (INDIA)
              </span>
              {[
                { skill: "Product Design Systems", match: "96%", comp: "₹45L+" },
                { skill: "Design Leadership & 0→1", match: "91%", comp: "₹42L+" },
                { skill: "AI Workflow Ergonomics", match: "88%", comp: "₹48L+" },
              ].map((item, idx) => (
                <div
                  key={item.skill}
                  className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[var(--orange)]">0{idx + 1}</span>
                    <span className="font-bold text-[var(--black)]">{item.skill}</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-700">{item.match}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              icon="bot"
              fullWidth
              onClick={() => onNavigate("agents", "scout")}
            >
              Ask Scout for custom query
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
