<script lang="ts">
    interface Props {
        title: string;
        year: string;
        description: string;
        conclusion?: string;
        note?: string;
        repo?: string;
        paper?: string;
        reportTitle?: string;
    }

    let { title, year, description, conclusion, note, repo, paper, reportTitle }: Props = $props();
</script>

<div class="research-card">
    <div class="research-header">
        <div class="research-meta">
            <span class="research-year">{year}</span>
            {#if repo}
                <a href={repo} target="_blank" rel="noopener noreferrer" class="research-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Repository
                </a>
            {/if}
            {#if paper}
                <a href={paper} target="_blank" rel="noopener noreferrer" class="research-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Paper
                </a>
            {/if}
        </div>
        <h3 class="research-title">{title}</h3>
        {#if reportTitle}
            <p class="research-report-title">{reportTitle}</p>
        {/if}
    </div>

    <div class="research-content">
        <p class="research-description">{description}</p>

        {#if conclusion}
            <div class="research-conclusion">
                <strong>Conclusion:</strong> {conclusion}
            </div>
        {/if}

        {#if note}
            <div class="research-note">
                <strong>Note:</strong> {note}
            </div>
        {/if}
    </div>
</div>

<style>
    .research-card {
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        padding: 2rem;
        transition: all 0.2s ease;
    }

    .research-card:hover {
        border-color: var(--text-primary);
    }

    .research-header {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }

    .research-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .research-year {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .research-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        text-decoration: none;
        transition: color 0.2s;
    }

    .research-link:hover {
        color: var(--text-primary);
    }

    .research-title {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--text-primary);
        line-height: 1.3;
    }

    .research-report-title {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-top: 0.5rem;
        font-style: italic;
    }

    .research-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .research-description {
        font-size: 0.9375rem;
        color: var(--text-primary);
        line-height: 1.6;
    }

    .research-conclusion,
    .research-note {
        font-size: 0.875rem;
        color: var(--text-muted);
        line-height: 1.6;
        padding: 1rem;
        background-color: var(--bg-primary);
        border-left: 2px solid var(--border-color);
    }

    .research-note {
        border-left-color: var(--text-muted);
    }

    .research-conclusion strong,
    .research-note strong {
        color: var(--text-primary);
        font-weight: 500;
    }
</style>
