<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'

  onMount(() => {
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })

  $: $page.path, browser && Fathom.trackPageview()
</script>

<main class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <slot />
</main>
