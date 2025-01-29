"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"


const SPONSORS = [
  {
    name: "Couchbase",
    logo: "/sponsors/couchbase.svg",
  },
  {
    name: "SUSE",
    logo: "/sponsors/suse.svg",
  },
  {
    name: "Sophos",
    logo: "/sponsors/sophos.svg",
  },
  {
    name: "Veeam",
    logo: "/sponsors/veeam.svg",
  },
  {
    name: "Microsoft",
    logo: "/sponsors/microsoft.svg",
  },
  {
    name: "Google",
    logo: "/sponsors/google.svg",
  },
  {
    name: "AWS",
    logo: "/sponsors/aws.svg",
  },
] as const;

interface SponsorImageProps {
  name: string;
  logo: string;
}

export default function SponsorsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  }, [
    Autoplay({
      delay: 3000,
    })
  ]);

  return (
    <div className="container mx-auto px-4 pb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Sponsors
      </h2>
      <div className="relative">
        {/* Left edge overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-10" />
        {/* Right edge overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-10" />
        
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {SPONSORS.map((sponsor) => (
              <div 
                key={sponsor.name} 
                className="flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_25%] px-2 md:px-4"
              >
                <SponsorImage
                  name={sponsor.name}
                  logo={sponsor.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SponsorImage({ name, logo }: SponsorImageProps) {
  return (
    <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 p-6">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={100}
        className="h-16 w-auto transition-opacity duration-300 opacity-70 hover:opacity-100 md:w-full md:max-h-14 lg:max-h-16 lg:min-h-14"
        style={{ objectFit: "contain", maxWidth: "180px" }}
      />
    </div>
  );
}
