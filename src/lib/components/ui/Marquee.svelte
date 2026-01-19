<script lang="ts">
    interface Props {
        items?: string[];
    }
    let { items = [] }: Props = $props();
</script>

<div class="marquee-section">
    <div class="marquee">
        <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
        <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
         <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
         <div class="marquee-set">
            {#each items as item}
                <span class="marquee-item">{item}</span>
            {/each}
        </div>
    </div>
</div>
