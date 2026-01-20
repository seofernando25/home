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
            description: "Expanding my knowledge in AI and its practical applications within computer science."
        },
        {
            year: "2023 - 2023",
            title: "Co-op Front-End Developer",
            subtitle: "Trading Central",
            org: "Trading Central",
            description: "Worked on financial visualization tools and UIs using Angular. Introduced end-to-end testing methodologies and enhanced CI/CD pipelines."
        },
        {
            year: "2023 - 2023",
            title: "Co-op Full Stack Software Developer",
            subtitle: "Engineering Outreach Department",
            org: "University of Ottawa",
            description: "Maintained and developed an in-house ERP system and user-facing applications for the University of Ottawa's outreach events."
        },
        {
            year: "2021 - PRESENT",
            title: "Avionics Developer",
            subtitle: "uOttawa Rocketry",
            org: "uOttawa Rocketry",
            description: "Focused on SRAD geospatial software, telemetry systems, and tracking antennas."
        },
        {
            year: "2021 - 2025",
            title: "Honours Bachelor of Science",
            subtitle: "Computer Science & Statistics",
            org: "University of Ottawa",
            description: "Completed my undergraduate degree in computer science along with a minor in statistics."
        }
    ];
</script>

<div class="page-container">
    <HeroProfile />

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
    
</style>
