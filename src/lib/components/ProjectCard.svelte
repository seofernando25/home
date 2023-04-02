<script lang="ts">
  export let name = "Foo";
  export let description = "Bar";
  export let link = "#";
  export let img: string | undefined = undefined;
  export let imgAsTxt: string | undefined = "?";
</script>

<a
  class="card card-compact h-44  card-side bg-base-300  hover:shadow-md transition"
  href="{link}"
>
  <figure class="w-32 bg-primary-content">
    {#if !img}
      <div class="grid place-items-center">
        <span class="text-5xl ">{imgAsTxt}</span>
      </div>
    {:else}
      <img src="{img}" alt="Project Logo" class="p-4 w-32 h-32" />
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</a>

<style>
  figure {
    min-width: 8rem;
  }
</style>
