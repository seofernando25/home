<script lang="ts">
    interface Props {
        href: string;
        title: string;
        date?: string;
        image?: string;
        badge?: string;
    }

    let { href, title, date, image, badge }: Props = $props();
    
    let imageError = $state(false);
    
    function handleImageError() {
        imageError = true;
    }
</script>

<a href={href} class="article-card">
    <div class="image" class:no-image={imageError}>
        {#if image}
            <img src={image} alt={title} onerror={handleImageError} style:display={imageError ? 'none' : 'block'} />
        {/if}
        <div class="overlay"></div>
        {#if badge}
            <div class="image-badge">{badge}</div>
        {/if}
    </div>
    <div class="content">
        <div class="meta">
            {#if date}
                <time class="date">{date}</time>
            {/if}
        </div>
        <h3>{title}</h3>
    </div>
</a>

<style>
    .article-card {
        display: block;
        height: 100%;
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        padding: 0.25rem;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
    }

    .article-card:hover {
        border-color: var(--text-primary);
    }

    .image {
        aspect-ratio: 16 / 9;
        background-color: var(--bg-primary);
        margin-bottom: 1rem;
        position: relative;
        overflow: hidden;
        transition: background-color 0.3s ease;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
    }

    .article-card:hover .image img {
        transform: scale(1.05);
    }

    .overlay {
        position: absolute;
        inset: 0;
        transition: background-color 0.2s;
        background-color: var(--text-primary);
        opacity: 0.05;
        pointer-events: none;
    }

    .image-badge {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        font-size: 0.625rem;
        font-family: var(--font-mono);
        text-transform: uppercase;
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        padding: 0.25rem 0.5rem;
        background-color: var(--bg-primary);
        transition: all 0.3s ease;
    }

    .content {
        padding: 1rem;
    }

    .meta {
        margin-bottom: 0.75rem;
    }

    .date {
        font-size: 0.75rem;
        font-family: var(--font-mono);
        color: var(--text-muted);
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    h3 {
        font-family: var(--font-primary);
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.4;
        transition: color 0.2s;
        color: var(--text-primary);
    }

    .article-card:hover h3 {
        opacity: 0.8;
    }
</style>
