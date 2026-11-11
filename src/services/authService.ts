import { supabase, isSupabaseConfigured } from "./supabase";

export interface UserSession {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

export const authService = {
  isConfigured(): boolean {
    return isSupabaseConfigured;
  },

  async getCurrentSession(): Promise<UserSession | null> {
    if (!supabase) return null;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return null;

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", session.user.id)
        .single();

      return {
        id: session.user.id,
        email: session.user.email || "",
        fullName: profile?.full_name || session.user.user_metadata?.full_name || "Naina Kapoor",
        avatarUrl: profile?.avatar_url || session.user.user_metadata?.avatar_url,
      };
    } catch (err) {
      console.warn("Failed to get Supabase session, operating in guest mode:", err);
      return null;
    }
  },

  async signInWithEmail(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
      return { success: true }; // Local demo mode
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    return { success: true };
  },

  async signUpWithEmail(email: string, password: string, fullName: string): Promise<{ success: boolean; error?: string }> {
    if (!supabase) {
      return { success: true };
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    if (error) return { success: false, error: error.message };
    return { success: true };
  },

  async signInWithMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
    if (!supabase) return { success: true };
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) return { success: false, error: error.message };
    return { success: true };
  },

  async signOut(): Promise<void> {
    if (supabase) {
      await supabase.auth.signOut();
    }
  },
};

