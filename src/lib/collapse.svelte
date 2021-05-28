<div
  data-theme="light"
  class="mb-4 collapse min-w-full rounded-box border border-base-300 collapse-arrow"
>
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    <slot name="header" />
  </div>
  <div class="collapse-content prose-sm -mt-4">
    <slot name="body" />
  </div>
</div>
