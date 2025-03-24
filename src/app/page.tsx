'use client'
import React, { useState } from "react";
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
import { NominateSection } from "@/components/nominate-section";
import ActivitiesSection from "@/components/activities-section";
import CloudInfoBanner from "@/components/cloud-info-banner-section";
import { ProvidersSection } from "@/components/providers-section";
import { SiteWideMessage } from "@/components/site-wide-section";


export default function Home() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className="min-h-screen text-white ">
      <SiteWideMessage
        message="Welcome to our site!"
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}

      />
      <Nav showMessage={showMessage}/>
      <main>
        <HeroSection />
        <CloudInfoBanner />
        <HighlightsSection />
        <ProvidersSection />
        <ActivitiesSection />
        <MediaLounge />
        {/* <CommunitySection /> */}
        <NominateSection />
        <VenueSection />
        <CommunitiesList />
        <BannerSection />
        <CharitySection />
        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}
