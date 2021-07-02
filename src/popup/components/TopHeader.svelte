<script>
  import {
    AppBar,
    Button,
    NavigationDrawer,
    Overlay,
    List,
    ListItem,
  } from "svelte-materialify";
  import { Search, Menu, Tag, Archive, ZoomIn } from "svelte-feather";

  let active = false;

  function close() {
    active = false;
  }
  function open() {
    active = true;
  }
</script>

<section>
  <!-------------------------------------------------------------->
  <AppBar>
    <div slot="icon">
      <Button fab depressed on:click={open}>
        <Menu />
      </Button>
    </div>
    <span slot="title">Title</span>
    <div style="flex-grow:1" />
    <Button class="pink white-text" on:click={open}>Toggle</Button>
    <Button fab depressed>
      <Search />
    </Button>
  </AppBar>
  <!-------------------------------------------------------------->

  <slot />
  <NavigationDrawer absolute {active} z-index="9">
    <List>
      <ListItem>
        <span slot="prepend">
          <Tag />
        </span>
        Labels
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Archive />
        </span>
        Archive
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <ZoomIn />
        </span>
        Macro Mode
      </ListItem>
    </List>
  </NavigationDrawer>
  <Overlay index={1} {active} on:click={close} absolute />
</section>
