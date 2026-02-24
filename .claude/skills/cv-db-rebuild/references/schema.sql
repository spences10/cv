CREATE TABLE profile (key TEXT PRIMARY KEY, value TEXT);

CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  start_date TEXT,
  end_date TEXT,
  summary TEXT
);

CREATE TABLE achievements (
  id INTEGER PRIMARY KEY,
  role_id INTEGER REFERENCES roles(id),
  description TEXT NOT NULL,
  metric TEXT,
  metric_value TEXT
);

CREATE TABLE projects (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT,
  description TEXT,
  tech_stack TEXT,
  github_stars INTEGER
);

CREATE TABLE skills (
  id INTEGER PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  evidence TEXT
);

CREATE TABLE events (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  date TEXT,
  talk_title TEXT,
  type TEXT
);

CREATE TABLE content_stats (key TEXT PRIMARY KEY, value TEXT);

CREATE TABLE qa_pairs (
  id INTEGER PRIMARY KEY,
  question_pattern TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT
);

CREATE TABLE work_evidence (
  id INTEGER PRIMARY KEY,
  source TEXT NOT NULL,
  workstream TEXT NOT NULL,
  session_count INTEGER,
  tool_pattern TEXT,
  date_range TEXT,
  description TEXT
);

CREATE VIRTUAL TABLE search_index USING fts5(content, source, source_id);
