<script>
  import { TabContent, TabPane } from "sveltestrap";
  import { VolumeIcon } from "svelte-feather-icons";
  import ToolButton from "../Components/ToolButton/ToolButton.svelte";
  import Recents from "./Recents/Recents.svelte";

  const AppPages = {
    listen: "Listen",
    history: "History",
    info: "Info",
  };
  let selectedTab = AppPages.listen;
</script>

<h1>Q-Article Audio</h1>
<TabContent pills on:tab={(e) => (selectedTab = e.detail)}>
  <TabPane tabId="listen" tab="Listen" active>
    <h2>Listen</h2>
    <VolumeIcon size="2em" class="orange" />
    <ToolButton />
  </TabPane>
  <TabPane tabId="recents" tab="Recents">
    <h2>Recents</h2>
    <Recents />
  </TabPane>
  <TabPane tabId="info" tab="Info">
    <img src="../../assets/animated-logo-dark.svg" alt="Q-Article Audio Logo" />
    <h2>Info</h2>
    <span>Copyright © 2021 Yonah Aviv</span>
  </TabPane>
</TabContent>
<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/united/bootstrap.min.css"
    integrity="undefined"
    crossorigin="anonymous"
  />
</svelte:head>

<style>
  :global(.red) {
    color: red;
  }
  :global(.orange) {
    color: orange;
  }
  :root {
    height: 400px;
    width: 250px;
    padding-inline: 0.25em;
  }
</style>
