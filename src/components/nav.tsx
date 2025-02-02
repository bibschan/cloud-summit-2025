"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasVoted, setHasVoted] = useState(true);  // Default to true to prevent flash
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  useEffect(() => {
    // Only check for votes if we're on the homepage and user is logged in
    if (isHomePage && session?.user) {
      const checkVoteStatus = async () => {
        try {
          const response = await fetch('/api/vote/current');
          const data = await response.json();
          setHasVoted(!!data.vote);
        } catch (error) {
          console.error('Failed to check vote status:', error);
        }
      };

      checkVoteStatus();
    }
  }, [isHomePage, session]);

  const getHomeLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  return (
    <nav className={`
      fixed top-0 w-full z-10 py-5 transition duration-300 ease-in-out
      ${isAtTop ? "" : "bg-black/50 backdrop-blur-md shadow-xl"}
    `}>
      <div className="container mx-auto px-6 flex lg:justify-end justify-center">
        <div className="flex space-x-4 sm:space-x-8 font-semibold text-sm md:text-base">
          <Link href={getHomeLink("highlights")} className="hover:text-sky-400">
            About
          </Link>
          <Link href={getHomeLink("venue")} className="hover:text-sky-400">
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
          {session && (
            <div className="relative">
              <Link href="/vote" className="hover:text-sky-400">
                Vote
              </Link>
              {isHomePage && session && !hasVoted && (
                <div className="absolute -top-1 -right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </div>
              )}
            </div>
          )}
          {session ? (
            <button
              onClick={() => signOut()}
              className="hover:text-sky-400"
            >
              Sign Out
            </button>
          ) : (
            <Link href="/auth/signin" className="hover:text-sky-400">
              Sign In
            </Link>
          )}
        </div>
      </div>
      {isHomePage && session && !hasVoted && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <div className="bg-sky-500 text-white px-4 py-2 rounded-md shadow-lg text-sm whitespace-nowrap">
            Cast your vote for your favorite cloud provider!
          </div>
        </div>
      )}
    </nav>
  );
}
