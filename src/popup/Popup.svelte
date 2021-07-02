<script>
  // components
  import {
    MaterialApp,
    Window,
    WindowItem,
    Tooltip,
    Footer,
    Tabs,
    Tab,
    AppBar,
    Button,
  } from "svelte-materialify";
  import AudioBar from "./components/AudioBar.svelte";
  import TopHeader from "./components/TopHeader.svelte";

  // tabs
  import Recents from "./tabs/Recents.svelte";
  import Options from "./tabs/Options.svelte";
  import Home from "./tabs/Home.svelte";

  // stores
  import { isPlaying } from "../scripts/store";

  // variables exports
  export let url = "Oops! I was unable to access current tab's URL";
  export let items = [
    {
      title: "Natural Language Classifier",
      snippet:
        "Natural Language Classifier uses advanced natural language processing and machine learning techniques to create custom classification models. Users train their data and the service predicts the appropriate category for the inputted text.",
    },
    {
      title: "Natural Language Understanding",
      snippet:
        "Analyze text to extract meta-data from content such as concepts, entities, emotion, relations, sentiment and more.",
    },
    {
      title: "Language Translator",
      snippet:
        "Translate text, documents, and websites from one language to another. Create industry or region-specific translations via the service's customization capability.",
    },
    {
      title: "the Translator",
      snippet:
        "Translate text, documents, and websites from one language to another. Create excellent service customization capabilities.",
    },
    {
      title: "my Translator",
      snippet:
        "Translate text, documents, and websites from one language to another. Create industry translations via the service's customization capability.",
    },
  ];
  // variables
  const tabs = ["Home", "Recents", "Options"];
  let theme = "dark";
  let value = 0;
</script>

<MaterialApp {theme}>
  <TopHeader>
    <Window {value} class="ma-4">
      {#each tabs as tab}
        <WindowItem>
          <div class="flex-column">
            {#if tab == "Recents"}
              <Recents history={items} />
            {:else if tab == "Options"}
              <Options />
            {:else}
              <Home currentUrl={url} />
            {/if}
          </div>
        </WindowItem>
      {/each}
    </Window>

    <div style="height: fit-content;position:relative;">
      <Footer class="justify-center pa-2">
        {#if $isPlaying}
          <Tooltip top>
            <AudioBar bind:$isPlaying />

            <span slot="tip">Click to play current page</span>
          </Tooltip>
        {:else}
          <span>Nothing Playing</span>
        {/if}
      </Footer>
    </div>
    <!---Tab-bar-->
    <AppBar>
      <div slot="extension">
        <Tabs class="orange-text" bind:value showArrows="false" centered="true">
          <div slot="tabs">
            {#each tabs as tabTitle}
              <Tab>{tabTitle}</Tab>
            {/each}
          </div>
        </Tabs>
      </div>
    </AppBar>
  </TopHeader>
</MaterialApp>

<style>
</style>
