"use client";

import React from "react";
import Image from "next/image";
import { CLOUDPLATFORMS } from "@/lib/constants";

interface SponsorImageProps {
    name: string;
    logo: string;
}

export const ProvidersSection = () => {

    const duplicatedProviders = [...CLOUDPLATFORMS, ...CLOUDPLATFORMS];

    return (
        <section className="py-20 bg-primary-900">
            <div className="container mx-auto px-4 pb-12">
                <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center White">
                    Explore Cloud <span className="text-lilac">Platforms</span>
                </h2>
                <div className="relative">

                    {/* Left edge overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-900 to-transparent z-9" />
                    {/* Right edge overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-900 to-transparent z-9" />


                    <div className="overflow-hidden">
                        <div className='scrollContent '>
                            {duplicatedProviders.map((provider, index) => (
                                <div
                                    key={`${provider.name}-${index}`}
                                    className="w-[200px] shrink-0 px-2 md:px-4"
                                >
                                    <ProviderImage name={provider.name} logo={provider.logo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function ProviderImage({ name, logo }: SponsorImageProps) {
    return (
        <div className="flex h-40 items-center justify-center rounded-lg md:p-6">
            <Image
                src={logo}
                alt={`${name} logo`}
                width={180}
                height={100}
                className="h-16 w-auto object-contain max-w-[180px] md:w-full md:max-h-14 lg:max-h-16 lg:min-h-14"
            />
        </div>
    );
}
