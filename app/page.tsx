import Hello from "@/app/components/hello"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  console.log("What am I, SERVER/CLIENT?");

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js!</h1>
      <Hello></Hello>
    </>
  );
}
