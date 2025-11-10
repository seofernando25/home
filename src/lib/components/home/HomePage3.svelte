<script lang="ts">
    import type { Repo } from "$lib/types/Repo";
    import PageSection from "../PageSection.svelte";
    import "$lib/styles/fade-y.css";

    interface Props {
        err: any;
        repos?: Repo[];
        totalStars: number;
    }

    let { err, repos = [], totalStars }: Props = $props();

    let fetchError = $derived(repos.length === 0 || err != null || totalStars === 0);
</script>

<PageSection id="the-more-stuff">
    <div class="flex flex-col h-full p-4 md:p-6 lg:p-8 overflow-clip" style="color: hsl(var(--pc));">
    <div class="p-4 prose mb-4 max-w-none">
        <h1 style="color: hsl(var(--nc));">
            Personal Projects <span class="whitespace-nowrap">
                <i class="fas fa-star"></i>
                {fetchError ? "?" : totalStars}
            </span>
            <span
                class="text-xs whitespace-nowrap"
                style="color: hsl(var(--nc)); opacity: 0.8;"
                >It ain't much, but it's honest work</span
            >
        </h1>
    </div>
    {#if fetchError}
        <div class="card mx-auto">
            <div class="card-body" style="color: hsl(var(--nc));">
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
                class="p-4 card card-sm bg-base-200 shadow-xl w-full h-42 hover:transform hover:scale-105 transition"
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
    </div>
</PageSection>

<style>
    .auto-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-gap: 1.5rem;
        flex: 1;
        overflow-y: auto;
    }
</style>
