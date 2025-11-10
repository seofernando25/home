<script lang="ts">
    import ProjectTabs from "../ProjectTabs.svelte";

    const projects = [
        {
            name: "StealthShare",
            description: "Free temporary file hosting website using R2 Buckets",
            link: "https://bucket.seofernando.com",
            imgAsTxt: "🔗",
        },
        {
            name: "PokeIndex",
            description: "A simple Pokemon search tool",
            link: "https://pokeindex.seofernando.com/",
            img: "https://pokeindex.seofernando.com/assets/img/favicon.svg"
        },
        {
            name: "BrikPick",
            description: "An extension that automates the process of bulk buying LEGO sets",
            link: "https://chrome.google.com/webstore/detail/brikpick/oinlneaddfceblampipdlbogeogjnbji",
            img: "https://github.com/SeoFernando25/bp-web/blob/master/static/favicon.png?raw=true"
        },
        {
            name: "OS Calculators",
            description: "Page Replacement and Process Scheduling online calculators",
            link: "https://os.seofernando.com",
            imgAsTxt: "💻",
        },
        {
            name: "ULauncher GPT",
            description: "An ULauncher extension that allows you to use GPT-3 inside ULauncher",
            link: "https://ext.ulauncher.io/-/github-seofernando25-ulauncher-gpt",
            img: "https://github.com/SeoFernando25/ulauncher-gpt/blob/master/images/icon.png?raw=true"
        },
        {
            name: "SAM TTS",
            description: "An online Text to Speech tool",
            link: "https://sam.seofernando.com/",
            imgAsTxt: "🗣️",
        },
        {
            name: "RGS",
            description: "uORocketry\'s next generation ground station",
            link: "https://uorocketry.ca/rgs/",
            img: "https://uorocketry.ca/images/icon.png"
        },
        {
            name: "Iterative Systems",
            description: "Simple Epidemic Model Fiddle",
            link: "https://iterative-systems.seofernando.com/",
            imgAsTxt: "🔄",
        }
    ];
</script>

<div  style="color: hsl(var(--nc));" >

    

    <ProjectTabs
        projects={projects}
    />
</div>
