<script>
    import { fade } from 'svelte/transition';
    import BandCard from '$lib/BandCard.svelte'

	export let day;
	export let bands;
	export let filterName;

	$: filteredBands = bands.filter((b) => b.name.toUpperCase().includes(filterName.toUpperCase()));
</script>

{#if filteredBands.length > 0}
	<p class="text-xl text-center my-8">{day.day} - {day.place}</p>
    <div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
        {#each filteredBands as band}
        <!-- <span transition:fade="{{delay: 0, duration: 300}}">{band.name}</span> -->
        <BandCard>
            <span slot="name">
                {band.name}
            </span>
            <span slot="time">
                {band.time}
            </span>
            <span slot="place">
                {band.place}
            </span>
            <span slot="img">
                <img src={band.img} alt="{band.name} img"/>
            </span>
            <span slot="url">
                <a href={band.url} >{band.name} page</a>
            </span>
        </BandCard>
    {/each}
    </div>
    
{/if}
