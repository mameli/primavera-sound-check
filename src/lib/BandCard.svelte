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
		width: 250px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		background-color: #f0efeb;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 0.5em 0;
		border-bottom: 2px solid rgba(3, 5, 94, 0.322);
	}
</style>
