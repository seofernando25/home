<script lang="ts">
    import { run } from 'svelte/legacy';

    import { onDestroy, onMount } from "svelte";
    import { fly } from "svelte/transition";

    interface Props {
        strings?: string[];
        maxWCh?: number;
        delay?: number;
    }

    let { strings = [], maxWCh = 15, delay = 2000 }: Props = $props();

    let el: HTMLElement | undefined = $state();
    let boxH = $state(0);
    let boxW = $state(0);

    run(() => {
        boxW = Math.max(...strings.map((s) => s.length));
        boxW = Math.min(boxW, maxWCh);

        // Check how many characters fit in the box dividing maxWCh by the width of a character
        for (const s of strings) {
            const h = Math.ceil(s.length / maxWCh);
            boxH = Math.max(boxH, h);
        }

        if (el) {
            el.style.width = `${boxW + 1}ch`;
            el.style.height = `${boxH + 3}ch`;
        }
    });

    let current = $state(0);

    function next() {
        current = (current + 1) % strings.length;
    }

    let interval: ReturnType<typeof setInterval>;
    onMount(() => {
        interval = setInterval(next, delay);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div
    class="text-slash-container rounded text-center flex"
    bind:this={el}
>
    {#key current}
        <span class="inline-block m-auto" in:fly={{ y: -10 }}>
            {strings[current]}
        </span>
    {/key}
</div>

<style>
    .text-slash-container {
        background-color: hsl(var(--b2));
        color: hsl(var(--pc));
        border-radius: 0.5rem;
        display: flex;
    }
</style>
