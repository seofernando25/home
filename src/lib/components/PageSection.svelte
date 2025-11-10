<script lang="ts">
    interface Props {
        id?: string;
        children?: import('svelte').Snippet;
    }

    let { id, children }: Props = $props();
</script>

<section class="page-section" {id}>
    {@render children?.()}
</section>

<style>

    .page-section {
        min-height: 100vh;
        height: 100vh;
        height: 100dvh;
    }
</style>

