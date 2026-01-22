<script lang="ts">
  interface Props {
    href?: string;
    target?: string;
    rel?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    class?: string;
    children?: import('svelte').Snippet;
    onclick?: (event: MouseEvent) => void;
    'aria-label'?: string;
  }
  let { href, target, rel, variant = 'primary', class: className = '', children, onclick, 'aria-label': ariaLabel }: Props = $props();
</script>

{#if href}
  <a {href} {target} {rel} class="btn btn--{variant} {className}" aria-label={ariaLabel}>
    {@render children?.()}
  </a>
{:else}
  <button class="btn btn--{variant} {className}" {onclick} aria-label={ariaLabel}>
    {@render children?.()}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem; /* px-6 py-3 */
    border: 1px solid transparent;
    font-size: 0.875rem; /* text-sm */
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em; /* tracking-wider */
    transition: all 0.2s ease;
    cursor: pointer;
    border-radius: 0;
    line-height: 1.25;
    background: none;
    color: inherit;
    text-decoration: none;
  }

  .btn:focus {
    outline: none;
    background-color: var(--bg-surface-hover);
  }

  /* Variants */
  .btn--primary {
    background-color: var(--text-primary);
    color: var(--bg-surface);
    border-color: var(--text-primary);
  }
  .btn--primary:hover {
    background-color: transparent;
    color: var(--text-primary);
  }

  .btn--outline {
    background-color: transparent;
    color: var(--text-primary);
    border-color: var(--border-color);
  }
  .btn--outline:hover {
    background-color: var(--border-color);
    color: var(--bg-surface);
  }

  .btn--ghost {
    background-color: transparent;
    color: var(--text-primary);
    border-color: transparent;
  }
  .btn--ghost:hover {
    background-color: var(--bg-surface-hover);
  }
</style>