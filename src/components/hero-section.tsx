"use client";

import { Button } from "@/components/ui/button";
import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import Image from "next/image";
import { EventCountDown } from "./hero-section/event-count-down";
import SplineSection from "./hero-section/spline";
import Link from "next/link";

export const HeroSection = () => {
  const today = new Date();
  const earlyBirdDeadline = new Date("2025-05-14T00:00:00");
  const ticketMessage =
    today < earlyBirdDeadline ? "Get Your Tickets!" : "Get Your Tickets!";

  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <section className="min-h-[500px] md:min-h-[900px] w-full ">
      <SplineSection />
      <div className="max-w-[1100px] mx-auto relative z-10 min-h-screen flex flex-col flex-wrap item-center justify-center gap-2">
        <h1 className="text-center text-6xl md:text-8xl">
          Cloud Summit 2026
          <span className="block text-4xl md:text-6xl">Toronto & Vancouver</span>
          <span className="block text-4xl md:text-6xl"> Canada</span>
        </h1>


        <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-4 md:gap-10 z-10">
          {/* Description */}
          <p className="mx-auto max-w-3xl text-center text-sm md:text-xl  text-white px-4">
            Want to learn more about the Cloud Summit 2026? Subscribe below to be notified about Toronto and Vancouver date announcements.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://tally.so/r/mR6RBl"
              className="px-4 h-11 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800 transition-all font-bold"
            >
              Subscribe for 2026 News
            </a>
          </div>

          {/* <Link
            href="/justification-letter"
            className="mx-auto underline hover:font-bold transition-all text-sm md:text-xl  mb-6"
          >
            Need help convincing? Use our justification letter!
          </Link> */}
        </div>
      </div>
    </section>
  );
};
