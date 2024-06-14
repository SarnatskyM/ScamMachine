<script lang="ts">
  import Coin from "$lib/components/Coin.svelte";
  import ScoreInfo from "$lib/components/ScoreInfo.svelte";
  import { onMount, onDestroy } from "svelte";
  import {
    incrementCoins,
    buyUpgrade,
    saveGameState,
    initializeGameState,
  } from "$lib/store/store";
  import Upgrade from "$lib/components/Upgrade.svelte";

  onMount(() => {
    initializeGameState();

    window.addEventListener("beforeunload", saveGameState);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("beforeunload", saveGameState);
    }
  });
</script>

<div class="wrapper">
  <h1 class="title">Welcome to the Scum Game!</h1>
  <ScoreInfo />
  <Coin on:click={incrementCoins} />
  <Upgrade on:click={buyUpgrade} />
</div>
