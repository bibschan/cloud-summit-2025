"use client";

import { useRef, useEffect } from "react";
import { EVENT_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

function ActivitiesSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  const isExternalLink = (url: string) => {
    return url && (url.startsWith("http://") || url.startsWith("https://"));
  };

  // Function to split text and make "register now" clickable
  const renderDetailsWithClickableRegister = (details: string, link: string) => {
    if (!details.toLowerCase().includes("register now") || !link) {
      return details;
    }

    const parts = details.split(/(register now)/i);
    const external = isExternalLink(link);

    return (
      <>
        {parts.map((part, i) => {
          if (part.toLowerCase() === "register now") {
            return (
              <Link
                key={i}
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-blue-400 underline hover:text-blue-300 inline-flex items-center"
              >
                {part}
                {external && <ExternalLink size={14} className="ml-1" />}
              </Link>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  return (
    <section className="py-20 bg-[#1B221D]">
      <div className="max-w-[1100px] mx-auto px-4 pb-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center pb-8">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl tracking-tighter text-white">
              Event <span className="text-lemon-lime">Activities</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-8 text-center">
          <video
            ref={videoRef}
            src="/main-banner/highlight-video.mp4"
            muted
            controls
            className="object-cover h-full w-full px-6 md:px-16 md:w-4/5 aspect-video pb-4"
          />
          <p className="text-sm">Video trailer</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:px-16">

          {EVENT_CONFIG.sections.eventFeatures.activities.map((feature, index) => (
            feature.link ? (
              <Link
                key={index}  // Make sure each element in the map has a unique key
                href={feature.link}
                className="text-center flex flex-col items-center gap-2 mt-9 cursor-pointer"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
                <p className="font-bold text-xl md:text-2xl">{feature.title}</p>
              <p className="md:w-1/2 text-sm md:text-md">
                {renderDetailsWithClickableRegister(feature.details, feature.link || "")}
              </p>
              </Link>
            ) : (
              <div
                key={index}  // Same here, ensure a unique key for each element in the list
                className="text-center flex flex-col items-center gap-2 mt-9"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
                <p className="font-bold text-xl md:text-2xl">{feature.title}</p>
                <p className="md:w-1/2 text-sm md:text-md">
                  {feature.details}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
