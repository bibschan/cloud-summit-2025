import { CalendarDays, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EVENT_CONFIG } from "@/lib/constants";

export const VenueSection = () => {
  return (
    <section className="py-20 bg-primary-900" id="venue">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center text-white">
          {EVENT_CONFIG.sections.venue.title}{" "}
          <span className="text-lilac">Information</span>
        </h2>
        <div className="flex justify-between flex-col md:flex-row max-w-[800px] m-auto">
          <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <Building className="w-12 h-12 text-lilac" />
            <p className="text-xl font-semibold">Building</p>
            <p className="text-lg">{EVENT_CONFIG.venue}</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <MapPin className="w-12 h-12 text-lilac" />

            <p className="text-xl font-semibold">Location</p>
            <p className="text-lg">
              {EVENT_CONFIG.location.address}, {EVENT_CONFIG.location.city}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <CalendarDays className="w-12 h-12 text-lilac" />
            <p className="text-xl font-semibold">Time</p>
            <p className="text-lg">{EVENT_CONFIG.date}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <div className="md:w-max w-full">
            <iframe
              src={EVENT_CONFIG.location.mapEmbedUrl}
              className="h-[300px] md:w-[600px] w-full"
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/3 space-y-6">
            <p className="text-gray-300">
              {EVENT_CONFIG.sections.venue.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
