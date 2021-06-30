<script>
  // components
  import { Switch } from "svelte-materialify";

  /*   import { theme } from "../../../scripts/store";
  import { toggleTheme } from "../../../scripts/utilities";
 */
  let values = [true, false];
  let theme = function (state) {
    if (state) return "dark";
    else return "light";
  };
</script>

<!-- markup (zero or more items) goes here -->
<h3>Q - Article Audio</h3>
<h5>Yonah Aviv</h5>
<Switch bind:checked={values[0]} inset>Inset {theme(values[0])}</Switch>

<em>Copyright © 2021 Yonah Aviv</em>

<style>
  /* your styles go here */
</style>
