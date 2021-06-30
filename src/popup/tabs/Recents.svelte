<script>
  import {
    List,

    ExpansionPanel,
    ExpansionPanels,
    Button,
  } from "svelte-materialify";

  /*--------*/
  export let history = [
    {
      title: "String",
      snippet: "Longer string",
    },
  ];
  let value = [2];

  function toggle(n) {
    if (value.includes(n)) {
      value.splice(value.indexOf(n), 1);
    } else {
      value.push(n);
    }
    value = value;
  }
</script>

<div class="text-center">
  <Button on:click={() => toggle(0)}>Toggle Index 0</Button>
  <Button on:click={() => toggle(1)}>Toggle Index 1</Button>
  <Button on:click={() => toggle(2)}>Toggle Index 2</Button>
</div>

<div class="d-flex justify-center">
  <List class="elevation-2 scrollable" style="width:300px">
    <ExpansionPanels multiple bind:value>
      {#each history as item}
        <ExpansionPanel>
          <span slot="header">{item.title}</span>
          {item.snippet}
        </ExpansionPanel>
      {/each}
    </ExpansionPanels>
  </List>
</div>

<style>
</style>
