"use client";

import { EVENT_CONFIG } from "@/lib/constants";

export const EventDates = () => {
  return (
    <div className="mb-8 flex flex-col items-center md:items-start justify-start -mt-1">
      <div className="flex items-center gap-4 mb-3 rounded-full bg-gradient-to-r from-green-900 to-green-500 px-6 py-2">
        <span className="font-bold">{EVENT_CONFIG.date}</span>
        <span className="text-sm">{EVENT_CONFIG.venue}</span>
      </div>
      <div className="flex items-center gap-4 rounded-full border border-white/20 px-6 py-2">
        <span className="font-bold">{EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.province}</span>
        <span className="text-sm">{EVENT_CONFIG.location.country}</span>
      </div>
    </div>
  );
}; 