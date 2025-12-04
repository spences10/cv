<script lang="ts">
	import { browser } from '$app/environment';
	import { themes } from '$lib/themes';

	// Read from DOM since server already set it via hooks.server.ts
	let current_theme = $state(
		browser ? (document.documentElement.dataset.theme ?? '') : '',
	);

	function set_theme(event: Event) {
		const theme = (event.target as HTMLSelectElement).value;
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.dataset.theme = theme;
			current_theme = theme;
		}
	}
</script>

<div class="mb-8">
	<select
		bind:value={current_theme}
		data-choose-theme
		class="select select-xs select-bordered select-primary w-full max-w-3xl capitalize"
		onchange={set_theme}
	>
		<option value="" disabled={current_theme !== ''}>
			Choose a theme
		</option>
		{#each themes as theme}
			<option value={theme} class="capitalize">{theme}</option>
		{/each}
	</select>
</div>
