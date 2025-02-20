"use client";

import Image from "next/image";
import { heroProviders } from "@/lib/cloud-hero-providers";

export const CloudProvidersGrid = () => {
  return (
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
  );
}; 