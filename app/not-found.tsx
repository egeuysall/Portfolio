"use client";

import { Lato, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

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
        <h1 className={`${lato.className} text-h1 text-text dark:text-darkText`}>
          404
        </h1>
        <h2 className={`${lato.className} text-h2 text-text dark:text-darkText`}>
          Page Lost in the Matrix
        </h2>
        <p
          className="text-p text-mutedText dark:text-darkMutedText cursor-pointer"
          onClick={handleClick}
        >
          {message}
        </p>
        <Link href="/">
          <button className="btn">Go Home</button>
        </Link>
      </div>
    </div>
  );
}