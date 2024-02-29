"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createGameStore, GameStore } from "../model";
import { Question, GameSlice } from "../types";

type GameProviderProps = PropsWithChildren<{
  questions?: Question[];
  currentQuestion?: Question;
}>;

export const GameContext = createContext<GameStore | null>(null);

export function GameProvider({ children, ...props }: GameProviderProps) {
  const storeRef = useRef<GameStore>();
  if (!storeRef.current) {
    storeRef.current = createGameStore(props);
  }
  return (
    <GameContext.Provider value={storeRef.current}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext<T>(selector: (state: GameSlice) => T): T {
  const store = useContext(GameContext);
  if (!store) throw new Error("Missing GameContext.Provider in the tree");
  return useStore(store, selector);
}
