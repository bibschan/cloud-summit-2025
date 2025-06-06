'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";
import { EVENT_CONFIG, teamAreas } from "@/lib/constants";
import { cn } from "@/lib/utils"

export default function TeamPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            <main className="w-full bg-primary-900 py-10 md:py-20" id="team">
                <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-24">
                    <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl  text-white">
                                Meet the&nbsp;
                                <span className="block md:inline-block text-secondary-600 ">
                                    Dream Team
                                </span>
                            </h2>
                            <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto mb-12">
                                Meet the dedicated individuals who make our mission possible through their generous contribution of time and
                                talent.
                            </p>
                        </div>

                        <h3 className="doto-text text-2xl md:text-3xl text-center  text-secondary-600 uppercase">2025 Committee Members</h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 w-full h-auto gap-4 px-8">
                            {EVENT_CONFIG.team.commitee.map((member, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={member.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-auto flex flex-col justify-top items-center "

                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <Image
                                            src={member.image}
                                            alt={member.title}
                                            width={100}
                                            height={200}
                                            className="mb-4"
                                        />
                                        <h4 className={cn(
                                            "font-heading text-lg font-medium cursor-pointer  duration-300  transition-all",
                                            hoveredIndex === index ? hoverColors[index % hoverColors.length] : "text-white",
                                        )}>{member.title}</h4>
                                    </a>
                                );
                            })}
                        </div>
                    </section>

                    <section className="flex flex-col items-center justify-center space-y-4 text-center px-8">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl  text-white text-center mb-6">
                                Our Amazing <span className="text-pale-gold">Volunteers</span>
                            </h2>
                            <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto mb-12">
                                Meet the talented people behind the scenes.
                            </p>
                        </div>

                        <h3 className="doto-text font-bold uppercase text-pale-gold text-2xl md:text-3xl  text-center">Website & Design Team</h3>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-14 max-w-5xl mx-auto font-bold px-8">
                            {EVENT_CONFIG.team.volunteers.map((volunteer, index) => (
                                <a
                                    key={index}
                                    className={cn(
                                        "font-heading text-xl font-medium cursor-pointer  duration-300  transition-all",
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
