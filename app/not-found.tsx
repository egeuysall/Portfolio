"use client";

import { Lato, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function NotFound() {
  const [message, setMessage] = useState("It’s somewhere… but not here.");
  const messages = [
    "It’s somewhere… but not here.",
    "You’ve found a glitch in the system!",
  ];

  const handleClick = () => {
    setMessage((prevMessage) =>
      prevMessage === messages[0] ? messages[1] : messages[0]
    );
  };

  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center h-screen text-center p-4 bg-background md:flex-row md:gap-24`}
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
          className={`${lato.className} text-h1 font-bold hidden md:block md:text-9xl text-foreground`}
        >
          404
        </h1>
        <h2
          className={`${lato.className} text-h2 font-bold md:text-5xl text-foreground`}
        >
          Page Lost in the Matrix
        </h2>
        <p
          className="text-p mb-6 cursor-pointer md:text-2xl text-foreground"
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