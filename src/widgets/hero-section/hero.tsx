import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/shared/ui/button";

import css from "./hero.module.css";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  button?: ReactNode;
  onClick?: () => void;
  linkTo?: string;
};

export default function HeroSection({
  title,
  subtitle,
  onClick,
  button,
  linkTo = "/game",
}: Props) {
  const handleOnClick = () => {
    onClick?.();
  };

  return (
    <div className={css.root}>
      <div className={css.heroImage}>
        <Image src="/hand.webp" alt="hand" fill />
      </div>

      <div className={css.hero}>
        <div>
          {subtitle && <h2 className={css.heroSubtitle}>{subtitle}</h2>}

          <h1 className={css.heroTitle}>{title}</h1>
        </div>
        <Link
          href={linkTo}
          prefetch={false}
          className={css.heroButton}
          onClick={handleOnClick}
        >
          <Button>{button}</Button>
        </Link>
      </div>
    </div>
  );
}
