import { supabase, isSupabaseConfigured } from "./supabase";
import { Application, ApplicationStatus } from "../types";
import { initialApplications } from "../mock/applications";

const STORAGE_KEY = "orbit_user_applications_v1";

export const applicationService = {
  // Load applications from Supabase or localStorage fallback
  async getApplications(): Promise<Application[]> {
    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data, error } = await supabase
            .from("applications")
            .select(`
              id,
              job_id,
              status,
              applied_at,
              notes,
              stage_details,
              jobs (
                id,
                title,
                slug,
                location,
                min_salary_inr,
                max_salary_inr,
                salary_display,
                companies (
                  name,
                  brand_color
                )
              )
            `)
            .eq("user_id", session.user.id)
            .order("updated_at", { ascending: false });

          if (!error && data && data.length > 0) {
            return data.map((item: any) => ({
              id: item.id,
              jobId: item.jobs?.slug || item.job_id,
              company: item.jobs?.companies?.name || "Company",
              title: item.jobs?.title || "Role",
              location: item.jobs?.location || "Remote",
              salary: item.jobs?.salary_display || "₹40L – ₹55L",
              status: item.status as ApplicationStatus,
              appliedDate: item.applied_at ? new Date(item.applied_at).toLocaleDateString() : undefined,
              match: 92,
              color: item.jobs?.companies?.brand_color || "#FF633D",
              notes: item.notes || "",
              stageDetails: item.stage_details || "Active",
            }));
          }
        }
      } catch (err) {
        console.warn("Error fetching applications from Supabase, checking local cache:", err);
      }
    }

    // LocalStorage fallback
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed reading applications from localStorage:", e);
    }

    return initialApplications;
  },

  // Save full application list to localStorage & sync if online
  async saveApplications(apps: Application[]): Promise<void> {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
    } catch (e) {
      console.warn("Failed writing applications to localStorage:", e);
    }
  },

  // Update status of single application
  async updateStatus(appId: string, newStatus: ApplicationStatus): Promise<void> {
    if (supabase && isSupabaseConfigured) {
      try {
        await supabase
          .from("applications")
          .update({ status: newStatus, updated_at: new Date().toISOString() })
          .eq("id", appId);
      } catch (err) {
        console.warn("Failed updating application status in Supabase:", err);
      }
    }
  },

  // Update notes of single application
  async updateNotes(appId: string, notes: string): Promise<void> {
    if (supabase && isSupabaseConfigured) {
      try {
        await supabase
          .from("applications")
          .update({ notes, updated_at: new Date().toISOString() })
          .eq("id", appId);
      } catch (err) {
        console.warn("Failed updating application notes in Supabase:", err);
      }
    }
  },
};

