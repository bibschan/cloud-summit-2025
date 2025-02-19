"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isAdmin } from "@/lib/admin";
import styles from './nav.module.css';

export default function Nav() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasVoted, setHasVoted] = useState(true);
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/auth/signin";
  const isVotePage = pathname === "/vote";
  const isAdminPage = pathname === "/admin";
  const isNominatePage = pathname === "/nominate";
  const userIsAdmin = session?.user?.email ? isAdmin(session.user.email) : false;

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

  // Render different nav content based on route
  const renderNavContent = () => {
    if (isSignInPage || isVotePage || isAdminPage || isNominatePage) {
      return (
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            href="/"
            className="text-white hover:text-sky-400 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          {session && (
            <button
              onClick={() => signOut()}
              className="text-white hover:text-sky-400 font-semibold text-sm md:text-base"
            >
              Sign Out
            </button>
          )}
        </div>
      );
    }

    // Default nav content (homepage)
    return (
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
          {session ? (
            <>
              <div className="relative">
                <Link href="/vote" className="hover:text-sky-400">
                  Vote
                </Link>
                {isHomePage && !hasVoted && (
                  <>
                    <div className="absolute -top-1 -right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap">
                      <div className={styles.floatingBubble}>
                        <div className="bg-sky-500 text-white px-4 py-2 rounded-md shadow-lg text-sm relative">
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-sky-500"></div>
                          Cast your vote for your favorite cloud provider!
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link href="/nominate" className="hover:text-sky-400">
                Nominate
              </Link>
              {userIsAdmin && (
                <Link href="/admin" className="hover:text-sky-400">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="hover:text-sky-400"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link 
              href="/auth/signin" 
              className="hover:text-sky-400"
            >
              Vote
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <nav className={`
      w-full z-20
      ${isSignInPage || isVotePage || isAdminPage || isNominatePage 
        ? "absolute py-4" 
        : `fixed top-0 py-5 transition duration-300 ease-in-out ${!isAtTop ? "bg-black/50 backdrop-blur-md shadow-xl" : ""}`
      }
    `}>
      {renderNavContent()}
    </nav>
  );
}
