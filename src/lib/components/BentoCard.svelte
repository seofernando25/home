<script lang="ts">
    interface Props {
        href?: string;
        variant?: "default" | "primary" | "accent" | "transparent";
        class?: string;
        target?: string;
        rel?: string;
        ariaLabel?: string;
        title?: string;
        children?: import('svelte').Snippet;
    }

    let { 
        href, 
        variant = "default", 
        class: className = "", 
        target,
        rel,
        ariaLabel,
        title,
        children 
    }: Props = $props();
</script>

{#if href}
    <a 
        href={href} 
        class="bento-card {variant} {className}"
        {target}
        {rel}
        aria-label={ariaLabel}
        {title}
    >
        {@render children?.()}
    </a>
{:else}
    <div class="bento-card {variant} {className}">
        {@render children?.()}
    </div>
{/if}

<style>
    .bento-card {
        background-color: hsl(var(--b2) / 0.8);
        backdrop-filter: blur(8px);
        border: 1px solid hsl(var(--b3) / 0.5);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 0.5rem;
        transition: box-shadow 0.3s, opacity 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        color: hsl(var(--nc));
        text-decoration: none;
        opacity: 0.8;
        position: relative;
    }

    @media (min-width: 768px) {
        .bento-card {
            padding: 1.5rem;
        }
    }

    .bento-card:hover {
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        opacity: 1;
    }

    .bento-card.primary {
        background-color: hsl(var(--p) / 0.9);
        color: hsl(var(--pc));
    }

    .bento-card.accent {
        background-color: hsl(var(--a));
        color: hsl(var(--ac));
    }

    .bento-card.accent:hover {
        background-color: hsl(var(--a) / 0.9);
    }

    .bento-card.transparent {
        background-color: transparent;
        border: none;
        box-shadow: none;
        backdrop-filter: none;
    }
</style>

