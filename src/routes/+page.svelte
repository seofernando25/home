<script lang="ts">
    import HeroProfile from "$lib/components/home/HeroProfile.svelte";
    import Timeline from "$lib/components/ui/Timeline.svelte";
    import TimelineItem from "$lib/components/ui/TimelineItem.svelte";

    const timeline = [
        {
            year: "2025 - PRESENT",
            title: "Master of Computer Science",
            subtitle: "Concentration in Applied Artificial Intelligence",
            org: "University of Ottawa",
            description: "Deepening my knowledge in AI and its practical applications within computer science."
        },
        {
            year: "2023 - 2023",
            title: "Co-op Front-End Developer",
            subtitle: "Trading Central",
            org: "Trading Central",
            description: "Developed sophisticated financial visualization tools and UIs using Angular. Introduced end-to-end testing methodologies and enhanced CI/CD pipelines."
        },
        {
            year: "2023 - 2023",
            title: "Co-op Full Stack Software Developer",
            subtitle: "Engineering Outreach Department",
            org: "University of Ottawa",
            description: "Built custom CMS solutions and user-facing applications for university outreach events, managing both front-end and back-end components."
        },
        {
            year: "2021 - PRESENT",
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

<div class="page-container">
    <HeroProfile 
        name="Fernando Nogueira"
        tagline="Software Engineer & Aspiring Wizard"
        description="Full-stack developer, Linux enthusiast, and tinkerer. I build tools, break things, and occasionally fix them. Currently exploring the depths of AI and Computer Science."
        avatarSrc="/favicon.webp"
    />

    <div class="timeline-wrapper">
        <Timeline title="History">
            {#each timeline as item, i}
                <TimelineItem 
                    title={item.title}
                    org={item.org}
                    year={item.year}
                    subtitle={item.subtitle}
                    description={item.description}
                    isLast={i === timeline.length - 1}
                />
            {/each}
        </Timeline>
    </div>
</div>

<style>
    .page-container {
        padding-top: 8rem;
    }
    
    .timeline-wrapper {
        margin-top: 4rem;
        padding-bottom: 6rem;
    }
</style>
