"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SPONSORS } from "@/lib/constants";

type SponsorStatus = "diamond" | "gold" | "key";
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
    <section className="bg-primary-900">
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center White">
          Thank You <span className="text-lemon-lime">Sponsors</span>
        </h2>

        <SponsorsGrid sponsors={SPONSORS as Sponsor[]} />
        <p className="text-center text-xl md:text-3xl mb-12">This event would not be possible without your support!</p>
      </div>
    </section>
  );
};

const DiamondSponsors: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;

  const totalCols = 4;
  const placeholdersPerSide = Math.floor((totalCols - sponsors.length) / 2);
  const rightPlaceholders = placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];

  if ((totalCols - sponsors.length) % 2 !== 0) {
    rightPlaceholders.push(null);
  }
  return (
    <div className="mb-6">
      <Image
        src="/sponsors/diamond.svg"
        alt="word diamond and arrow pointing to diamond sponsors of the 2025 cloud summit"
        width={180}
        height={100}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <Link
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center bg-primary-800 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full" style={{ height: '6rem' }}> {/* Using explicit style height */}
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain max-w-[250px] m-auto"
              />
            </div>
          </Link>
        ))}
        {rightPlaceholders.map((_, index) => (
          <div
            key={`right-placeholder-${index}`}
            className="col-span-2 bg-primary-800 rounded-lg lg:block"
          ></div>
        ))}
      </div>
    </div>
  );
};

const KeySponsors: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;
  const totalCols = 4;
  const placeholdersPerSide = Math.floor((totalCols - sponsors.length) / 2);
  const rightPlaceholders = placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];

  if ((totalCols - sponsors.length) % 2 !== 0) {
    rightPlaceholders.push(null);
  }
  return (
    <div className="mb-12">
      <div className="flex flex-col items-end">
        <Image
          src="/sponsors/key.svg"
          className="scale-x-[-1] mr-24 lilac-filter"
          alt="arrow pointing to key sponsors of the 2025 cloud summit"
          width={90}
          height={50}
        />
        <p className="font-semibold text-3xl">Platinum</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <Link
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full" style={{ height: '5rem' }}>
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
        {rightPlaceholders.map((_, index) => (
          <div
            key={`right-placeholder-${index}`}
            className="col-span-2 bg-primary-800 rounded-lg lg:block"
          ></div>
        ))}
      </div>
    </div>
  );
};

const GoldSponsors: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;

  const totalCols = 4;
  const placeholdersPerSide = Math.floor((totalCols - sponsors.length) / 2);
  const leftPlaceholders = placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];
  const rightPlaceholders = placeholdersPerSide > 0 ? Array(placeholdersPerSide).fill(null) : [];

  if ((totalCols - sponsors.length) % 2 !== 0) {
    rightPlaceholders.push(null);
  }

  return (
    <div className="w-full mb-12">
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-full items-end">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Left placeholders */}
            {leftPlaceholders.map((_, index) => (
              <div
                key={`left-placeholder-${index}`}
                className="col-span-1 hidden bg-primary-800 rounded-lg lg:block"
              ></div>
            ))}

            {/* Gold sponsors */}
            {sponsors.map((sponsor, index) => (
              <Link
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 flex items-center justify-center bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full"
              >
                <div className="relative w-full" style={{ height: '4rem' }}> {/* Using explicit style height */}
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

          <Image
            src="/sponsors/gold.svg"
            alt="word gold and arrow pointing to gold sponsors of the 2025 cloud summit"
            width={150}
            height={100}
            className="grow-1"
          />
        </div>
      </div>
    </div>
  );
};

const SponsorsGrid: React.FC<SponsorsGridProps> = ({ sponsors }) => {
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

  return (
    <div className="sponsors-container container max-w-4xl mx-auto px-4 py-12">
      <DiamondSponsors sponsors={groupedSponsors.diamond || []} />
      <KeySponsors sponsors={groupedSponsors.key || []} />
      <GoldSponsors sponsors={groupedSponsors.gold || []} />
    </div>
  );
};
