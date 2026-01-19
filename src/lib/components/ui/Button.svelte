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
  
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border text-sm font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-border-primary focus:ring-offset-2 cursor-pointer sharp-corners";
  
  const variants = {
    primary: "bg-text-primary text-background border-text-primary hover:bg-transparent hover:text-text-primary",
    outline: "bg-transparent text-text-primary border-border-primary hover:bg-border-primary hover:text-white",
    ghost: "bg-transparent text-text-primary border-transparent hover:bg-surface"
  };
</script>

{#if href}
  <a {href} {target} {rel} class="{baseClasses} {variants[variant]} {className}" aria-label={ariaLabel}>
    {@render children?.()}
  </a>
{:else}
  <button class="{baseClasses} {variants[variant]} {className}" {onclick} aria-label={ariaLabel}>
    {@render children?.()}
  </button>
{/if}

<style>
  .sharp-corners {
    border-radius: 0;
  }
</style>
