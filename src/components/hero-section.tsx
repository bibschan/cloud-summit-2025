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
    today < earlyBirdDeadline ? "Get Early-Bird Tickets!" : "Get your tickets!";

  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <section className="min-h-[500px] md:min-h-[900px] w-full ">
      <SplineSection />
      <div className="max-w-[1100px] mx-auto relative z-10 min-h-screen flex flex-col flex-wrap item-center justify-center gap-2">
        <h1 className="hidden">
          Western Canada&apos;s Premiere Cloud Summit 2025
        </h1>
        <Image
          src="/main-banner/updated-banner.png"
          alt="Hero Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[90%] mt-10 md:mt-28 h-auto xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%] mx-auto mb-6"
        />
        <div className="md:mb-4">
          <p className="mx-auto max-w-3xl text-center text-xl text-white md:text-3xl font-semibold uppercase">
            save the date
          </p>
          <h3 className="mx-auto max-w-3xl text-center text-4xl md:text-7xl  text-white font-bold uppercase">
            {EVENT_CONFIG.date}
          </h3>
          <p className="mx-auto max-w-3xl text-center text-xl  text-white md:text-3xl font-semibold uppercase">
            at the {EVENT_CONFIG.location.city} {EVENT_CONFIG.venue}
          </p>
        </div>

        <EventCountDown />

        <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-4 md:gap-10 z-10">
          {/* Description */}
          <p className="mx-auto max-w-3xl text-center text-sm md:text-xl  text-white ">
            {EVENT_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className=" flex flex-col md:flex-row items-center justify-evenly md:justify-center gap-4 ">
            <a
              href={EVENT_CONFIG.links.tickets}
              className="px-4 h-11 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800 transition-all font-bold"
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

            <Button
              size="lg"
              variant="outline"
              className="min-w-[150px] border-white/20 text-white hover:bg-white/10 h-11 md:block"
              onClick={openVolunteersLink}
            >
              Get involved
            </Button>
          </div>
          <Link
            href="/justification-letter"
            className="mx-auto underline hover:font-bold transition-all text-sm md:text-xl  mb-6"
          >
            Need help convincing? Use our justification letter!
          </Link>
        </div>
      </div>
    </section>
  );
};
