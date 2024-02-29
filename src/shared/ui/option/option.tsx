import clsx from "clsx";
import { PropsWithChildren } from "react";

import Curve from "./curve";

import optionStyles from "./option.module.css";

type OptionProps = PropsWithChildren<{
  size: "sm" | "lg";
  "data-active"?: boolean;
  "data-passed"?: boolean;
  className?: string;
}>;

export default function Option({
  size,
  children,
  className,
  ...dataAttributes
}: OptionProps) {
  return (
    <div
      className={clsx(optionStyles.option, optionStyles[size], className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dataAttributes}
    >
      <span className={optionStyles.curveContainer}>
        <Curve className={optionStyles.curve} size={size} />
        <div className={optionStyles.optionItem}>{children}</div>
      </span>
    </div>
  );
}
