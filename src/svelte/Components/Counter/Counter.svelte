<script>
  let count = 0;
  const increment = () => (count += 1);
  const decrement = () => (count -= 1);
</script>

<main>
  <p data-testid="counter-value" class="text-xl text-center">{count}</p>
  <div class="flex text-xl text-white">
    <button type="primary" on:click={decrement}>-</button>
    <button type="primary" on:click={increment}>+</button>
  </div>
</main>
