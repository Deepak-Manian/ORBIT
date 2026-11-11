import { supabase, isSupabaseConfigured } from "./supabase";
import { CareerProfileData } from "../types";
import { initialCareerProfile } from "../mock/profile";

const PROFILE_STORAGE_KEY = "orbit_career_profile_v1";

export const profileService = {
  async getProfile(): Promise<CareerProfileData> {
    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (!error && data) {
            return {
              name: data.full_name || initialCareerProfile.name,
              title: data.headline || initialCareerProfile.title,
              location: data.location || initialCareerProfile.location,
              bio: data.bio || initialCareerProfile.bio,
              avatar: data.avatar_url || initialCareerProfile.avatar,
              githubUsername: data.github_username || initialCareerProfile.githubUsername,
              experience: initialCareerProfile.experience, // Joined tables in full schema
              skills: initialCareerProfile.skills,
              projects: initialCareerProfile.projects,
              education: initialCareerProfile.education,
              preferences: initialCareerProfile.preferences,
            };
          }
        }
      } catch (err) {
        console.warn("Error fetching profile from Supabase, checking local cache:", err);
      }
    }

    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed reading profile from localStorage:", e);
    }

    return initialCareerProfile;
  },

  async saveProfile(profile: CareerProfileData): Promise<void> {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn("Failed writing profile to localStorage:", e);
    }

    if (supabase && isSupabaseConfigured) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          await supabase.from("profiles").upsert({
            id: session.user.id,
            full_name: profile.name,
            headline: profile.title,
            location: profile.location,
            bio: profile.bio,
            github_username: profile.githubUsername,
            updated_at: new Date().toISOString(),
          });
        }
      } catch (err) {
        console.warn("Failed saving profile to Supabase:", err);
      }
    }
  },
};

