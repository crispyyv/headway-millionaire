import { ReactNode } from "react";

import { GameStatus } from "@/widgets/game-status";

type GameLayoutProps = {
  children: ReactNode;
};

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <>
      {children}
      <GameStatus />
    </>
  );
}
