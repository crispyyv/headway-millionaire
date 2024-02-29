import { ReactNode } from "react";
import { Inter } from "next/font/google";

import BaseLayout from "@/app/layout/base-layout";
import { GameProvider, loadGameConfig } from "@/entities/game";

import "./globals.css";

require("@/app/mock");

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const questions = await loadGameConfig();

  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider questions={questions} currentQuestion={questions[0]}>
          <BaseLayout>{children}</BaseLayout>
        </GameProvider>
      </body>
    </html>
  );
}
