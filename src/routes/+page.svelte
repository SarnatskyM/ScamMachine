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
    import ModalShop from "$lib/components/ModalShop.svelte";
    import Notify from "$lib/components/Notify.svelte";
  
    let userId: string | null = null;
    let saveInterval: NodeJS.Timeout;

    let isVisible = false;

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
    <Notify/>
    <h1 class="title">Welcome to the Scum Game!</h1>
    <ScoreInfo />
    <Coin on:click={incrementCoins} />
    <Upgrade 
      bind:isVisible={isVisible}
      on:click={buyUpgrade} />
    <ModalShop bind:isVisible={isVisible} />
  </div>
  