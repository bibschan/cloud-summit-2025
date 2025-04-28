"use client";
import React, { useState } from 'react';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { SPEAKERS } from "@/lib/constants";
import SpeakersCard from "@/components/speakers/speaker-card";
import SpeakerModal from "@/components/speakers/speaker-modal";
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
    const [hoveredSpeakerId, setHoveredSpeakerId] = useState<number>(0);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSpeakerSelect = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNavigate = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
    };

    const handleSpeakerHover = (speakerId: number) => {
        setHoveredSpeakerId(speakerId);
    };
    return (
        <>
            <Nav />
            <main className="min-h-screen bg-primary-900 ">
                <div className="max-w-[1000px] container mx-auto px-6 py-24 text-white">
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
                    <section>
                        <div className="flex flex-wrap justify-center gap-8">
                            {SPEAKERS.map(speaker => (
                                <div
                                    key={speaker.id}
                                    onMouseEnter={() => handleSpeakerHover(speaker.id)}
                                    onMouseLeave={() => handleSpeakerHover(0)}
                                    className='w-full md:w-1/2 lg:w-[30%]'
                                >
                                    <SpeakersCard
                                        speaker={speaker}
                                        variant={hoveredSpeakerId === speaker.id ? "selected" : "list"}
                                        onSpeakerSelect={handleSpeakerSelect}
                                    />
                                </div>
                            ))}

                        </div>
                        {isModalOpen && selectedSpeaker && (
                            <SpeakerModal
                                isModalOpen={isModalOpen}
                                closeModal={handleCloseModal}
                                speaker={selectedSpeaker}
                                allSpeakers={SPEAKERS}
                                onNavigate={handleNavigate}
                            />
                        )}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
