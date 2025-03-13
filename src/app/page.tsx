import React from "react";
import Nav from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { CommunitySection } from "@/components/community-section";
import { VenueSection } from "@/components/venue-section";
import { FAQSection } from "@/components/faq-section";
import { MediaLounge } from "@/components/media-lounge-section";
import Footer from "@/components/footer";
import CharitySection from "@/components/charity-section";
import { CommunitiesList } from "@/components/communities";
import { Speaker } from "lucide-react";
import SpeakersSection from "@/components/speakers-section";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <HeroSection />
        <HighlightsSection />
        <SponsorsSection />
        <SpeakersSection />
        <MediaLounge />

        <VenueSection />
        <CommunitiesList />
        <CharitySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
