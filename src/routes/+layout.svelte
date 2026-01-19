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

<main class="main-container">
    <div class="bg-grid"></div>
    <div class="main-content">
        {@render children?.()}
    </div>
</main>

<Footer />

<style>
    .main-container {
        position: relative;
        flex: 1;
        width: 100%;
        min-height: 0;
        margin: 0;
        padding: 0;
    }
    
    .main-content {
        position: relative;
        z-index: 1;
    }
    
    .main-content > :global(*) {
        margin-top: 0;
    }
</style>