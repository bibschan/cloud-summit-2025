"use client";

import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const openDiscordLink = () => {
    window.open("https://discord.gg/c9FPgheRH2", "_blank");
  };

  return (
    <div className="min-h-screen text-white px-4">
      <header className="flex items-center justify-end pt-4">
        {/* <nav className="flex space-x-6 ">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Schedule
          </a>
          <a href="#" className="hover:underline">
            Speakers
          </a>
          <a href="#" className="hover:underline">
            Last Year&apos;s Talks
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Code of Conduct
          </a>
        </nav> */}
        <Button variant="outline" onClick={openDiscordLink}>
          Join our Discord
        </Button>
      </header>
      <main className="relative flex flex-col items-center justify-center text-center py-20 z-10">
        <div className="flex items-center space-x-4 text-sm text-shadow-glow">
          <span className="text-shadow-glow">MAY xxxxx, 2025</span>
          <span className="text-shadow-glow">•</span>
          <span className="text-shadow-glow">
            VANCOUVER&apos;S ORPHEUM THEATER
          </span>
        </div>
        <h1 className="mt-4 text-6xl font-bold text-shadow-glow">
          CLOUD SUMMIT
        </h1>
        {/* <h2 className="mt-2 text-3xl italic text-shadow-glow">
          Adventurers Wanted
        </h2> */}
        <p className="mt-4 text-lg text-shadow-glow">
          Gather your party and head into the clouds!
        </p>
        <p className="mt-4 max-w-2xl text-shadow-glow">
          Cloud Summit is a full day conference focused on all things Cloud,
          brought to you by the Canadian Public Cloud Association. It brings
          together thought leaders and cloud engineers across the world to share
          insights and best practices in a collaborative, inclusive and fun
          environment.
        </p>
        <div className="mt-8 flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-white border-white"
            onClick={openDiscordLink}
          >
            Join our Discord
          </Button>
          <a
            href="https://www.cloudsummit.ca/"
            target="_blank"
            className="text-white hover:text-gray-900 text-sm hover:underline transition-colors"
          >
            Last year&apos;s event →
          </a>
        </div>
      </main>
    </div>
  );
}
