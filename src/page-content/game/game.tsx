"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";

import { useGameContext } from "@/entities/game";
import { Answer } from "@/shared/types";
import { Option } from "@/shared/ui/option";
import postpone from "@/shared/lib/postpone";

import css from "./game.module.css";

function getAttribute(answer: Answer, id: number | null) {
  if (!id) return undefined;

  if (id === answer.id) {
    return answer.correct;
  }
  return answer.correct || undefined;
}

export default function GamePage() {
  const question = useGameContext((select) => select.currentQuestion);
  const verifyAnswer = useGameContext((select) => select.verifyAnswer);
  const gameStatus = useGameContext((select) => select.status);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (gameStatus !== "progress") {
      router.push("/result");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  if (!question) return null;

  const handleVerifyAnswer = (answer: Answer) => {
    verifyAnswer(answer);
    setSelectedAnswerId(answer.id);

    postpone(() => {
      setSelectedAnswerId(null);
    }, 990);
  };

  const handleOnClick = (answer: Answer) => () => {
    handleVerifyAnswer(answer);
  };

  const handleKeyDown =
    (answer: Answer) => (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        handleVerifyAnswer(answer);
      }
    };

  return (
    <div className={css.gameContainer}>
      <h1 className={css.questionTitle}>{question.question}</h1>

      <div className={css.answersContainer}>
        {question.answers.map((answer) => (
          <div
            key={answer.id}
            role="button"
            tabIndex={0}
            className={css.answerItem}
            onClick={handleOnClick(answer)}
            onKeyDown={handleKeyDown(answer)}
          >
            <Option
              size="lg"
              data-active={selectedAnswerId === answer.id}
              data-correct={getAttribute(answer, selectedAnswerId)}
            >
              {answer.answer}
            </Option>
          </div>
        ))}
      </div>
    </div>
  );
}
