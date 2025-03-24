"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { SPONSORS } from "@/lib/constants";

interface SponsorImageProps {
  name: string;
  logo: string;
}

type SponsorStatus = "diamond" | "gold" | "silver" | "bronze";

interface Sponsor {
  name: string;
  status: SponsorStatus;
  logo: string;
  link: string;
}

interface SponsorsGridProps {
  sponsors: Sponsor[];
}

export const SponsorsSection = () => {
  return (
    <section className=" bg-primary-900 ">
      <div className="container mx-auto px-4 pb-12 ">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center White">
          Thank You <span className="text-lemon-lime">Sponsors</span>
        </h2>

        <SponsorsGrid sponsors={SPONSORS as Sponsor[]} />
        <p className="text-center text-3xl mb-12">This event would not be possible without your support!</p>
      </div>
    </section>
  );
};

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

const SponsorsGrid: React.FC<SponsorsGridProps> = ({ sponsors }) => {
  // Group sponsors by their status tier
  const groupedSponsors = sponsors.reduce<Record<SponsorStatus, Sponsor[]>>(
    (acc, sponsor) => {
      if (!acc[sponsor.status]) {
        acc[sponsor.status] = [];
      }
      acc[sponsor.status].push(sponsor);
      return acc;
    },
    {} as Record<SponsorStatus, Sponsor[]>
  );

  const renderGoldSponsors = () => {
    if (!groupedSponsors.gold || groupedSponsors.gold.length === 0) {
      return null;
    }

    // Total number of columns in the grid based on screen size
    const totalCols = 4; // For lg screens
    const goldSponsors = groupedSponsors.gold;

    // Calculate how many placeholders we need on each side
    const placeholdersPerSide = Math.floor(
      (totalCols - goldSponsors.length) / 2
    );

    // Create placeholder array
    const leftPlaceholders =
      placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];
    const rightPlaceholders =
      placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];

    // Adjust right placeholders if odd number of remaining spots
    if ((totalCols - goldSponsors.length) % 2 !== 0) {
      rightPlaceholders.push(null);
    }

    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Left placeholders */}
        {leftPlaceholders.map((_, index) => (
          <div
            key={`left-placeholder-${index}`}
            className="col-span-1 hidden  bg-primary-800 rounded-lg lg:block"
          ></div>
        ))}

        {/* Gold sponsors */}
        {goldSponsors.map((sponsor, index) => (
          <Link
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1  flex items-center justify-center bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full"
          >
            <div className="relative h-16 w-full">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}

        {/* Right placeholders */}
        {rightPlaceholders.map((_, index) => (
          <div
            key={`right-placeholder-${index}`}
            className="col-span-1 bg-primary-800 rounded-lg lg:block"
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="sponsors-container container max-w-4xl mx-auto px-4 py-12">
      {/* Diamond sponsors - each takes 2 columns */}
      {groupedSponsors.diamond && groupedSponsors.diamond.length > 0 && (
        <div className="mb-12">
          <Image
            src="/sponsors/diamond.svg"
            alt="word diamond and arrow pointing to diamond sponsors of the 2025 cloud summit"
            width={180}
            height={100}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {groupedSponsors.diamond.map((sponsor, index) => (
              <Link
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 max-w-[450px] flex items-center justify-center bg-primary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain max-w-[250px] m-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {groupedSponsors.gold && groupedSponsors.gold.length > 0 && (
        <div className=" 1-full">
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full items-end ">
              {renderGoldSponsors()}
              <Image
                src="/sponsors/gold.svg"
                alt="word diamond and arrow pointing to diamond sponsors of the 2025 cloud summit"
                width={150}
                height={100}
                className="grow-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
