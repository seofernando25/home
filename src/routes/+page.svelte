<script lang="ts">
    import Hero from "$lib/components/home/Hero.svelte";
    import Marquee from "$lib/components/ui/Marquee.svelte";
    
    const marqueeItems = [
        "TYPESCRIPT", "SVELTE", "RUST", "PYTHON", "GO", "DOCKER", "KUBERNETES", "POSTGRESQL", "TAILWIND", "LINUX"
    ];
</script>

<Hero />
<Marquee items={marqueeItems} />

<section class="container">
    <div class="section-header">
        <div class="section-title-container">
            <h2>Featured <span class="muted">Projects</span></h2>
        </div>
        <a href="/projects" class="back-link" style="margin-bottom: 0;">VIEW ALL PROJECTS -></a>
    </div>

    <!-- I should probably extract this to a component but for now I'll hardcode a few featured ones -->
    <div class="article-grid">
         <a href="https://bucket.seofernando.com" target="_blank" class="article-card">
            <div class="image">
                <div class="avatar-tile w-full h-full" style="width: 100%; height: 100%; font-size: 4rem;">🔗</div>
                <div class="image-badge">WEB APP</div>
            </div>
            <div class="content">
                <div class="meta">
                    <span class="date">2024</span>
                </div>
                <h3>StealthShare - Temporary File Hosting</h3>
            </div>
        </a>

        <a href="https://os.seofernando.com" target="_blank" class="article-card">
            <div class="image">
                <div class="avatar-tile w-full h-full" style="width: 100%; height: 100%; font-size: 4rem;">💻</div>
                <div class="image-badge">EDUCATIONAL</div>
            </div>
            <div class="content">
                <div class="meta">
                    <span class="date">2024</span>
                </div>
                <h3>OS Calculators - Process Scheduling</h3>
            </div>
        </a>

         <a href="https://sam.seofernando.com/" target="_blank" class="article-card">
            <div class="image">
                <div class="avatar-tile w-full h-full" style="width: 100%; height: 100%; font-size: 4rem;">🗣️</div>
                <div class="image-badge">TOOL</div>
            </div>
            <div class="content">
                <div class="meta">
                    <span class="date">2023</span>
                </div>
                <h3>SAM TTS - Text to Speech</h3>
            </div>
        </a>
    </div>
</section>
