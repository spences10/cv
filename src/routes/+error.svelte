<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Uh oh! {page.status}</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<main class="all-prose">
	<h1>{page.status}</h1>
	<p>{page.error?.message}</p>
	<p>It looks like <code>{page.url}</code> doesn't exist</p>
	<p>
		Maybe check out the <a href={resolve('')}>homepage</a>?
	</p>
</main>
