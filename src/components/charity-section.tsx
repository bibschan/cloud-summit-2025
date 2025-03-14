"use client";
import { EVENT_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CharitySection() {
  const openCharityLink = () => {
    window.open(EVENT_CONFIG.sections.charity.charities[0].link, "_blank");
  };

  return (
    <section
      className="py-20 md:px-4 bg-gradient-to-b from-black to-gray-900"
      id="venue "
    >
      <article className="container px-4 xl:max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-center w-full gap-8 mb-4 h-full">
        <div className="md:max-w-[500px] h-full flex flex-col  justify-between gap-8 lg:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            {EVENT_CONFIG.sections.charity.title}
          </h2>
          <h3 className="flex-grow text-md text-gray-600 dark:text-gray-300">
            {EVENT_CONFIG.sections.charity.description}
          </h3>
          <Button
            onClick={openCharityLink}
            variant="outline"
            className="w-full mg:w-1/2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black "
          >
            Learn More about {EVENT_CONFIG.sections.charity.charities[0].name}
          </Button>
        </div>
        <figure className="md:w-4/5 space-y-6">
          <div className="relative w-full aspect-video">
            <Image
              src={EVENT_CONFIG.sections.charity.charities[0].images[0].path}
              alt={EVENT_CONFIG.sections.charity.charities[0].images[0].caption}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <div className="w-[calc(100%-1rem)] flex flex-row gap-4">
            <div className="relative w-1/2 aspect-video">
              <Image
                src={EVENT_CONFIG.sections.charity.charities[0].images[1].path}
                alt={
                  EVENT_CONFIG.sections.charity.charities[0].images[1].caption
                }
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
            </div>
            <div className="relative w-1/2 aspect-video">
              <Image
                src={EVENT_CONFIG.sections.charity.charities[0].images[2].path}
                alt={
                  EVENT_CONFIG.sections.charity.charities[0].images[2].caption
                }
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 50vw, 40vw"
              />
            </div>
          </div>
        </figure>
      </article>
      {/* <div className="grid md:grid-cols-1 gap-8 xl:max-w-[1100px] mx-auto px-4 text-center">
        <Card className="w-fit bg-gray-800 border-gray-700 lg:flex xl:px-8 ">
          <div className="w-full lg:w-full lg:h-full flex justify-center xl:justify-start items-center p-4">
            <div className="relative w-48 h-24">
              <Image
                src={EVENT_CONFIG.sections.charity.charities[0].logo}
                alt={EVENT_CONFIG.sections.charity.charities[0].name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
          </div>

          <div>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                About {EVENT_CONFIG.sections.charity.charities[0].name}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-300 pb-4 text-left">
                {EVENT_CONFIG.sections.charity.charities[0].description}
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button
                onClick={openCharityLink}
                variant="outline"
                className=" border-green-500 text-green-500 hover:bg-green-500 hover:text-black "
              >
                Learn More about{" "}
                {EVENT_CONFIG.sections.charity.charities[0].name}
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div> */}
    </section>
  );
}
