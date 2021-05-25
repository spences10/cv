<script>
  export let name, label, email, phone, website
</script>

<h1 class="text-4xl">{name}</h1>
<h2 class="text-3xl">{label}</h2>
<p class="text-md">{email}</p>
<div
  data-tip="No unsolicited phonecalls, email first."
  class="tooltip tooltip-open tooltip-right"
>
  <a href="tel: 00000000000" class="text-md filter blur">{phone}</a>
</div>
<p class="text-md">{website}</p>
