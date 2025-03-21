"use client";
import { EVENT_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CharitySection() {
  const openCharityLink = () => {
    window.open(EVENT_CONFIG.sections.charity.charities[0].link, "_blank");
  };

  return (
    <section className="py-20 md:px-4 bg-primary-900 w-full" id="venue ">
      <article className="container px-4 mx-auto flex flex-col md:flex-row items-start justify-center w-full gap-8 mb-4 h-full  text-center">
        <div className="max-w-[900px] h-full flex flex-col items-center justify-between gap-6 lg:gap-10">
          <h2 className="text-6xl md:text-8xl  bg-clip-text text-white">
            Make a Difference{" "}
            <span className="block text-brink-pink">Together</span>
          </h2>
          <Image
            src='/charity/ugm.svg'
            alt='five circles showcasing Union Gospel Mission(UGM). First circle is the UGM van. Second circle UGM volunteer passing out food. Third circle UGM logo. Fourth circle man handing out coffee. Fifth circle man and daughter sitting on steps smilling. '
            width={380}
            height={100}
            className="w-full"
          />
          <p className="flex-grow text-xl md:text-2xl font-semibold  text-gray-600 dark:text-gray-300">
            We're proud to announce that
            <span className="font-heading text-brink-pink block text-2xl md:text-4xl uppercase">All profits from CLOUD SUMMIT will be donated</span>
            to Union Gospel Mission.
          </p>
          <p className="flex-grow text-md text-gray-600 dark:text-gray-300">
            {EVENT_CONFIG.sections.charity.content}
          </p>
          <Button
            onClick={openCharityLink}
            variant="outline"
            className="w-[300px] hover:bg-secondary-600 hover:text-black "
          >
            Learn More about {EVENT_CONFIG.sections.charity.charities[0].name}
          </Button>
        </div>
      </article>
    </section>
  );
}
