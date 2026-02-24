<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Turnstile } from 'svelte-turnstile';

	let token = $state('');
	let error_code = $state('');
	let status = $state('waiting');
</script>

<div class="mx-auto max-w-lg p-8">
	<h1 class="mb-4 text-2xl font-bold">Turnstile Debug</h1>

	<div class="mb-4 rounded border p-4">
		<p><strong>Site key:</strong> {env.PUBLIC_TURNSTILE_SITE_KEY ?? 'NOT SET'}</p>
		<p><strong>Status:</strong> {status}</p>
		<p><strong>Token:</strong> {token ? token.slice(0, 20) + '...' : 'none'}</p>
		{#if error_code}
			<p class="text-error"><strong>Error:</strong> {error_code}</p>
		{/if}
	</div>

	<h2 class="mb-2 text-lg font-bold">Default (no size/appearance)</h2>
	<div class="mb-6 rounded border p-4">
		<Turnstile
			siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
			on:turnstile-callback={(e) => {
				token = e.detail.token;
				status = 'verified';
			}}
			on:turnstile-error={(e) => {
				error_code = e.detail.code;
				status = 'error';
			}}
		/>
	</div>

	<h2 class="mb-2 text-lg font-bold">size="compact"</h2>
	<div class="mb-6 rounded border p-4">
		<Turnstile
			siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
			size="compact"
			on:turnstile-callback={(e) => {
				status = 'compact verified';
			}}
			on:turnstile-error={(e) => {
				error_code = 'compact: ' + e.detail.code;
			}}
		/>
	</div>

	<h2 class="mb-2 text-lg font-bold">size="flexible"</h2>
	<div class="mb-6 rounded border p-4">
		<Turnstile
			siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
			size="flexible"
			on:turnstile-callback={(e) => {
				status = 'flexible verified';
			}}
			on:turnstile-error={(e) => {
				error_code = 'flexible: ' + e.detail.code;
			}}
		/>
	</div>

	<h2 class="mb-2 text-lg font-bold">appearance="interaction-only"</h2>
	<div class="mb-6 rounded border p-4">
		<Turnstile
			siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
			appearance="interaction-only"
			on:turnstile-callback={(e) => {
				status = 'interaction-only verified';
			}}
			on:turnstile-error={(e) => {
				error_code = 'interaction-only: ' + e.detail.code;
			}}
		/>
	</div>

	<h2 class="mb-2 text-lg font-bold">flexible + interaction-only</h2>
	<div class="mb-6 rounded border p-4">
		<Turnstile
			siteKey={env.PUBLIC_TURNSTILE_SITE_KEY ?? ''}
			size="flexible"
			appearance="interaction-only"
			on:turnstile-callback={(e) => {
				status = 'flexible+interaction verified';
			}}
			on:turnstile-error={(e) => {
				error_code = 'flexible+interaction: ' + e.detail.code;
			}}
		/>
	</div>
</div>
