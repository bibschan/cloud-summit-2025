"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import styles from "./sponsors-section.module.css";
import { CLOUDPLATFORMS } from "@/lib/constants";

interface SponsorImageProps {
    name: string;
    logo: string;
}

export const ProvidersSection = () => {
    return (
        <section className="py-20 bg-primary-900">
            <div className="container mx-auto px-4 pb-12">
                <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center White">
                    Cloud <span className="text-pale-gold">Platforms</span>
                </h2>
                <div className="relative">

                    {/* Left edge overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-900 to-transparent z-9" />
                    {/* Right edge overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-900 to-transparent z-9" />



                    <div className="overflow-hidden">
                        <div className={`flex ${styles.scrollContent}`}>
                            {[...CLOUDPLATFORMS, ...CLOUDPLATFORMS].map((provider, index) => (
                                <div
                                    key={`${provider.name}-${index}`}
                                    className="w-3/5 md:w-2/5 lg:w-1/4 shrink-0 px-2 md:px-4"
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
        <div className="flex h-40 items-center justify-center rounded-lg p-6">
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
