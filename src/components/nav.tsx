"use client";

import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex fixed space-x-6 z-10 right-0 pr-6 pt-4">
      <Link href="#" className="hover:underline">
        About
      </Link>
      <Link href="#" className="hover:underline">
        Schedule
      </Link>
      <Link href="#" className="hover:underline">
        Speakers
      </Link>
      <Link
        href="https://forms.gle/1XDU3sdR94UgbcUEA"
        target="_blank"
        passHref
        className="hover:underline"
      >
        Sponsors
      </Link>
    </nav>
  );
}
