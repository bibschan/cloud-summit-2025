"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sprout } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const SponsorsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Past Sponsors
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
      <div className="mt-12">
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
      </div>
    </section>
  );
}; 