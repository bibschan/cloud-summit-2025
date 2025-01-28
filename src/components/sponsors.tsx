"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";


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
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Past Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SPONSORS.map((sponsor) => (
            <SponsorImage
              key={sponsor.name}
              name={sponsor.name}
              logo={sponsor.logo}
            />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <BecomeSponsorCard />
      </div>
    </>
  );
}

function SponsorImage({ name, logo }: SponsorImageProps) {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg h-40">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={100}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300 h-16 w-auto md:w-full md:max-h-14 lg:max-h-16 lg:min-h-14"
        style={{ objectFit: "contain", maxWidth: "180px" }}
      />
    </div>
  );
}

function BecomeSponsorCard() {
  return (
    <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-none">
      <CardContent className="p-6 text-center">
        <Sprout className="w-12 h-12 mx-auto mb-4 text-white" />
        <h3 className="text-xl font-bold text-white mb-2">
          Become a Sponsor
        </h3>
        <p className="text-white mb-4 max-w-xl mx-auto text-sm">
          Support innovation and connect with leaders in cloud technology.
          Join us in shaping the future of the industry!
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
