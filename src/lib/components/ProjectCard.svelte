<script lang="ts">
    interface Props {
        name?: string;
        description?: string;
        link?: string;
        img?: string | undefined;
        imgAsTxt?: string | undefined;
    }

    let {
        name = "Project",
        description = "Description",
        link = "#",
        img = undefined,
        imgAsTxt = "?"
    }: Props = $props();
</script>

<a
    class="project-card group block h-full border border-border-primary bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--color-border-primary)]"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
>
    <div class="flex items-start justify-between mb-4">
        <div class="w-12 h-12 flex items-center justify-center border border-border-primary bg-background font-mono text-2xl">
            {#if img}
                <img src={img} alt={name} class="w-8 h-8 object-contain" />
            {:else}
                <span>{imgAsTxt}</span>
            {/if}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-border-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <path stroke-linecap="square" stroke-linejoin="miter" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    </div>
    
    <h3 class="font-mono text-xl font-bold uppercase mb-2 text-text-primary group-hover:underline decoration-border-primary underline-offset-4">{name}</h3>
    <p class="text-sm text-text-primary/80 leading-relaxed">{description}</p>
</a>