<script>
  export let name, label, email, phone, website
</script>

<div class="mb-10">
  <h1 class="text-4xl font-bold uppercase">{name}</h1>
  <hr />

  <div class="flex justify-between">
    <div>
      <h2 class="text-2xl">{label}</h2>
    </div>

    <div>
      <dt><span class="sr-only">Email address</span></dt>
      <dd class="flex text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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

      <div
        data-tip="No unsolicited phonecalls, email first."
        class="tooltip tooltip-right"
      >
        <dt><span class="sr-only">Phone number</span></dt>
        <dd class="flex text-base">
          <!-- Heroicon name: outline/phone -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
        <dt><span class="sr-only">Email address</span></dt>
        <dd class="flex text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
</div>
