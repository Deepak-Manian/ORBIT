-- ============================================================================
-- ORBIT — AGENTIC CAREER INTELLIGENCE PLATFORM
-- CORE DATABASE SCHEMA & ROW LEVEL SECURITY POLICIES
-- Migration: 20261111000000_orbit_core_schema.sql
-- ============================================================================

-- Enable UUID extension and pgcrypto for credential security
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ============================================================================
-- 1. USER PROFILES
-- ============================================================================

create type search_status_type as enum ('actively_looking', 'open_to_offers', 'paused');

create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text not null,
  avatar_url text,
  headline text default 'Product Designer & Systems Architect',
  location text default 'Bengaluru, India',
  remote_preference text default 'Hybrid or Remote',
  summary text default '',
  profile_strength integer default 75 check (profile_strength between 0 and 100),
  search_status search_status_type default 'actively_looking',
  github_username text,
  preferences jsonb default '{
    "target_role": "Senior / Lead Product Designer",
    "preferred_locations": ["Bengaluru", "Remote (India)", "Remote (Global)"],
    "min_compensation_inr": 3500000,
    "company_stages": ["Series B+", "Public"],
    "job_types": ["Full-time"]
  }'::jsonb,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Trigger to create public.profiles on new auth.users signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- 2. VERIFIED COMPANY REGISTRY & ATS IDENTIFIERS
-- ============================================================================

create type ats_provider_type as enum ('greenhouse', 'lever', 'ashby', 'direct_portal', 'workday');

create table if not exists public.companies (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique,
  slug text not null unique,
  logo_url text,
  brand_color text default '#FF633D',
  website_url text,
  careers_url text not null,
  ats_provider ats_provider_type not null,
  ats_identifier text,
  headquarters text default 'Bengaluru, India',
  verified boolean default true,
  scam_risk_score integer default 0 check (scam_risk_score between 0 and 100),
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- ============================================================================
-- 3. VERIFIED JOBS (INDIA-FIRST & GLOBAL VERIFIED SOURCES)
-- ============================================================================

create type job_status_type as enum ('active', 'expired', 'quarantined');
create type employment_type as enum ('Full-time', 'Part-time', 'Contract', 'Internship');

create table if not exists public.jobs (
  id uuid default uuid_generate_v4() primary key,
  company_id uuid references public.companies(id) on delete cascade not null,
  title text not null,
  slug text not null,
  location text not null,
  is_remote boolean default false,
  employment_type employment_type default 'Full-time',
  department text,
  raw_description text not null,
  responsibilities text[] default '{}',
  required_skills text[] default '{}',
  normalized_skills text[] default '{}',
  min_salary_inr bigint,
  max_salary_inr bigint,
  salary_display text,
  experience_range text,
  apply_url text not null,
  source_ats ats_provider_type not null,
  source_job_id text not null,
  content_hash text not null,
  status job_status_type default 'active',
  posted_at timestamptz not null,
  first_seen_at timestamptz default now() not null,
  last_verified_at timestamptz default now() not null,
  expires_at timestamptz,
  created_at timestamptz default now() not null,
  constraint uq_company_source_job unique (company_id, source_job_id)
);

create index if not exists idx_jobs_skills on public.jobs using gin(normalized_skills);
create index if not exists idx_jobs_search on public.jobs using gin(to_tsvector('english', title || ' ' || raw_description));
create index if not exists idx_jobs_status_posted on public.jobs(status, posted_at desc);

-- ============================================================================
-- 4. APPLICATION TRACKER & LIFECYCLE
-- ============================================================================

create type application_status_type as enum ('saved', 'applied', 'interview', 'offer', 'rejected');

create table if not exists public.applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  job_id uuid references public.jobs(id) on delete cascade,
  custom_company text,
  custom_title text,
  custom_location text,
  status application_status_type default 'saved' not null,
  match_score integer default 85 check (match_score between 0 and 100),
  applied_at timestamptz,
  next_follow_up_at timestamptz,
  interview_at timestamptz,
  notes text default '',
  stage_details text,
  custom_compensation_offered text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create index if not exists idx_applications_user on public.applications(user_id, status);

create table if not exists public.application_timeline_events (
  id uuid default uuid_generate_v4() primary key,
  application_id uuid references public.applications(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  event_type text not null,
  from_status application_status_type,
  to_status application_status_type,
  description text not null,
  created_at timestamptz default now() not null
);

-- ============================================================================
-- 5. SKILLS, EXPERIENCE & RESUMES
-- ============================================================================

create type skill_level_type as enum ('Expert', 'Advanced', 'Growing', 'Familiar');

create table if not exists public.user_skills (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  skill_name text not null,
  level skill_level_type default 'Advanced',
  endorsements_count integer default 0,
  created_at timestamptz default now() not null,
  constraint uq_user_skill unique (user_id, skill_name)
);

create table if not exists public.user_experience (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  company text not null,
  role text not null,
  period text not null,
  description text not null,
  highlight_metric text,
  order_index integer default 0,
  created_at timestamptz default now() not null
);

create table if not exists public.resumes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  file_path text not null,
  file_name text not null,
  parsed_text text,
  raw_metadata jsonb default '{}'::jsonb,
  is_primary boolean default true,
  created_at timestamptz default now() not null
);

-- ============================================================================
-- 6. BYOA CREDENTIAL VAULT & SETTINGS
-- ============================================================================

create type ai_provider_id as enum ('gemini', 'groq', 'openrouter', 'mistral', 'ollama');

create table if not exists public.user_ai_credentials (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  provider ai_provider_id not null,
  encrypted_api_key text not null,
  key_fingerprint text not null,
  is_valid boolean default true,
  last_verified_at timestamptz default now(),
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  constraint uq_user_provider unique (user_id, provider)
);

create table if not exists public.user_ai_settings (
  user_id uuid references auth.users(id) on delete cascade primary key,
  active_provider ai_provider_id default 'gemini' not null,
  default_model text default 'Gemini 2.5 Pro',
  task_routing jsonb default '{
    "research": "Gemini 2.5 Pro",
    "writing": "Gemini 2.5 Flash",
    "auditing": "Gemini 2.5 Pro",
    "coaching": "Gemini 2.5 Pro"
  }'::jsonb,
  monthly_spending_limit_inr integer default 2000,
  require_human_approval boolean default true,
  share_profile_context boolean default true,
  anonymous_telemetry boolean default false,
  updated_at timestamptz default now() not null
);

create table if not exists public.user_ai_usage_ledger (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  provider ai_provider_id not null,
  model text not null,
  agent_name text not null,
  task_type text not null,
  prompt_tokens integer default 0 not null,
  completion_tokens integer default 0 not null,
  estimated_cost_inr numeric(10, 4) default 0 not null,
  created_at timestamptz default now() not null
);

-- ============================================================================
-- 7. LENS AI ANALYSES CACHE
-- ============================================================================

create table if not exists public.lens_compatibility_analyses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  job_id uuid references public.jobs(id) on delete cascade not null,
  model_used text not null,
  overall_match_score integer not null check (overall_match_score between 0 and 100),
  trajectory_fit_score numeric(3, 1) not null,
  culture_fit_score numeric(3, 1) not null,
  skill_fit_score numeric(3, 1) not null,
  matched_evidence jsonb not null default '[]'::jsonb,
  identified_gaps jsonb not null default '[]'::jsonb,
  actionable_recommendation text not null,
  created_at timestamptz default now() not null,
  constraint uq_user_job_analysis unique (user_id, job_id)
);

-- ============================================================================
-- 8. ROW LEVEL SECURITY POLICIES
-- ============================================================================

alter table public.profiles enable row level security;
alter table public.companies enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;
alter table public.application_timeline_events enable row level security;
alter table public.user_skills enable row level security;
alter table public.user_experience enable row level security;
alter table public.resumes enable row level security;
alter table public.user_ai_credentials enable row level security;
alter table public.user_ai_settings enable row level security;
alter table public.user_ai_usage_ledger enable row level security;
alter table public.lens_compatibility_analyses enable row level security;

-- Profiles: Own user select & update
drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Companies & Jobs: Public read for authenticated users, service role write
drop policy if exists "Companies readable" on public.companies;
create policy "Companies readable" on public.companies for select using (true);

drop policy if exists "Jobs readable" on public.jobs;
create policy "Jobs readable" on public.jobs for select using (status = 'active');

-- Applications: Own user all operations
drop policy if exists "User applications" on public.applications;
create policy "User applications" on public.applications for all using (auth.uid() = user_id);

drop policy if exists "User timeline events" on public.application_timeline_events;
create policy "User timeline events" on public.application_timeline_events for select using (auth.uid() = user_id);

-- Skills & Experience: Own user
drop policy if exists "User skills" on public.user_skills;
create policy "User skills" on public.user_skills for all using (auth.uid() = user_id);

drop policy if exists "User experience" on public.user_experience;
create policy "User experience" on public.user_experience for all using (auth.uid() = user_id);

drop policy if exists "User resumes" on public.resumes;
create policy "User resumes" on public.resumes for all using (auth.uid() = user_id);

-- BYOA Credentials & Settings: Strictly private
drop policy if exists "User AI credentials" on public.user_ai_credentials;
create policy "User AI credentials" on public.user_ai_credentials for all using (auth.uid() = user_id);

drop policy if exists "User AI settings" on public.user_ai_settings;
create policy "User AI settings" on public.user_ai_settings for all using (auth.uid() = user_id);

drop policy if exists "User AI usage ledger" on public.user_ai_usage_ledger;
create policy "User AI usage ledger" on public.user_ai_usage_ledger for select using (auth.uid() = user_id);

-- Lens analyses: Own user
drop policy if exists "User Lens analyses" on public.lens_compatibility_analyses;
create policy "User Lens analyses" on public.lens_compatibility_analyses for all using (auth.uid() = user_id);

