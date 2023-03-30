<script>
  import pic from "$lib/assets/on_that_day_5_years_ago.webp";
</script>

<label class="swap swap-rotate text-center font-bold">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />

  <figure class="swap-on">
    <img
      src="./favicon.webp"
      alt="That's also me!"
      class="rounded-full w-36 h-36 md:w-64 md:h-64"
    />
    <figcaption>AKA SeoFernando</figcaption>
  </figure>
  <figure class="swap-off">
    <img
      src="{pic}"
      alt="Hey that's me!"
      class="rounded-full w-36 h-36 md:w-64 md:h-64"
    />
    <figcaption>Fernando Nogueira</figcaption>
  </figure>
</label>

<style>
  figure {
    @apply h-full w-full flex-col;
  }
</style>
