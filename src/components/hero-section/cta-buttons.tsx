"use client";

import Script from "next/script";
import { Button } from "@/components/ui/button";
import { EVENT_CONFIG } from "@/lib/constants";

export const CTAButtons = () => {
  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <div className="mb-2 md:mb-16 flex flex-col items-center justify-center gap-4 md:flex-row">
      <a
        href={EVENT_CONFIG.links.tickets}
        className="min-w-[200px] h-11 flex justify-center items-center rounded-md bg-gradient-to-r from-green-900 to-green-500 font-bold"
        data-luma-action="checkout"
        data-luma-event-id="evt-cItbLfgBkf8na4n"
      >
        Get Tickets
      </a>

      {/* <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="lazyOnload"
      /> */}

      <Button
        size="lg"
        variant="outline"
        className="min-w-[200px] border-white/20 text-white hover:bg-white/10 hidden md:block"
        onClick={openVolunteersLink}
      >
        GET INVOLVED
      </Button>
    </div>
  );
};
