<script lang="ts">
	import Globe from '@lucide/svelte/icons/globe';
	import Mail from '@lucide/svelte/icons/mail';

	const { name, label, email, github, website, imgSrc } = $props<{
		name: string;
		label: string;
		email: string;
		github?: string;
		website: string;
		imgSrc: string;
	}>();
</script>

<div class="flex items-end justify-between print:-mt-6">
	<h1
		class="text-5xl font-bold tracking-wide uppercase print:text-2xl print:text-black"
	>
		{name}
	</h1>

	{#if imgSrc !== undefined}
		<div class="avatar print:hidden">
			<div
				class="mask mask-decagon h-24 w-24 blur transition-all duration-200 hover:blur-none"
			>
				<img src={imgSrc} alt={name} />
			</div>
		</div>
	{/if}
</div>

<div class="mb-10 print:mb-4">
	<span
		class="divider before:bg-primary after:bg-primary print:hidden"
	></span>

	<div class="mb-5 print:mb-1">
		<h2
			class="text-primary text-3xl font-bold tracking-wide print:text-xl print:text-black"
		>
			{label}
		</h2>
	</div>

	<div
		class="text-accent-focus mt-2 flex flex-col justify-between tracking-wide sm:flex-row print:mb-4 print:flex-row print:justify-start"
	>
		<div class="print:text-black">
			<dt><span class="sr-only">Email address</span></dt>
			<dd
				class="mb-2 flex items-end text-base print:mr-2 print:text-sm"
			>
				<Mail class="print:black h-5 w-5 print:mr-1" />
				<span class="ml-3 print:ml-0">
					<a href="mailto: {email}" class="text-md">{email}</a>
				</span>
			</dd>
		</div>

		{#if github}
			<div class="print:text-black">
				<dt><span class="sr-only">GitHub</span></dt>
				<dd
					class="mb-2 flex items-end text-base print:mr-2 print:text-sm"
				>
					<svg
						class="print:black h-5 w-5 print:mr-1"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
						/></svg
					>
					<span class="ml-3 print:ml-0">
						<a href="https://github.com/{github}" class="text-md">
							{github}
						</a>
					</span>
				</dd>
			</div>
		{/if}

		<div class="print:text-black">
			<dt><span class="sr-only">Website</span></dt>
			<dd class="mb-2 flex items-end text-base print:text-sm">
				<Globe class="print:black h-5 w-5 print:mr-1" />
				<span class="ml-3 print:ml-0">
					<a href="https://{website}" class="text-md block">
						{website}
					</a>
				</span>
			</dd>
		</div>
	</div>
</div>
