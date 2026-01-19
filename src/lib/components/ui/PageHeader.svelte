<script lang="ts">
    interface Props {
        title: string;
        subtitle?: string;
    }

    let { title, subtitle }: Props = $props();
</script>

<div class="page-header-container">
    <div class="header-content">
        <h1 class="page-title">{title}</h1>
        {#if subtitle}
            <p class="page-subtitle">{subtitle}</p>
        {/if}
    </div>
</div>

<style>
    .page-header-container {
        position: relative;
        padding-top: 8rem;
        padding-bottom: 4rem;
        text-align: center;
        background-color: transparent;
    }

    .header-content {
        position: relative;
        z-index: 10;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .page-title {
        font-family: var(--font-primary);
        font-weight: 700;
        font-size: 3rem;
        margin-bottom: 1rem;
        letter-spacing: -0.05em;
        color: var(--text-primary);
    }

    .page-subtitle {
        font-family: var(--font-mono);
        font-size: 1rem;
        color: var(--text-muted);
        line-height: 1.6;
    }
</style>
