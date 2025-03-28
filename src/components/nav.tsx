"use client";
import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import { isAdmin } from "@/lib/admin";
import Image from "next/image";
import styles from "./nav.module.css";
interface NavProps {
  showMessage?: string;
}

export default function Nav({ showMessage = 'hidden' }: NavProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasVoted, setHasVoted] = useState(true);
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/auth/signin";
  const isVotePage = pathname === "/vote";
  const isAdminPage = pathname === "/admin";
  const isNominatePage = pathname === "/nominate";
  const today = new Date();
  const earlyBirdDeadline = new Date("2025-05-14T00:00:00");
  const ticketMessage =
    today < earlyBirdDeadline ? "Get Early-Bird Tickets!" : "Get your tickets!";
  const userIsAdmin = session?.user?.email
    ? isAdmin(session.user.email)
    : false;
  const useExternalNominationForm =
    process.env.NEXT_PUBLIC_USE_EXTERNAL_NOMINATION_FORM === "true";
  const externalNominationFormUrl =
    process.env.NEXT_PUBLIC_EXTERNAL_NOMINATION_FORM_URL || "#";
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(false);
  };
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
          const response = await fetch("/api/vote/current");
          const data = await response.json();
          setHasVoted(!!data.vote);
        } catch (error) {
          console.error("Failed to check vote status:", error);
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
    if (isSignInPage || isAdminPage || isNominatePage) {
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
      <div className="container w-full px-6 flex justify-between items-center grow mx-auto">
        <Link href="/" className="hover:text-sky-400 text-primary-50">
          <Image
            src="/Logo.svg"
            alt="Cloud Summit 2025 logo"
            width={147}
            height={40}
            className="block"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu className="w-6 h-6 hover:text-sky-400 text-primary-50" />
        </button>
        {isOpen && (
          <div className="m-0 fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 md:hidden">
            <div className="h-full bg-primary-800 p-4 w-full flex">
              <button
                className="absolute top-0 right-0 p-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6 hover:text-sky-400 text-primary-50" />
              </button>
              <div className="grow flex flex-col items-center justify-center gap-10">
                <Link
                  href={getHomeLink("highlights")}
                  onClick={handleNav}
                  className="hover:text-sky-400 text-primary-50"
                >
                  About
                </Link>
                <Link
                  href={getHomeLink("venue")}
                  onClick={handleNav}
                  className="hover:text-sky-400 text-primary-50"
                >
                  Schedule
                </Link>
                <Link
                  href="https://forms.gle/6qjgftM5Uf4ZSNNP7"
                  onClick={handleNav}
                  className="hover:text-sky-400 text-primary-50"
                  target="_blank"
                  passHref
                >
                  Speakers
                </Link>
                <Link
                  href="https://forms.gle/1XDU3sdR94UgbcUEA"
                  onClick={handleNav}
                  target="_blank"
                  passHref
                  className="hover:text-sky-400 text-primary-50"
                >
                  Sponsors
                </Link>
                <Link
                  href='/contact'
                  onClick={handleNav}
                  className="hover:text-sky-400 text-primary-50"
                >
                  Contact
                </Link>
                <a
                  href={EVENT_CONFIG.links.tickets}
                  className="min-w-[190px] h-11 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-cItbLfgBkf8na4n"
                >
                  {ticketMessage}
                </a>

                <Script
                  id="luma-checkout"
                  src="https://embed.lu.ma/checkout-button.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:flex space-x-4 sm:space-x-8 text-sm md:text-base ">
          <Link
            href={getHomeLink("highlights")}
            className="hover:text-sky-400 text-primary-50"
          >
            About
          </Link>
          <Link
            href={getHomeLink("venue")}
            className="hover:text-sky-400 text-primary-50"
          >
            Schedule
          </Link>
          <Link
            href="https://forms.gle/6qjgftM5Uf4ZSNNP7"
            className="hover:text-sky-400 text-primary-50"
            target="_blank"
            passHref
          >
            Speakers
          </Link>
          <Link
            href="https://forms.gle/1XDU3sdR94UgbcUEA"
            target="_blank"
            passHref
            className="hover:text-sky-400 text-primary-50"
          >
            Sponsors
          </Link>
          <Link
                  href='/contact'
                  onClick={handleNav}
                  className="hover:text-sky-400 text-primary-50"
                >
                  Contact
                </Link>
          {session ? (
            <>
              <div className="relative">
                <Link
                  href="/vote"
                  className="hover:text-sky-400 text-primary-50"
                >
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
                          Cast your vote for your favorite Canadian company!
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {useExternalNominationForm ? (
                <Link
                  href={externalNominationFormUrl}
                  className="hover:text-sky-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nominate
                </Link>
              ) : (
                <Link href="/nominate" className="hover:text-sky-400">
                  Nominate
                </Link>
              )}
              {userIsAdmin && (
                <Link href="/admin" className="hover:text-sky-400">
                  Admin
                </Link>
              )}
              <button onClick={() => signOut()} className="hover:text-sky-400">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth/signin" className="hover:text-sky-400">

            </Link>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={EVENT_CONFIG.links.tickets}
            className="min-w-[190px] h-9 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800 transition-all"
            data-luma-action="checkout"
            data-luma-event-id="evt-cItbLfgBkf8na4n"
          >
            {ticketMessage}
          </a>

          <Script
            id="luma-checkout"
            src="https://embed.lu.ma/checkout-button.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`
      w-full z-50
      ${
        isSignInPage || isVotePage || isAdminPage || isNominatePage
          ? "absolute py-4"
          : `fixed ${showMessage === 'visible' ? 'top-16' : 'top-0'} py-5 transition duration-300 ease-in-out ${
              !isAtTop ? "bg-black/50 backdrop-blur-md shadow-xl" : ""
            }`
      }
    `}
    >
      {renderNavContent()}
    </nav>
  );
}
