"use client";

import { useRef, useEffect } from "react";

export const BackgroundVideo = () => {
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
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60"></div>
      <video
        ref={videoRef}
        src="/main-banner/highlight-video.mp4"
        autoPlay
        muted
        loop
        className="mix-blend-overlay object-cover h-full w-full"
      />
    </div>
  );
}; 