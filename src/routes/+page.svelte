<script lang="ts">
    import HomePage1 from "$lib/components/home/HomePage1.svelte";
    import HomePage2 from "$lib/components/home/HomePage2.svelte";
    import HomePage3 from "$lib/components/home/HomePage3.svelte";

    export let data;
</script>

<div class="fps-container bg text-neutral-content">
    <HomePage1 />

    <HomePage2 />

    <HomePage3 err={data.err} repos={data.repos} totalStars={data.totalStars} />
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
