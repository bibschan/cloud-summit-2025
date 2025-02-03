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
    <section className="py-20 bg-gray-900" id="highlights">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {EVENT_CONFIG.sections.highlights.title}
        </h2>

        <div className="w-full mx-auto px-4 md:py-6 py-4">
          <div className="relative flex justify-center">
            <Carousel
              className="md:w-full w-[90%]"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {EVENT_CONFIG.sections.highlights.images.map((image) => (
                  <CarouselItem
                    key={image.id}
                    className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
                  >
                    <div className="relative h-64 rounded-lg group">
                      <Image
                        src={image.path}
                        alt={`Event Photo ${image.id}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-lg font-semibold">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute lg:-left-5 -left-7 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border border-white p-4" />
              <CarouselNext className="absolute lg:-right-5 -right-7 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full border border-white p-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}; 