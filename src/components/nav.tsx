"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-full z-10 py-5 transition duration-300 ease-in-out
      ${isAtTop ? "" : "bg-black/50 backdrop-blur-md shadow-xl"}
    `}>
      <div className="container mx-auto px-6 flex lg:justify-end justify-center">
        <div className="flex space-x-4 sm:space-x-8 font-semibold text-sm md:text-base">
          <Link href="#highlights" className="hover:text-sky-400">
            About
          </Link>
          <Link href="#venue" className="hover:text-sky-400">
            Schedule
          </Link>
          <Link
            href="https://forms.gle/6qjgftM5Uf4ZSNNP7"
            className="hover:text-sky-400"
            target="_blank"
            passHref
          >
            Speakers
          </Link>
          <Link
            href="https://forms.gle/1XDU3sdR94UgbcUEA"
            target="_blank"
            passHref
            className="hover:text-sky-400"
          >
            Sponsors
          </Link>
        </div>
      </div>
    </nav>
  );
}
