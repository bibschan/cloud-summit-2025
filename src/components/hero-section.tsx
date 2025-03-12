"use client";

import { Button } from "@/components/ui/button";
import { EVENT_CONFIG } from "@/lib/constants";
import Script from "next/script";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Countdown from 'react-countdown';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const CompletionMessage = () => (<h3 className="bg-[#313539] rounded-md flex text-4xl md:text-6xl">The Summit Has Begun! Join us in the clouds! ☁️</h3>);
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
    <div className="relative min-h-[900px] flex flex-col items-center justify-center gap-16  w-full bg-hero-pattern bg-no-repeat bg-center px-4 py-16 text-white">
      <Image
        src="/main-banner/banner.svg"
        alt="Hero Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90%] mt-10 md:mt-20 h-auto xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%]"
      />

      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <CompletionMessage />;
          }
          return (
            <article className="bg-[#313539] rounded-md flex">
              <div className="flex flex-col items-center justify-center gap-1 md:gap-3 m-4 md:mx-6 pr-4 border-r border-[#4d4d4d]">
                <h3 className="text-6xl md:text-8xl text-center text-white">
                  {days}
                </h3>
                <p className="text-primary-400">Days</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-3 my-4 mr-4 md:mr-6 pr-4 md:pr-6 border-r border-[#4d4d4d]">
                <h3 className="text-6xl md:text-8xl text-center text-white">
                  {hours}
                </h3>
                <p className="text-primary-400">Hours</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 my-4 mr-4 md:mr-6 pr-4 md:pr-6 border-r border-[#4d4d4d]">
                <h3 className="text-6xl md:text-8xl text-center text-white">
                  {minutes}
                </h3>
                <p className="text-primary-400">Minutes</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 my-4 mr-4 md:mr-6">
                <h3 className="text-6xl md:text-8xl text-center text-white">
                  {seconds}
                </h3>
                <p className="text-primary-400">Seconds</p>
              </div>

            </article>
          )
        }}
      />
      <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-10">
        <p className="mx-auto max-w-3xl text-center text-xl text-gray-300 md:text-3xl font-bold uppercase">
          {EVENT_CONFIG.date} at {EVENT_CONFIG.location.city} {EVENT_CONFIG.venue}
        </p>
        {/* Description */}
        <p className="mx-auto max-w-3xl text-center text-md text-gray-300 md:text-xl">
          {EVENT_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="mb-2 md:mb-16 flex flex-row items-center justify-evenly md:justify-center gap-4 ">
          <a
            href={EVENT_CONFIG.links.tickets}
            className="min-w-[150px] h-11 flex justify-center items-center rounded-md bg-secondary-600 hover:bg-secondary-800"
            data-luma-action="checkout"
            data-luma-event-id="evt-cItbLfgBkf8na4n"
          >
            Get your tickets
          </a>

          <Script
            id="luma-checkout"
            src="https://embed.lu.ma/checkout-button.js"
            strategy="lazyOnload"
          />

          <Button
            size="lg"
            variant="outline"
            className="min-w-[150px] border-white/20 text-white hover:bg-white/10  md:block"
            onClick={openVolunteersLink}
          >
            Get involved
          </Button>
        </div>
      </div>


    </div>
  );
};
