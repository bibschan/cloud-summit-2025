"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { EVENT_CONFIG } from "@/lib/constants";

export const NominateSection = () => {
  return (
    <section className="w-full bg-primary-900 pt-8 md:py-20 z-20" id="nominate">
      <div className="max-w-[900px] px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center pb-8">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl tracking-tighter text-white">
              Nominate &&nbsp;
              <span className=" text-pale-gold">Vote</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-8 mb-8 md:max-w-[600px] mx-auto text-center md:text-left">
            <h3 className="text-3xl md:text-5xl">
              Nominate Your Company for the{" "}
              <span className="block text-pale-gold">
                2025 Canadian Cloud Award
              </span>
            </h3>
            <p className="text-sm md:text-lg">
              {EVENT_CONFIG.sections.nominate.description}
            </p>
            <p className="text-sm md:text-lg">
              {EVENT_CONFIG.sections.nominate.cta}
            </p>
            <Link href="/nominate" className="">
              <Button
                variant="outline"
                className="w-[300px]  hover:bg-pale-gold hover:text-primary-900 transition-all font-bold"
              >
                Nominate & Cast Your Vote
              </Button>
            </Link>
          </div>
          <Image
            src="/nominate/award.svg"
            alt="Cloud Summit Award in blue with yellow sparkles"
            width={234}
            height={400}
            className="mx-auto order-first md:order-none w-full max-w-[134px] min-w-0 h-auto"
          />
        </div>
      </div>
    </section>
  );
};
