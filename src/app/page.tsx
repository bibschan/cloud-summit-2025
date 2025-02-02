"use client";

import React from "react";
import Nav from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { CommunitySection } from "@/components/community-section";
import { VenueSection } from "@/components/venue-section";
import { FAQSection } from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <HeroSection />
        <HighlightsSection />
        <SponsorsSection />
        <CommunitySection />
        <VenueSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
