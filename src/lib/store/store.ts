import { writable, get } from "svelte/store";

interface GameState {
  userId: string;
  coins: number;
  clickValue: number;
  upgradeCost: number;
}

const defaultGameState: GameState = {
  userId: "",
  coins: 0,
  clickValue: 1,
  upgradeCost: 10,
};

const startGame = writable<GameState>(defaultGameState);

export async function initializeGameState(userId: string | null) {
  if (userId == null) {
    return;
  }
  try {
    const response = await fetch(
      `http://89.19.212.83:5000/api/gameState?userId=${userId}`
    );
    if (response.ok) {
      const savedState = await response.json();
      startGame.set({ ...savedState, userId });
    } else {
      startGame.set({ ...defaultGameState, userId });
    }
  } catch (error) {
    console.error("Failed to initialize game state:", error);
    startGame.set({ ...defaultGameState, userId });
  }
}

export async function saveGameState() {
  try {
    const gameState = get(startGame);
    await fetch(`http://89.19.212.83:5000/api/gameState`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameState),
    });
  } catch (error) {
    console.error("Failed to save game state:", error);
  }
}

export function incrementCoins() {
  startGame.update((state) => {
    const newCoins = state.coins + state.clickValue;
    return {
      ...state,
      coins: newCoins,
    };
  });
}

export function buyUpgrade() {
  startGame.update((state) => {
    if (state.coins >= state.upgradeCost) {
      const newState = {
        ...state,
        coins: state.coins - state.upgradeCost,
        clickValue: state.clickValue + 1,
        upgradeCost: Math.floor(state.upgradeCost * 1.5),
      };
      saveGameState();
      return newState;
    }
    return state;
  });
}

export { startGame };
