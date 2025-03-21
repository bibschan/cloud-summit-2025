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
import BannerSection from "@/components/banner";
export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#1b221d]">
      {/* TODO: Add Site-wide messaging section */}
      <Nav />
      <main >
        <HeroSection />
        {/* add Cloud summit banner  */}
        <HighlightsSection />
        <SponsorsSection />  {/**Renamed this section to Providers in previous PR */}
        {/* Need to add Actvities Section */}
        {/* <CommunitySection /> */}
        {/* <VenueSection /> */}
        {/* TODO: add nominate section */}
        <CharitySection />
        <CommunitiesList />
        <BannerSection  />
        <FAQSection />
        {/* TODO: Add sponsors */}
      </main>
      <Footer />
    </div>
  );
}
