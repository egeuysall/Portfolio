import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="bg-[#f2f2f2] h-screen w-screen flex items-center flex-col">
      <header className="flex">
        <nav className="flex">
          <div className="h-12 w-12 bg-[#2e2e2e] mt-2">
            {/* Content */}
          </div>
        </nav>
      </header>

      <Analytics />
      <SpeedInsights />
    </main>
  );
}