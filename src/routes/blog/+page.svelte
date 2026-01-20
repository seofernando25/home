<script lang="ts">
    import type { PageData } from './$types';
    import ArticleCard from "$lib/components/ui/ArticleCard.svelte";

    let { data }: { data: PageData } = $props();
</script>

<main class="blog-list-container">
    <header class="section-header">
        <div class="section-title-container">
            <h1>Blog</h1>
            <p class="section-subtitle">Food for thought.</p>
        </div>
    </header>

    <div class="article-grid">
        {#each data.posts as post}
            <ArticleCard 
                href="/blog/{post.slug}"
                title={post.title}
                date={post.date}
                image={post.image}
                badge={post.badge}
            />
        {/each}
    </div>
</main>

<style>
    .blog-list-container {
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
    }

    .article-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: stretch;
    }

    @media (min-width: 768px) {
        .article-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .article-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
