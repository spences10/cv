<script lang="ts">
	import { browser } from '$app/environment';
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
			excludedDomains: ['localhost'],
		});
	});

	$effect(() => {
		page.url.pathname, browser && Fathom.trackPageview();
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
		label="Senior Developer &amp; Community Leader"
		email="cv@scottspence.com"
		phone="+44 0000 00 0000"
		website="scottspence.com"
		imgSrc="profile-pic.png"
	/>
	{@render children?.()}
</main>
