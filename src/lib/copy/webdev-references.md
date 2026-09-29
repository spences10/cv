<script lang="ts">
  import { Testimonial } from '#lib/components/index.js'

  const testimonials = [
    {
      name: 'Tara Whitaker',
      title: 'CFO, Cloud Lobsters',
      date: '2026-09-23',
      relationship: 'managed Scott directly at Cloud Lobsters',
      paragraphs: [
        'I worked closely with Scott during his six-month engagement with Cloud Lobsters, where he joined us at a critical stage to strengthen our Svelte and AI development capabilities.',
        'Scott made an immediate impact. He quickly understood both the technical challenges and the commercial objectives behind the work, enabling him to contribute meaningfully from the outset. His deep knowledge of Svelte and practical experience with AI tooling helped us make better technical decisions and establish strong foundations for the project.',
        'Beyond his technical ability, Scott is dependable, pragmatic and easy to work with. He brought clarity to difficult problems and shared his expertise generously with the wider team.',
        'I would happily work with Scott again and strongly recommend him to any organisation looking for an experienced Svelte or AI engineer who can start delivering quickly.',
      ],
    },
    {
      name: 'Daniel Malmvärn',
      title: 'CEO, Cloud Lobsters',
      date: '2026-09-23',
      relationship: 'managed Scott directly at Cloud Lobsters',
      paragraphs: [
        'We brought Scott into Cloud Lobsters for six months as our AI and Svelte expert, and he delivered from day one. He got up to speed quickly, bringing deep Svelte/SvelteKit and AI tooling expertise that raised the bar across the team.',
        'His input was particularly valuable early on, helping shape the technical direction and establish solid foundations for the project.',
        'Scott is a sharp, dependable engineer who we would bring back without hesitation. I would highly recommend him to any team looking for Svelte or AI development expertise.',
      ],
    },
    {
      name: 'Chris Ellis',
      title: 'Senior Director, AI Lab at Accordion',
      date: '2026-02-24',
      relationship: 'managed Scott directly at XtendOps',
      paragraphs: [
        "Scott joined my team at XtendOps when we were building an AI platform from scratch and shipping agentic systems into enterprise accounts. He owned the runtime architecture and consistently found the right level of abstraction. When production exposed things we hadn't anticipated, he adapted quickly.",
        "He's a genuine generalist. Broad experience across web development, comfortable anywhere in the stack (TypeScript, AWS, Svelte), and aware of what's changing in the SWE ecosystem before the rest of the team. That meant he could assess new tools and approaches on their merits rather than defaulting to what he already knew. He's forward-thinking without being reckless about it.",
        'On the team, he raised the standard through code reviews and pairing. Engineers wrote better code because Scott was reading it. He was generous with his time and patient with questions, which made him a great mentor for more junior engineers.',
      ],
    },
  ]
</script>

<article class='all-prose'>

## Testimonials

{#each testimonials as testimonial} <Testimonial {...testimonial} />
{/each}

</article>

<span class="divider before:bg-primary after:bg-primary mb-10 print:mb-0"></span>
