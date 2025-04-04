import { CalendarDays, MapPin, Building } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";

export const VenueSection = () => {
  return (
    <section className=" bg-primary-900" id="venue">
      <div className="max-w-[1100px] mx-auto px-4">

        <div className="flex justify-between flex-col md:flex-row max-w-[700px] m-auto">
          <div className="flex flex-col items-center justify-center mb-4 gap-2 ">
            <Building className="w-8 md:w-10 h-8 md:h-10 text-secondary-600 " />
            <p className="text-md md:text-xl font-semibold">Building</p>
            <p className="text-sm md:text-lg">{EVENT_CONFIG.venue}</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 gap-2 ">
            <MapPin className="w-8 md:w-10 h-8 md:h-10 text-secondary-600 " />
            <p className="text-md md:text-xl font-semibold">Location</p>
            <p className="text-sm md:text-lg">
              {EVENT_CONFIG.location.address}, {EVENT_CONFIG.location.city}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 gap-2 ">
            <CalendarDays className="w-8 md:w-10 h-8 md:h-10 text-secondary-600 " />
            <p className="text-md md:text-xl font-semibold">Time</p>
            <p className="text-sm md:text-lg">{EVENT_CONFIG.date}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <div className="md:w-max w-full">
            <iframe
              src={EVENT_CONFIG.location.mapEmbedUrl}
              className="h-[300px] md:w-[700px] w-full"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
