<script>
	import Bands from '$lib/Bands.svelte';
	import days from '../../data/privaveraBands.json';
	let filterName = '';
</script>

<svelte:head>
	<title>Primavera sound check</title>
</svelte:head>

<h3 class="w-full text-xl text-center p-1">Band Name:</h3>
 <input type="text" bind:value={filterName} class="w-full rounded-md text-lg p-1 border-2 border-gray-200"/>

{#each days as day}
	<Bands bands={day.bands} {filterName} {day}/>
{/each}