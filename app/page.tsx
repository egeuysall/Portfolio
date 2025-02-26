import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Lato, Poppins } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground dark:bg-darkBackground dark:text-darkText">
      <header className="text-center">
        <h1 className="font-heading text-h1">Ege Uysal Portfolio</h1>
        <p className="text-sm text-lightText dark:text-darkGrey">Photographer, Developer, Creator</p>
      </header>

      <hr className="w-2/3 border-t-2 border-mediumGrey dark:border-darkGrey my-6" />

      <article className="max-w-lg text-center">
        <p className="text-p leading-default mb-4">Welcome to my portfolio! Here you can explore my work in photography, web development, and digital design. Stay tuned for more updates soon.</p>

        <Analytics />
        <SpeedInsights />
      </article>
    </main>
  );
}