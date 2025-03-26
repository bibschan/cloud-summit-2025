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
    <section className=" py-20  bg-primary-900" id="highlights">
      <div
        className="container mx-auto flex flex-col md:grid grid-cols-6 grid-rows-5 gap-4 p-4"
        aria-label="Highlights for the 2025 cloud summit"
      >
        <div className="hidden md:block rounded-2xl row-span-3">
          <Image
            src="/past-events/awsDay-6.svg"
            alt="Two men looking at ipad"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl bg-lemon-lime p-4 col-span-3 row-span-2 text-black flex flex-col justify-center text-center">
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            $10,000+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Charity Donation Goal
          </p>
        </div>
        <div className="hidden md:block rounded-2xl col-span-2 row-span-2">
          <Image
            src="/past-events/AWSDay-7.svg"
            alt="Two men looking at ipad"
            width={100}
            height={100}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="hidden md:block rounded-2xl bg-pale-gold p-4 "></div>
        <div className="order-first md:order-none rounded-2xl bg-primary-800 p-4 col-span-2 row-span-3 flex justify-center">
          <Image
            src="/past-events/cloud-logo.svg"
            alt="Cloud Summit 2025 Logo with text under reading Cloud Summit"
            width={192}
            height={177}
            className="m-auto"
          />
        </div>
        <div className="rounded-2xl bg-secondary-600 p-4 col-span-2 row-span-2 text-white flex flex-col justify-center text-center">
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            780+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            In-Person Attendees
          </p>
        </div>
        <div className="rounded-2xl bg-lilac p-4 col-span-2 row-span-2 flex flex-col justify-center text-center">
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            21+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Presentations & Workshops
          </p>
        </div>
        <div className="hidden md:block rounded-2xl col-span-2 row-span-2">
          <Image
            src="/past-events/AWSDay-9.svg"
            alt="Three men standing smiling at each other"
            width={200}
            height={118}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="hidden md:block  rounded-2xl col-span-2 row-span-1 overflow-hidden">
          <Image
            src="/past-events/cloudsummit.png"
            alt="Cloud Summit 2025 Logo with text under reading Cloud Summit"
            width={200}
            height={118}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="rounded-2xl bg-brink-pink p-4 col-span-2 row-span-1 flex flex-col justify-center text-center text-black">
          <h3 className={`font-highlight text-xl md:text-8xl font-semibold`}>
            12+
          </h3>
          <p className="font-semibold text-sm md:text-lg">
            Sponsors & Communities
          </p>
        </div>
      </div>
    </section>
  );
};
