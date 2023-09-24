<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'
	import { Basics, ThemeSwitch } from '$lib/components'
	import * as Fathom from 'fathom-client'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'

	onMount(() => {
		themeChange(false)
		Fathom.load(PUBLIC_FATHOM_ID, {
			url: PUBLIC_FATHOM_URL,
			excludedDomains: ['localhost'],
		})
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()

	const print_page = () => {
		window.print()
	}
</script>

<header
	class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-8 flex justify-between mb-4"
>
	<button
		class="btn btn-primary btn-xs border print:hidden"
		on:click={print_page}
	>
		Download
	</button>
	<ThemeSwitch />
</header>

<main
	class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 print:bg-black"
>
	<Basics
		name="Scott Spence"
		label="Senior Developer & Community Leader"
		email="cv@scottspence.com"
		phone="+44 0000 00 0000"
		website="scottspence.com"
		imgSrc="profile-pic.png"
	/>
	<slot />
</main>
