import clsx from "clsx";
import { MouseEventHandler, PropsWithChildren } from "react";

import buttonStyles from "./button.module.css";

type ButtonProps = Readonly<
  PropsWithChildren<{
    variant?: "button";
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }>
>;

export default function Button({
  variant = "button",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonStyles.button, buttonStyles[variant])}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
