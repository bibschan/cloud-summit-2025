"use client";

import { Button } from "@/components/ui/button";
import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import StatBanner from "./stat-banner";
import Image from "next/image";
import { heroProviders } from "@/lib/cloud-hero-providers";
import { useRef, useEffect } from "react";
import Countdown from 'react-countdown';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const Completionist = () => <span>Cloud Summit is taking off! ☁️</span>;
  const targetDate = new Date('2025-05-27T12:00:00');

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }

    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <div className="relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden w-full bg-hero-pattern bg-no-repeat bg-center px-4 py-16 text-white">
      <Image
        src="/main-banner/banner.svg"
        alt="Hero Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90%]  h-auto"
      />

      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </div>
        )}
      />,
      <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-6">
        {/* Description */}
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-300 md:text-xl">
          {EVENT_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="mb-2 md:mb-16 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href={EVENT_CONFIG.links.tickets}
            className="min-w-[200px] h-11 flex justify-center items-center rounded-md bg-gradient-to-r from-green-900 to-green-500 font-bold"
            data-luma-action="checkout"
            data-luma-event-id="evt-cItbLfgBkf8na4n"
          >
            Get Tickets
          </a>

          <Script
            id="luma-checkout"
            src="https://embed.lu.ma/checkout-button.js"
            strategy="lazyOnload"
          />

          <Button
            size="lg"
            variant="outline"
            className="min-w-[200px] border-white/20 text-white hover:bg-white/10 hidden md:block"
            onClick={openVolunteersLink}
          >
            GET INVOLVED
          </Button>
        </div>

        {/* Stats */}
        <StatBanner />
      </div>

      {/* Cloud Providers */}
      <div className="grid grid-cols-4 gap-4 mt-4 md:mt-16 md:grid-cols-4 md:flex md:flex-row md:overflow-hidden md:whitespace-nowrap">
        {heroProviders.map((provider) => (
          <a
            href={provider.link}
            key={provider.name}
            target="_blank"
            className="relative"
          >
            <div className="relative w-14 h-14">
              <Image
                src={provider.icon}
                alt={provider.name}
                width={56}
                height={56}
                className="object-contain"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
