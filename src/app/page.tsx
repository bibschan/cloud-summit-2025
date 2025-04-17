"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { FAQSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import CharitySection from "@/components/charity-section";
import { CommunitiesList } from "@/components/communities";
import BannerSection from "@/components/banner";
import { NominateSection } from "@/components/nominate-section";
import ActivitiesSection from "@/components/activities-section";
import CloudInfoBanner from "@/components/cloud-info-banner-section";
import { ProvidersSection } from "@/components/providers-section";
import { SiteWideMessage } from "@/components/site-wide-section";
import TorontoEventBanner from "@/components/toronto-event-banner";
import SpeakerSection from "@/components/speakers/speaker-section";
type BannerState = "initial" | "visible" | "hidden";

export default function Home() {
  const [showMessage, setShowMessage] = useState<BannerState>("initial");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedState = sessionStorage.getItem("bannerState");
      const envInitialState = process.env.NEXT_PUBLIC_SHOW_MESSAGE === "true";

      if (storedState === "hidden") {
        setShowMessage("hidden");
      } else if (envInitialState) {
        setShowMessage("visible");
        sessionStorage.setItem("bannerState", "visible");
      } else {
        setShowMessage("hidden");
      }
    }
  }, []);

  const handleCloseMessage = () => {
    setShowMessage("hidden");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bannerState", "hidden");
    }
  };

  return (
    <div className="min-h-screen text-white ">
      <TorontoEventBanner />
      <SiteWideMessage
        isVisible={showMessage}
        handleClose={handleCloseMessage}
      />
      <Nav showMessage={showMessage} />
      <main>
        <HeroSection />
        <CloudInfoBanner />
        <HighlightsSection />
        <ProvidersSection />
        <ActivitiesSection />
        <SpeakerSection />
        <NominateSection />
        <CharitySection />
        <CommunitiesList />
        <BannerSection />

        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}
