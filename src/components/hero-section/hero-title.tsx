"use client";

import { EVENT_CONFIG } from "@/lib/constants";

export const HeroTitle = () => {
  return (
    <div className="md:mb-8 text-center">
      <h1 className="mb-4 hidden md:block font-bold tracking-tight md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
          {EVENT_CONFIG.title}
        </span>
      </h1>
      <h1 className="mb-4 text-7xl font-bold tracking-tight md:hidden flex flex-wrap justify-center gap-2">
        <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
          Cloud
        </span>
        <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
          Summit
        </span>
      </h1>
      <h2 className="text-xl font-light md:text-2xl hidden md:block">
        <span>Infrastructure</span>
        <span className="mx-3 text-gray-500">|</span>
        <span>Security</span>
        <span className="mx-3 text-gray-500">|</span>
        <span>DevOps</span>
      </h2>
    </div>
  );
}; 