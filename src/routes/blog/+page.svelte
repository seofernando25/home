<script lang="ts">
    import PageHeader from "$lib/components/ui/PageHeader.svelte";

    // Placeholder data
    const posts = [
        {
            title: "Rebuilding my website with SvelteKit",
            slug: "rebuilding-website",
            date: "Jan 19, 2026",
            excerpt: "A look into how I migrated my personal website to SvelteKit and adopted a brutalist design system."
        },
        {
            title: "Why I use Arch Linux",
            slug: "arch-linux",
            date: "Dec 10, 2025",
            excerpt: "An exploration of my daily driver OS and why I prefer it over other distributions."
        }
    ];
</script>

<PageHeader 
    title="Blog" 
    subtitle="Thoughts, tutorials, and rants about software engineering." 
/>

<div class="container mb-24">
    <div class="article-grid">
        {#each posts as post}
            <a href="/blog/{post.slug}" class="article-card">
                <div class="content">
                    <div class="meta">
                        <span class="date">{post.date}</span>
                    </div>
                    <h3 class="mb-4">{post.title}</h3>
                    <p class="text-muted text-sm">{post.excerpt}</p>
                </div>
            </a>
        {/each}
    </div>
</div>