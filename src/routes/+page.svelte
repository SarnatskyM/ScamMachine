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
  
    import { page } from "$app/stores";
  
    let userId: string | null = null;
    let saveInterval: NodeJS.Timeout;

    onMount(() => {
      userId = $page.url.searchParams.get("userId");
  
      if (userId) {
        initializeGameState(userId);
      }
  
      saveInterval = setInterval(saveGameState, 5000);
  
    });
  
    onDestroy(() => {
      clearInterval(saveInterval);
      saveGameState();
    });
  </script>
  
  <div class="wrapper">
    <h1 class="title">Welcome to the Scum Game!</h1>
    <ScoreInfo />
    <Coin on:click={incrementCoins} />
    <Upgrade on:click={buyUpgrade} />
  </div>
  