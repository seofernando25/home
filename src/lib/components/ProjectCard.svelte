<script lang="ts">
    export let name = "Foo";
    export let description = "Bar";
    export let link = "#";
    export let img: string | undefined = undefined;
    export let imgAsTxt: string | undefined = "?";

    let card: HTMLElement | null = null;
    let highlight: HTMLElement | null = null;
    let resetRotationTimeout: ReturnType<typeof setTimeout> | null = null;

    const rotationLimit = 12;

    function animateRotation(event: MouseEvent) {
        if (resetRotationTimeout) clearTimeout(resetRotationTimeout);
        if (!card) return;

        const middleX = card.clientWidth / 2;
        const middleY = card.clientHeight / 2;

        const rect = card.getClientRects();
        const left = rect[0].left;
        const top = rect[0].top;

        const relativeX = event.clientX - left;
        const relativeY = event.clientY - top;

        const rotXPercent = (relativeX - middleX) / middleX;
        const rotYPercent = (relativeY - middleY) / middleY;
        const rotateX = rotYPercent * rotationLimit;
        const rotateY = rotXPercent * rotationLimit;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

        // Highlight
        if (!highlight) return;
        highlight.style.transform = `translate(50%, -50%) translate(${-rotXPercent * 14}rem, ${
            rotYPercent * 5.5
        }rem)`;
    }

    async function removeRotation() {
        if (!card) return;

        resetRotationTimeout = setTimeout(async () => {
            if (!card) return;
            if (!highlight) return;
            card.style.transition = "all 0.2s";
            card.style.transform = "rotateX(0deg) rotateY(0deg)";

            highlight.style.transition = "all 0.2s";
            highlight.style.transform = "translate(50%, -50%) translate(0, 0)";

            await new Promise((resolve) => setTimeout(resolve, 225));

            card.removeAttribute("style");
            highlight.removeAttribute("style");
        }, 200);
    }
</script>

<a
    on:mousemove={animateRotation}
    on:mouseleave={removeRotation}
    bind:this={card}
    class="card card-compact h-42 card-side bg-base-300 hover:shadow-md border-base-200 border-2"
    href={link}
>
    <div bind:this={highlight} class="highlight"></div>
    <figure class="w-32 bg-primary-content">
        {#if !img}
            <div class="grid place-items-center">
                <span class="text-5xl">{imgAsTxt}</span>
            </div>
        {:else}
            <img src={img} alt="Project Logo" class="p-4 object-contain" />
        {/if}
    </figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
    </div>
</a>

<style>
    figure {
        min-width: 8rem;
        max-width: 8rem;
    }

    .card {
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
    }

    .highlight {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background: white;
        filter: blur(5rem);
        opacity: 0.25;
        z-index: 10;
        pointer-events: none;
    }
</style>
