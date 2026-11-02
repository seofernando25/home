<script lang="ts">
    import Card from "$lib/components/ui/Card.svelte";

    const projects = [
        {
            name: "garmin-proto-lab",
            description: "Clean-room Garmin watch protocol research and Python reference implementation",
            link: "https://github.com/seofernando25/garmin-proto-lab",
            imgAsTxt: "⌚",
            type: "RESEARCH"
        },
        {
            name: "VLA-JEPA",
            description: "Efficient vision-language-action robot policies with LeRobot on LIBERO (CSI 5341)",
            link: "https://github.com/seofernando25/csi5341-vla-jepa",
            imgAsTxt: "🤖",
            type: "ROBOTICS"
        },
        {
            name: "roomlab",
            description: "Multiplayer isometric room builder and social game (Bun, Elysia, Three.js)",
            link: "https://github.com/seofernando25/roomlab",
            imgAsTxt: "🎮",
            type: "GAME"
        },
        {
            name: "parlez-vous",
            description: "Offline privacy-focused AI language learning",
            link: "https://github.com/seofernando25/parlez-vous",
            imgAsTxt: "🔒",
            type: "AI APP"
        },
        {
            name: "planNAV",
            description: "Flight-schedule conflict solver, 2nd place in NAV CANADA challenge, uOttaHack 2026",
            link: "https://github.com/seofernando25/planNAV",
            imgAsTxt: "✈️",
            type: "HACKATHON"
        },
        {
            name: "sergw",
            description: "Serial-to-TCP gateway with TUI and mDNS discovery (on crates.io)",
            link: "https://github.com/seofernando25/sergw",
            imgAsTxt: "🔌",
            type: "TOOL"
        },
        {
            name: "ms5611-01ba",
            description: "Embedded Rust driver for the MS5611 barometric pressure sensor",
            link: "https://github.com/seofernando25/ms5611-01ba",
            imgAsTxt: "🌡️",
            type: "EMBEDDED"
        },
        {
            name: "RGS",
            description: "uORocketry's next generation ground station",
            link: "https://uorocketry.ca/rgs/",
            img: "https://uorocketry.ca/images/icon.png",
            type: "AEROSPACE"
        },
        {
            name: "PokeIndex",
            description: "A simple Pokemon search tool",
            link: "https://pokeindex.seofernando.com/",
            img: "https://pokeindex.seofernando.com/assets/img/favicon.svg",
            type: "WEB APP"
        },
        {
            name: "OS Calculators",
            description: "Page Replacement and Process Scheduling online calculators",
            link: "https://os.seofernando.com",
            imgAsTxt: "💻",
            type: "EDUCATIONAL"
        },
        {
            name: "SAM TTS",
            description: "An online Text to Speech tool",
            link: "https://sam.seofernando.com/",
            imgAsTxt: "🗣️",
            type: "TOOL"
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