"use client";

import React from "react";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg">
          <Image
            src={`/sponsors/couchbase.png`}
            alt={`Sponsor`}
            width={180}
            height={100}
            objectFit="contain"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg">
          <Image
            src={`/sponsors/fortinet.webp`}
            alt={`Sponsor`}
            width={180}
            height={100}
            objectFit="contain"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg">
          <Image
            src={`/sponsors/futureproof.png`}
            alt={`Sponsor`}
            width={180}
            height={100}
            objectFit="contain"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg">
          <Image
            src={`/sponsors/northeastern.svg`}
            alt={`Sponsor`}
            width={180}
            height={100}
            objectFit="contain"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
