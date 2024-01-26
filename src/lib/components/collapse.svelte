<div
	data-theme="light"
	class="collapse collapse-arrow mb-4 min-w-full rounded-box border border-base-300"
>
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<slot name="header" />
	</div>
	<div class="prose-sm collapse-content -mt-4">
		<slot name="body" />
	</div>
</div>
