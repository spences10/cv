<script lang="ts">
	import { format } from 'date-fns';

	const {
		name,
		title,
		date,
		relationship,
		paragraphs,
		preview = 1,
	} = $props<{
		name: string;
		title: string;
		date: string | number | Date;
		relationship: string;
		paragraphs: string[];
		preview?: number;
	}>();

	let expanded = $state(false);

	const visible = $derived(paragraphs.slice(0, preview));
	const rest = $derived(paragraphs.slice(preview));
</script>

<figure class="mb-8 print:mb-4 print:break-inside-avoid">
	<figcaption class="not-prose mb-2">
		<span
			class="block text-xl font-bold text-primary print:text-base print:text-black"
		>
			{name}
		</span>
		<span class="block text-sm print:text-xs">{title}</span>
		<span
			class="block text-sm text-accent print:text-xs print:text-black"
		>
			{format(new Date(date), 'd MMMM yyyy')}, {relationship}
		</span>
	</figcaption>
	<blockquote class="my-0">
		{#each visible as paragraph}
			<p>{paragraph}</p>
		{/each}
		<!-- animate grid rows rather than {#if} + slide so the full text
		     stays in the HTML for search engines and print -->
		<div
			class="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none print:grid-rows-[1fr] {expanded
				? 'grid-rows-[1fr]'
				: 'grid-rows-[0fr]'}"
			inert={!expanded}
			data-testid="testimonial-rest"
		>
			<div
				class="min-h-0 overflow-hidden transition-opacity duration-300 motion-reduce:transition-none print:opacity-100 {expanded
					? 'opacity-100'
					: 'opacity-0'}"
			>
				{#each rest as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
		{#if rest.length > 0}
			<button
				type="button"
				class="link text-sm link-primary print:hidden"
				aria-expanded={expanded}
				onclick={() => (expanded = !expanded)}
			>
				{expanded ? 'less' : '…more'}
			</button>
		{/if}
	</blockquote>
</figure>
