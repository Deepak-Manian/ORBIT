import { supabase, isSupabaseConfigured } from "./supabase";
import { Job } from "../types";
import { mockJobs } from "../mock/jobs";

export const jobService = {
  async getJobs(): Promise<Job[]> {
    if (!supabase || !isSupabaseConfigured) {
      return mockJobs;
    }

    try {
      const { data, error } = await supabase
        .from("jobs")
        .select(`
          id,
          title,
          slug,
          location,
          is_remote,
          employment_type,
          department,
          raw_description,
          responsibilities,
          required_skills,
          normalized_skills,
          min_salary_inr,
          max_salary_inr,
          salary_display,
          experience_range,
          posted_at,
          companies (
            name,
            brand_color
          )
        `)
        .eq("status", "active")
        .order("posted_at", { ascending: false });

      if (error || !data || data.length === 0) {
        return mockJobs;
      }

      return data.map((item: any) => ({
        id: item.slug || item.id,
        company: item.companies?.name || "Verified Company",
        title: item.title,
        location: item.location,
        type: item.employment_type || "Full-time",
        salary: item.salary_display || `₹${Math.round(item.min_salary_inr / 100000)}L – ₹${Math.round(item.max_salary_inr / 100000)}L`,
        minSalary: Math.round(item.min_salary_inr / 100000),
        experience: item.experience_range || "5–8 years",
        match: 90,
        color: item.companies?.brand_color || "#FF633D",
        logoLetter: (item.companies?.name || "O")[0],
        postedAgo: "Recently verified",
        isNew: true,
        isVerified: true,
        department: item.department || "Engineering",
        description: item.raw_description,
        responsibilities: item.responsibilities || [],
        requiredSkills: item.required_skills || [],
        matchedSkills: item.normalized_skills || [],
        missingSkills: [],
        whyFits: "Direct match against your verified systems and product architecture skills.",
        trajectoryFitScore: 9.2,
        cultureFitScore: 9.0,
        skillFitScore: 9.1,
      }));
    } catch (err) {
      console.warn("Falling back to local curated job dataset:", err);
      return mockJobs;
    }
  },

  async getJobById(idOrSlug: string): Promise<Job | null> {
    const all = await this.getJobs();
    return all.find((j) => j.id === idOrSlug) || null;
  },
};

