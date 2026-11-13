export type AppPage =
  | "landing"
  | "dashboard"
  | "jobs"
  | "job-detail"
  | "applications"
  | "career-profile"
  | "agents"
  | "agent-detail"
  | "ai-settings"
  | "settings";

export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary: string;
  minSalary?: number;
  experience: string;
  match: number;
  color: string;
  logoLetter: string;
  postedAgo: string;
  isNew?: boolean;
  isVerified?: boolean;
  department: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  matchedSkills: string[];
  missingSkills: string[];
  whyFits: string;
  trajectoryFitScore: number;
  cultureFitScore: number;
  skillFitScore: number;
}

export type ApplicationStatus = "saved" | "applied" | "interview" | "offer" | "rejected";

export interface Application {
  id: string;
  jobId: string;
  company: string;
  title: string;
  location: string;
  status: ApplicationStatus;
  match: number;
  color: string;
  appliedDate?: string;
  nextFollowUp?: string;
  interviewDate?: string;
  notes: string;
  salary: string;
  stageDetails?: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  codename: string;
  role: string;
  tagline: string;
  description: string;
  color: "orange" | "blue" | "lavender" | "green" | "dark";
  status: "idle" | "active" | "standby";
  activeTaskCount: number;
  capabilities: string[];
  systemPromptBrief: string;
  defaultModel: string;
  avatarChar: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "agent";
  agentId?: string;
  agentName?: string;
  text: string;
  timestamp: string;
  cards?: {
    type: "job" | "skill" | "task" | "action";
    title: string;
    subtitle?: string;
    actionLabel?: string;
    payload?: any;
  }[];
}

export interface CareerProfileData {
  name: string;
  avatarInitials: string;
  headline: string;
  location: string;
  remotePreference: string;
  summary: string;
  profileStrength: number;
  githubConnected: boolean;
  githubUsername?: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Growing" | "Familiar";
    endorsementCount?: number;
  }[];
  experience: {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    highlightMetric?: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    year: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
  }[];
  preferences: {
    targetRole: string;
    preferredLocations: string[];
    minCompensation: string;
    preferredCompanyStages: string[];
    jobTypes: string[];
  };
}

export type AIProviderId = "openai" | "gemini" | "groq" | "anthropic" | "openrouter" | "mistral" | "ollama" | "custom";

export interface AIProvider {
  id: AIProviderId;
  name: string;
  badge: string;
  color: string;
  connected: boolean;
  apiKeyMasked?: string;
  monthlyQuotaUsedPercent: number;
  costUsedInr: number;
  costLimitInr: number;
  models: string[];
  defaultModel: string;
  description: string;
}

export interface AISettingsState {
  providers: AIProvider[];
  activeProviderId: string;
  autoSelectBestModel: boolean;
  taskModelMapping: {
    research: string;
    writing: string;
    verification: string;
    coaching: string;
  };
  requireApprovalBeforeSend: boolean;
  shareProfileContext: boolean;
  anonymousImprovementData: boolean;
  monthlySpendingLimitInr: number;
  currentSpendingInr: number;
}

