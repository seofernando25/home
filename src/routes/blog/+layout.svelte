<script lang="ts">
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    
    $: data = $page.data as PageData;
    $: ogTitle = data?.title || 'Fernando Nogueira';
    $: ogDescription = data?.excerpt || '';
    $: ogImage = data?.ogImage || 'https://www.seofernando.com/favicon.webp';
    $: ogUrl = data?.ogUrl || 'https://www.seofernando.com';
    $: siteName = data?.siteName || 'Fernando Nogueira';
    $: title = data?.title || '';
    $: date = data?.date || '';
</script>

<svelte:head>
    <title>{ogTitle} | Fernando Nogueira</title>
    <meta name="description" content={ogDescription} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content={siteName} />
    {#if ogDescription}
        <meta property="og:description" content={ogDescription} />
    {/if}
    <link rel="canonical" href={ogUrl} />
</svelte:head>

{#if title}
    <article class="blog-post">
        <a href="/blog" class="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Blog
        </a>
        <header>
            {#if date}
                <span class="meta">Published: {date}</span>
            {/if}
            <h1>{title}</h1>
        </header>
        <div class="post-content">
            <slot />
        </div>
    </article>
{:else}
    <slot />
{/if}
