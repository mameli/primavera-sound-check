<script>
	import Bands from '$lib/Bands.svelte';
	import days from '../../data/privaveraBands.json';
	let filterName = '';
</script>

<svelte:head>
	<title>Primavera sound check</title>
</svelte:head>

Filter: <input type="text" bind:value={filterName} class="w-full rounded-md text-lg p-1 border-2 border-gray-200"/>


{#each days as day}
	<Bands bands={day.bands} {filterName} {day}/>
{/each}