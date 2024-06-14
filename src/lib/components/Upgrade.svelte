<script lang="ts">
  import { startGame } from "$lib/store/store";
</script>

<div class="upgrade">
  <button
    class="upgrade-button"
    on:click
    disabled={$startGame.coins < $startGame.upgradeCost}
  >
    Upgrade (Cost: {$startGame.upgradeCost})
  </button>

  <button class="upgrade-button" on:click disabled={true}> Withdraw </button>
</div>

<style>
  .upgrade {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upgrade-button {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    background-color: #27ae60;
    border: none;
    border-radius: 10px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    transition:
      background-color 0.2s,
      transform 0.2s;
  }

  .upgrade-button:hover {
    background-color: #2ecc71;
  }

  .upgrade-button:active {
    transform: scale(0.95);
  }

  .upgrade-button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }

  .upgrade-button::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5);
    transition: opacity 0.6s ease-out;
  }

  .upgrade-button:hover::after {
    opacity: 1;
  }
</style>
