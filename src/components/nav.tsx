"use client";

import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "./nav.module.css";

interface NavProps {
  showMessage?: string;
}

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export default function Nav({ showMessage = "hidden" }: NavProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/auth/signin";
  const isAdminPage = pathname === "/admin";
  const isNominatePage = pathname === "/nominate";

  const today = new Date();
  const earlyBirdDeadline = new Date("2025-05-14T00:00:00");
  const ticketMessage = today < earlyBirdDeadline ? "Get Early-Bird Tickets!" : "Get your tickets!";

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHomeLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };


  const navLinks: NavLink[] = [
    { label: "About", href: getHomeLink("about") },
    { label: "Schedule", href: '/schedule' },
    { label: "Speakers", href: '/speakers' },
    { label: "Venue", href: '/venue' },
    { label: "Contact", href: "/contact" },
    { label: "Team", href: "/team" },
  ];

  const renderNavLink = (link: NavLink, onClick?: () => void) => (
    <Link
      key={link.label}
      href={link.href}
      onClick={onClick}
      className="hover:text-sky-400 text-primary-50"
      {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
    </Link>
  );

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
        {/* Mobile nav bar */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu className="w-6 h-6 hover:text-sky-400 text-primary-50" />
        </button>

        {isOpen && (
          <div className="m-0 fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 md:hidden text-white">
            <div className="h-full bg-primary-800 p-4 w-full flex">
              <button
                className="absolute top-0 right-0 p-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6 hover:text-sky-400 text-primary-50" />
              </button>
              <div className="grow flex flex-col items-center justify-center gap-10">
                {navLinks.map(link => renderNavLink(link, handleNav))}
                {session && (
                  <button onClick={() => signOut()} className="hover:text-sky-400 text-primary-50">
                    Sign Out
                  </button>
                )}
                <a
                  href={EVENT_CONFIG.links.tickets}
                  className="min-w-[190px] h-11 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800 text-white"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-cItbLfgBkf8na4n"
                >
                  {ticketMessage}
                </a>
                <Script
                  id="luma-checkout-mobile"
                  src="https://embed.lu.ma/checkout-button.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </div>
        )}

        {/* tablet and desktop nav bar */}
        <div className="hidden md:flex space-x-4 sm:space-x-8 text-sm md:text-base">
          {navLinks.map(link => renderNavLink(link))}

          {session && (
            <button onClick={() => signOut()} className="hover:text-sky-400 text-primary-50">
              Sign Out
            </button>
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
            id="luma-checkout-desktop"
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
      ${isSignInPage || isAdminPage || isNominatePage
          ? "absolute py-4"
          : `fixed ${showMessage === "visible" ? "top-16" : "top-0"
          } py-5 transition duration-300 ease-in-out ${!isAtTop ? "bg-black/50 backdrop-blur-md shadow-xl" : ""
          }`
        }
    `}
    >
      {renderNavContent()}
    </nav>
  );
}
