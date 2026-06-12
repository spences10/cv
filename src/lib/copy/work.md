<script lang="ts">
  import { DD, Collapse, RoleDetails } from '$lib/components'
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
infrastructure, and LLM tooling. Built a greenfield insurance workflow
platform intended to process roughly $20m in business when fully live,
with the codebase designed from the outset for safe, high-standard AI
agent collaboration.

### Highlights

Built a multi-tenant insurance workflow platform from scratch,
covering submission intake, document processing, extraction/evaluation
flows, quote lifecycle support, operational tooling, audit history,
and controlled deployment into client infrastructure

Designed the repo for agent-assisted team delivery: canonical agent
onboarding, local project skills, branch workflow rules,
module-boundary guidance, service-layer patterns, code-style rules,
MVP readiness gates, and explicit “read docs before changing code”
entrypoints

Created a local documentation package that indexes project docs into a
SQLite/FTS search layer, giving agents fast, cited access to business
requirements, schema notes, communications, workflow maps, meeting
notes, and implementation context before touching code

Added guardrail tooling to keep standards high, including import and
module-boundary checks, route data audits, runtime configuration
checks, release verification/export tooling, required Svelte/type
checks, and guidance for keeping routes thin and business logic inside
services/packages

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
