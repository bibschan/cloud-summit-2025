"use client";

import { EVENT_CONFIG } from "@/lib/constants";
import StatBanner from "../stat-banner";
import { BackgroundVideo } from "./background-video";
import { HeroTitle } from "./hero-title";
import { EventDates } from "./event-dates";
import { CTAButtons } from "./cta-buttons";
import { CloudProvidersGrid } from "./cloud-providers-grid";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden w-full bg-[#070B14] px-4 py-16 text-white">
      <BackgroundVideo />

      <div className="relative mx-auto flex flex-row flex-wrap justify-center gap-6">
        <HeroTitle />
        <EventDates />
      </div>

      <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-6">
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-300 md:text-xl">
          {EVENT_CONFIG.description}
        </p>

        <CTAButtons />
        <StatBanner />
      </div>

      <CloudProvidersGrid />
    </div>
  );
}; 