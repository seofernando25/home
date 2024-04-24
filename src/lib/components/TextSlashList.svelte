<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let strings: string[] = [];
    export let maxWCh = 15;
    export let delay = 2000;

    let el: HTMLElement;
    let boxH = 0;
    let boxW = 0;

    $: {
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
    }

    let current = 0;

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
    class="bg-base-200 text-primary-content rounded text-center flex"
    bind:this={el}
>
    {#key current}
        <span class="inline-block m-auto" in:fly={{ y: -10 }}>
            {strings[current]}
        </span>
    {/key}
</div>
