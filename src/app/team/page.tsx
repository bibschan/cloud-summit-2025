'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";
import { EVENT_CONFIG } from "@/lib/constants";

import { cn } from "@/lib/utils"

export default function TeamPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Colors for hover state only
    const hoverColors = [
        "text-pink-400",
        "text-yellow-400",
        "text-green-400",
        "text-blue-400",
        "text-purple-400",
        "text-red-400",
        "text-orange-400",
        "text-teal-400",
        "text-cyan-400",
        "text-indigo-400",
    ]
    return (
        <div className="min-h-screen text-white ">
            <Nav />
            <main className="w-full bg-primary-900 pt-8 md:py-20" id="team">
                <div className="container px-4 md:px-6 mx-auto space-y-8">
                    {/* Header Section */}
                    <section className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl tracking-tighter text-white">
                                Meet the &nbsp;
                                <span className=" text-secondary-600 ">
                                    Dream Team
                                </span>
                            </h2>
                            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                                Meet the dedicated individuals who make our mission possible through their generous contribution of time and
                                talent.
                            </p>
                        </div>
                    </section>
                    <section>
                        <p className="text-lg md:text-3xl text-center  text-primary-50">Committee</p>
                        <div className="relative w-full h-auto aspect-video">
                            <Image
                                src={EVENT_CONFIG.team.image}
                                alt='Lego depiction of team members'
                                fill
                                className="w-full h-auto"
                            />
                        </div>

                    </section>
                    <section>
                        <p className="text-lg md:text-3xl text-primary-50 text-center mb-6">
                            Our Amazing Volunteers
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-5xl mx-auto font-bold">
                            {EVENT_CONFIG.team.volunteers.map((volunteer, index) => (
                                <a
                                    key={index}
                                    className={cn(
                                        "text-xl font-medium cursor-pointer transition-colors duration-300 hover:text-3xl transition-all",
                                        hoveredIndex === index ? hoverColors[index % hoverColors.length] : "text-white",
                                    )}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    href={volunteer.link}
                                >
                                    {volunteer.name}
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main >
            <Footer />
        </div >
    );
}
