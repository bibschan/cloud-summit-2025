"use client";
import { EVENT_CONFIG } from "@/lib/constants";
import Image from "next/image";

function CloudInfoBanner() {
  return (
    <section className="bg-secondary-600 w-full p-6 lg:h-[320px] flex mx-auto justify-center item-center">
      <div className="container flex mx-auto justify-center item-center gap-4 md:gap-12 z-20">
        <Image
          src="/cloud-logo-white.svg"
          alt="Cloud Summit logo in all white. visualized as two swirls to make up a cloud shape with the words cloud summit under"
          width={150}
          height={150}
        />
        <h2 className="w-3/4 h-auto lg:text-3xl my-auto lg:leading-[70px]">
          {EVENT_CONFIG.about}
        </h2>
      </div>
    </section>
  );
}

export default CloudInfoBanner;
