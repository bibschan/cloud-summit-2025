"use client";

import { useRef, useEffect } from "react";
import { EVENT_CONFIG } from "@/lib/constants";
import Image from "next/image";

type EventFeature = {
  icon: string;
  title: string;
  details: string;
};

function ActivitiesSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
          {EVENT_CONFIG.sections.eventFeatures.activities.map(
            (feature, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center gap-2 mt-9"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
                <div className="icon">
                  {/* Replace with actual icon rendering logic */}
                </div>
                <p className="font-bold text-xl md:text-2xl">{feature.title}</p>
                <p className="md:w-1/2 md:line-clamp-2 text-sm md:text-md">
                  {feature.details}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
