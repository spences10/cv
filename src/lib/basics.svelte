<script>
  import At from '@icons/at.svelte'
  import Globe from '@icons/globe.svelte'
  import Mobile from '@icons/mobile.svelte'

  export let name, label, email, phone, website, imgSrc
</script>

{#if imgSrc !== undefined}
  <div class="flex justify-end">
    <div class="avatar">
      <div
        class="transition -mb-11 mt-7 w-24 h-24 mask mask-decagon filter blur transform hover:blur-0 "
      >
        <img src={imgSrc} alt={name} />
      </div>
    </div>
  </div>
{/if}

<div class="mb-10">
  <h1 class="text-4xl mb-4 font-bold uppercase tracking-wide">
    {name}
  </h1>
  <span class="divider before:bg-primary after:bg-primary" />

  <div class="mb-5">
    <h2 class="text-3xl font-bold tracking-wide text-purple-600">
      {label}
    </h2>
  </div>

  <div
    class="tracking-wide mt-2 flex flex-col sm:flex-row justify-between"
  >
    <div>
      <dt><span class="sr-only">Email address</span></dt>
      <dd class="flex text-base items-end mb-2">
        <At />
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
        <Mobile />
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
        <Globe />
        <span class="ml-3">
          <a href="https://{website}" class="text-md block"
            >{website}</a
          >
        </span>
      </dd>
    </div>
  </div>
</div>
