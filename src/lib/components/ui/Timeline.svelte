<script lang="ts">
    interface Props {
        title?: string;
        children?: import('svelte').Snippet;
    }
    let { title, children }: Props = $props();
</script>

<div class="timeline-container">
    {#if title}
        <h2 class="timeline-title">{title}</h2>
    {/if}
    
    <div class="timeline-track">
        {@render children?.()}
    </div>
</div>

<style>
    .timeline-container {
        max-width: 56rem; /* 4xl */
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .timeline-title {
        font-size: 2.25rem;
        font-weight: 700;
        font-family: var(--font-primary);
        letter-spacing: -0.025em;
        color: var(--text-primary);
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    @media (min-width: 768px) {
        .timeline-title {
            padding-left: 2rem;
        }
    }

    .timeline-track {
        position: relative;
        border-left: 1px solid var(--border-color);
        margin-left: 1rem;
        padding: 2rem 0;
    }
    @media (min-width: 768px) {
        .timeline-track {
            margin-left: 2rem;
        }
    }
</style>
