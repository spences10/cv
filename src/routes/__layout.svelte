<main>
  <slot />
</main>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(html) {
    min-height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  main {
    position: relative;
    max-width: 640px;
    margin: 0 auto;
  }
</style>
