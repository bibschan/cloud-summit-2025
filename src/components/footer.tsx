"use client";

import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getHomeLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  return (
    <footer className="bg-primary-800 text-primary-100 py-12 max-md:text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-md:place-items-center">
          <div className="flex flex-col items-center md:block">
            <Image
              src="/Logo.svg"
              alt="Cloud Summit 2025"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="mb-4 font-semibold ">{EVENT_CONFIG.slogan}.</p>
          </div>
          <div className=" w-full">
            <p className="text-lg text-white mb-4">Quick Links</p>
            <ul className=" grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-1 ">
              <li>
                <Link
                  href={getHomeLink("about")}
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={EVENT_CONFIG.links.speakers}
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/venue"
                  className="hover:text-green-500 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href={EVENT_CONFIG.links.sponsors}
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-green-500 transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg text-white mb-4">Resources</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://forms.gle/NECDLqn6T6qbmWXZ8"
                  className="hover:text-green-500 transition-colors"
                  target="_blank"
                >
                  Become a volunteer
                </Link>
              </li>
              <li>
                <Link
                  href={getHomeLink("faq")}
                  className="hover:text-green-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/justification-letter"
                  className="hover:text-green-500 transition-colors"
                >
                  Justification Letter
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="hover:text-green-500 transition-colors"
                >
                  Media Lounge
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg  text-white mb-4">Archive</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="./2024.html"
                  className="hover:text-green-500 transition-colors"
                >
                  Cloud Summit 2024
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between flex-col gap-6 md:flex-row">
          <div>
            <p className="mb-4">
              &copy; 2025 {EVENT_CONFIG.title}. All rights reserved.
            </p>
            <p className="mb-0">
              Built by{" "}
              {EVENT_CONFIG.team.webMembers.map((member, index) => (
                <React.Fragment key={member.name}>
                  <a
                    href={member.github}
                    target="_blank"
                    className="text-green-500 hover:text-green-400"
                  >
                    {member.name}
                  </a>
                  {index < EVENT_CONFIG.team.webMembers.length - 2
                    ? ", "
                    : index === EVENT_CONFIG.team.webMembers.length - 2
                    ? " and "
                    : ""}
                </React.Fragment>
              ))}
              .
            </p>
          </div>

          <div className="flex space-x-4 max-md:justify-center">
            <a
              target="_blank"
              href={EVENT_CONFIG.links.social.instagram}
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              target="_blank"
              href={EVENT_CONFIG.links.social.linkedin}
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
