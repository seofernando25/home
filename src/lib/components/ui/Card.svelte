<script lang="ts">
    interface Props {
        href: string;
        title: string;
        description?: string;
        meta?: string;
        imageSrc?: string;
        imageAlt?: string;
        imageFallback?: string;
        badge?: string;
        target?: string;
    }

    let { href, title, description, meta, imageSrc, imageAlt, imageFallback, badge, target }: Props = $props();
</script>

<a {href} class="card" {target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
    {#if imageSrc || imageFallback}
        <div class="card-image-wrapper">
            {#if imageSrc}
                 <img src={imageSrc} alt={imageAlt || title} class="card-image" />
            {:else}
                <div class="card-image-fallback">{imageFallback}</div>
            {/if}
            
            {#if badge}
                <div class="card-badge">{badge}</div>
            {/if}
        </div>
    {/if}

    <div class="card-content">
        {#if meta}
            <div class="card-meta">
                <span class="card-date">{meta}</span>
            </div>
        {/if}
        
        <h3 class="card-title">{title}</h3>
        
        {#if description}
            <p class="card-description">{description}</p>
        {/if}
    </div>
</a>

<style>
    .card {
        display: block;
        height: 100%;
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        text-decoration: none;
        color: inherit;
        overflow: hidden;
        transition: all 0.2s ease;
    }

    .card:hover {
        background-color: var(--bg-surface-hover);
        border-color: var(--text-primary);
    }

    .card-image-wrapper {
        position: relative;
        height: 12rem;
        background-color: var(--bg-surface-hover);
        border-bottom: 1px solid var(--border-color);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 2rem;
    }

    .card-image-fallback {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
    }

    .card-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--border-color);
    }

    .card-content {
        padding: 1.5rem;
    }

    .card-meta {
        margin-bottom: 1rem;
    }

    .card-date {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .card-title {
        font-family: var(--font-primary);
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
        line-height: 1.3;
    }

    .card-description {
        font-size: 0.875rem;
        color: var(--text-muted);
        line-height: 1.6;
    }
</style>
