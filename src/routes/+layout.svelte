<script lang="ts">
	import { page } from '$app/state';
	import { env } from '$env/dynamic/public';
	import { Basics, ThemeSelect } from '$lib/components';
	import * as Fathom from 'fathom-client';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	const { PUBLIC_FATHOM_ID, PUBLIC_FATHOM_URL } = env;

	onMount(() => {
		Fathom.load(PUBLIC_FATHOM_ID?.toString() || ``, {
			url: PUBLIC_FATHOM_URL,
			auto: false,
			excludedDomains: ['localhost'],
		});
	});

	$effect(() => {
		const url = `${page.url.pathname}${page.url.search}`;

		Fathom.trackPageview({
			url,
			referrer: document.referrer,
		});
	});

	const print_page = () => {
		window.print();
	};
</script>

<header
	class="container mx-auto mb-4 flex max-w-3xl justify-between px-4 sm:px-6 md:mt-8 lg:px-8"
>
	<button
		class="btn btn-primary btn-xs border print:hidden"
		onclick={print_page}
	>
		Download
	</button>
	<ThemeSelect />
</header>

<main
	class="container mx-auto mt-4 max-w-3xl px-4 sm:px-6 md:mt-8 lg:px-8 print:bg-black"
>
	<Basics
		name="Scott Spence"
		label="Engineering Lead | AI Product Engineer | Svelte Ambassador"
		email="cv@scottspence.com"
		github="spences10"
		website="scottspence.com"
		imgSrc="profile-pic.png"
	/>
	{@render children?.()}
</main>
