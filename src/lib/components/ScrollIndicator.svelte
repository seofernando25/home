<script lang="ts">
    import { hrefSmoothScroll } from "$lib/directives/hrefSmoothScroll";

    interface Props {
        href: string;
        text?: string;
        variant?: "bento" | "simple";
    }

    let { href, text = "Scroll for more", variant = "simple" }: Props = $props();
</script>

{#if variant === "bento"}
    <a class="scroll-indicator-bento" href={href} use:hrefSmoothScroll>
        <div class="scroll-content">
            <p>{text}</p>
            <i class="fas fa-angle-down animate-bounce"></i>
        </div>
    </a>
{:else}
    <a class="scroll-indicator-simple" href={href} use:hrefSmoothScroll>
        <p class="mb-4">{text}</p>
        <i class="fas fa-angle-down text-4xl animate-bounce mt-auto"></i>
    </a>
{/if}

<style>
    .scroll-indicator-simple {
        margin-top: auto;
        text-align: center;
        text-decoration: none;
        color: inherit;
    }

    .scroll-indicator-bento {
        background-color: hsl(var(--b2) / 0.8);
        backdrop-filter: blur(8px);
        border: 1px solid hsl(var(--b3) / 0.5);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        text-decoration: none;
        color: hsl(var(--nc));
        transition: all 0.3s;
        margin-top: auto;
        opacity: 0.3;
        grid-column: 1 / -1;
        width: fit-content;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .scroll-indicator-bento:hover {
        background-color: hsl(var(--b3) / 0.5);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        transform: scale(1.02);
        opacity: 1;
    }

    @media (min-width: 1024px) {
        .scroll-indicator-bento {
            grid-column: 1 / 5;
            grid-row: 5;
            align-self: end;
        }
    }

    .scroll-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .scroll-content p {
        font-size: 0.875rem;
        margin: 0;
    }

    @media (min-width: 768px) {
        .scroll-content p {
            font-size: 1rem;
        }
    }

    .scroll-content i {
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        .scroll-content i {
            font-size: 2rem;
        }
    }

    @media (min-width: 1024px) {
        .scroll-content i {
            font-size: 2.5rem;
        }
    }
</style>

