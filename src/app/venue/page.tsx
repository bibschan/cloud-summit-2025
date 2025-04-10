'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";
import { EVENT_CONFIG } from "@/lib/constants";
import { VenueSection } from "@/components/venue-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function VenuePage() {

    const images = [
        { src: "/venue/CloudSummit_2025_Floorplans_MainFloor.svg", title: "Main Floor" },
        { src: "/venue/CloudSummit_2025_Floorplans_2ndFloor.svg", title: "2nd Floor" },
        { src: "/venue/CloudSummit_2025_Floorplans_3rdFloor.svg", title: "3rd Floor" },
    ];


    const [selectedImage, setSelectedImage] = useState(images[0].src);

    return (
        <div className="min-h-screen text-white bg-primary-900 ">
            <Nav />
            <main className="pt-20 w-full bg-primary-900 " id="team">
                <div className=" max-w-[1100px] container px-4 md:px-6 mx-auto space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center text-white">
                        {EVENT_CONFIG.sections.venue.title}{" "}
                        <span className="text-lemon-lime">Information</span>
                    </h1>
                    <VenueSection />

                    <div className="w-full flex flex-col item-center justify-center gap-4  mb-8 " aria-label="Venue Maps contains one large image of the selected floor and a list of the floor from Main, 2nd floor, and 3rd floor.">
                        <h2 className="text-4xl md:text-6xl font-bold mt-12 text-center text-white">
                            Event{" "}
                            <span className="text-pale-gold">Floor Plan</span>
                        </h2>
                        <div className="relative w-full max-w-4xl h-auto aspect-video mx-auto ">
                            <Image src={selectedImage} alt="Selected" fill className="object-cover rounded-lg" />
                        </div>
                        <ul className="flex gap-4 justify-center md:flex-row max-w-4xl w-full mx-auto overflow-x-scroll md:overflow-hidden">
                            {images.map((img, index) => (
                                <li key={index} className=" w-4/6 md:w-64 h-auto cursor-pointer aspect-video flex flex-col items-center"
                                    onClick={() => setSelectedImage(img.src)}
                                >
                                    <div className="relative w-4/6 md:w-64 h-auto cursor-pointer aspect-video flex flex-col items-center">
                                        <Image src={img.src} alt={`Thumbnail ${index + 1}`} fill
                                            className={`object-cover rounded-lg border-[3px] ${selectedImage === img.src ? 'border-primary-200' : 'border-transparent'
                                                } hover:border-primary-200`}
                                        />
                                    </div>

                                    <p className="text-center text-sm mt-2">{img.title}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href="https://vancouvercivictheatres.com/accessibility/#accessibility" target="_blank" className="mx-auto my-8">
                            <Button
                                size="lg"
                                variant="outline"
                                className=" hover:bg-lilac hover:text-primary-900 transition-all"
                            >
                                Venue Accessibility Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
}
