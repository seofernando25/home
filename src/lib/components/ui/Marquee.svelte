<script lang="ts">
    interface Props {
        items?: string[];
    }
    let { items = [] }: Props = $props();
</script>

<div class="marquee-section">
    <div class="marquee">
        <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
        <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
         <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
         <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
    </div>
</div>

<style>
    .marquee-section {
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        background-color: var(--bg-primary);
        overflow: hidden;
        padding: 1rem 0;
    }

    .marquee {
        display: flex;
        width: fit-content;
        animation: marquee 20s linear infinite;
    }

    .marquee-set {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        gap: 4rem;
        padding-right: 4rem;
    }

    .marquee-item {
        display: inline-block;
        font-size: 1.125rem;
        font-family: var(--font-mono);
        color: var(--text-muted);
        white-space: nowrap;
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-25%); }
    }
</style>
