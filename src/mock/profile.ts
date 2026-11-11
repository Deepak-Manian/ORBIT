import { CareerProfileData } from "../types";

export const initialCareerProfile: CareerProfileData = {
  name: "Naina Kapoor",
  avatarInitials: "NK",
  headline: "Senior Product Designer & Systems Thinker",
  location: "Bengaluru, India",
  remotePreference: "Hybrid or Remote",
  summary:
    "Product designer with 8+ years turning complex systems into calm, intuitive experiences. I thrive at the intersection of product strategy, design systems, and hands-on craft. Passionate about developer tooling, fintech architecture, and agentic workflows.",
  profileStrength: 87,
  githubConnected: true,
  githubUsername: "nainakapoor-design",
  skills: [
    { name: "Product strategy", level: "Expert", endorsementCount: 42 },
    { name: "Design systems", level: "Expert", endorsementCount: 56 },
    { name: "Figma & Variables", level: "Expert", endorsementCount: 61 },
    { name: "Interaction design", level: "Advanced", endorsementCount: 38 },
    { name: "User research", level: "Advanced", endorsementCount: 29 },
    { name: "Prototyping", level: "Advanced", endorsementCount: 34 },
    { name: "AI product workflows", level: "Growing", endorsementCount: 19 },
    { name: "Executive storytelling", level: "Advanced", endorsementCount: 23 },
    { name: "Frontend basics (React & CSS)", level: "Familiar", endorsementCount: 15 },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Lead Product Designer",
      company: "Razorpay",
      period: "2021 — PRESENT · 3 yrs 5 mos",
      description:
        "Led merchant onboarding and platform redesign across 4 core squads. Architected multi-brand token system used across 300+ surfaces.",
      highlightMetric: "+31% merchant activation uplift",
    },
    {
      id: "exp-2",
      role: "Senior Product Designer",
      company: "Flipkart",
      period: "2018 — 2021 · 3 yrs",
      description:
        "Designed high-scale search discovery, filter mechanics, and cart optimization flows serving 100M+ active shoppers across India tier 2/3 markets.",
      highlightMetric: "+14% checkout conversion rate",
    },
    {
      id: "exp-3",
      role: "Product Designer",
      company: "Urban Company",
      period: "2016 — 2018 · 2 yrs",
      description: "Designed partner app and booking experiences for home services professionals.",
      highlightMetric: "4.8/5 Partner app rating",
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Des in Interaction & Industrial Design",
      institution: "National Institute of Design (NID), Ahmedabad",
      year: "2012 — 2016",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Razorpay Blade Design System 2.0",
      description:
        "End-to-end refactor of design tokens, multi-theme support (light/dark/high-contrast), and automated Figma-to-code sync pipeline.",
      tags: ["Design Systems", "Figma Variables", "React", "Accessibility"],
      link: "https://blade.razorpay.com",
    },
    {
      id: "proj-2",
      title: "Agentic Workspace Exploration",
      description:
        "Experimental prototype investigating how human product managers review and approve AI-generated user research synthesis.",
      tags: ["AI UX", "Prototyping", "Human-in-the-loop"],
    },
  ],
  preferences: {
    targetRole: "Staff / Lead Product Designer or Head of Design",
    preferredLocations: ["Bengaluru", "Remote (India)", "Remote (Global)"],
    minCompensation: "₹38L – ₹55L annually",
    preferredCompanyStages: ["Series B → Pre-IPO", "Public / Established"],
    jobTypes: ["Full-time"],
  },
};
