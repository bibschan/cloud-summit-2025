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
import CloudInfoBanner from "@/components/cloud-info-banner-section";
import { ProvidersSection } from "@/components/providers-section";

export default function Home() {
  return (
    <div className="min-h-screen text-white ">
      <Nav />
      <main>
        <HeroSection />
        <CloudInfoBanner />
        <HighlightsSection />
        <SponsorsSection />
        <ProvidersSection />
        <MediaLounge />
        {/* <CommunitySection /> */}
        <VenueSection />
        <CommunitiesList />
        <BannerSection />
        <CharitySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
