import {
  CalendarDays,
  MapPin,
  Building,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { EVENT_CONFIG } from "@/lib/constants";

export const VenueSection = () => {
  return (
    <section className="py-20 bg-primary-900" id="venue">
      <div className="container mx-auto px-4 xl:max-w-[1100px]">
        <h2 className="ext-6xl md:text-8xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {EVENT_CONFIG.sections.venue.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          <div className="md:w-max w-full">
            <iframe
              src={EVENT_CONFIG.location.mapEmbedUrl}
              className="h-[300px] md:w-[600px] w-full"
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/3 space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 mr-3 text-green-700" />
                  <p className="text-lg">{EVENT_CONFIG.venue}</p>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3 text-green-700" />
                  <p className="text-lg">{EVENT_CONFIG.location.address}, {EVENT_CONFIG.location.city}</p>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="w-6 h-6 mr-3 text-green-700" />
                  <p className="text-lg">{EVENT_CONFIG.date}</p>
                </div>
              </CardContent>
            </Card>
            <p className="text-gray-300">
              {EVENT_CONFIG.sections.venue.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
