<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import Basics from '@lib/basics.svelte'
  import ThemeSwitch from '@lib/theme-switch.svelte'
  import * as Fathom from 'fathom-client'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  import References from '../copy/references.md'

  onMount(() => {
    themeChange(false)
    Fathom.load(import.meta.env.VITE_FATHOM_ID, {
      url: import.meta.env.VITE_FATHOM_URL,
      excludedDomains: ['localhost'],
    })
  })

  $: $page.path, browser && Fathom.trackPageview()
</script>

<main
  class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8 print:bg-black"
>
  <ThemeSwitch />
  <div class="mb-11 md:mb-4" />
  <Basics
    name="Scott Spence"
    label="JavaScript Developer"
    email="yo@scottspence.com"
    phone="+44 0000 00 0000"
    website="scottspence.com"
    imgSrc="profile-pic.png"
  />
  <slot />
  <References />
</main>
