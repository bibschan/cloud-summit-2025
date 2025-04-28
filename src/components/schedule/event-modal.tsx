"use client"
import { useEffect, useState, useCallback, useMemo } from "react"
import type { EventType } from "@/lib/schedule"
import Image from "next/image"
import { X } from 'lucide-react'
import { SPEAKERS } from "@/lib/constants"

type EventModalProps = {
  event: EventType
  onClose?: () => void
  isMobile: boolean
}

type SpeakerType = {
  id: number;
  name: string;
  title?: string;
  company?: string;
  tag?: string;
  bio?: string;
  talk_title?: string;
  talk_summary?: string;
  image?: string;
}

export function EventModal({ event, onClose, isMobile }: EventModalProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const speakerInfos = useMemo(() => {
    if (event.speaker?.speakerId && Array.isArray(event.speaker.speakerId) && event.speaker.speakerId.length > 0) {
      return event.speaker.speakerId.map(id =>
        SPEAKERS.find(speaker => speaker.id === id)
      ).filter(Boolean) as SpeakerType[];
    }
    return [];
  }, [event.speaker?.speakerId]);

  const handleImageError = useCallback((speakerId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [speakerId]: true
    }));
  }, []);

  const getImageSrc = useCallback((speaker: SpeakerType) => {
    if (imageErrors[speaker.id]) return "/speakers/default-avatar.svg";
    if (speaker.image) return speaker.image;
    return "/speakers/default-avatar.svg";
  }, [imageErrors]);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const displayTitle = useMemo(() => {
    if (event.tags?.includes("Break")) {
      return event.title;
    }
    if (speakerInfos.length > 0 && speakerInfos[0]?.talk_title) {
      return speakerInfos[0].talk_title;
    }
    return event.title;
  }, [event.title, event.tags, speakerInfos]);

  const displayDescription = useMemo(() => {
    if (event.tags?.includes("Break") || event.tags?.includes("Activities")) {
      return event.description;
    }
    if (speakerInfos.length > 0 && speakerInfos[0]?.talk_summary) {
      return speakerInfos[0].talk_summary;
    }
    return event.description;
  }, [event.description, event.tags, speakerInfos]);

  const speakerNames = useMemo(() => {
    return speakerInfos.map(speaker => speaker.name).join(" & ");
  }, [speakerInfos]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-80 text-left">
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div className="w-full h-full max-w-md mx-auto bg-primary-800 overflow-auto flex flex-col md:gap-4 px-6 pb-4 md:rounded-lg md:shadow-xl md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto md:mx-1">
          <div className="sticky top-0 flex justify-end p-0 bg-primary-800 z-10 pt-4">
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white py-2"
            >
              <X size={24} />
            </button>
          </div>
          {event.tags?.includes("Activities") ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="font-body text-xl font-semibold text-gray-100">{displayTitle}</h3>
              </div>
              <p className="mt-4 text-md text-gray-300">{displayDescription}</p>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-4 md:h-full mx-5">
                {speakerInfos.length > 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    {speakerInfos.length === 1 ? (
                      // Single speaker display
                      <div className="relative w-[60px] md:w-[150px] h-[60px] md:h-[150px] rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={getImageSrc(speakerInfos[0])}
                          alt={speakerInfos[0].name}
                          fill
                          className="object-cover object-top z-0"
                          onError={() => handleImageError(speakerInfos[0].id)}
                          priority
                          sizes="150px"
                        />
                      </div>
                    ) : (
                      // Multiple speakers display
                      <div className="flex flex-col sm:flex-row gap-2">
                        {speakerInfos.map((speaker, index) => (
                          <div key={speaker.id} className="flex flex-col items-center ">
                            <div className="relative w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={getImageSrc(speaker)}
                                alt={speaker.name}
                                fill
                                className="object-cover object-top z-0"
                                onError={() => handleImageError(speaker.id)}
                                priority
                                sizes="100px"
                              />
                            </div>
                            <p className="text-md text-gray-400 mt-1">{speaker.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}

                <div className={`${speakerInfos.length > 0 ? 'md:h-[150px]' : ''} flex-1 flex flex-col justify-evenly md:gap-4 md:ml-4`}>
                  <h3 className="font-body text-lg md:text-3xl font-semibold text-gray-100">{displayTitle}</h3>
                  {speakerInfos.length === 1 && (
                    <p className="text-md md:text-xl text-gray-400">{speakerInfos[0].name}</p>
                  )}
                  {speakerInfos.length > 1 && speakerInfos.length <= 1 && (
                    <p className="text-md text-gray-400">{speakerNames}</p>
                  )}
                  <p className="mt-1 text-md text-secondary-600">
                    {event.startTime} - {event.endTime}
                  </p>
                </div>
              </div>
              <p className="flex-grow mt-4 text-md text-gray-300 mx-5 mb-8">{displayDescription}</p>

            </>
          )}
        </div>
      </div>
    </div>
  )
}
