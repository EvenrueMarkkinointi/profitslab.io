-- Run this in the Supabase SQL editor

-- Audit sessions
create table if not exists assessments (
  id uuid primary key default gen_random_uuid(),
  email text,
  business_type text,
  responses jsonb not null default '{}',
  created_at timestamptz default now(),
  completed_at timestamptz,
  stripe_session_id text,
  paid boolean default false
);

-- Computed results
create table if not exists assessment_results (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid references assessments(id) on delete cascade,
  total_score int,
  category_scores jsonb,
  top_opportunities jsonb,
  tier text,
  created_at timestamptz default now(),
  unique(assessment_id)
);

-- Enable Row Level Security
alter table assessments enable row level security;
alter table assessment_results enable row level security;

-- Allow anon to insert (create assessment)
create policy "anon can create assessment"
  on assessments for insert
  to anon
  with check (true);

-- Allow reading own assessment by id (no auth — use UUID as token)
create policy "read own assessment"
  on assessments for select
  using (true);

create policy "update own assessment"
  on assessments for update
  using (true);

create policy "read own results"
  on assessment_results for select
  using (true);
