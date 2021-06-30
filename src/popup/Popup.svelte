<script>
  // components
  import {
    MaterialApp,
    AppBar,
    Tab,
    Tabs,
    Window,
    WindowItem,
    Button,
  } from "svelte-materialify";
  // tabs
  import Recents from "./tabs/Recents.svelte";
  import Options from "./tabs/Options.svelte";
  import Main from "./tabs/Main.svelte";

  // stores
  /*   import { theme } from "../../scripts/store";
   */
  /*~~~~~~~~~~~~~~~~*/
  // variabloes
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
  const tabs = ["Main", "Recents", "Options"];
  let theme = "dark";
  let value = 0;
</script>

<MaterialApp {theme}>
  <AppBar>
    <span slot="title"> Title </span>
    <div slot="extension">
      <Tabs class="green-text" bind:value showArrows="false" centered="true">
        <div slot="tabs">
          {#each tabs as tabTitle}
            <Tab>{tabTitle}</Tab>
          {/each}
        </div>
      </Tabs>
    </div>
  </AppBar>
  <Window {value} class="ma-4">
    {#each tabs as tab}
      <WindowItem>
        <h4>{tab}</h4>

        <div class="flex-column">
          {#if tab == "Recents"}
            <Recents history={items} />
          {:else if tab == "Options"}
            <Options />
          {:else}
            <Main currentUrl={url} />
          {/if}
        </div>
      </WindowItem>
    {/each}
  </Window>
</MaterialApp>

<style>
  :global(body) {
    width: 400px;
    height: 600px;
    padding-inline: 10px;
  }
</style>
