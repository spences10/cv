<div
	data-theme="light"
	class="collapse-arrow rounded-box border-base-300 collapse mb-4 min-w-full border"
>
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<slot name="header" />
	</div>
	<div class="prose-sm collapse-content -mt-4">
		<slot name="body" />
	</div>
</div>
