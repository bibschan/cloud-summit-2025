"use client";
import { EVENT_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function CharitySection() {
  const openCharityLink = () => {
    window.open(EVENT_CONFIG.sections.charity.charities[0].link, "_blank");
  };

  return (
    <section className="py-20 md:px-4 bg-primary-900 w-full" id="venue ">
      <article className="container px-4 mx-auto flex flex-col md:flex-row items-start justify-center w-full gap-8 mb-4 h-full  text-center">
        <div className="max-w-[900px] h-full flex flex-col items-center justify-between gap-8 lg:gap-16">
          <h2 className="text-6xl md:text-8xl  bg-clip-text text-white">
            Make a Difference{" "}
            <span className="block text-brink-pink">Together</span>
          </h2>
          <p className="flex-grow text-2xl font-semibold  text-gray-600 dark:text-gray-300">
            {EVENT_CONFIG.sections.charity.description}
          </p>
          <p className="flex-grow text-lg text-gray-600 dark:text-gray-300">
            {EVENT_CONFIG.sections.charity.content}
          </p>
          <Button
            onClick={openCharityLink}
            variant="outline"
            className="w-[300px] bg-secondary-600 hover:text-black "
          >
            Learn More about {EVENT_CONFIG.sections.charity.charities[0].name}
          </Button>
        </div>
      </article>
    </section>
  );
}
