import { EVENT_CONFIG } from "@/lib/constants";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HighlightsSection = () => {
  return (
    <section className="py-20 bg-primary-900" id="highlights">
      <div className="container mx-auto">
        <h2 className="ext-6xl md:text-8xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {EVENT_CONFIG.sections.highlights.title}
        </h2>

        <div className="hidden md:block  rounded-2xl col-span-2 row-span-1 overflow-hidden">
          <Image
            src="/past-events/cloudsummit.png"
            alt="Cloud Summit 2025 Logo with text under reading Cloud Summit"
            width={200}
            height={118}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="rounded-2xl bg-pink-500 p-4 col-span-2 row-span-1 flex flex-col justify-center text-center">
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            21+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Presentations & Workshops
          </p>
        </div>
      </div>
    </section>
  );
};
