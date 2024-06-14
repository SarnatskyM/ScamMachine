<script lang="ts">
  import { startGame } from "$lib/store/store";
</script>

<div class="score-container">
  <div class="score">{$startGame.coins}</div>
</div>

<style>
  .score-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .score {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
  }
</style>
