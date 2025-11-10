<script lang="ts">
    
    interface Project {
        name: string;
        description: string;
        link: string;
        img?: string;
        imgAsTxt?: string;
    }

    interface Props {
        projects: Project[];
        title?: string;
        description?: string;
    }

    let { projects }: Props = $props();

    let activeIndex = $state(0);
    let listElement: HTMLUListElement | null = $state(null);
    let containerWidth = $state(0);
    let isMobile = $state(false);

    function setActive(index: number) {
        activeIndex = index;
        updateGrid();
        computeArticleWidth();
    }

    function updateGrid() {
        if (!listElement) return;
        
        const cols = projects
            .map((_, i) => (activeIndex === i ? "10fr" : "1fr"))
            .join(" ");
        
        listElement.style.setProperty("grid-template-columns", cols);
    }

    function computeArticleWidth() {
        if (!listElement) return;

        const styles = getComputedStyle(listElement);
        const gapValue = styles.columnGap || styles.gap || "0px";
        const gap = parseFloat(gapValue) || 0;
        const totalGap = gap * Math.max(projects.length - 1, 0);
        const containerWidth = listElement.clientWidth - totalGap;
        if (containerWidth <= 0) return;

        const totalFractions = projects.length + 9;
        if (totalFractions <= 0) return;

        const width = (10 * containerWidth) / totalFractions;
        listElement.style.setProperty("--article-width", `${width}px`);
    }


    $effect(() => {
        if (listElement) {
            listElement.style.setProperty("--items", projects.length.toString());
            updateGrid();
            computeArticleWidth();
        }
    });

    $effect(() => {
        function handleResize() {
            computeArticleWidth();
            isMobile = window.innerWidth <= 768;
        }

        // Set initial mobile state
        isMobile = window.innerWidth <= 768;

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

</script>

<div class="text-center mb-8">
    <h2 class="text-4xl font-bold mb-2" style="color: hsl(var(--nc));">Pet Projects</h2>
    <p class="text-lg opacity-75" style="color: hsl(var(--n));">This selection might not always be up to date, see my up to date projects on my Github. </p>
</div>
<div class="project-tabs-container" bind:clientWidth={containerWidth}>
    <ul bind:this={listElement} class="project-tabs-list">
        {#each projects as project, index}
            {@const isActive = activeIndex === index}
            <li
                data-active={isActive.toString()}
                onpointermove={() => setActive(index)}
            >
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="card-link"
                    onclick={(e) => {
                        const isMobile = window.innerWidth <= 768;
                        const wasActive = activeIndex === index;

                        setActive(index);

                        // On mobile, prevent link opening when clicking an inactive card (expand first)
                        if (isMobile && !wasActive) {
                            e.preventDefault();
                        }
                    }}
                    onkeydown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            const isMobile = window.innerWidth <= 768;
                            const wasActive = activeIndex === index;

                            setActive(index);

                            // On mobile, prevent link opening when activating an inactive card
                            if (isMobile && !wasActive) {
                                e.preventDefault();
                            }
                        }
                    }}
                >
                    <article data-active={isActive.toString()}>
                        <h3>{project.name}</h3>
                        
                        <div class="description-container" data-active={isActive.toString()}>
                            <p>{project.description}</p>
                        </div>
                      
                        
                        {#if project.img}
                            <img src={project.img} alt={project.name} />
                        {:else if project.imgAsTxt}
                            <div class="img-placeholder">{project.imgAsTxt}</div>
                        {/if}
                    </article>
                </a>
            </li>
        {/each}
    </ul>

    <!-- Fallback description for mobile -->
    {#if isMobile}
        <div class="mobile-description-container">
            {#key activeIndex}
                <p class="mobile-description">{projects[activeIndex]?.description || ''}</p>
            {/key}
        </div>
    {/if}
</div>

<style>
    .project-tabs-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        width: 100%;
    }


    .project-tabs-container p {
        width: 74ch;
        max-width: calc(100% - 4rem);
        text-wrap: balance;
        font-family: monospace;
        margin-bottom: 4rem;
        line-height: 1.5;
        opacity: 0.8;
        font-weight: 400;
        margin: 0;
    }

    @media (max-width: 768px) {
        .project-tabs-container p {
            text-align: center;
        }

        .description-container {
            display: none;
        }

        .mobile-description-container {
            text-align: center;
        }
    }

    .project-tabs-list {
        --gap: 8px;
        --base: clamp(2rem, 8cqi, 80px);
        --speed: 0.6s;
        --easing: linear(
            0 0%,
            0.1538 4.09%,
            0.2926 8.29%,
            0.4173 12.63%,
            0.5282 17.12%,
            0.6255 21.77%,
            0.7099 26.61%,
            0.782 31.67%,
            0.8425 37%,
            0.8887 42.23%,
            0.9257 47.79%,
            0.9543 53.78%,
            0.9752 60.32%,
            0.9883 67.11%,
            0.9961 75%,
            1 100%
        );
        
        display: grid;
        container-type: inline-size;
        grid-template-columns: repeat(var(--items, 8), 1fr);
        gap: var(--gap);
        list-style-type: none;
        justify-content: center;
        padding: 0;
        height: clamp(300px, 40dvh, 474px);
        margin: 0;
        width: 100%;
        transition: grid-template-columns var(--speed) var(--easing);
    }

    .project-tabs-list li {
        position: relative;
        overflow: hidden;
        min-width: var(--base);
        border-radius: 8px;
    }

    .project-tabs-list li .card-link {
        display: block;
        width: 100%;
        height: 100%;
        background-color: hsl(var(--b2) / 0.8);
        backdrop-filter: blur(8px);
        border: 1px solid hsl(var(--b3) / 0.5);
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    li h3 {
        opacity: 0.6;
        transition: opacity calc(var(--speed) * 1.2) var(--easing);
    }


    li img,
    li .img-placeholder {
        filter: grayscale(1) brightness(1.5);
        scale: 1.1;
        transition-property: filter, scale;
        transition-duration: calc(var(--speed) * 1.2);
        transition-timing-function: var(--easing);
    }

    [data-active="true"] h3 {
        opacity: 1;
    }


    [data-active="true"] img,
    [data-active="true"] .img-placeholder {
        filter: grayscale(0) brightness(1);
        scale: 1;
        transition-delay: calc(var(--speed) * 0.25);
    }

    article {
        width: var(--article-width, 100%);
        max-inline-size: 100%;
        height: 100%;
        position: absolute;
        font-family: monospace;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;
        padding-inline: calc(var(--base) * 0.5 - 9px);
        padding-bottom: 1rem;
        overflow: hidden;
    }

    article h3 {
        position: absolute;
        top: 1rem;
        left: calc(var(--base) * 0.5);
        transform-origin: 0 50%;
        rotate: 90deg;
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        font-family: monospace;
        white-space: nowrap;
        margin: 0;
    }



    article img,
    article .img-placeholder {
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        mask: radial-gradient(100% 100% at 100% 0, #fff, #0000);
    }

    article .img-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        background-color: hsl(var(--b3) / 0.3);
    }

    article .description-container {
        position: absolute;
        bottom: 1rem;
        left: calc(var(--base) * 0.5 - 9px);
        right: calc(var(--base) * 0.5 - 9px);
        opacity: 0;
        transition: opacity 100ms ease;
        pointer-events: none;
        overflow: hidden;
    }

    article .description-container[data-active="true"] {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 200ms ease 200ms;
    }

    article .description-container p {
        font-size: 13px;
        line-height: 1.25;
        margin: 0;
        opacity: 0.8;
        overflow-wrap: anywhere;
        word-wrap: break-word;
        hyphens: auto;
        max-width: 100%;
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-clamp: 4;
        overflow: hidden;
        word-break: break-word;
    }

    .mobile-description-container {
        margin-top: 2rem;
        width: 74ch;
        max-width: 100%;
        text-wrap: balance;
        font-family: monospace;
        line-height: 1.5;
        opacity: 0.8;
        font-weight: 400;
        animation: fadeIn 300ms ease-in-out;
    }

    .mobile-description {
        margin: 0;
        font-size: 14px;
        line-height: 1.6;
        max-width: 100% !important;
        opacity: 0;
        animation: fadeInText 300ms ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInText {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

