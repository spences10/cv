# Data Sources for cv-agent.db

## profile (9 rows)

Source: `src/lib/copy/basics.md`, `src/routes/+layout.svelte`

Keys: name, location, summary, subtitle, email, website, github,
linkedin, cv_url

## roles (15 rows)

Sources:

- `src/lib/copy/work.md` — XtendOps, OES Technology Ltd
- `src/lib/copy/early-webdev-exp.md` — Storyblok, GraphCMS, Karmarama,
  Zaizi (if exists)
- `src/lib/copy/non-webdev-exp.md` — Barclays (multiple roles), MSCI,
  Deloitte, Fidelity, Mansion House, OES Technology (analyst)

Parse MDSveX: extract company, position, dates from `<RoleDetails>`
components.

## achievements (20 rows)

Sources:

- `src/lib/copy/work.md` highlights sections
- `memory/sources.md` — XtendOps achievements mined from ccrecall

Key metrics to include:

- claude-sdk-runtime: 40% AHT reduction
- UI decoupling: 928 build errors resolved
- Svelte 5 migration: 8 components
- Svelte Ambassador recognition
- 20+ MCP tools, 1,200+ combined stars
- Blog: 1.4M+ views, 791K+ visitors
- Barclays awards: Gold ROSCA, Gold RAFTA

## projects (11 rows)

Sources:

- `src/lib/copy/projects.md` (if exists) or `memory/sources.md` live
  product domains
- GitHub star counts from `memory/sources.md`

Products: Svortie (svortie.com), Sveltest (sveltest.dev), DevHub CRM
(devhub.party), SkyKit (skykit.blue) MCP tools:
mcp-sequentialthinking-tools (566), mcp-omnisearch (271),
sveltekit-embed (236), svelte-claude-skills (173), mcp-svelte-docs
(124), svead (110) Also: MCP Ecosystem aggregate entry

## skills (21 rows)

Source: `src/lib/copy/skills.md`

Three categories with evidence strings:

- Web Development: SvelteKit, Svelte 5, TypeScript, JavaScript,
  HTML/CSS/Tailwind, React, Node.js
- AI & Tooling: Claude API, Agent SDK, MCP, Prompt Engineering,
  Langfuse, OpenTelemetry
- Infrastructure: AWS ECS, Terraform, Vercel, GitHub Actions, Docker,
  Trigger.dev, Git, Monorepo (pnpm)

## events (10 rows)

Source: `memory/sources.md` speaking section

Conferences: Connect Tech (Atlanta), CityJS, Modern Frontends, NXT
Nordics (Oslo), Jamstack Conf, JSMonthly, API Days London, Pixel
Pioneers, ASYNC Meetup: Svelte Society London (organiser since
2021-11-14)

NOT Svelte Summit (attended, didn't speak).

## content_stats (10 rows)

Source: `memory/sources.md` Fathom/blog/GitHub sections

Keys: blog_total_views, blog_unique_visitors, blog_posts,
blog_monthly_readers, github_mcp_repos, github_combined_stars, fathom
stats

## qa_pairs (~27 rows)

Curate from recruiter perspective. Categories:

- **about**: who is Scott, background, location, what looking for,
  differentiators
- **skills**: languages, AI tools built, tech stack, frameworks
- **experience**: XtendOps, team sizes, leadership, biggest
  achievement, pre-web dev
- **community**: Svelte Society London, conference speaking, Svelte
  Ambassador, open source
- **projects**: products built, MCP tools, open source maintained
- **logistics**: availability/notice, contract vs perm, remote
  preference, right to work, why left XtendOps

Answers: direct, en-GB, first person, 2-4 sentences. Source from FAQ
at `~/repos/scottspence.com/copy/faq.md` for logistics.

## work_evidence (17 rows)

Sources:

- Personal ccrecall (`~/.claude/ccrecall.db`) — 10 rows
  - Per-project: session counts, top 3 tools, date ranges
  - Key projects: svortie, ralph-town, scottspence.com, ccrecall,
    sveltest, toolkit, CV
  - Overall summary row (470 sessions, 27 projects)
- XtendOps ccrecall (`~/Downloads/ccrecall.db`) — 7 rows
  - Per-workstream: AI agent runtime, monorepo platform, email agent,
    UI app, systems, other
  - Overall summary row (2,754 sessions, 6 workstreams)

**CRITICAL**: XtendOps DB has customer PII. AGGREGATE ONLY. Never
extract raw messages.

## search_index (FTS5, ~140 rows)

After populating ALL tables, index all text content:

```sql
-- For each table, insert content into search_index
INSERT INTO search_index VALUES ('content text', 'table_name', 'row_id');
```

Verify: `SELECT COUNT(*) FROM search_index;` should return ~140. Test
BM25:
`SELECT content, source, bm25(search_index) as rank FROM search_index WHERE search_index MATCH 'agent orchestration' ORDER BY rank LIMIT 5;`

## Deployment (push to prod)

mcp-sqlite-tools uses WAL mode — edits live in `cv-agent.db-wal`, not
the main `.db` file. SCP only copies the main file.

**Before any push**: close DB in mcp-sqlite-tools, then:

```python
python3 -c "import sqlite3; c=sqlite3.connect('data/cv-agent.db'); c.execute('PRAGMA wal_checkpoint(TRUNCATE)'); c.close()"
```

**Push process** (see MEMORY.md for full commands):

1. Checkpoint WAL locally
2. Stop prod container
3. SCP `.db` to prod volume
4. Delete `.db-shm` and `.db-wal` on prod
5. Start prod container
