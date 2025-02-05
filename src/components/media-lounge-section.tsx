"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_CONFIG } from "@/lib/constants";

export const MediaLounge = () => {
  return (
    <section className="w-full bg-gray-100 pt-8 md:py-20" id="media-lounge">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center pb-8">
  <div className="space-y-2">
    <div className="inline-block rounded-lg bg-[#EA4129] text-white px-3 py-1 text-sm">
      {MEDIA_CONFIG.title}
    </div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
      {MEDIA_CONFIG.heading}
    </h2>
    <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      Join{" "}
      <Link
        className="font-semibold text-blue-800"
        href={MEDIA_CONFIG.host.link}
        target="_blank"
      >
        Kris Krüg&nbsp;
      </Link>
      {MEDIA_CONFIG.description}
    </p>
  </div>
</div>


        {/* Media Grid Section */}
        <div className="mx-auto grid max-w-5xl gap-6 py-6 md:py-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {MEDIA_CONFIG.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg bg-white shadow-md p-4 ${
                i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""
              }`}
            >
              {/* Media Thumbnail */}
              <div className="aspect-video overflow-hidden rounded-lg relative">
                <Link
                  href={item.link}
                  target="_blank"
                  className="relative flex h-full w-full items-center justify-center"
                >
                  <Image
                    src="/kris-krug/play.png"
                    width={60}
                    height={60}
                    alt="Play"
                    className="absolute z-20"
                  />
                  <Image
                    src={item.thumbnail}
                    width={600}
                    height={400}
                    alt="Video Thumbnail"
                    className="object-cover relative opacity-80"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </Link>
              </div>

              {/* Media Details */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-gray-600 mb-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
