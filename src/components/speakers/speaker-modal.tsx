'use client';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SpeakersCard from './speaker-card';

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
type SpeakerModalProps = {
    isModalOpen: boolean;
    closeModal: () => void;
    speaker: Speaker;
};

const SpeakerModal: React.FC<SpeakerModalProps> = ({ isModalOpen, closeModal, speaker }) => {
    if (!isModalOpen) return null;
    const { name, title, company, bio, talk_title, image, talk_summary } = speaker;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-primary-900 rounded-lg shadow-xl w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto">
                <div className="p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col items-end w-full ">

                        <button
                            onClick={closeModal}
                            className="pb-2 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <X size={24} className="text-white" />
                        </button>
                    </div>
                    <div className='flex mb-4'>

                        <SpeakersCard
                            speaker={speaker}
                            variant="selected"
                        />
                        {/* Accordion Section */}
                        <div className='flex-1 p-4'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="talk">
                                    <AccordionTrigger className="text-left text-white text-xl font-medium">
                                        <p className=" mb-2">{talk_title}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>

                                        <p className="text-gray-300">{talk_summary}</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="bio">
                                    <AccordionTrigger className="text-white text-xl font-medium">
                                        Speaker Bio
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-300">{bio || "No bio available."}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default SpeakerModal;
