<script lang="ts">
    import HomePage1 from "$lib/components/home/HomePage1.svelte";

    let { data } = $props();

    // Lazy load components asynchronously after initial render
    let HomePage2 = $state<typeof import("$lib/components/home/HomePage2.svelte").default>();
    let History = $state<typeof import("$lib/components/home/History.svelte").default>();

    // Load components asynchronously after initial render
    $effect(() => {
        // Load HomePage2
        import("$lib/components/home/HomePage2.svelte").then(module => {
            HomePage2 = module.default;
        });

        // Load History
        import("$lib/components/home/History.svelte").then(module => {
            History = module.default;
        });
    });
</script>

<div class="fps-container bg text-neutral-content">
    <HomePage1 />
    <span id="the-good-stuff"></span>
    {#if HomePage2}
        <HomePage2 />
    {/if}
    {#if History}
        <History />
    {/if}
</div>

<style>
    /* Full page scroll */
    .fps-container {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100dvh;
    }

    .bg {
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2328303b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
</style>
