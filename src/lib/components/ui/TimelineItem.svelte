<script lang="ts">
    interface Props {
        title: string;
        org: string;
        year: string;
        subtitle?: string;
        description?: string;
        isLast?: boolean;
    }

    let { title, org, year, subtitle, description, isLast = false }: Props = $props();
</script>

<div class="timeline-item {isLast ? '' : 'has-spacing'}">
    <!-- Dot -->
    <div class="timeline-dot"></div>
    
    <div class="timeline-header">
        <div class="timeline-main">
            <h3 class="item-title">{title}</h3>
            <div class="item-org">{org}</div>
        </div>
        <div class="timeline-meta">
            <span class="item-year">{year}</span>
        </div>
    </div>
    
    <div class="timeline-body">
        {#if subtitle}
            <div class="item-subtitle">
                {subtitle}
            </div>
        {/if}
        
        {#if description}
            <p class="item-description">
                {description}
            </p>
        {/if}
    </div>
</div>

<style>
    .timeline-item {
        position: relative;
        padding-left: 3rem;
    }
    
    @media (min-width: 768px) {
        .timeline-item {
            padding-left: 4rem;
        }
    }

    .has-spacing {
        margin-bottom: 4rem;
    }

    .timeline-dot {
        position: absolute;
        left: -0.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
    }

    .timeline-header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
        .timeline-header {
            flex-direction: row;
            align-items: flex-start;
        }
    }

    .timeline-main {
        flex: 1;
    }

    .item-title {
        font-size: 1.25rem;
        font-weight: 700;
        font-family: var(--font-primary);
        color: var(--text-primary);
        letter-spacing: -0.025em;
        line-height: 1.3;
        margin-bottom: 0.5rem;
    }

    .item-org {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-muted);
        font-weight: 400;
    }

    .timeline-meta {
        flex-shrink: 0;
    }

    .item-year {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        background-color: var(--bg-surface);
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--border-color);
        display: inline-block;
    }

    .timeline-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .item-subtitle {
        font-family: var(--font-primary);
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--text-muted);
        margin-bottom: 0.5rem;
    }

    .item-description {
        font-family: var(--font-primary);
        color: var(--text-primary);
        opacity: 0.8;
        line-height: 1.6;
        max-width: 42rem;
        font-size: 0.9375rem;
        font-weight: 400;
    }
</style>
