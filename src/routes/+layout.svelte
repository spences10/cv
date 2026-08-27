<script lang="ts">
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$app/env/public';
	import { page } from '$app/state';
	import { Basics, ThemeSelect } from '#lib/components/index.js';
	import * as Fathom from 'fathom-client';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

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
		class="btn border btn-primary btn-xs print:hidden"
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
		label="Product Engineer | AI Engineering Lead | Svelte Ambassador"
		email="cv@scottspence.com"
		github="spences10"
		website="scottspence.com"
		imgSrc="profile-pic.png"
	/>
	{@render children?.()}
</main>
