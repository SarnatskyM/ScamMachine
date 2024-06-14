import { writable } from "svelte/store";

interface GameState {
  coins: number;
  clickValue: number;
  upgradeCost: number;
}

const defaultGameState: GameState = {
  coins: 0,
  clickValue: 1,
  upgradeCost: 10,
};

const startGame = writable<GameState>(defaultGameState);

export function initializeGameState() {
  const savedState = localStorage.getItem("gameState");
  if (savedState) {
    startGame.set(JSON.parse(savedState));
  } else {
    startGame.set(defaultGameState);
  }
}

export function saveGameState() {
  startGame.subscribe((gameState) => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  });
}

export function incrementCoins() {
  startGame.update((state) => ({
    ...state,
    coins: state.coins + state.clickValue,
  }));
}

export function buyUpgrade() {
  startGame.update((state) => {
    if (state.coins >= state.upgradeCost) {
      return {
        ...state,
        coins: state.coins - state.upgradeCost,
        clickValue: state.clickValue + 1,
        upgradeCost: Math.floor(state.upgradeCost * 1.5),
      };
    }
    return state;
  });
}

export { startGame };
