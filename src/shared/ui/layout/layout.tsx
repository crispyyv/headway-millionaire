import { ReactNode } from "react";
import css from "./layout.module.css";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={css.root}>
      <main className={css.main}>{children}</main>
    </div>
  );
}
