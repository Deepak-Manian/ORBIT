import { useState, ReactNode } from "react";
import { AppPage } from "../../types";
import { Logo } from "../common/Logo";
import { Icon, IconName } from "../common/Icon";

interface AppLayoutProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage, param?: string) => void;
  onExitToLanding: () => void;
  children: ReactNode;
}

export function AppLayout({ currentPage, onNavigate, onExitToLanding, children }: AppLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems: {
    page: AppPage;
    icon: IconName;
    label: string;
    badge?: string | number;
    badgeColor?: string;
  }[] = [
    { page: "dashboard", icon: "grid", label: "Dashboard" },
    {
      page: "jobs",
      icon: "search",
      label: "Job Discovery",
      badge: "8 new",
      badgeColor: "bg-[var(--lime)] text-[var(--black)]",
    },
    {
      page: "applications",
      icon: "briefcase",
      label: "Applications",
      badge: 9,
      badgeColor: "bg-[var(--orange)] text-white",
    },
    {
      page: "career-profile",
      icon: "user",
      label: "Career Profile",
      badge: "87%",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      page: "agents",
      icon: "bot",
      label: "Agent Center",
      badge: 8,
      badgeColor: "bg-[var(--blue)] text-[var(--black)]",
    },
    { page: "ai-settings", icon: "key", label: "AI Settings" },
    { page: "settings", icon: "settings", label: "Settings" },
  ];

  const handleNavClick = (page: AppPage) => {
    onNavigate(page);
    setMobileSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const isCurrentActive = (itemPage: AppPage) => {
    if (currentPage === itemPage) return true;
    if (itemPage === "jobs" && currentPage === "job-detail") return true;
    if (itemPage === "agents" && currentPage === "agent-detail") return true;
    return false;
  };

  return (
    <div className="app-shell flex min-h-screen bg-[var(--cream)] text-[var(--black)] font-body">
      {/* Mobile Backdrop Scrim */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-white border-r-2 border-[var(--black)] flex flex-col justify-between p-6 transition-transform duration-300 shadow-[4px_0px_0px_var(--black)] lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Logo & Close Mobile */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
            <Logo size="md" onClick={() => handleNavClick("dashboard")} />
            <button
              type="button"
              className="lg:hidden p-1.5 rounded-lg hover:bg-[var(--cream)]"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const active = isCurrentActive(item.page);
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-body text-sm font-bold tracking-tight transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-[var(--orange)] text-[var(--black)] shadow-[2px_2px_0px_var(--black)] border border-[var(--black)] translate-x-1"
                      : "text-[var(--black)]/80 hover:text-[var(--black)] hover:bg-[var(--cream)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} size={18} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                        item.badgeColor || "bg-[var(--black)]/10 text-[var(--black)]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* ORBIT Active Pulse Banner */}
          <div className="p-3.5 rounded-xl bg-[var(--blue)]/15 border-2 border-[var(--blue)] space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--blue)] animate-ping" />
                <span className="font-display font-black text-xs uppercase tracking-wider text-[var(--black)]">
                  ORBIT ORCHESTRATOR
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                READY
              </span>
            </div>
            <p className="text-[11px] text-[var(--black)]/70 leading-snug">
              Coordinating Scout, Lens, Track, and Coach on active tasks.
            </p>
          </div>
        </div>

        {/* Sidebar Footer: Return to Website & User Profile */}
        <div className="space-y-3 pt-4 border-t border-[var(--line)]">
          <button
            type="button"
            onClick={onExitToLanding}
            className="w-full flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted)] hover:text-[var(--black)] transition-colors p-2 rounded-lg hover:bg-[var(--cream)]"
          >
            <span>← Return to Public Website</span>
          </button>

          <div
            onClick={() => handleNavClick("career-profile")}
            className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] hover:border-[var(--black)] cursor-pointer transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--black)] text-white font-mono text-xs font-bold grid place-items-center shadow-sm">
                NK
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[var(--black)] truncate">Naina Kapoor</div>
                <div className="text-[10px] text-[var(--muted)] truncate">Product Designer</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--lime)] text-[var(--black)] border border-[var(--black)]">
              87%
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 h-16 md:h-20 bg-white/95 backdrop-blur-md border-b-2 border-[var(--black)] px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl border border-[var(--line)] hover:bg-[var(--cream)]"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Icon name="menu" size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--cream)] border border-[var(--line)] text-xs text-[var(--muted)] w-64 md:w-80">
              <Icon name="search" size={15} />
              <input
                type="text"
                placeholder="Search jobs, skills, or ask ORBIT... (⌘K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    handleNavClick("jobs");
                  }
                }}
                className="bg-transparent border-none outline-none text-xs text-[var(--black)] w-full placeholder:text-[var(--muted)]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Agents Online Indicator */}
            <div
              onClick={() => handleNavClick("agents")}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 cursor-pointer hover:bg-emerald-100 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>8 Agents Online</span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2.5 rounded-full border border-[var(--line)] hover:border-[var(--black)] hover:bg-[var(--cream)] transition-all cursor-pointer"
                aria-label="Notifications"
              >
                <Icon name="bell" size={18} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[var(--orange)] border-2 border-white" />
              </button>

              {/* Notification Popover */}
              {notificationsOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white border-2 border-[var(--black)] rounded-2xl p-4 shadow-[4px_4px_0px_var(--black)] z-50 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--black)]">
                      NOTIFICATIONS (3)
                    </span>
                    <button
                      type="button"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs text-[var(--muted)] hover:text-[var(--black)]"
                    >
                      Dismiss
                    </button>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-1">
                      <div className="font-bold text-[var(--black)] flex items-center gap-1.5">
                        <Icon name="spark" size={13} className="text-[var(--orange)]" />
                        <span>Scout found 3 high-match roles</span>
                      </div>
                      <p className="text-[var(--muted)]">
                        Linear, CRED, and BrowserStack match 86%+.
                      </p>
                      <span className="text-[10px] text-[var(--muted)] font-mono">10m ago</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-1">
                      <div className="font-bold text-[var(--black)] flex items-center gap-1.5">
                        <Icon name="clock" size={13} className="text-[var(--blue)]" />
                        <span>Follow-up reminder</span>
                      </div>
                      <p className="text-[var(--muted)]">
                        Track: follow up on Razorpay referral tomorrow morning.
                      </p>
                      <span className="text-[10px] text-[var(--muted)] font-mono">1h ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar */}
            <button
              type="button"
              onClick={() => handleNavClick("career-profile")}
              className="w-10 h-10 rounded-full bg-[var(--black)] text-white font-mono text-xs font-bold grid place-items-center border-2 border-[var(--black)] shadow-[2px_2px_0px_var(--orange)] hover:scale-105 transition-transform"
            >
              NK
            </button>
          </div>
        </header>

        {/* Page Content View */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
