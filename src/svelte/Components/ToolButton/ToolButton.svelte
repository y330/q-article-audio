<script>
  import { Button, Card, Label } from "sveltestrap";
  import { PlayIcon, LoaderIcon } from "svelte-feather-icons";

  let loading = false;
  let playColor = "dark";
  /*--------------*/
  const speakArticle = (text) => {
    chrome.tts.speak(text);
  };
  const initializeTts = (article) =>
    setTimeout(function () {
      playColor = "success";
      speakArticle(article);
    }, 2000);
</script>

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
    <Label small>Loading... please wait...</Label>
  {:else}
    <PlayIcon size="1.5x" /> Press to Generate QR code
  {/if}
</Button>

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
