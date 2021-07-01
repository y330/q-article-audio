<script>
  import { Player, Audio, DefaultUi } from "@vime/svelte";
</script>

<svelte:head>
  <!-- Default theme. ~960B -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
  />
</svelte:head>

<h5 id="url">This is still a work in progress! expect to experience many bugs and glitches</h5>
<Player theme="dark" style="--vm-player-theme: #e95420;">
  <Audio>
    <source data-src="https://media.vimejs.com/audio.mp3" type="video/mp4" />
  </Audio>

  <DefaultUi />
</Player>

<style>
</style>
