<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Fernando Nogueira</title>
</svelte:head>

<Header />

<main class="flex-1 w-full pb-16">
    {@render children?.()}
</main>

<Footer />