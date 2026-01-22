<script lang="ts">
    interface Props {
        href: string;
        'aria-label': string;
        children?: import('svelte').Snippet;
        class?: string;
    }

    let { href, 'aria-label': ariaLabel, children, class: className = '' }: Props = $props();
</script>

<a {href} class="social-btn {className}" aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
    {@render children?.()}
</a>

<style>
    .social-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border: 1px solid var(--border-color);
        background-color: var(--bg-surface);
        color: var(--text-muted);
        transition: all 0.2s ease;
        border-radius: 0;
    }

    .social-btn:hover {
        color: var(--text-primary);
        border-color: var(--text-primary);
        background-color: var(--bg-surface-hover);
    }
    
    /* Global support for SVG sizing within the button */
    :global(.social-btn svg) {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
