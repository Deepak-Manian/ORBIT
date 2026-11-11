import { AgentInfo } from "../types";

export const mockAgents: AgentInfo[] = [
  {
    id: "orbit",
    name: "ORBIT",
    codename: "Orchestrator-01",
    role: "Central Orchestrator",
    tagline: "Your career conductor coordinating specialized intelligence.",
    description:
      "ORBIT synthesizes your overarching career goals, delegates focused tasks to specialized agents, resolves trade-offs, and ensures nothing consequential is done without your clear approval.",
    color: "dark",
    status: "active",
    activeTaskCount: 3,
    avatarChar: "O",
    defaultModel: "Gemini 2.5 Pro",
    capabilities: [
      "Cross-agent coordination & synthesis",
      "Career trajectory modeling",
      "Human-in-the-loop approval routing",
      "Daily career briefing compilation",
    ],
    systemPromptBrief:
      "You are ORBIT, the central career intelligence orchestrator. Prioritize long-term trajectory, factual accuracy, user agency, and private-by-default execution.",
  },
  {
    id: "scout",
    name: "Scout",
    codename: "Discovery-Agent",
    role: "Job Discovery & Sourcing",
    tagline: "Finds high-signal roles before the crowd.",
    description:
      "Scout continuously monitors verified company career portals, legal feeds, and niche developer communities to surface opportunities that match your precise criteria.",
    color: "orange",
    status: "active",
    activeTaskCount: 2,
    avatarChar: "S",
    defaultModel: "Gemini 2.5 Flash",
    capabilities: [
      "Verified source crawling & deduplication",
      "Multi-dimensional preference matching",
      "Early-signal role detection",
      "Salary bracket estimation",
    ],
    systemPromptBrief:
      "You are Scout. Evaluate job listings for freshness, authenticity, and alignment with user preferences. Never hallucinate unverified listings.",
  },
  {
    id: "lens",
    name: "Lens",
    codename: "Skill-Intelligence",
    role: "Resume & Skill Intelligence",
    tagline: "Connects your proof of work to role requirements.",
    description:
      "Lens performs deep requirement-by-requirement compatibility analysis, pinpoints transferable strengths, and highlights actionable skill gaps.",
    color: "blue",
    status: "active",
    activeTaskCount: 1,
    avatarChar: "L",
    defaultModel: "Gemini 2.5 Pro",
    capabilities: [
      "Evidence-backed skill extraction",
      "Job compatibility scoring & breakdown",
      "Skill gap detection & learning pathways",
      "Portfolio & GitHub repo analysis",
    ],
    systemPromptBrief:
      "You are Lens. Analyze professional experience with uncompromising analytical rigor. Ground every claim in verifiable user evidence.",
  },
  {
    id: "draft",
    name: "Draft",
    codename: "Outreach-Tailor",
    role: "Resume & Outreach Drafting",
    tagline: "Shapes authentic narratives without AI clichés.",
    description:
      "Draft crafts tailored resume variants, targeted cover letters, and warm LinkedIn/email outreach that highlight relevant accomplishments in your genuine voice.",
    color: "lavender",
    status: "standby",
    activeTaskCount: 0,
    avatarChar: "D",
    defaultModel: "Gemini 2.5 Pro",
    capabilities: [
      "Role-tailored resume bullet rewriting",
      "Warm recruiter outreach drafting",
      "Portfolio case study summaries",
      "Tone calibration (formal, peer-to-peer)",
    ],
    systemPromptBrief:
      "You are Draft. Write crisp, persuasive professional communication. Strictly avoid generic AI filler, hyperbole, and unsubstantiated claims.",
  },
  {
    id: "track",
    name: "Track",
    codename: "Pipeline-Manager",
    role: "Application Management",
    tagline: "Keeps every opportunity organized and moving.",
    description:
      "Track monitors application milestones, logs communications, calculates follow-up timing, and helps you prioritize where to invest follow-through energy.",
    color: "green",
    status: "active",
    activeTaskCount: 1,
    avatarChar: "T",
    defaultModel: "Gemini 2.5 Flash",
    capabilities: [
      "Kanban pipeline synchronization",
      "Automated follow-up scheduling",
      "Interview deadline reminders",
      "Conversion & response rate analytics",
    ],
    systemPromptBrief:
      "You are Track. Maintain disciplined organization of the user's application pipeline. Keep dates, statuses, and action items pristine.",
  },
  {
    id: "coach",
    name: "Coach",
    codename: "Interview-Simulator",
    role: "Interview Preparation",
    tagline: "Builds confidence through focused simulation.",
    description:
      "Coach runs role-specific mock interviews, generates company-specific behavioral questions, and provides feedback on communication clarity and structure.",
    color: "blue",
    status: "standby",
    activeTaskCount: 0,
    avatarChar: "C",
    defaultModel: "Gemini 2.5 Pro",
    capabilities: [
      "Role-specific technical & behavioral Q&A",
      "STAR framework answer structuring",
      "Company leadership principles alignment",
      "Post-interview debrief & reflection",
    ],
    systemPromptBrief:
      "You are Coach. Conduct rigorous, encouraging interview prep. Give actionable critiques that help candidates communicate impact clearly.",
  },
  {
    id: "signal",
    name: "Signal",
    codename: "Market-Intelligence",
    role: "Market & Salary Trends",
    tagline: "Reads macroeconomic shifts in roles, skills, and pay.",
    description:
      "Signal tracks industry-wide compensation data, emerging skill premiums, hiring surges across tech hubs, and company headcount trajectories.",
    color: "lavender",
    status: "active",
    activeTaskCount: 1,
    avatarChar: "M",
    defaultModel: "Gemini 2.5 Flash",
    capabilities: [
      "India & global tech compensation benchmarks",
      "Emerging skill demand velocity",
      "Company hiring / attrition signals",
      "Title & level calibration",
    ],
    systemPromptBrief:
      "You are Signal. Report market facts accurately with provenance. Emphasize Indian tech market nuances alongside global trends.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    codename: "Trust-Verification",
    role: "Verification & Scam Detection",
    tagline: "Checks authenticity, terms, and protects your privacy.",
    description:
      "Sentinel screens listings for ghost jobs, fee-charging recruiters, unverified domains, and suspicious clauses to keep your job search safe.",
    color: "green",
    status: "active",
    activeTaskCount: 0,
    avatarChar: "V",
    defaultModel: "Gemini 2.5 Flash",
    capabilities: [
      "Domain & employer legitimacy verification",
      "Salary fraud & fee-charging scam detection",
      "Ghost job & expired posting flags",
      "Privacy leak risk assessment",
    ],
    systemPromptBrief:
      "You are Sentinel. Protect the candidate from malicious actors, fraudulent listings, and data harvesting schemes.",
  },
];

