<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import Basics from '@lib/basics.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import '../app.css'
  import References from '../copy/references.md'

  onMount(() => {
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })

  $: $page.path, browser && Fathom.trackPageview()
</script>

<main class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <Basics
    name="Scott Spence"
    label="Developer"
    email="yo@scottspence.com"
    phone="+44 0000 00 0000"
    website="scottspence.com"
    imgSrc="profile-pic.png"
  />
  <slot />
  <References />
</main>
