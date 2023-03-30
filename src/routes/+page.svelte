<script lang="ts">
  import HomePage1 from "$lib/components/home/HomePage1.svelte";
  import HomePage2 from "$lib/components/home/HomePage2.svelte";
  import HomePage3 from "$lib/components/home/HomePage3.svelte";

  export let data;
</script>

<!-- Hi, I'm Kevin. I teach people how to make the web and how to make it look good while they're at it. -->

<div class="fps-container">
  <HomePage1 />

  <HomePage2
    err="{data.err}"
    repos="{data.repos}"
    totalStars="{data.totalStars}"
  />

  <HomePage3 />
</div>

<style>
  /* Full page scroll */
  .fps-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100dvh;
  }
</style>
