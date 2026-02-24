---
name: cv-db-rebuild
# prettier-ignore
description: Rebuild cv-agent.db from CV copy files, sources.md, and ccrecall databases. Use when database is lost, corrupted, or needs full reconstruction.
---

# CV Agent Database Rebuild

Reconstruct `data/cv-agent.db` from source files using
mcp-sqlite-tools.

## Quick Start

1. Open/create DB: `open_database` at
   `/home/scott/repos/cv/data/cv-agent.db`
2. Create schema (see [references/schema.sql](references/schema.sql))
3. Populate from sources (see
   [references/data-sources.md](references/data-sources.md))
4. Build FTS5 search index across all tables
5. SCP to prod (see memory/MEMORY.md for push process)

## Table Population Order

1. **profile** — from `src/lib/copy/basics.md` + `+layout.svelte`
2. **roles** — from `src/lib/copy/work.md`, `early-webdev-exp.md`,
   `non-webdev-exp.md`
3. **achievements** — from `src/lib/copy/work.md` highlights +
   `memory/sources.md`
4. **projects** — from `src/lib/copy/projects.md` +
   `memory/sources.md` GitHub stars
5. **skills** — from `src/lib/copy/skills.md` with evidence strings
6. **events** — from `memory/sources.md` speaking section
7. **content_stats** — from `memory/sources.md` Fathom/blog/GitHub
   stats
8. **qa_pairs** — curate ~25-30 recruiter Q&A pairs across categories:
   about, skills, experience, community, projects, logistics
9. **work_evidence** — aggregate stats from ccrecall databases (see
   references)
10. **search_index** — FTS5 index across ALL content from ALL tables

## Critical Rules

- Use mcp-sqlite-tools for all DB operations
- **ALWAYS checkpoint WAL before SCP push**: mcp-sqlite-tools uses WAL
  mode. Edits go to `.db-wal`, not the main file. Run
  `PRAGMA wal_checkpoint(TRUNCATE)` before any file-based transfer.
- Push process: stop container → SCP → delete WAL/SHM on prod → start
- XtendOps ccrecall (`~/Downloads/ccrecall.db`) contains customer PII
  — extract AGGREGATE stats ONLY
- Personal ccrecall (`~/.claude/ccrecall.db`) — per-project session
  counts, tools, date ranges
- Use en-GB spellings throughout
- After rebuild, verify with: `SELECT COUNT(*) FROM search_index`
  (expect ~140 rows)

## References

- [schema.sql](references/schema.sql) — Full table DDL
- [data-sources.md](references/data-sources.md) — Where each table's
  data comes from
