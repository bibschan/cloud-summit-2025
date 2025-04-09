"use client";
import React, { useState } from 'react';
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


export default function SpeakerSection() {
    const [selectedSpeakerId, setSelectedSpeakerId] = useState<number | null>(null);
    const keynoteSpeaker = SPEAKERS.find(speaker => speaker.name === "Matt Billman");

    const handleSpeakerClick = (id: number) => {
        setSelectedSpeakerId(id === selectedSpeakerId ? null : id);
    };
    return (
        <>
            <section className="min-h-screen bg-primary-900 ">
                <div className="max-w-[1100px] container mx-auto px-6 py-24">
                    <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
                        <div className="space-y-2">
                            <h1 className="text-6xl md:text-8xl  text-white">
                                Featured&nbsp;
                                <span className="block md:inline-block text-secondary-600 ">
                                    Speakers
                                </span>
                            </h1>
                        </div>
                    </section>
                </div>
                <div className="container mx-auto px-4 py-8 text-white">

                    {/* Keynote Speaker Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Keynote Speaker</h2>
                        {keynoteSpeaker && (
                            <SpeakersCard
                                speaker={keynoteSpeaker}
                                variant="keynote"
                            />
                        )}
                    </section>

                </div>
            </section>
        </>
    );
}
