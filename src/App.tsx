import { useState, useEffect, useCallback } from "react";
import {
  AppPage,
  Job,
  Application,
  ApplicationStatus,
  CareerProfileData,
  AISettingsState,
} from "./types";
import { mockJobs } from "./mock/jobs";
import { mockAgents } from "./mock/agents";
import { initialApplications } from "./mock/applications";
import { initialCareerProfile } from "./mock/profile";
import { initialAISettings } from "./mock/aiSettings";
import { applicationService } from "./services/applicationService";
import { profileService } from "./services/profileService";

// Marketing
import { LandingPage } from "./components/marketing/LandingPage";
import { CustomCursor } from "./components/common/CustomCursor";
import { SmoothScrollProvider } from "./components/common/SmoothScrollProvider";

// Authenticated App Shell & Screens
import { AppLayout } from "./components/app/AppLayout";
import { DashboardPage } from "./components/app/DashboardPage";
import { JobDiscoveryPage } from "./components/app/JobDiscoveryPage";
import { JobDetailPage } from "./components/app/JobDetailPage";
import { ApplicationTrackerPage } from "./components/app/ApplicationTrackerPage";
import { CareerProfilePage } from "./components/app/CareerProfilePage";
import { AgentCenterPage } from "./components/app/AgentCenterPage";
import { AgentDetailPage } from "./components/app/AgentDetailPage";
import { AISettingsPage } from "./components/app/AISettingsPage";
import { GeneralSettingsPage } from "./components/app/GeneralSettingsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("landing");
  const [selectedJobId, setSelectedJobId] = useState<string>("linear-senior-designer");
  const [selectedAgentId, setSelectedAgentId] = useState<string>("orbit");

  // State
  const [savedJobIds, setSavedJobIds] = useState<string[]>([
    "linear-senior-designer",
    "atlassian-senior-systems-designer",
    "browserstack-staff-ux",
  ]);
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [profile, setProfile] = useState<CareerProfileData>(initialCareerProfile);
  const [aiSettings, setAiSettings] = useState<AISettingsState>(initialAISettings);

  // Synchronize URL hash with route state
  const parseHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (!hash) {
      setCurrentPage("landing");
      return;
    }

    if (hash.startsWith("jobs/")) {
      const jobId = hash.replace("jobs/", "");
      setSelectedJobId(jobId);
      setCurrentPage("job-detail");
    } else if (hash.startsWith("agents/")) {
      const agentId = hash.replace("agents/", "");
      setSelectedAgentId(agentId);
      setCurrentPage("agent-detail");
    } else if (
      [
        "dashboard",
        "jobs",
        "applications",
        "career-profile",
        "agents",
        "ai-settings",
        "settings",
      ].includes(hash)
    ) {
      setCurrentPage(hash as AppPage);
    } else {
      setCurrentPage("landing");
    }
  }, []);

  useEffect(() => {
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, [parseHash]);

  // Load persistent application and profile state
  useEffect(() => {
    applicationService.getApplications().then((loaded) => {
      if (loaded && loaded.length > 0) setApplications(loaded);
    });
    profileService.getProfile().then((loaded) => {
      if (loaded) setProfile(loaded);
    });
  }, []);

  // Navigate function that updates URL hash & state
  const navigate = (page: AppPage, param?: string) => {
    if (page === "landing") {
      window.location.hash = "";
      setCurrentPage("landing");
    } else if (page === "job-detail" && param) {
      setSelectedJobId(param);
      window.location.hash = `jobs/${param}`;
      setCurrentPage("job-detail");
    } else if (page === "agent-detail" && param) {
      setSelectedAgentId(param);
      window.location.hash = `agents/${param}`;
      setCurrentPage("agent-detail");
    } else {
      window.location.hash = page;
      setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  };

  // Toggle Save Job
  const handleToggleSaveJob = (jobId: string) => {
    const job = mockJobs.find((j) => j.id === jobId);
    if (!job) return;

    if (savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== jobId));
      setApplications((prev) => prev.filter((app) => app.jobId !== jobId));
    } else {
      setSavedJobIds((prev) => [...prev, jobId]);
      const newApp: Application = {
        id: `app-${Date.now()}`,
        jobId: job.id,
        company: job.company,
        title: job.title,
        location: job.location,
        salary: job.salary,
        status: "saved",
        match: job.match,
        color: job.color,
        notes: "Saved from Job Discovery for review.",
        stageDetails: "Shortlisted",
      };
      setApplications((prev) => [newApp, ...prev]);
    }
  };

  // Move or add to Applied
  const handleApplyJob = (job: Job) => {
    setApplications((prev) => {
      const existing = prev.find((a) => a.jobId === job.id);
      if (existing) {
        return prev.map((a) =>
          a.jobId === job.id
            ? {
                ...a,
                status: "applied" as ApplicationStatus,
                appliedDate: "Today",
                notes: "Tailored application submitted via direct referral.",
              }
            : a,
        );
      }
      return [
        {
          id: `app-${Date.now()}`,
          jobId: job.id,
          company: job.company,
          title: job.title,
          location: job.location,
          salary: job.salary,
          status: "applied",
          match: job.match,
          color: job.color,
          appliedDate: "Today",
          notes: "Tailored application submitted via direct referral.",
          stageDetails: "Application submitted",
        },
        ...prev,
      ];
    });
  };

  // Update Application Status
  const handleUpdateAppStatus = (id: string, newStatus: ApplicationStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)),
    );
  };

  // Update Application Notes
  const handleUpdateAppNotes = (id: string, newNotes: string) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, notes: newNotes } : app)),
    );
  };

  // Add Custom Application
  const handleAddCustomApp = (newApp: Omit<Application, "id">) => {
    const fullApp: Application = {
      ...newApp,
      id: `app-${Date.now()}`,
    };
    setApplications((prev) => [fullApp, ...prev]);
  };

  // Update Profile
  const handleUpdateProfile = (updated: Partial<CareerProfileData>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  // Update AI Settings
  const handleUpdateAISettings = (updated: Partial<AISettingsState>) => {
    setAiSettings((prev) => ({ ...prev, ...updated }));
  };

  // Current selected job object
  const currentJob = mockJobs.find((j) => j.id === selectedJobId) || mockJobs[0];

  // Main render wrapped with SmoothScroll & CustomCursor
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      {currentPage === "landing" ? (
        <LandingPage onEnterApp={() => navigate("dashboard")} />
      ) : (
        <AppLayout
          currentPage={currentPage}
          onNavigate={navigate}
          onExitToLanding={() => navigate("landing")}
        >
          {currentPage === "dashboard" && (
            <DashboardPage onNavigate={navigate} onSelectJob={(j) => navigate("job-detail", j.id)} />
          )}

          {currentPage === "jobs" && (
            <JobDiscoveryPage
              onNavigate={navigate}
              onSelectJob={(j) => navigate("job-detail", j.id)}
              savedJobIds={savedJobIds}
              onToggleSaveJob={handleToggleSaveJob}
            />
          )}

          {currentPage === "job-detail" && (
            <JobDetailPage
              job={currentJob}
              onNavigate={navigate}
              isSaved={savedJobIds.includes(currentJob.id)}
              onToggleSave={handleToggleSaveJob}
              onApply={handleApplyJob}
            />
          )}

          {currentPage === "applications" && (
            <ApplicationTrackerPage
              applications={applications}
              onUpdateStatus={handleUpdateAppStatus}
              onUpdateNotes={handleUpdateAppNotes}
              onAddApplication={handleAddCustomApp}
              onNavigate={navigate}
            />
          )}

          {currentPage === "career-profile" && (
            <CareerProfilePage
              profile={profile}
              onUpdateProfile={handleUpdateProfile}
              onNavigate={navigate}
            />
          )}

          {currentPage === "agents" && (
            <AgentCenterPage onNavigate={navigate} initialAgentId={selectedAgentId} />
          )}

          {currentPage === "agent-detail" && (
            <AgentDetailPage agentId={selectedAgentId} onNavigate={navigate} />
          )}

          {currentPage === "ai-settings" && (
            <AISettingsPage
              settings={aiSettings}
              onUpdateSettings={handleUpdateAISettings}
              onNavigate={navigate}
            />
          )}

          {currentPage === "settings" && <GeneralSettingsPage onNavigate={navigate} />}
        </AppLayout>
      )}
    </SmoothScrollProvider>
  );
}
