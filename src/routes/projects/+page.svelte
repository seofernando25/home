<script lang="ts">
    import PageHeader from "$lib/components/ui/PageHeader.svelte";
    import Card from "$lib/components/ui/Card.svelte";

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

<div class="page-content">
    <div class="grid-layout">
        {#each projects as project}
            <Card 
                href={project.link}
                title={project.name}
                description={project.description}
                imageSrc={project.img}
                imageFallback={project.imgAsTxt}
                badge={project.type}
                target="_blank"
            />
        {/each}
    </div>
</div>

<style>
    .page-content {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0 1.5rem;
        padding-bottom: 6rem;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media (min-width: 768px) {
        .grid-layout {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (min-width: 1024px) {
        .grid-layout {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>