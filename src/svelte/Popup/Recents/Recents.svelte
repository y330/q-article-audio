<script>
	import { TrashIcon, Volume1Icon } from "svelte-feather-icons"
	/*--------*/
	let history = [
		{
			title: "Lorem",
			snippet: "Culpa cillum do officia ut ullamco velit veniam.",
		},
		{
			title: "Ipsum",
			snippet:
				"Sit ex sint deserunt aliquip do ut eiusmod dolor labore aliquip.",
		},
		{ title: "Delorem", snippet: "Eu cupidatat fugiat mollit." },
	]
	const items = Array.from({ length: 50 }).map((_, i) => `item ${i}`)
	export let viewport
	export let contents
</script>

<div bind:this={viewport} class="viewport">
	<div bind:this={contents} class="contents">
		<ul class="viewport">
			{#each history as { title, snippet }, i}
				{#each items as item (item)}
					<!-- <ListGroupItem>
					<Row>
						<Col xs={{ size: "1", offset: 1 }}>
							<ButtonGroup>
								<Button size="sm" color="secondary" -->

					<li>
						{item}
						<Volume1Icon size="1x" class="light" />

						<!-- <Button size="sm" color="danger"> -->
						<TrashIcon size="1x" class="white" />
					</li>
				{/each}
			{/each}
		</ul>
	</div>
</div>

<style>
	.viewport {
		position: relative;
		width: 90vw;
		height: 80vh;
		margin: 0.5em;
		overflow-y: scroll;
		border: 2px solid #444857;
		box-sizing: border-box;

		/* hide scrollbar */
		/* -ms-overflow-style: none; */
		/* scrollbar-width: 8px; */
	}
	.viewport::-webkit-scrollbar {
		width: 7px;
	}
	.viewport::-webkit-scrollbar-button {
		background-color: #444857;
		height: 0.5em;
	}
	.viewport::-webkit-scrollbar-corner {
		background-color: #aaa;
	}
	.viewport::-webkit-scrollbar-thumb {
		background-color: #aaa;
		opacity: 1;
		transition: background-color 300ms
			cubic-bezier(0.785, 0.135, 0.15, 0.86);

		border-radius: 10px;
	}

	.viewport::-webkit-scrollbar-thumb:hover {
		background-color: #999;
	}

	.viewport::-webkit-scrollbar-thumb:active {
		background-color: #7e7e7e;
	}
</style>
