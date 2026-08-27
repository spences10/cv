<div
	data-theme="light"
	class="collapse-arrow collapse mb-4 min-w-full rounded-box border border-base-300"
>
	<input type="checkbox" />
	<div class="collapse-title text-xl font-medium">
		<slot name="header" />
	</div>
	<div class="collapse-content prose-sm -mt-4">
		<slot name="body" />
	</div>
</div>
