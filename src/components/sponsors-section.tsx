"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

export const SponsorsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
      }),
    ]
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Previous Sponsors
        </h2>
        <div className="relative">
          {/* Left edge overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f2f3f4]/40 to-transparent z-10" />
          {/* Right edge overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f2f3f4]/40 to-transparent z-10" />

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {SPONSORS.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_25%] px-2 md:px-4"
                >
                  <SponsorImage name={sponsor.name} logo={sponsor.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-12">
        <BecomeSponsorCard />
      </div> */}
    </section>
  );
};

function SponsorImage({ name, logo }: SponsorImageProps) {
  return (
    <div className="flex h-40 items-center justify-center rounded-lg p-6">
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

function BecomeSponsorCard() {
  return (
    <Card className="border-none bg-gradient-to-r from-green-500 to-blue-500">
      <CardContent className="p-6 text-center">
        <Sprout className="mx-auto mb-4 h-12 w-12 text-white" />
        <h3 className="mb-2 text-xl font-bold text-white">Become a Sponsor</h3>
        <p className="mx-auto mb-4 max-w-xl text-sm text-white">
          Support innovation and connect with leaders in cloud technology. Join
          us in shaping the future of the industry!
        </p>
        <Link href="https://forms.gle/1XDU3sdR94UgbcUEA" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100"
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
