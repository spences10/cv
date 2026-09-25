<script lang="ts">
  import { DD, Collapse, RoleDetails } from '#lib/components/index.js'
</script>

<RoleDetails
  position="Product Engineer"
  company="Cloud Lobsters"
  startDate="2026-03-16"
  endDate=""
/>

<section class='all-prose mb-8'>

### Summary

Product engineer building client-facing platforms, internal tools, and
AI-assisted engineering workflows across SvelteKit, TypeScript, cloud
infrastructure, and LLM tooling. Architected a live reinsurance
underwriting platform, with the codebase designed from the outset for
safe, high-standard AI agent collaboration.

### Highlights

Took a live reinsurance underwriting platform from a clickable
prototype with no backend to production in the client's private Azure
network in about six weeks, working alone for the first two months
(520 of the first 523 commits). Set up the monorepo and wrote the core
web app, worker, rules, database, and domain packages that the team
joining later built on. After handover, the team raised the
underwriting cap from a flat $15m to up to $35m in one week through
rules and configuration changes, not a rebuild

Owned and maintained a live UK deposit-replacement insurance platform,
releasing every production change since March and catching failures
nobody had flagged, including off-site backups that had stopped and
PDF generation breaking in production. Built its claims platform from
spec to production in about five weeks. The client was very positive
at the demo and plans to train sales staff to sell it

Built deterministic guardrails so coding agents could not erode the
architecture: 36 blocking module-boundary rules parsed from the code,
plus data-ownership, route-data, and lint checks. After handover they
still gate the client's production deploys, have blocked 8 deploys
that broke the rules, and the team has extended them rather than
switching them off. The same checker was adopted in a second product
and wired into its CI

Built a docs search CLI (SQLite FTS5, fact extraction, zero
dependencies) so agents pull the right requirements, schema notes, and
client decisions on demand instead of re-reading a growing docs
folder. Agents called it 1,122 times across 327 sessions as the corpus
grew to 291 documents and 4,307 extracted facts. A teammate adopted
the approach for another project, and it led to my open-source tool
wiki0

Designed the client release as a verified export: the client receives
exactly the application they bought, while the docs corpus, agent
skills, and delivery tooling remain agency IP. The export fails if
internal paths or references leak into the client repository

Implemented cloud deployment and operational changes across AWS and
Azure, including ECS/container app services, RDS/Postgres-backed
applications, SES/email infrastructure, storage, secrets/environment
configuration, Terraform PRs, DNS, and production debugging

Used browser automation, MCP tools, recall databases, documentation
search, and agentic coding workflows to test production journeys,
diagnose failures, coordinate parallel work, and preserve review
control while moving quickly

</section>

<span class="divider before:bg-primary after:bg-primary mb-10 print:mb-0"></span>

<RoleDetails
  position="Engineering Team Lead"
  company="XtendOps"
  startDate="2023-09-11"
  endDate="2026-02-23"
/>

<section class='all-prose mb-8'>

### Summary

Engineering team lead for a SvelteKit monorepo ecosystem powering AI
customer service agents. Led 12 developers across Customer Portal (8)
and Smart Agent (4) teams. Primary architect for infrastructure,
security, and AI integration decisions across the platform.

### Highlights

Built claude-sdk-runtime, an AI customer service agent deployed on AWS
ECS for enterprise clients. Reduced average handle time (AHT) by 40%
through intelligent skill-based routing across chat, email, and SMS
channels

Pioneered AI agent orchestration workflows with Claude Code. Built
reusable engineering skills and coordinated multi-agent teams for
parallel development across security, infrastructure, and architecture
workstreams

Led a major UI architecture decoupling, migrating the primary
application from a shared monorepo UI package to shadcn-svelte.
Resolved 928 build errors and unblocked 4 dependent applications to
ship independently

Migrated the agent builder to Svelte 5, establishing modern reactivity
patterns that Claude Code adheres to when generating new code. This
reduced bad practices creeping back into the codebase and freed up the
team to move faster

Proactively evaluated Vite 8 / Rolldown / OXC toolchain ahead of
release, benchmarking build performance and plugin compatibility to
prepare the team for migration

Built reusable security middleware for ownership validation across all
API routes, and automated GDPR-compliant trace cleanup for AI
observability data

</section>

<span class="divider before:bg-primary after:bg-primary mb-10 print:mb-0"></span>

<RoleDetails
  position="AI & Svelte Consultant"
  company="OES Technology Ltd"
  startDate="2021-04-26"
  endDate=""
/>

<section class='all-prose mb-8'>

### Summary

Independent consultancy providing contract engineering leadership,
developer relations, and Svelte expertise to technology companies.

Recognised by the Svelte core team as a Svelte Ambassador for
sustained community contributions and helping grow a welcoming
ecosystem. Co-founder and organiser of Svelte Society London, running
monthly community events for <DD from="2021-11-14" />. International
conference speaker at Connect Tech (Atlanta), CityJS, Modern
Frontends, NXT Nordics (Oslo), and Jamstack Conf.

Technical content creator at scottspence.com with 1.4M+ page views,
791K+ unique visitors across 244 posts, and 22K+ monthly readers.
Writing about SvelteKit, TypeScript, AI tooling, and developer
experience.

Author of 20+ MCP (Model Context Protocol) tools with 1,200+ combined
GitHub stars, covering search, memory, workflow automation, and
documentation access.

</section>

<span class="divider before:bg-primary after:bg-primary mb-10 print:mb-0"></span>
