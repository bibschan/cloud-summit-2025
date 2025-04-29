'use client';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
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
    allSpeakers: Speaker[];
    onNavigate: (speaker: Speaker) => void;
};

const SpeakerModal: React.FC<SpeakerModalProps> = ({
    isModalOpen,
    closeModal,
    speaker,
    allSpeakers,
    onNavigate
}) => {
    if (!isModalOpen) return null;

    const { name, title, company, bio, talk_title, talk_summary } = speaker;

    // Find current speaker index in the array
    const currentIndex = allSpeakers.findIndex(s => s.id === speaker.id);

    // Determine if we can navigate to previous/next speakers
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < allSpeakers.length - 1 && currentIndex !== -1;

    // Navigate to previous speaker
    const goToPrevious = () => {
        if (hasPrevious) {
            onNavigate(allSpeakers[currentIndex - 1]);
        }
    };

    // Navigate to next speaker
    const goToNext = () => {
        if (hasNext) {
            onNavigate(allSpeakers[currentIndex + 1]);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            {hasPrevious && (
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors"
                    aria-label="Previous speaker"
                >
                    <ChevronLeft className='hidden md:block w-16 h-16' />
                </button>
            )}

            <div className="bg-primary-900 rounded-lg shadow-xl w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto md:mx-12">
                <div className="p-6 flex flex-col">
                    <div className="pb-2 flex flex-col items-end w-full ">
                        <button
                            onClick={closeModal}
                            className="rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <X size={24} className="text-white" />
                        </button>
                    </div>
                    <div className='flex flex-col md:flex-row mb-4'>
                        <div className='mx-auto'>
                            <SpeakersCard
                                speaker={speaker}
                                variant="focused"
                            />
                        </div>
                        {/* Accordion Section */}
                        <div className='flex-1 p-4'>
                            <Accordion type="single" collapsible defaultValue='talk'>
                                <AccordionItem value="talk" >
                                    <AccordionTrigger className="text-left text-white text-xl font-medium">
                                        <p className="mb-2">{talk_title}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-white">{talk_summary || "Talk summary coming soon."}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="bio">
                                    <AccordionTrigger className="text-white text-xl font-medium">
                                        Speaker Bio
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-white">{bio || "No bio available."}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {hasNext && (
                <button
                    onClick={goToNext}
                    className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors"
                    aria-label="Next speaker"
                >
                    <ChevronRight  className='hidden md:block w-16 h-16' />
                </button>
            )}
        </div>
    );
};

export default SpeakerModal;
