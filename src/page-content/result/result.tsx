"use client";

import { useGameContext } from "@/entities/game";
import { HeroSection } from "@/widgets/hero-section";

import formatNumber from "@/shared/lib/format-number";

export default function ResultPage() {
  const result = useGameContext((select) => select.sum);
  const restart = useGameContext((select) => select.restart);

  const handleRestart = () => {
    restart();
  };

  return (
    <HeroSection
      title={<>{formatNumber(result)} earned</>}
      subtitle="Total score:"
      button="Try again"
      onClick={handleRestart}
    />
  );
}
