<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    interface Props {
        strings?: string[];
        maxWCh?: number;
        delay?: number;
    }

    let { strings = [], maxWCh = 20, delay = 2000 }: Props = $props();

    let el: HTMLElement | undefined = $state();
    let current = $state(0);

    $effect(() => {
        if (!el || strings.length === 0) return;

        const maxLen = Math.max(...strings.map((s) => s.length));
        // Approximate width: ch unit matches mono font width roughly
        // Adding buffer for padding/border
        el.style.minWidth = `${Math.min(maxLen, maxWCh) + 4}ch`;
    });

    function next() {
        current = (current + 1) % strings.length;
    }

    onMount(() => {
        const interval = setInterval(next, delay);
        return () => clearInterval(interval);
    });
</script>

<div
    class="text-slash-container inline-flex items-center justify-center px-4 py-2"
    bind:this={el}
>
    {#key current}
        <span class="inline-block text-sm uppercase tracking-wide" in:fly={{ y: -10, duration: 300 }}>
            {strings[current]}
        </span>
    {/key}
</div>

<style>
    .text-slash-container {
        background-color: var(--color-surface);
        color: var(--color-text-primary);
        border: 1px solid var(--color-border-primary);
        font-family: var(--font-mono);
        min-height: 3rem; 
    }
</style>