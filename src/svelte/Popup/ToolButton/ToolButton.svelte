<script>
	import { PlayIcon, LoaderIcon } from "svelte-feather-icons"
	import Button, { Group, Label } from '@smui/button';
	let clicked = 0
	let loading = false
	let playColor = "dark"
	/*--------------*/
	const speakArticle = (text) => {
		chrome.tts.speak(text)
	}
	const initializeTts = (article) =>
		setTimeout(function () {
			playColor = "success"
			speakArticle(article)
		}, 2000)
</script>

<!-- <MaterialApp>
	<Button
		outline
		color={playColor}
		on:click={() => (
			(loading = !loading),
			initializeTts(`The word of this sentence was emphasized.Not!`)
		)}
	>
		{#if loading === true}
			<div class="spin">
				<LoaderIcon size="2x" />
			</div>
			<div class="text-overline">Loading... please wait...</div>
		{:else}
			<PlayIcon size="1.5x" /> Press to Generate QR code
		{/if}
	</Button>
</MaterialApp>
 -->
 <Group variant="outlined">
	<Button on:click={() => clicked++} variant="outlined">
	  <Label>One</Label>
	</Button>
	<Button on:click={() => clicked++} variant="outlined">
	  <Label>Two</Label>
	</Button>
	<Button on:click={() => clicked++} variant="outlined">
	  <Label>Three</Label>
	</Button>
  </Group>
  <pre class="status">Clicked: {clicked}</pre>

<style>
	:global(.spin) {
		animation-name: spin;
		animation-duration: 5000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
