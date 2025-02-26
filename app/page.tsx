import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#f2f2f2]">
    <div className="bg-[#f2f2f2] h-screen w-[75vw] flex gap-8 flex-col">
      <header className="w-full flex justify-center">
        <nav className="flex">
          <div className="h-16 w-96 bg-[#2e2e2e] mt-8 rounded-md flex items-center justify-between shadow-md">
            <Image
              src="/assets/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              className="ml-6"
            />
            <Image
              src="/assets/menu-icon.svg"
              width={32}
              height={32}
              alt="Logo"
              className="mr-6"
            />
          </div>
        </nav>
      </header>

      <main className="flex flex-col flex-1">
        <p className={`${poppins.className} text-lg mt-4 text-[#2e2e2e]`}>Hi, I'm Ege Uysal.</p>
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
    </div>
  );
}