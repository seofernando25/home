<script lang="ts">
    interface Props {
        name?: string;
        description?: string;
        link?: string;
        img?: string | undefined;
        imgAsTxt?: string | undefined;
    }

    let {
        name = "Foo",
        description = "Bar",
        link = "#",
        img = undefined,
        imgAsTxt = "?"
    }: Props = $props();
</script>

<a
    class="project-card-link"
    href={link}
>
    <figure>
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
    .project-card-link {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
        text-decoration: none;
        color: inherit;
        min-height: 9rem;
    }

    figure {
        min-width: 8rem;
        max-width: 8rem;
        background-color: hsl(var(--s));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
    }

    .card-body p {
        margin: 0;
        font-size: 0.875rem;
    }
</style>
