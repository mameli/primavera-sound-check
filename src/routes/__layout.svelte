<script>
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Created with love by <a href="https://github.com/mameli/">mameli</a></p>
</footer>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	:global(body) {
		background-color: #dfe7fd;
		color: #1d3557;
		transition: background-color 0.3s
	}

</style>
