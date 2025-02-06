"use client";

import { Button } from "@/components/ui/button";
import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import StatBanner from "./stat-banner";
import Image from "next/image";
import { heroProviders } from "@/lib/cloud-hero-providers";

export const HeroSection = () => {
  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <div className="relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden w-full bg-[#070B14] px-4 py-16 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60"></div>
        <video
          src="/main-banner/highlight-video.mp4"
          autoPlay
          muted
          loop
          className="mix-blend-overlay object-cover h-full w-full"
        />
      </div>

      <div className="relative mx-auto flex flex-row flex-wrap justify-center gap-6">
        {/* Logo and Subtitle */}
        <div className="md:mb-8 text-center">
          <h1 className="mb-4 hidden md:block font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
              {EVENT_CONFIG.title}
            </span>
          </h1>
          <h1 className="mb-4 text-7xl font-bold tracking-tight md:hidden flex flex-wrap justify-center gap-2">
            <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
              Cloud
            </span>
            <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
              Summit
            </span>
          </h1>
          <h2 className="text-xl font-light md:text-2xl hidden md:block">
            <span>Infrastructure</span>
            <span className="mx-3 text-gray-500">|</span>
            <span>Security</span>
            <span className="mx-3 text-gray-500">|</span>
            <span>DevOps</span>
          </h2>
        </div>

        {/* Event Dates */}
        <div className="mb-8 flex flex-col items-center md:items-start justify-start -mt-1">
          <div className="flex items-center gap-4 mb-3 rounded-full bg-gradient-to-r from-green-900 to-green-500 px-6 py-2">
            <span className="font-bold">{EVENT_CONFIG.date}</span>
            <span className="text-sm">{EVENT_CONFIG.venue}</span>
          </div>
          <div className="flex items-center gap-4 rounded-full border border-white/20 px-6 py-2">
            <span className="font-bold">{EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.province}</span>
            <span className="text-sm">{EVENT_CONFIG.location.country}</span>
          </div>
        </div>
      </div>

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