<script lang="ts">
    import PageHeader from "$lib/components/ui/PageHeader.svelte";

    const projects = [
        {
            name: "StealthShare",
            description: "Free temporary file hosting website using R2 Buckets",
            link: "https://bucket.seofernando.com",
            imgAsTxt: "🔗",
            type: "WEB APP"
        },
        {
            name: "PokeIndex",
            description: "A simple Pokemon search tool",
            link: "https://pokeindex.seofernando.com/",
            img: "https://pokeindex.seofernando.com/assets/img/favicon.svg",
            type: "WEB APP"
        },
        {
            name: "BrikPick",
            description: "An extension that automates the process of bulk buying LEGO sets",
            link: "https://chrome.google.com/webstore/detail/brikpick/oinlneaddfceblampipdlbogeogjnbji",
            img: "https://github.com/SeoFernando25/bp-web/blob/master/static/favicon.png?raw=true",
            type: "EXTENSION"
        },
        {
            name: "OS Calculators",
            description: "Page Replacement and Process Scheduling online calculators",
            link: "https://os.seofernando.com",
            imgAsTxt: "💻",
            type: "EDUCATIONAL"
        },
        {
            name: "ULauncher GPT",
            description: "An ULauncher extension that allows you to use GPT-3 inside ULauncher",
            link: "https://ext.ulauncher.io/-/github-seofernando25-ulauncher-gpt",
            img: "https://github.com/SeoFernando25/ulauncher-gpt/blob/master/images/icon.png?raw=true",
            type: "TOOL"
        },
        {
            name: "SAM TTS",
            description: "An online Text to Speech tool",
            link: "https://sam.seofernando.com/",
            imgAsTxt: "🗣️",
            type: "TOOL"
        },
        {
            name: "RGS",
            description: "uORocketry's next generation ground station",
            link: "https://uorocketry.ca/rgs/",
            img: "https://uorocketry.ca/images/icon.png",
            type: "AEROSPACE"
        },
        {
            name: "Iterative Systems",
            description: "Simple Epidemic Model Fiddle",
            link: "https://iterative-systems.seofernando.com/",
            imgAsTxt: "🔄",
            type: "SIMULATION"
        }
    ];
</script>

<PageHeader 
    title="Projects" 
    subtitle="A collection of tools, experiments, and applications I've built." 
/>

<div class="container mb-24">
    <div class="article-grid">
        {#each projects as project}
            <a href={project.link} target="_blank" class="article-card">
                <div class="image">
                    {#if project.img}
                         <img src={project.img} alt={project.name} class="w-full h-full object-contain p-8 bg-surface" />
                    {:else}
                        <div class="avatar-tile w-full h-full" style="width: 100%; height: 100%; font-size: 4rem;">{project.imgAsTxt}</div>
                    {/if}
                    <div class="image-badge">{project.type}</div>
                </div>
                <div class="content">
                    <h3>{project.name}</h3>
                    <p class="text-muted text-sm mt-2">{project.description}</p>
                </div>
            </a>
        {/each}
    </div>
</div>
