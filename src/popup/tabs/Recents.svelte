<script>
  // components
  import {
    List,
    ExpansionPanel,
    ExpansionPanels,
    Button,
    Tooltip,
  } from "svelte-materialify";
  import { Volume2 } from "svelte-feather";
  /*--------*/
  /*
   * @description: what the history list item will look like
   */
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
  let isPlaying = false;
</script>

<section class="tabpane__">
  <!----------------------------------------------------->

  <div class="text-center">
    <Button on:click={() => toggle(0)}>1</Button>
    <Button on:click={() => toggle(1)}>2</Button>
    <Button on:click={() => toggle(2)}>3</Button>
  </div>

  <div class="d-flex justify-center">
    <List class="elevation-2 scrollable">
      <ExpansionPanels bind:value>
        {#each history as item}
          <ExpansionPanel>
            <span slot="header">{item.title} </span>
            <Button>
              <Volume2
                color="red"
                size="1em"
                on:click={() => {
                  isPlaying = !isPlaying;
                }}
              />
            </Button>
            {item.snippet}
          </ExpansionPanel>
        {/each}
      </ExpansionPanels>
    </List>
  </div>
  <!---------------------------------------------------->
</section>

<style>
  section.tabpane__ {
    max-height: 20em;
    padding-right: 0;
    overflow-y: scroll;
    width: min-content;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
  }
</style>
