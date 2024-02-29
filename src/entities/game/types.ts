import { Answer } from "@/shared/types";

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
  sum: number;
};

export type GameState = {
  questions: Question[];
  status: "progress" | "win" | "fail";
  sum: number;
  currentQuestion: Question | null;
  // getter
  allGains: () => number[];
};

export type GameActions = {
  verifyAnswer: (answer: Answer) => boolean;
  restart: () => void;
};

export type GameSlice = GameState & GameActions;
