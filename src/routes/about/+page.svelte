<script lang="ts">
    import PageHeader from "$lib/components/ui/PageHeader.svelte";

    const timeline = [
        {
            year: "2025 - Present",
            title: "Master of Computer Science",
            subtitle: "Concentration in Applied Artificial Intelligence",
            org: "University of Ottawa",
            description: "Deepening my knowledge in AI and its practical applications within computer science."
        },
        {
            year: "Sep 2023 - Dec 2023",
            title: "Co-op Front-End Developer",
            subtitle: "Trading Central",
            org: "Trading Central",
            description: "Developed sophisticated financial visualization tools and UIs using Angular. Introduced end-to-end testing methodologies and enhanced CI/CD pipelines."
        },
        {
            year: "Jan 2023 - Apr 2023",
            title: "Co-op Full Stack Software Developer",
            subtitle: "Engineering Outreach Department",
            org: "University of Ottawa",
            description: "Built custom CMS solutions and user-facing applications for university outreach events, managing both front-end and back-end components."
        },
        {
            year: "2021 - Present",
            title: "Avionics Developer",
            subtitle: "uOttawa Rocketry",
            org: "uOttawa Rocketry",
            description: "Focused on SRAD geospatial software, telemetry systems, and antenna tracking hardware for high-power rocketry."
        },
        {
            year: "2021 - 2025",
            title: "Honours Bachelor of Science",
            subtitle: "Computer Science & Statistics",
            org: "University of Ottawa",
            description: "Completed my undergraduate degree with a strong foundation in algorithmic theory and statistical analysis."
        }
    ];
</script>

<PageHeader 
    title="History" 
    subtitle="Academic and professional trajectory." 
/>

<div class="max-w-4xl mx-auto px-4 mb-24">
    <div class="relative border-l border-border-color ml-4 space-y-12">
        {#each timeline as item}
            <div class="relative pl-12">
                <!-- Dot -->
                <div class="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-bg-primary border border-border-color"></div>
                
                <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 class="text-xl font-bold font-primary text-text-primary">{item.title}</h3>
                    <span class="font-mono text-sm text-text-muted whitespace-nowrap mt-1 md:mt-0">{item.year}</span>
                </div>
                
                <div class="text-lg font-semibold text-text-primary mb-1">{item.org}</div>
                {#if item.subtitle}
                    <div class="text-sm font-medium text-text-muted mb-4">{item.subtitle}</div>
                {/if}
                
                {#if item.description}
                    <p class="text-text-primary leading-relaxed max-w-2xl opacity-80">{item.description}</p>
                {/if}
            </div>
        {/each}
    </div>
</div>
