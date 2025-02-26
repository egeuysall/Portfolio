import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Lato, Poppins } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <main
      className={`${poppins.className} flex flex-col items-center justify-center min-h-screen bg-background text-text dark:bg-darkBackground dark:text-darkText`}
    >
      <header>
        <h1 className={`${lato.className} text-h1 text-text dark:text-darkText`}>
          Ege Uysal Portfolio
        </h1>
        <p className="text-p text-mutedText dark:text-darkMutedText">
          Photographer, Developer, Creator
        </p>
      </header>

      <hr className="w-2/3 border-t-2 border-divider dark:border-darkDivider" />

      <article className="max-w-lg text-center">
        <p className="text-p mb-4">Welcome to my portfolio! Here you can explore my work in photography, web development, and digital design. Stay tuned for more updates soon.</p>

        <Analytics />
        <SpeedInsights />
      </article>
    </main>
  );
}