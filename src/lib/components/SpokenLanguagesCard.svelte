<script>
  import { intersectionObserver } from "$lib/directives/intersectionObserver";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  const languages = [
    { name: "Portuguese", flag: "🇧🇷" },
    { name: "French", flag: "🇫🇷" },
    { name: "English", flag: "🇺🇸" },
    { name: "Spanish", flag: "🇪🇸" },
  ];

  let show = true;

  onMount(() => {
    show = false;
  });

  function onEnter() {
    show = true;
  }
</script>

<div class="card bg-base-200" use:intersectionObserver="{{ onEnter }}">
  <div class="card-body">
    <h1 class="card-title">🗣️ I speak...</h1>
    <div class="menu ">
      {#each languages as lang}
        {#if show}
          <!-- content here -->
          <li transition:fly="{{ delay: 450, y: -10 }}">
            <span class="grid grid-cols-2">
              <span class="font-bold">{lang.name}</span>
              <span class="text-end">{lang.flag}</span>
            </span>
          </li>
        {/if}
      {/each}
    </div>
  </div>
</div>
