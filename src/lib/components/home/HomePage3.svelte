<script lang="ts">
    import type { Repo } from "$lib/types/Repo";

    export let err: any;
    export let repos: Repo[] = [];
    export let totalStars: number;

    $: fetchError = repos.length === 0 || err != null || totalStars === 0;
</script>

<section
    id="the-more-stuff"
    class="flex flex-col p-4 overflow-clip text-primary-content"
>
    <div class="p-4 prose mb-4 max-w-none">
        <h1 class="text-neutral-content">
            Personal Projects <span class="whitespace-nowrap">
                <i class="fas fa-star"></i>
                {fetchError ? "?" : totalStars}
            </span>
            <span
                class="text-xs text-opacity-80 whitespace-nowrap text-neutral-content"
                >It ain't much, but it's honest work</span
            >
        </h1>
    </div>
    {#if fetchError}
        <div class="card mx-auto">
            <div class="card-body text-neutral-content">
                <h1 class="card-title">
                    Oops 😅 Something went wrong while trying to load my Github
                    profile, please try again later.
                </h1>
                <p class="card-subtitle">Error: {err}</p>
            </div>
        </div>
    {/if}
    <!-- Auto Grid -->
    <div class="auto-grid place-items-center overflow-scroll fade-y py-8">
        {#each repos as repo}
            <a
                href={repo.html_url}
                class="p-4 card card-compact bg-base-200 shadow-xl w-full h-42 hover:transform hover:scale-105 transition"
            >
                <p class="card-title">{repo.name}</p>
                <div class="card-body">
                    <p class="font-semibold">{repo.description ?? ""}</p>
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
