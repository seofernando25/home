<script lang="ts">
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

<main class="page-container">
    <header class="section-header">
        <div class="section-title-container">
            <h1>Projects</h1>
            <p class="section-subtitle">Tools and pet projects.</p>
        </div>
    </header>

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
</main>

<style>
    .page-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 8rem 1.5rem 6rem;
        min-height: 100vh;
    }

    .section-header {
        padding-bottom: 4rem;
    }

    .section-title-container h1 {
        font-size: 3rem;
        font-weight: 700;
        font-family: var(--font-primary);
        letter-spacing: -0.05em;
        line-height: 1;
        padding-bottom: 1rem;
        color: var(--text-primary);
    }

    .section-subtitle {
        font-family: var(--font-mono);
        font-size: 1rem;
        color: var(--text-muted);
        line-height: 1.6;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: stretch;
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