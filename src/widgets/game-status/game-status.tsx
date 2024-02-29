"use client";

import clsx from "clsx";
import { useState } from "react";

import Burger from "@/widgets/game-status/ui/burger";
import { useGameContext } from "@/entities/game";
import formatNumber from "@/shared/lib/format-number";
import { Option } from "@/shared/ui/option";

import css from "./game-status.module.css";

export default function GameStatus() {
  const gains = useGameContext((s) => s.allGains());
  const potentialGain = useGameContext((s) => s.currentQuestion?.sum || 0);
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <button
        aria-label="Open menu"
        className={clsx(css.burger)}
        onClick={handleToggle}
        type="button"
      >
        <Burger isOpen={opened} />
      </button>

      <aside
        className={clsx(css.sidebar, {
          [css.burgerOpened]: opened,
        })}
      >
        <dl className={css.gainList}>
          {gains.map((gain) => (
            <dt key={gain} className={css.gainItem}>
              <Option
                size="sm"
                data-active={gain === potentialGain}
                data-disabled={gain < potentialGain}
              >
                {formatNumber(gain)}
              </Option>
            </dt>
          ))}
        </dl>
      </aside>
    </>
  );
}
