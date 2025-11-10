<script lang="ts">
    import "$lib/styles/scrollbar.css";
    import "../app.css";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Fernando Nogueira</title>
</svelte:head>

{@render children?.()}
