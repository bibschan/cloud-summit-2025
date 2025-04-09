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

type SpeakerModalProps = {
    isModalOpen: boolean;
    closeModal: () => void;
    name: string;
    title: string;
    company: string;
    image?: string;
    talk_title: string;
    talk_summary: string;
    bio?: string;
  };

const SpeakerModal: React.FC<SpeakerModalProps> = ({ isModalOpen, closeModal, name, title, company, image, talk_title, talk_summary, bio }) => {
    if (!isModalOpen) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <div className="relative rounded-full overflow-hidden w-20 h-20 flex-shrink-0 border-4 border-blue-400">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400 text-lg">{name.charAt(0)}</span>
                                    </div>
                                )}
                            </div>
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold text-white">{name}</h2>
                                <p className="text-lg text-gray-300">
                                    {title}, {company}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={closeModal}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <X size={24} className="text-white" />
                        </button>
                    </div>

                    {/* Accordion Section */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="talk">
                            <AccordionTrigger className="text-white text-xl font-medium">
                                Talk Details
                            </AccordionTrigger>
                            <AccordionContent>
                                <h3 className="text-xl font-bold text-white mb-2">{talk_title}</h3>
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
    );
};

export default SpeakerModal;
