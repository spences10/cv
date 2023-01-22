<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import {
		PUBLIC_FATHOM_ID,
		PUBLIC_FATHOM_URL,
	} from '$env/static/public'
	import { Basics, ThemeSwitch } from '$lib/components'
	import { References } from '$lib/copy'
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
	function Print() {
		window.print()
	}
</script>

<main
	class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 print:bg-black"
>
	<div class="flex justify-between mb-4 ">
		<button
			class="btn btn-primary btn-xs border print:hidden"
			on:click={Print}
		>
			Download
		</button>
		<ThemeSwitch />
	</div>
	<Basics
		name="Scott Spence"
		label="JavaScript Developer"
		email="yo@scottspence.com"
		phone="+44 0000 00 0000"
		website="scottspence.com"
		imgSrc="profile-pic.png"
	/>
	<slot />
	<References />
</main>
