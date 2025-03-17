"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MEDIA_CONFIG } from "@/lib/constants";

export const MediaLounge = () => {
  return (
    <section className="w-full bg-primary-900 pt-8 md:py-20" id="media-lounge">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center pb-8">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Explore the <span className="block text-lemon-lime ">{MEDIA_CONFIG.title}</span>
            </h2>
          </div>
        </div>

        {/* Media Grid Section */}
        <div className="mx-auto grid max-w-5xl gap-4 py-6 md:py-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {MEDIA_CONFIG.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg bg-primary-800 border-primary-700 border-2 shadow-md ${i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""
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
                    src={item.thumbnail}
                    width={600}
                    height={400}
                    alt="Video Thumbnail"
                    className="object-cover relative"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </Link>
              </div>

              {/* Media Details */}
              <div className="mt-4 p-4 ">
                <Link
                  href={item.link}
                  target="_blank"
                  className="text-xl font-bold text-white font-body">{item.title}</Link>
                <p className="mt-2 text-gray-400 mb-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
