"use client";
import React, { useState } from 'react';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { SPEAKERS } from "@/lib/constants";
import SpeakersCard from "@/components/speakers/speaker-card";
interface Speaker {
    id: number;
    name: string;
    title: string;
    company: string;
    bio?: string;
    talk_title?: string;
    talk_summary?: string;
    image?: string;
}


export default function SpeakersPage() {
    const [selectedSpeakerId, setSelectedSpeakerId] = useState<number | null>(null);
    const keynoteSpeaker = SPEAKERS.find(speaker => speaker.name === "Matt Billman");

    const handleSpeakerClick = (id: number) => {
        setSelectedSpeakerId(id === selectedSpeakerId ? null : id);
    };
    return (
        <>
            <Nav />
            <main className="min-h-screen bg-primary-900 ">
                <div className="max-w-[1100px] container mx-auto px-6 py-24">
                    <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
                        <div className="space-y-2">
                            <h1 className="text-6xl md:text-8xl  text-white">
                                Our&nbsp;
                                <span className="block md:inline-block text-secondary-600 ">
                                    Speakers
                                </span>
                            </h1>
                        </div>
                    </section>
                </div>
                <div className="container mx-auto px-4 py-8 text-white">

                    {/* All Speakers Section */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-center">All Speakers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SPEAKERS.map(speaker => (
                                <div
                                    key={speaker.id}
                                    onClick={() => handleSpeakerClick(speaker.id)}
                                    className="cursor-pointer transition-all duration-300 hover:shadow-lg p-4 rounded-lg"
                                >
                                    <SpeakersCard
                                        speaker={speaker}
                                        variant={selectedSpeakerId === speaker.id ? 'selected' : 'list'}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
