<script lang="ts">
    import type { PageData } from './$types';
    import ArticleCard from "$lib/components/ui/ArticleCard.svelte";

    let { data }: { data: PageData } = $props();
</script>

<main class="blog-list-container">
    <header class="section-header">
        <div class="section-title-container">
            <h1>Blog</h1>
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
        margin-bottom: 4rem;
    }

    .section-title-container h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.05em;
        line-height: 1;
        margin: 1.5rem 0;
        color: var(--text-primary);
    }

    .article-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
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
