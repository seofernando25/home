<script lang="ts">
    import PageSection from "../PageSection.svelte";
</script>

<PageSection>
    <div class="text-center mb-8">
        <h2 class="text-4xl font-bold mb-2" style="color: hsl(var(--nc));">Education and Professional Experience</h2>
    </div>

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <!-- University of Ottawa - BSc -->
        <li>
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic text-primary">2021 - 2025</time>
                <div class="text-lg font-black">Honours Bachelor of Science</div>
                <div class="text-sm font-semibold opacity-75">Major in Computer Science, Minor in Statistics</div>
                <p class="mt-2">University of Ottawa</p>
            </div>
            <hr />
        </li>

        <!-- uOttawa Rocketry -->
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="timeline-end md:mb-10">
                <time class="font-mono italic text-primary">2021 - Present</time>
                <div class="text-lg font-black">Avionics Developer</div>
                <div class="text-sm font-semibold opacity-75">Extracurricular Role at uOttawa Rocketry</div>
                <p class="text-sm opacity-75 mt-1">Built antenna trackers, telemetry systems and SRAD geospatial software.</p>
            </div>
            <hr />
        </li>
        
        <!-- University of Ottawa Co-op -->
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic text-primary">Jan 2023 - Apr 2023</time>
                <div class="text-lg font-black">Co-op Full Stack Software Developer</div>
                <p class="mt-2">University of Ottawa - Engineering Outreach Department</p>
                <p class="text-sm opacity-75 mt-1">I was a Software Developer at the Outreach Department of my University. My team handled the development of multiple projects ranging from custom CMS's to user facing applications in Outreach events</p> 
                                
            </div>
            <hr />
        </li>

        <!-- Trading Central Co-op -->
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="timeline-end md:mb-10">
                <time class="font-mono italic text-primary">Sep 2023 - Dec 2023</time>
                <div class="text-lg font-black">Co-op Front-End Developer</div>
                <p class="mt-2">Trading Central</p>
                <p class="text-sm opacity-75 mt-1">I worked on a front-end team at Trading Central, where I developed UIs and financial visualization tools using Angular. I also introduced the concept of end-to-end testing and worked on CI/CD pipelines for the team.</p>
            </div>
            <hr />
        </li>

        <!-- Master of Computer Science -->
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic text-primary">2025 - Present</time>
                <div class="text-lg font-black">Master of Computer Science</div>
                <div class="text-sm font-semibold opacity-75">Concentration in Applied Artificial Intelligence</div>
                <p class="mt-2">University of Ottawa</p>
                <p class="text-sm opacity-75 mt-1">And this is where I am now!</p>
            </div>
        </li>
    </ul>
</PageSection>

<style>
    .timeline {
        --tw-text-opacity: 1;
        color: hsl(var(--nc));
    }

    .timeline li {
        --tw-text-opacity: 1;
        color: hsl(var(--n));
    }

    .timeline time {
        color: hsl(var(--p));
    }

    .timeline svg {
        color: hsl(var(--p));
    }

    .timeline-start,
    .timeline-end {
        max-width: 65ch;
        text-wrap: pretty;
    }

    @media (max-width: 768px) {
        .timeline-start,
        .timeline-end {
            max-width: 100%;
        }
    }
</style>
