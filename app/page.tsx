import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-[#f2f2f2] dark:bg-[#2e2e2e]">
      <div className="bg-[#f2f2f2] h-screen w-[75vw] flex gap-8 flex-col dark:bg-[#2e2e2e]">
        <header className="w-full flex justify-center">
          <nav className="flex">
            <div className="h-16 w-full bg-[#2e2e2e] mt-8 rounded-md flex items-center justify-between shadow-md dark:bg-[#f2f2f2]">
              <Image
                src="/assets/logo.svg"
                width={32}
                height={32}
                alt="Logo"
                className="ml-6 dark:invert"
              />
              <Image
                src="/assets/menu-icon.svg"
                width={32}
                height={32}
                alt="Menu Icon"
                className="mr-6 dark:invert"
              />
            </div>
          </nav>
        </header>

        <main className="flex flex-col flex-1 gap-3">
          <p className={`${poppins.className} text-lg mt-4 text-[#2e2e2e] font-medium dark:text-[#f2f2f2]`}>
            Hi, I&apos;m Ege Uysal.
          </p>
          <h1 className={`${lato.className} text-4xl text-[#2e2e2e] dark:text-[#f2f2f2]`}>
            Photographer
            <br />
            Developer
            <br />
            Founder
          </h1>
          <Analytics />
          <SpeedInsights />
          <div className="flex gap-2">
            <button className="bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1]">Download CV</button>
            <button className="bg-[#7f8c8f] mt-6 w-1/2 py-3 rounded-md cursor-pointer font-bold text-[#ecf0f1]">Reach Out</button>
          </div>
        </main>
      </div>
    </div>
  );
}
