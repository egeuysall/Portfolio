"use client";

import { Lato, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function NotFound() {
  const [message, setMessage] = useState("It’s somewhere… but not here.");

  const handleClick = () => {
    setMessage((prevMessage) =>
      prevMessage === "It’s somewhere… but not here."
        ? "You’ve found a glitch in the system!"
        : "It’s somewhere… but not here."
    );
  };

  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center h-screen text-center p-4 bg-background dark:bg-darkBackground md:flex-row md:gap-24`}
    >
      <div>
        <Image
          src="/assets/404.svg"
          alt="404 Illustration"
          width={300}
          height={300}
          className="mb-8 dark:brightness-125 hover:grayscale-[50%] transition duration-300 w-[28rem]"
        />
      </div>
      <div>
        <h1
          className={`${lato.className} text-h1 font-bold hidden md:block md:text-9xl text-foreground dark:text-background`}
        >
          404
        </h1>
        <h2
          className={`${lato.className} text-h2 font-bold md:text-5xl text-foreground dark:text-background`}
        >
          Page Lost in the Matrix
        </h2>
        <p
          className="text-p mb-6 cursor-pointer md:text-2xl text-foreground dark:text-background"
          onClick={handleClick}
        >
          {message}
        </p>
        <Link href="/">
          <button className="bg-primary text-white px-5 py-3 rounded btn cursor-pointer font-bold hover:opacity-75 transition duration-300 md:text-xl">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}