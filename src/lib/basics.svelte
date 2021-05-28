<script>
  export let name, label, email, phone, website, imgSrc
</script>

{#if imgSrc !== undefined}
  <div class="flex justify-end">
    <div class="avatar">
      <div
        class="-mb-11 mt-7 w-24 h-24 mask mask-decagon filter blur hover:blur-0"
      >
        <img src={imgSrc} alt={name} />
      </div>
    </div>
  </div>
{/if}

<div class="mb-10">
  <h1 class="text-4xl mb-4 font-bold uppercase tracking-wide">{name}</h1>
  <hr class="mb-6" />

  <div>
    <h2 class="text-2xl font-bold tracking-wide text-purple-600">
      {label}
    </h2>
  </div>

  <div
    class="tracking-wide mt-2 flex flex-col sm:flex-row justify-between"
  >
    <div>
      <dt><span class="sr-only">Email address</span></dt>
      <dd class="flex text-base items-end mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <span class="ml-3">
          <a href="mailto: {email}" class="text-md">{email}</a>
        </span>
      </dd>
    </div>

    <div
      data-tip="Please, email first."
      class="tooltip tooltip-bottom"
    >
      <dt><span class="sr-only">Phone number</span></dt>
      <dd class="flex text-base items-end mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <span class="ml-3">
          <a href="tel: {phone}" class="text-md filter blur"
            >{phone}</a
          >
        </span>
      </dd>
    </div>

    <div>
      <dt><span class="sr-only">Website</span></dt>
      <dd class="flex text-base items-end mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span class="ml-3">
          <a href="https://{website}" class="text-md block"
            >{website}</a
          >
        </span>
      </dd>
    </div>
  </div>
</div>
