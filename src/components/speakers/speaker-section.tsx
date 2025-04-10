"use client";
import React, { useState } from 'react';
import { SPEAKERS } from "@/lib/constants";
import SpeakersCard from "@/components/speakers/speaker-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    const keynoteSpeaker = SPEAKERS.find(speaker => speaker.tag === 'keynote');

    return (
        <>
            <section className="min-h-screen bg-primary-900 text-center" id='speakers'>
                <div className="max-w-[900px] container mx-auto px-6 py-2">
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
                <div className="container mx-auto px-4 py-2 text-white mb-16">
                    {/* Keynote Speaker Section */}
                    <section className="mb-8">
                        {keynoteSpeaker && (
                            <SpeakersCard
                                speaker={keynoteSpeaker}
                                variant="keynote"
                            />
                        )}
                    </section>
                        {SPEAKERS
                            .filter((feature) => feature.tag === 'featured')
                            .map((expert, index) => (
                                <SpeakersCard
                                    key={expert.id}
                                    speaker={expert}
                                    variant="alternating"
                                    position={index % 2 === 0 ? 'right' : 'left'}
                                    className="my-6"
                                />
                        ))}
                    <section>

                    </section>
                </div>
                <div>
                    <Link href="/speakers" className="">
                        <Button
                            variant="outline"
                            className=" mx-auto w-[150px]  hover:bg-secondary-600 hover:text-primary-900 transition-all"
                        >
                            View All Speakers
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
