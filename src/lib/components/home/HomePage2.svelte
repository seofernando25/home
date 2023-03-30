<script lang="ts">
  import { hrefSmoothScroll } from "$lib/directives/hrefSmoothScroll";
  import type { Repo } from "$lib/types/Repo";

  export let err: any;
  export let repos: Repo[];
  export let totalStars: number;
</script>

<section id="the-good-stuff" class="flex flex-col p-4 overflow-clip">
  <div class="p-4 prose mb-4 max-w-none">
    <h1 class="">
      Personal Projects <span class="whitespace-nowrap">
        <i class="fas fa-star"></i>
        {totalStars}
      </span>
      <span class="text-xs text-base-content text-opacity-80 whitespace-nowrap"
        >It ain't much, but it's honest work</span
      >
    </h1>
  </div>
  <!-- Auto Grid -->
  <div class="auto-grid place-items-center overflow-scroll fade-y">
    {#each repos as repo}
      <a
        href="{repo.html_url}"
        class="p-4 card card-compact bg-base-200 shadow-xl w-full h-48 hover:transform hover:scale-105 transition"
      >
        <p class="card-title">{repo.name}</p>
        <div class="card-body">
          <p class="font-semibold ">{repo.description ?? ""}</p>
        </div>
        {#if repo.stargazers_count}
          <div class="card-actions justify-end">
            <i class="fas fa-star text-xl"></i>
            {repo.stargazers_count}
          </div>
        {/if}
      </a>
    {/each}
  </div>

  <!-- Scroll down arrow flex bottom -->
  <a class="mt-auto text-center" href="#the-more-stuff" use:hrefSmoothScroll>
    <p class="mb-4">And there is more!</p>
    <i class="fas fa-angle-down text-4xl animate-bounce mt-auto"></i>
  </a>
</section>

<style>
  section {
    height: 100vh;
    height: 100dvh;

    scroll-snap-align: start;
  }

  .auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1.5rem;
  }

  /* Fade the top and bottom of the scrollable area */
  .fade-y {
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 95%
    );
  }
</style>
