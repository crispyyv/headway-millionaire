import { Answer } from "@/shared/types";
import clsx from "clsx";
import { KeyboardEvent, PropsWithChildren } from "react";

import Curve from "./curve";

import optionStyles from "./option.module.css";

type OptionProps = PropsWithChildren<{
  size: "sm" | "lg";
  "data-active"?: boolean;
  "data-disabled"?: boolean;
  className?: string;
  onClick?: () => void;
}>;

export default function Option({
  size,
  children,
  className,
  onClick,
  ...dataAttributes
}: OptionProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onClick?.();
    }
  };

  return (
    <div
      className={clsx(optionStyles.option, optionStyles[size], className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dataAttributes}
    >
      <span
        className={optionStyles.curveContainer}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <Curve className={optionStyles.curve} size={size} />
        <div className={optionStyles.optionItem}>{children}</div>
      </span>
    </div>
  );
}
