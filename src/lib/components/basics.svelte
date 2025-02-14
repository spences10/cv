<script lang="ts">
	import { Email, Globe, Mobile } from '$lib/icons';

	const { name, label, email, phone, website, imgSrc } = $props<{
		name: string;
		label: string;
		email: string;
		phone: string;
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
				<Email />
				<span class="ml-3 print:ml-0">
					<a href="mailto: {email}" class="text-md">{email}</a>
				</span>
			</dd>
		</div>

		<div
			data-tip="Please, email first."
			class="tooltip tooltip-bottom print:hidden"
		>
			<dt><span class="sr-only">Phone number</span></dt>
			<dd class="mb-2 flex items-end text-base">
				<Mobile />
				<span class="ml-3">
					<a href="tel: {phone}" class="text-md blur filter">
						{phone}
					</a>
				</span>
			</dd>
		</div>

		<div class="print:text-black">
			<dt><span class="sr-only">Website</span></dt>
			<dd class="mb-2 flex items-end text-base print:text-sm">
				<Globe />
				<span class="ml-3 print:ml-0">
					<a href="https://{website}" class="text-md block">
						{website}
					</a>
				</span>
			</dd>
		</div>
	</div>
</div>
