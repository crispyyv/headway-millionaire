import postpone from "@/shared/lib/postpone";
import { Answer } from "@/shared/types";
import { createStore } from "zustand";
import { GameSlice, GameState } from "./types";

export const createGameStore = (initProps: Partial<GameState>) =>
  createStore<GameSlice>()((set, get) => ({
    questions: [],
    sum: 0,
    status: "progress",
    currentQuestion: null,

    ...initProps,
    allGains: () => {
      const { questions } = get();
      if (!questions) return [];

      return questions
        ?.map((q) => q.sum)
        .sort((firstSum, nextSum) => nextSum - firstSum);
    },
    verifyAnswer: (answer: Answer) => {
      if (!answer.correct) {
        postpone(() => set({ status: "fail" }));
        return false;
      }

      const currentQuestion = get().currentQuestion as NonNullable<
        GameState["currentQuestion"]
      >;
      const idx = get().questions.findIndex((q) => q.id === currentQuestion.id);

      const nextQuestion = get().questions[idx + 1];

      if (nextQuestion) {
        postpone(() =>
          set({ currentQuestion: nextQuestion, sum: currentQuestion.sum }),
        );

        return true;
      }

      postpone(() => set({ status: "win", sum: currentQuestion.sum }));

      return true;
    },
    restart: () => {
      set({ status: "progress", sum: 0, currentQuestion: get().questions[0] });
    },
  }));

export type GameStore = ReturnType<typeof createGameStore>;
