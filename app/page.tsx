import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f2f2f2] text-[#2e2e2e]">
      <header>
        <h1 className="text-4xl font-bold text-center mb-2">Ege Uysal</h1>
        <p className="text-sm text-center text-gray-500 opacity-75 mb-4">
          Photographer, Web Developer, and Creator
        </p>
      </header>

      <hr className="w-2/3 border-t-2 border-gray-600 mb-8" />

      <article className="max-w-lg text-center">
        <p className="mb-4">
          Welcome to my portfolio! Here you can explore my work in photography,
          web development, and digital design. Stay tuned for more updates soon.
        </p>

        <Analytics />
        <SpeedInsights />
      </article>
    </main>
  );
}
