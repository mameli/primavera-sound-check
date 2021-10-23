<article class="band-card">
	<h2>
		<slot name="name" />
	</h2>

	<div class="time">
		<slot name="time" />
	</div>

	<div class="place">
		<slot name="place" />
	</div>
	<div class="img">
		<slot name="img" />
	</div>
	<div class="url">
		<slot name="url" />
	</div>
</article>

<style>
	.band-card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 2px solid gray;
	}
</style>
