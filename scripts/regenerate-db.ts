#!/usr/bin/env tsx
/**
 * Regenerates cv-agent.db from structured seed data.
 * Run: pnpm db:regenerate
 */
import { execSync } from 'node:child_process'
import { existsSync, unlinkSync } from 'node:fs'
import { resolve } from 'node:path'
import { parseArgs } from 'node:util'

// --- CLI args ---

const { values } = parseArgs({
	options: {
		output: { type: 'string', short: 'o', default: 'cv-agent.db' },
		help: { type: 'boolean', short: 'h', default: false },
	},
})

if (values.help) {
	console.log(`Usage: pnpm db:regenerate [--output <path>]
  --output, -o  Output DB path (default: cv-agent.db)`)
	process.exit(0)
}

const db_path = resolve(
	import.meta.dirname,
	'..',
	values.output ?? 'cv-agent.db',
)

// --- Seed data ---

const profile: [string, string][] = [
	['name', 'Scott Spence'],
	['location', 'UK (Swanley, Kent)'],
	[
		'summary',
		"AI engineering leader and full-stack developer. Builds AI-powered products, from customer service agent runtimes that reduced average handle time by 40%, to multi-agent orchestration systems and MCP tooling. Ships fast, leads teams, and cares deeply about developer experience. Currently operating through OES Technology Ltd, specialising in SvelteKit, TypeScript, AI integration, and developer relations. Previously engineering team lead at XtendOps, leading 12 developers across two product teams in a SvelteKit monorepo powering AI customer service agents. Co-founder of Svelte Society London. International conference speaker. Technical blogger at scottspence.com with 1.4M+ page views and 791K+ unique visitors.",
	],
	['subtitle', 'Engineering Lead | AI Builder | Svelte Ambassador'],
	['email', 'scott@scottspence.com'],
	['website', 'scottspence.com'],
	['github', 'github.com/spences10'],
	['linkedin', 'linkedin.com/in/spences10'],
	['cv_url', 'mecv.xyz'],
]

interface Role {
	id: number
	company: string
	position: string
	start_date: string
	end_date: string
	summary: string
}

const roles: Role[] = [
	{
		id: 1,
		company: 'XtendOps',
		position: 'Engineering Team Lead',
		start_date: '2023-09-11',
		end_date: '2026-02-23',
		summary:
			'Engineering team lead for a SvelteKit monorepo ecosystem powering AI customer service agents. Led 12 developers across Customer Portal (8) and Smart Agent (4) teams. Primary architect for infrastructure, security, and AI integration decisions across the platform.',
	},
	{
		id: 2,
		company: 'OES Technology Ltd',
		position: 'AI & Svelte Consultant',
		start_date: '2021-04-26',
		end_date: '',
		summary:
			'Independent consultancy providing contract engineering leadership, developer relations, and Svelte expertise to technology companies. Recognised by the Svelte core team as a Svelte Ambassador for sustained community contributions.',
	},
	{
		id: 3,
		company: 'Storyblok',
		position: 'Developer Relations Engineer',
		start_date: '2022-08-22',
		end_date: '2023-08-22',
		summary:
			'Helping enterprise customers understand and get value out of Storyblok in workshops, tutorials, and customer demos. Building sample applications, prototypes, and code samples.',
	},
	{
		id: 4,
		company: 'GraphCMS',
		position: 'Developer Advocate',
		start_date: '2021-04-26',
		end_date: '2022-07-30',
		summary:
			'Content creation in the form of blog posts, workshops and educational videos. Coordinating meet-up events and conference talks to gather and energise users.',
	},
	{
		id: 5,
		company: 'Karmarama',
		position: 'Web Developer',
		start_date: '2018-09-03',
		end_date: '2021-04-23',
		summary:
			'Web Developer working in the Creative Products section. Mainly front end with React. Team DevOps, overseeing deployments of the majority of projects hosted internally.',
	},
	{
		id: 6,
		company: 'Zaizi',
		position: 'Front-End Developer',
		start_date: '2018-03-08',
		end_date: '2018-08-31',
		summary:
			'Worked in agile teams to develop new user-facing features using React, Gatsby, and styled-components.',
	},
	{
		id: 7,
		company: 'OES Technology',
		position: 'Analyst Developer',
		start_date: '2016-11-01',
		end_date: '2018-03-07',
		summary:
			'Contract work on new product development as part of the ACE Chubb merger. Post Chubb, working on GitHub community Build to Learn project.',
	},
	{
		id: 8,
		company: 'Mansion House Consulting',
		position: 'VBA Developer',
		start_date: '2016-01-01',
		end_date: '2016-07-31',
		summary:
			'Part of Insight framework development team. Developer of bespoke solutions for clients including Deutsche Bank, Barclays, Old Mutual and Tullett Prebon.',
	},
	{
		id: 9,
		company: 'Fidelity',
		position: 'Senior Software Engineer',
		start_date: '2014-12-01',
		end_date: '2015-12-25',
		summary:
			'Situated on the Fixed Income Global trading Desk. Primary responsibilities include ensuring start of day, monitoring batch machines, carrying out triage for issues. Build and maintain relationships with operations, trading teams and quants.',
	},
	{
		id: 10,
		company: 'Deloitte',
		position: 'VBA Developer',
		start_date: '2013-08-01',
		end_date: '2014-12-01',
		summary:
			'Redesign, development and maintenance of existing desktop application. Involvement in client meetings and liaising with clients to gather requirements and deliver products.',
	},
	{
		id: 11,
		company: 'MSCI',
		position: 'Support Developer',
		start_date: '2010-10-01',
		end_date: '2013-08-01',
		summary:
			'Application Support team responsible for supporting in-house software systems processing property-related financial information. Ownership of, diagnose and fix issues for a wide range of systems.',
	},
	{
		id: 12,
		company: 'Barclays',
		position: 'Technical Project Manager',
		start_date: '2010-03-01',
		end_date: '2010-10-01',
		summary:
			'Seconded to Barclays Capital to project manage, build and test a tool used to link up Barclays Capital base rate hedges with Barclays Corporate loan data for the Risk Solutions Group in Credit Markets.',
	},
	{
		id: 13,
		company: 'Barclays',
		position: 'Technical Project Manager',
		start_date: '2007-07-01',
		end_date: '2010-10-01',
		summary:
			"Project manage the development of new systems and enhancements of existing systems within the banks Risk function. Developed excellent knowledge of VBA, VBE, VB, SQL Server, MS Access and program design.",
	},
	{
		id: 14,
		company: 'Barclays',
		position: 'Business & Information Manager',
		start_date: '2005-11-01',
		end_date: '2007-07-01',
		summary:
			'Working in the banks risk function looking after cost centres, involving monthly reconciliation/attestation and financial planning (5.4m budget).',
	},
	{
		id: 15,
		company: 'Barclays',
		position: 'Financial & Commercial Assistant',
		start_date: '2002-02-01',
		end_date: '2005-11-01',
		summary:
			'Reporting directly to the Head of Directors Office Finance Team, Shared Client Services. Specific responsibilities to assist in the day to day management of all financial administration within 17 SCS teams.',
	},
]

interface Achievement {
	id: number
	role_id: number
	description: string
	metric: string | null
	metric_value: string | null
}

const achievements: Achievement[] = [
	{
		id: 1,
		role_id: 1,
		description:
			'Built claude-sdk-runtime, an AI customer service agent deployed on AWS ECS for enterprise clients. Reduced average handle time (AHT) through intelligent skill-based routing across chat, email, and SMS channels',
		metric: 'AHT reduction',
		metric_value: '40%',
	},
	{
		id: 2,
		role_id: 1,
		description:
			'Pioneered AI agent orchestration workflows with Claude Code. Built reusable engineering skills and coordinated multi-agent teams for parallel development across security, infrastructure, and architecture workstreams',
		metric: 'multi-agent team size',
		metric_value: 'up to 7',
	},
	{
		id: 3,
		role_id: 1,
		description:
			'Led a major UI architecture decoupling, migrating the primary application from a shared monorepo UI package to shadcn-svelte. Resolved build errors and unblocked dependent applications to ship independently',
		metric: 'build errors resolved',
		metric_value: '928',
	},
	{
		id: 4,
		role_id: 1,
		description:
			'Migrated the agent builder to Svelte 5, establishing modern reactivity patterns that Claude Code adheres to when generating new code',
		metric: 'components migrated',
		metric_value: '8',
	},
	{
		id: 5,
		role_id: 1,
		description:
			'Proactively evaluated Vite 8 / Rolldown / OXC toolchain ahead of release, benchmarking build performance and plugin compatibility to prepare the team for migration',
		metric: 'build baseline',
		metric_value: '158s',
	},
	{
		id: 6,
		role_id: 1,
		description:
			'Built reusable security middleware for ownership validation across all API routes (svelte-authorization package)',
		metric: 'unit tests',
		metric_value: '73',
	},
	{
		id: 7,
		role_id: 1,
		description:
			'Automated GDPR-compliant trace cleanup for AI observability data using Trigger.dev and Langfuse',
		metric: null,
		metric_value: null,
	},
	{
		id: 8,
		role_id: 2,
		description:
			'Recognised by the Svelte core team as a Svelte Ambassador for sustained community contributions and helping grow a welcoming ecosystem',
		metric: null,
		metric_value: null,
	},
	{
		id: 9,
		role_id: 2,
		description:
			'Co-founder and organiser of Svelte Society London, running monthly community events since November 2021',
		metric: 'years running',
		metric_value: '4+',
	},
	{
		id: 10,
		role_id: 2,
		description:
			'Author of 20+ MCP (Model Context Protocol) tools covering search, memory, workflow automation, and documentation access',
		metric: 'combined GitHub stars',
		metric_value: '1200+',
	},
	{
		id: 11,
		role_id: 2,
		description:
			'Technical content creator at scottspence.com writing about SvelteKit, TypeScript, AI tooling, and developer experience',
		metric: 'page views',
		metric_value: '1.4M+',
	},
	{
		id: 12,
		role_id: 2,
		description:
			'International conference speaker at Connect Tech (Atlanta), CityJS, Modern Frontends, NXT Nordics (Oslo), and Jamstack Conf',
		metric: null,
		metric_value: null,
	},
	{
		id: 13,
		role_id: 3,
		description:
			'Building with SvelteKit, main stage at Connect Tech 2022, Atlanta',
		metric: null,
		metric_value: null,
	},
	{
		id: 14,
		role_id: 4,
		description:
			'Jamstack Conf 2021 Workshop: Build with SvelteKit and GraphQL',
		metric: null,
		metric_value: null,
	},
	{
		id: 15,
		role_id: 4,
		description:
			'Recorded 26 getting started videos for the GraphCMS examples repo on GitHub',
		metric: 'videos recorded',
		metric_value: '26',
	},
	{
		id: 16,
		role_id: 5,
		description:
			'Built internal Pinstagram used for onboarding and pitch books with NextJS, Prisma and GraphQL Yoga',
		metric: null,
		metric_value: null,
	},
	{
		id: 17,
		role_id: 5,
		description:
			'Evangelised the use of Gatsby in the team for sites that did not need a lot of user generated content',
		metric: null,
		metric_value: null,
	},
	{
		id: 18,
		role_id: 6,
		description:
			'Working in an agile team in the delivery of initial sprints of the ncsc.gov.uk site',
		metric: null,
		metric_value: null,
	},
	{
		id: 19,
		role_id: 13,
		description:
			'Financial Crime Unit Sanctions Workflow Database winning a Gold ROSCA award for process enhancement',
		metric: 'award',
		metric_value: 'Gold ROSCA',
	},
	{
		id: 20,
		role_id: 14,
		description:
			'Won Gold RAFTA award for creation of the MB&A and Generalist Credit New to Role Training Plan for Credit Managers',
		metric: 'award',
		metric_value: 'Gold RAFTA',
	},
]

interface Project {
	id: number
	name: string
	url: string
	description: string
	tech_stack: string
	github_stars: number | null
}

const projects: Project[] = [
	{
		id: 1,
		name: 'Svortie',
		url: 'https://svortie.com',
		description:
			'AI agent orchestration platform with sandboxed execution via Daytona and Claude Agent SDK. Run autonomous coding agents safely in isolated environments.',
		tech_stack: 'SvelteKit, Claude Agent SDK, Daytona',
		github_stars: null,
	},
	{
		id: 2,
		name: 'Sveltest',
		url: 'https://sveltest.dev',
		description:
			'Svelte testing documentation built to generate AI coding assistant rules for CLAUDE.md, Cursor, and Windsurf. Boosted team productivity by giving AI agents accurate Svelte testing patterns.',
		tech_stack: 'SvelteKit',
		github_stars: 99,
	},
	{
		id: 3,
		name: 'DevHub CRM',
		url: 'https://devhub.party',
		description:
			'Developer CRM for managing developer relations and community interactions.',
		tech_stack: 'SvelteKit',
		github_stars: null,
	},
	{
		id: 4,
		name: 'SkyKit',
		url: 'https://skykit.blue',
		description: 'Bluesky analytics platform.',
		tech_stack: 'SvelteKit',
		github_stars: null,
	},
	{
		id: 5,
		name: 'mcp-sequentialthinking-tools',
		url: 'https://github.com/spences10/mcp-sequentialthinking-tools',
		description: 'MCP tool for sequential thinking and reasoning',
		tech_stack: 'TypeScript, MCP',
		github_stars: 566,
	},
	{
		id: 6,
		name: 'mcp-omnisearch',
		url: 'https://github.com/spences10/mcp-omnisearch',
		description: 'Multi-provider search MCP tool',
		tech_stack: 'TypeScript, MCP',
		github_stars: 271,
	},
	{
		id: 7,
		name: 'sveltekit-embed',
		url: 'https://github.com/spences10/sveltekit-embed',
		description: 'SvelteKit embed components library',
		tech_stack: 'SvelteKit, TypeScript',
		github_stars: 236,
	},
	{
		id: 8,
		name: 'svelte-claude-skills',
		url: 'https://github.com/spences10/svelte-claude-skills',
		description: 'Claude Code skills for Svelte development',
		tech_stack: 'TypeScript, Claude Code',
		github_stars: 173,
	},
	{
		id: 9,
		name: 'mcp-svelte-docs',
		url: 'https://github.com/spences10/mcp-svelte-docs',
		description: 'MCP tool for accessing Svelte documentation',
		tech_stack: 'TypeScript, MCP',
		github_stars: 124,
	},
	{
		id: 10,
		name: 'Svead',
		url: 'https://github.com/spences10/svead',
		description:
			'SvelteKit SEO metadata component, used by Ashley Furniture and other production sites.',
		tech_stack: 'SvelteKit, TypeScript',
		github_stars: 110,
	},
	{
		id: 11,
		name: 'MCP Ecosystem',
		url: 'https://github.com/spences10?tab=repositories&q=mcp-&type=source&language=&sort=stargazers',
		description:
			'20+ Model Context Protocol tools covering search, memory, workflow automation, and documentation access. Includes mcp-omnisearch, mcp-memory-libsql, mcp-n8n-builder, and mcp-svelte-docs.',
		tech_stack: 'TypeScript, MCP',
		github_stars: null,
	},
]

interface Skill {
	id: number
	category: string
	name: string
	evidence: string
}

const skills: Skill[] = [
	{
		id: 1,
		category: 'Web Development',
		name: 'SvelteKit',
		evidence:
			'Led SvelteKit monorepo at XtendOps, Svelte Ambassador, Svelte Society London co-founder',
	},
	{
		id: 2,
		category: 'Web Development',
		name: 'Svelte 5',
		evidence:
			'Migrated agent builder to Svelte 5 at XtendOps, established modern reactivity patterns',
	},
	{
		id: 3,
		category: 'Web Development',
		name: 'TypeScript',
		evidence:
			'Primary language across XtendOps monorepo, all MCP tools, and personal projects',
	},
	{
		id: 4,
		category: 'Web Development',
		name: 'JavaScript',
		evidence: 'Full-stack development across all roles since 2018',
	},
	{
		id: 5,
		category: 'Web Development',
		name: 'HTML, CSS, Tailwind',
		evidence:
			'UI architecture work, shadcn-svelte migration, daisyUI styling',
	},
	{
		id: 6,
		category: 'Web Development',
		name: 'React',
		evidence:
			'Used at Karmarama for client projects, NextJS internal tools',
	},
	{
		id: 7,
		category: 'Web Development',
		name: 'Node.js',
		evidence:
			'Backend services, MCP tool development, AWS ECS deployments',
	},
	{
		id: 8,
		category: 'AI & Tooling',
		name: 'Claude API',
		evidence:
			'Built claude-sdk-runtime for enterprise AI customer service agents',
	},
	{
		id: 9,
		category: 'AI & Tooling',
		name: 'Agent SDK',
		evidence:
			'Svortie platform, multi-agent orchestration workflows at XtendOps',
	},
	{
		id: 10,
		category: 'AI & Tooling',
		name: 'MCP (Model Context Protocol)',
		evidence:
			'Author of 20+ MCP tools with 1,200+ combined GitHub stars',
	},
	{
		id: 11,
		category: 'AI & Tooling',
		name: 'Prompt Engineering',
		evidence:
			'Claude Code skills, AI coding assistant rules generation (Sveltest)',
	},
	{
		id: 12,
		category: 'AI & Tooling',
		name: 'Langfuse',
		evidence:
			'AI observability at XtendOps, GDPR-compliant trace cleanup',
	},
	{
		id: 13,
		category: 'AI & Tooling',
		name: 'OpenTelemetry',
		evidence: 'Observability infrastructure at XtendOps',
	},
	{
		id: 14,
		category: 'Infrastructure',
		name: 'AWS ECS',
		evidence:
			'claude-sdk-runtime deployed on ECS for enterprise clients',
	},
	{
		id: 15,
		category: 'Infrastructure',
		name: 'Terraform',
		evidence: 'Infrastructure management at XtendOps',
	},
	{
		id: 16,
		category: 'Infrastructure',
		name: 'Vercel',
		evidence:
			'Hosting for scottspence.com, personal projects, CV site',
	},
	{
		id: 17,
		category: 'Infrastructure',
		name: 'GitHub Actions',
		evidence: 'CI/CD pipelines across all projects',
	},
	{
		id: 18,
		category: 'Infrastructure',
		name: 'Docker',
		evidence:
			'Container builds for ECS deployments at XtendOps',
	},
	{
		id: 19,
		category: 'Infrastructure',
		name: 'Trigger.dev',
		evidence:
			'Background job processing, GDPR trace cleanup automation',
	},
	{
		id: 20,
		category: 'Infrastructure',
		name: 'Git',
		evidence:
			'Version control across all roles, monorepo management',
	},
	{
		id: 21,
		category: 'Infrastructure',
		name: 'Monorepo (pnpm)',
		evidence:
			'XtendOps SvelteKit monorepo with multiple applications',
	},
]

interface Event {
	id: number
	name: string
	location: string | null
	date: string | null
	talk_title: string | null
	type: string
}

const events: Event[] = [
	{
		id: 1,
		name: 'Connect Tech',
		location: 'Atlanta',
		date: '2022',
		talk_title: 'Building with SvelteKit',
		type: 'conference',
	},
	{
		id: 2,
		name: 'CityJS',
		location: null,
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 3,
		name: 'Modern Frontends',
		location: null,
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 4,
		name: 'NXT Nordics',
		location: 'Oslo',
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 5,
		name: 'Jamstack Conf',
		location: null,
		date: '2021',
		talk_title: 'Build with SvelteKit and GraphQL',
		type: 'conference',
	},
	{
		id: 6,
		name: 'JSMonthly',
		location: null,
		date: '2025-12',
		talk_title: 'Refactoring 370 Files in 11 Hours',
		type: 'conference',
	},
	{
		id: 7,
		name: 'API Days London',
		location: 'London',
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 8,
		name: 'Pixel Pioneers',
		location: null,
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 9,
		name: 'ASYNC',
		location: null,
		date: null,
		talk_title: null,
		type: 'conference',
	},
	{
		id: 10,
		name: 'Svelte Society London',
		location: 'London',
		date: '2021-11-14',
		talk_title: null,
		type: 'meetup_organiser',
	},
]

const content_stats: [string, string][] = [
	['blog_total_views', '1.4M+'],
	['blog_unique_visitors', '791K+'],
	['blog_posts', '244'],
	['blog_monthly_readers', '22K+'],
	['github_mcp_repos', '20+'],
	['github_combined_stars', '1200+'],
	['fathom_jan_2026_people', '22K'],
	['fathom_jan_2026_views', '50.2K'],
	['fathom_feb_2026_people', '23.9K'],
	['fathom_feb_2026_views', '37K'],
]

interface QaPair {
	id: number
	question_pattern: string
	answer: string
	category: string
}

const qa_pairs: QaPair[] = [
	{
		id: 1,
		question_pattern: 'Tell me about yourself / Who is Scott Spence?',
		answer: "I'm an AI engineering leader and full-stack developer based in the UK. I build AI-powered products, from customer service agent runtimes that cut average handle time by 40% to multi-agent orchestration systems and MCP tooling. I led 12 developers at XtendOps across two product teams in a SvelteKit monorepo, and I'm a recognised Svelte Ambassador.",
		category: 'about',
	},
	{
		id: 2,
		question_pattern: 'Where are you based?',
		answer: "I'm based in Swanley, Kent in the UK. I've worked remotely for several years and I'm comfortable with distributed teams across time zones.",
		category: 'about',
	},
	{
		id: 3,
		question_pattern: "What's your background?",
		answer: "I started in financial services at Barclays in 2002, moved through VBA development and technical project management, then transitioned to web development in 2018. Since then I've progressed through React, Gatsby, developer relations, and into AI engineering leadership. I've got over 20 years in tech overall.",
		category: 'about',
	},
	{
		id: 4,
		question_pattern: 'How long have you been developing?',
		answer: "I've been writing code since around 2007 when I started VBA development at Barclays, and moved into professional web development in 2018. So roughly 18 years writing code, with 8 years focused on modern web and AI engineering.",
		category: 'about',
	},
	{
		id: 5,
		question_pattern: 'What are you looking for? / Are you available?',
		answer: "I'm looking for early-stage startups building innovative products where I can ship fast and lead AI-powered development. I operate through OES Technology Ltd as an AI and Svelte consultant. I'm particularly interested in roles involving agent architecture, MCP tooling, and SvelteKit.",
		category: 'about',
	},
	{
		id: 6,
		question_pattern: 'What programming languages do you use?',
		answer: 'TypeScript is my primary language across everything, from the XtendOps monorepo to all my MCP tools and personal projects. I also use JavaScript, HTML, CSS with Tailwind, and SQL. Previously I worked extensively with VBA in financial services.',
		category: 'skills',
	},
	{
		id: 7,
		question_pattern: 'What AI tools have you built?',
		answer: "I built claude-sdk-runtime, an AI customer service agent deployed on AWS ECS that reduced average handle time by 40%. I've authored 20+ MCP tools with 1,200+ combined GitHub stars covering search, memory, and workflow automation. I also built Svortie, an AI agent orchestration platform with sandboxed execution via Daytona and Claude Agent SDK.",
		category: 'skills',
	},
	{
		id: 8,
		question_pattern: "What's your tech stack?",
		answer: 'SvelteKit and TypeScript are my core stack. For AI work I use the Claude API, Agent SDK, MCP, and Langfuse for observability. Infrastructure is AWS ECS, Terraform, Docker, Vercel, and GitHub Actions. I style with Tailwind CSS and shadcn-svelte.',
		category: 'skills',
	},
	{
		id: 9,
		question_pattern:
			'Do you know React? / What frameworks do you use?',
		answer: "Yes, I used React professionally at Karmarama from 2018 to 2021, building client projects and internal tools with NextJS. My primary framework now is SvelteKit, which I've used at XtendOps, Storyblok, and across all my personal projects. I'm a recognised Svelte Ambassador.",
		category: 'skills',
	},
	{
		id: 10,
		question_pattern: 'What did you do at XtendOps?',
		answer: 'I was Engineering Team Lead from September 2023 to February 2026, leading 12 developers across Customer Portal (8 devs) and Smart Agent (4 devs) teams in a SvelteKit monorepo. I built the AI customer service agent runtime that reduced AHT by 40%, pioneered multi-agent orchestration workflows, and led a major UI architecture decoupling that resolved 928 build errors.',
		category: 'experience',
	},
	{
		id: 11,
		question_pattern: 'How big were your teams?',
		answer: 'At XtendOps I led 12 developers across two product teams: Customer Portal with 8 developers and Smart Agent with 4 developers. I was the primary architect for infrastructure, security, and AI integration decisions across both teams.',
		category: 'experience',
	},
	{
		id: 12,
		question_pattern: "What's your leadership experience?",
		answer: 'I led 12 developers at XtendOps as Engineering Team Lead, making architecture decisions across infrastructure, security, and AI integration. I also pioneered multi-agent orchestration workflows coordinating up to 7 AI agents for parallel development. Before web dev, I was a Technical Project Manager at Barclays managing systems development in the Risk function.',
		category: 'experience',
	},
	{
		id: 13,
		question_pattern: 'What was your biggest achievement?',
		answer: 'Building claude-sdk-runtime at XtendOps, an AI customer service agent deployed on AWS ECS that reduced average handle time by 40% through intelligent skill-based routing across chat, email, and SMS channels. That was a production system handling real enterprise client workloads, not a side project.',
		category: 'experience',
	},
	{
		id: 14,
		question_pattern: 'Tell me about your pre-web dev career',
		answer: 'I spent 16 years in financial services starting at Barclays in 2002 as a Financial Assistant, progressing through Business Manager, Technical Project Manager, and VBA Developer roles. I worked at MSCI, Deloitte, Fidelity, and Mansion House Consulting. I won Gold ROSCA and Gold RAFTA awards at Barclays for process improvements.',
		category: 'experience',
	},
	{
		id: 15,
		question_pattern: "What's Svelte Society London?",
		answer: "I co-founded Svelte Society London in November 2021 and have been organising monthly community events for over 4 years. It's a meetup for Svelte developers in London, and it's been a key part of growing the Svelte ecosystem in the UK.",
		category: 'community',
	},
	{
		id: 16,
		question_pattern: 'Are you a conference speaker?',
		answer: "Yes, I'm an international conference speaker. Highlights include main stage at Connect Tech 2022 in Atlanta talking about building with SvelteKit, a workshop at Jamstack Conf 2021, and talks at CityJS, Modern Frontends, NXT Nordics in Oslo, API Days London, JSMonthly, Pixel Pioneers, and ASYNC.",
		category: 'community',
	},
	{
		id: 17,
		question_pattern: "What's a Svelte Ambassador?",
		answer: "It's recognition from the Svelte core team for sustained community contributions and helping grow a welcoming ecosystem. I was recognised as a Svelte Ambassador through my work co-founding Svelte Society London, conference speaking, and building open source Svelte tooling.",
		category: 'community',
	},
	{
		id: 18,
		question_pattern: 'What products have you built?',
		answer: "I've built several live products: Svortie (svortie.com) for AI agent orchestration, Sveltest (sveltest.dev) for generating AI coding assistant rules, DevHub CRM (devhub.party) for developer relations management, and SkyKit (skykit.blue) for Bluesky analytics. All built with SvelteKit.",
		category: 'projects',
	},
	{
		id: 19,
		question_pattern: 'What MCP tools have you created?',
		answer: "I've authored 20+ MCP tools with 1,200+ combined GitHub stars. The biggest ones are mcp-sequentialthinking-tools (566 stars) for reasoning, mcp-omnisearch (271 stars) for multi-provider search, and mcp-svelte-docs (124 stars) for Svelte documentation access. They cover search, memory, workflow automation, and documentation.",
		category: 'projects',
	},
	{
		id: 20,
		question_pattern: 'What open source do you maintain?',
		answer: "I maintain 20+ MCP tools, sveltekit-embed (236 stars), Svead for SvelteKit SEO metadata (110 stars, used by Ashley Furniture), and svelte-claude-skills (173 stars). My blog at scottspence.com has had 1.4M+ page views and 791K+ unique visitors. I ship consistently across all of these.",
		category: 'projects',
	},
]

interface WorkEvidence {
	id: number
	source: string
	workstream: string
	session_count: number
	tool_pattern: string
	date_range: string
	description: string
}

const work_evidence: WorkEvidence[] = [
	{
		id: 1,
		source: 'personal',
		workstream: 'Svortie AI agent orchestration platform',
		session_count: 108,
		tool_pattern: 'Read (3.3K), Bash (2.7K), Edit (857)',
		date_range: 'Feb 2026',
		description:
			'Built AI agent orchestration platform with SvelteKit frontend, multi-agent workflows, and real-time collaboration. Heaviest personal project with 108 sessions and extensive browser testing.',
	},
	{
		id: 2,
		source: 'personal',
		workstream: 'Second Brain Buddy note-taking app',
		session_count: 160,
		tool_pattern: 'Bash (1.7K), Read (1.7K), Edit (566)',
		date_range: 'Jan-Feb 2026',
		description:
			'Full-stack note-taking application with monorepo architecture. 160 sessions across web app and packages, with browser automation testing and AI-assisted features.',
	},
	{
		id: 3,
		source: 'personal',
		workstream: 'scottspence.com blog and portfolio',
		session_count: 52,
		tool_pattern: 'Read (451), Bash (441), mcp-sqlite (276)',
		date_range: 'Jan-Feb 2026',
		description:
			'Personal blog and portfolio site built with SvelteKit. Database-driven content, browser testing, and AI-powered search integration across 52 sessions.',
	},
	{
		id: 4,
		source: 'personal',
		workstream: 'Ralph Town autonomous agent orchestration CLI',
		session_count: 44,
		tool_pattern: 'Bash (3.7K), Read (1.1K), SendMessage (405)',
		date_range: 'Jan-Feb 2026',
		description:
			'CLI tool for autonomous agent orchestration with multi-agent team coordination. Heavy Bash usage indicates deep systems work; SendMessage shows agent-to-agent communication patterns.',
	},
	{
		id: 5,
		source: 'personal',
		workstream: 'ccrecall Claude Code session analytics',
		session_count: 33,
		tool_pattern: 'Bash (1.1K), Read (522), Edit (210)',
		date_range: 'Jan-Feb 2026',
		description:
			'Analytics tool for Claude Code sessions, tracking tool usage, session patterns, and team coordination across projects.',
	},
	{
		id: 6,
		source: 'personal',
		workstream: 'Claude Code Toolkit plugins and skills',
		session_count: 22,
		tool_pattern: 'Bash (313), Read (289), SendMessage (103)',
		date_range: 'Jan-Feb 2026',
		description:
			'Plugins and skills ecosystem for Claude Code, including CLI tools and Svelte integrations. 22 sessions across toolkit and skills/cli sub-projects.',
	},
	{
		id: 7,
		source: 'personal',
		workstream: 'Sveltest testing documentation generator',
		session_count: 14,
		tool_pattern: 'Bash (795), Read (500), Glob (139)',
		date_range: 'Feb 2026',
		description:
			'Testing documentation generator built to create AI coding assistant rules. Heavy Bash and file reading indicates test analysis and code generation workflows.',
	},
	{
		id: 8,
		source: 'personal',
		workstream: 'Svelte Claude Skills ecosystem',
		session_count: 12,
		tool_pattern: 'Read (142), Bash (95), Glob (39)',
		date_range: 'Jan-Feb 2026',
		description:
			'Ecosystem of Claude Code skills for Svelte development, including SvelteKit-specific tooling and sandbox execution capabilities.',
	},
	{
		id: 9,
		source: 'personal',
		workstream: 'CV/resume website',
		session_count: 5,
		tool_pattern: 'mcp-sqlite (144), Read (20), mcp-sqlite-describe (6)',
		date_range: 'Jan-Feb 2026',
		description:
			'Personal CV website built with SvelteKit. Database-heavy workflow shows structured data approach to CV content management.',
	},
	{
		id: 10,
		source: 'personal',
		workstream: 'Personal projects overall summary',
		session_count: 470,
		tool_pattern: 'Bash (11.4K), Read (8.6K), Edit (2.6K)',
		date_range: 'Jan-Feb 2026',
		description:
			'470 sessions across 27 projects. 17 teams created with 50 agent members and 85 tasks. Demonstrates high-velocity AI-assisted development across full-stack SvelteKit, agent orchestration, and developer tooling.',
	},
	{
		id: 11,
		source: 'xtendops',
		workstream: 'AI agent runtime',
		session_count: 2303,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Core AI agent runtime platform built with Claude SDK. 2,303 sessions representing the primary engineering workstream, building production agent infrastructure for customer operations.',
	},
	{
		id: 12,
		source: 'xtendops',
		workstream: 'Monorepo platform infrastructure',
		session_count: 271,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Platform infrastructure managed through monorepo architecture. 271 sessions covering shared packages, build tooling, and cross-service dependencies.',
	},
	{
		id: 13,
		source: 'xtendops',
		workstream: 'Other engineering',
		session_count: 145,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Miscellaneous engineering sessions across various internal tools, documentation, and infrastructure tasks.',
	},
	{
		id: 14,
		source: 'xtendops',
		workstream: 'Email agent service',
		session_count: 23,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Email agent service integrating AI-powered email processing and automated response workflows.',
	},
	{
		id: 15,
		source: 'xtendops',
		workstream: 'UI application platform',
		session_count: 11,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Internal UI application platform for operations team, providing dashboards and workflow management interfaces.',
	},
	{
		id: 16,
		source: 'xtendops',
		workstream: 'Systems infrastructure',
		session_count: 1,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'Systems-level infrastructure work including deployment pipelines and server configuration.',
	},
	{
		id: 17,
		source: 'xtendops',
		workstream: 'XtendOps overall summary',
		session_count: 2754,
		tool_pattern: 'Bash (5.4K), Read (3.1K), Edit (954)',
		date_range: 'Nov 2025 - Feb 2026',
		description:
			'2,754 sessions across 6 workstreams over 3+ months. 2 teams with 13 agent members and 13 tasks. AI agent runtime was dominant workstream (84% of sessions). Evidence of parallel worktree usage and high-velocity daily shipping.',
	},
]

// --- SQL generation ---

function esc(val: string | null | undefined): string {
	if (val === null || val === undefined || val === '') return 'NULL'
	return `'${val.replace(/'/g, "''")}'`
}

function num(val: number | null | undefined): string {
	if (val === null || val === undefined) return 'NULL'
	return String(val)
}

function build_sql(): string {
	const lines: string[] = []
	const push = (sql: string) => lines.push(sql)

	// DDL
	push(`CREATE TABLE profile (key TEXT PRIMARY KEY, value TEXT);`)
	push(
		`CREATE TABLE roles (id INTEGER PRIMARY KEY, company TEXT, position TEXT, start_date TEXT, end_date TEXT, summary TEXT);`,
	)
	push(
		`CREATE TABLE achievements (id INTEGER PRIMARY KEY, role_id INTEGER REFERENCES roles(id), description TEXT, metric TEXT, metric_value TEXT);`,
	)
	push(
		`CREATE TABLE projects (id INTEGER PRIMARY KEY, name TEXT, url TEXT, description TEXT, tech_stack TEXT, github_stars INTEGER);`,
	)
	push(
		`CREATE TABLE skills (id INTEGER PRIMARY KEY, category TEXT, name TEXT, evidence TEXT);`,
	)
	push(
		`CREATE TABLE events (id INTEGER PRIMARY KEY, name TEXT, location TEXT, date TEXT, talk_title TEXT, type TEXT);`,
	)
	push(
		`CREATE TABLE content_stats (key TEXT PRIMARY KEY, value TEXT);`,
	)
	push(
		`CREATE TABLE qa_pairs (id INTEGER PRIMARY KEY, question_pattern TEXT, answer TEXT, category TEXT);`,
	)
	push(
		`CREATE TABLE work_evidence (id INTEGER PRIMARY KEY, source TEXT, workstream TEXT, session_count INTEGER, tool_pattern TEXT, date_range TEXT, description TEXT);`,
	)
	push(
		`CREATE VIRTUAL TABLE search_index USING fts5(content, source, source_id);`,
	)

	// DML - profile
	for (const [k, v] of profile) {
		push(
			`INSERT INTO profile VALUES (${esc(k)}, ${esc(v)});`,
		)
		push(
			`INSERT INTO search_index VALUES (${esc(v)}, 'profile', ${esc(k)});`,
		)
	}

	// DML - roles
	for (const r of roles) {
		push(
			`INSERT INTO roles VALUES (${r.id}, ${esc(r.company)}, ${esc(r.position)}, ${esc(r.start_date)}, ${esc(r.end_date)}, ${esc(r.summary)});`,
		)
		const content = `${r.company} ${r.position} ${r.summary}`
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'roles', '${r.id}');`,
		)
	}

	// DML - achievements
	for (const a of achievements) {
		push(
			`INSERT INTO achievements VALUES (${a.id}, ${a.role_id}, ${esc(a.description)}, ${esc(a.metric)}, ${esc(a.metric_value)});`,
		)
		push(
			`INSERT INTO search_index VALUES (${esc(a.description)}, 'achievements', '${a.id}');`,
		)
	}

	// DML - projects
	for (const p of projects) {
		push(
			`INSERT INTO projects VALUES (${p.id}, ${esc(p.name)}, ${esc(p.url)}, ${esc(p.description)}, ${esc(p.tech_stack)}, ${num(p.github_stars)});`,
		)
		const content = `${p.name} ${p.description} ${p.tech_stack}`
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'projects', '${p.id}');`,
		)
	}

	// DML - skills
	for (const s of skills) {
		push(
			`INSERT INTO skills VALUES (${s.id}, ${esc(s.category)}, ${esc(s.name)}, ${esc(s.evidence)});`,
		)
		const content = `${s.category} ${s.name} ${s.evidence}`
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'skills', '${s.id}');`,
		)
	}

	// DML - events
	for (const e of events) {
		push(
			`INSERT INTO events VALUES (${e.id}, ${esc(e.name)}, ${esc(e.location)}, ${esc(e.date)}, ${esc(e.talk_title)}, ${esc(e.type)});`,
		)
		const content = [e.name, e.location, e.talk_title]
			.filter(Boolean)
			.join(' ')
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'events', '${e.id}');`,
		)
	}

	// DML - content_stats
	for (const [k, v] of content_stats) {
		push(
			`INSERT INTO content_stats VALUES (${esc(k)}, ${esc(v)});`,
		)
		push(
			`INSERT INTO search_index VALUES (${esc(`${k} ${v}`)}, 'content_stats', ${esc(k)});`,
		)
	}

	// DML - qa_pairs
	for (const q of qa_pairs) {
		push(
			`INSERT INTO qa_pairs VALUES (${q.id}, ${esc(q.question_pattern)}, ${esc(q.answer)}, ${esc(q.category)});`,
		)
		const content = `${q.question_pattern} ${q.answer}`
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'qa_pairs', '${q.id}');`,
		)
	}

	// DML - work_evidence
	for (const w of work_evidence) {
		push(
			`INSERT INTO work_evidence VALUES (${w.id}, ${esc(w.source)}, ${esc(w.workstream)}, ${w.session_count}, ${esc(w.tool_pattern)}, ${esc(w.date_range)}, ${esc(w.description)});`,
		)
		const content = `${w.workstream} ${w.description}`
		push(
			`INSERT INTO search_index VALUES (${esc(content)}, 'work_evidence', '${w.id}');`,
		)
	}

	return lines.join('\n')
}

// --- Main ---

if (existsSync(db_path)) {
	unlinkSync(db_path)
	console.log(`Removed existing: ${db_path}`)
}

const sql = build_sql()

execSync(`sqlite3 "${db_path}"`, {
	input: sql,
	stdio: ['pipe', 'inherit', 'inherit'],
})

// Verify
const result = execSync(
	`sqlite3 "${db_path}" "SELECT COUNT(*) FROM search_index;"`,
)
	.toString()
	.trim()

console.log(`Created: ${db_path}`)
console.log(`FTS5 search_index: ${result} rows`)
console.log('Tables: profile, roles, achievements, projects, skills, events, content_stats, qa_pairs, work_evidence, search_index')
