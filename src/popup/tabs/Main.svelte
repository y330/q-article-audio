<script>
  // components
  import AudioBar from "./../components/AudioBar.svelte";
  // variables
  export let currentUrl;
  class GetContent {
    /*  async function getContent(url) {
          return extractor(url);
        } */
    /*  getContent(tabs[0].url).then(function (value) {
          insertContent(value);
        }); */
  }
</script>

<!---------------------------------------------------------->
<AudioBar />

<span>Right now, browsing {currentUrl}!</span>

<!---------------------------------------------------------->
<style>
  /* your styles go here */
</style>
