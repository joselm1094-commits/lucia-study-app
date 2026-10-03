-- Create questions table
create table public.questions (
  id bigint primary key generated always as identity,
  question text not null,
  options text[] not null,
  correct_index integer not null,
  explanation text,
  difficulty text check (difficulty in ('easy', 'medium', 'hard')),
  topic text,
  oposicion text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.questions enable row level security;

-- Create policy to allow anyone to read questions
create policy "Allow public read access" on public.questions
  for select using (true);

-- Create policy to allow only authenticated users to insert
create policy "Allow authenticated users to insert" on public.questions
  for insert with check (auth.role() = 'authenticated');

-- Create indexes for faster queries
create index idx_questions_oposicion on public.questions(oposicion);
create index idx_questions_topic on public.questions(topic);
create index idx_questions_difficulty on public.questions(difficulty);
create index idx_questions_created_at on public.questions(created_at);
