<script>
  // components
  import { Switch } from "svelte-materialify";
  /*-----------------------------------------*/
  let values = [true, false];
  let theme = function (state) {
    if (state) return "dark";
    else return "light";
  };
</script>

<secion class="tabpane__">
  <!------------------------------------------>
  <h3>Q - Article Audio</h3>
  <h5>Yonah Aviv</h5>

  <Switch bind:checked={values[0]} inset>Set {theme(values[0])} Theme</Switch>

  <!-- logo -->
  <img src="/icons/animated-logo-dark.svg" alt="Q-article audio" />
  <p>
    <em>Copyright © 2021 Yonah Aviv</em>
  </p>
  <!------------------------------------------>
</secion>

<style>
  :root {
    margin: auto;
    width: min-content;
    height: 300px
  }
</style>
