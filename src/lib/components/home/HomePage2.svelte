<script lang="ts">
    import { hrefSmoothScroll } from "$lib/directives/hrefSmoothScroll";
    import ProjectCard from "../ProjectCard.svelte";
</script>

<section
    id="the-good-stuff"
    class="flex flex-col p-4 overflow-clip text-neutral-content"
>
    <div class="p-4 prose max-w-none">
        <h1 class="text-neutral-content">🏗️ Notable Projects</h1>
    </div>

    <!-- Auto Grid -->
    <div class="fade-y overflow-auto auto-grid text-primary-content">
        <ProjectCard
            name="StealthShare"
            description="Free temporary file hosting website using R2 Buckets"
            link="https://bucket.seofernando.com"
            imgAsTxt="🔗"
        />

        <ProjectCard
            name="PokeIndex"
            description="A simple Pokemon search tool"
            link="https://pokeindex.seofernando.com/"
            img="https://pokeindex.seofernando.com/assets/img/favicon.svg"
        />
        <ProjectCard
            name="BrikPick"
            description="An extension that automates the process of bulk buying LEGO sets"
            link="https://chrome.google.com/webstore/detail/brikpick/oinlneaddfceblampipdlbogeogjnbji"
            img="https://github.com/SeoFernando25/bp-web/blob/master/static/favicon.png?raw=true"
        />

        <ProjectCard
            name="OS Calculators"
            description="Page Replacement and Process Scheduling online calculators"
            link="https://os.seofernando.com"
            imgAsTxt="💻"
        />

        <ProjectCard
            name="ULauncher GPT"
            description="An an ULauncher extension that allows you to use GPT-3 inside ULauncher"
            link="https://ext.ulauncher.io/-/github-seofernando25-ulauncher-gpt"
            img="https://github.com/SeoFernando25/ulauncher-gpt/blob/master/images/icon.png?raw=true"
        />

        <ProjectCard
            name="SAM TTS"
            description="An online Text to Speech tool"
            link="https://sam.seofernando.com/"
            imgAsTxt="🗣️"
        />
        <ProjectCard
            name="RGS"
            description="uORocketry's next generation ground station"
            link="https://uorocketry.ca/rgs/"
            img="https://uorocketry.ca/images/icon.png"
        />
        <ProjectCard
            name="Iterative Systems"
            description="Simple Epidemic Model Fiddle"
            link="https://iterative-systems.seofernando.com/"
            imgAsTxt="🔄"
        />
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
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1.5rem;
        padding: 1rem;
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
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
</style>
