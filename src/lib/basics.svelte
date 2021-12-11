<script>
  import Email from '@icons/email.svelte'
  import Globe from '@icons/globe.svelte'
  import Mobile from '@icons/mobile.svelte'

  export let name, label, email, phone, website, imgSrc
</script>

<div class="flex justify-between items-end print:-mt-6">
  <h1
    class="text-5xl print:text-2xl print:text-black font-bold uppercase tracking-wide"
  >
    {name}
  </h1>

  {#if imgSrc !== undefined}
    <div class="avatar print:hidden">
      <div
        class="transition w-24 h-24 mask mask-decagon filter blur transform hover:blur-0 "
      >
        <img src={imgSrc} alt={name} />
      </div>
    </div>
  {/if}
</div>

<div class="mb-10 print:mb-4">
  <span
    class="divider before:bg-primary after:bg-primary print:hidden"
  />

  <div class="mb-5 print:mb-1">
    <h2
      class="text-3xl print:text-xl print:text-black font-bold tracking-wide text-primary"
    >
      {label}
    </h2>
  </div>

  <div
    class="tracking-wide mt-2 print:mb-4 flex flex-col sm:flex-row print:flex-row justify-between print:justify-start text-accent-focus"
  >
    <div class="print:text-black">
      <dt><span class="sr-only">Email address</span></dt>
      <dd
        class="flex text-base print:text-sm items-end mb-2 print:mr-2"
      >
        <Email />
        <span class="ml-3 print:ml-0">
          <a href="mailto: {email}" class="text-md">{email}</a>
        </span>
      </dd>
    </div>

    <div
      data-tip="Please, email first."
      class="tooltip tooltip-bottom print:hidden"
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

    <div class="print:text-black">
      <dt><span class="sr-only">Website</span></dt>
      <dd class="flex text-base print:text-sm items-end mb-2">
        <Globe />
        <span class="ml-3 print:ml-0">
          <a href="https://{website}" class="text-md block"
            >{website}</a
          >
        </span>
      </dd>
    </div>
  </div>
</div>
