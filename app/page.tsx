import Hello from "@/app/components/hello";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  console.log("What am I, SERVER/CLIENT?");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to Next.js!</h1>
      <Hello />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}