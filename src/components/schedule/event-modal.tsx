"use client"
import { useEffect, useState, useCallback, useMemo } from "react"
import type { EventType } from "@/lib/schedule"
import Image from "next/image"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { SPEAKERS } from "@/lib/constants"

type EventModalProps = {
  event: EventType
  position: { x: number; y: number }
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

const MODAL_WIDTH = 384
const MODAL_HEIGHT = 300
const PADDING = 16
const CURSOR_OFFSET = 2

export function EventModal({ event, position, onClose, isMobile }: EventModalProps) {
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
  const [imageError, setImageError] = useState(false)

  const speakerInfo = useMemo(() => {
    if (event.speaker?.speakerId && Array.isArray(event.speaker.speakerId) && event.speaker.speakerId.length > 0) {
      return SPEAKERS.find(speaker => speaker.id === event.speaker?.speakerId?.[0]) || null;
    }
    return null;
  }, [event.speaker?.speakerId]);

  const calculatePosition = useCallback(() => {
    let left = position.x + CURSOR_OFFSET
    let top = position.y - 20

    if (left + MODAL_WIDTH + PADDING > window.innerWidth) {
      left = position.x - MODAL_WIDTH - CURSOR_OFFSET
    }

    if (top + MODAL_HEIGHT + PADDING > window.innerHeight) {
      top = window.innerHeight - MODAL_HEIGHT - PADDING
    }

    if (top < PADDING) {
      top = PADDING
    }

    return { top, left }
  }, [position.x, position.y])

  useEffect(() => {
    if (!isMobile) {
      const updatePosition = () => {
        setModalPosition(calculatePosition())
      }
      updatePosition()
      window.addEventListener("resize", updatePosition)
      return () => window.removeEventListener("resize", updatePosition)
    }
  }, [calculatePosition, isMobile])

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const imageSrc = useMemo(() => {
    if (imageError) return "/speakers/default-avatar.svg";
    if (speakerInfo?.image) return speakerInfo.image;
    return "/speakers/default-avatar.svg";
  }, [imageError, speakerInfo]);

  const style = useMemo(() => ({
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  }), [modalPosition.top, modalPosition.left])

  const handleClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  const displayTitle = useMemo(() => {
    if (event.tags?.includes("Break")) {
      return event.title;
    }
    if (speakerInfo?.talk_title) {
      return speakerInfo.talk_title;
    }
    return event.title;
  }, [event.title, event.tags, speakerInfo]);

  const speakerName = speakerInfo?.name || "";

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-80 text-left">
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="w-full h-full max-w-md mx-auto bg-primary-800 overflow-auto flex flex-col gap-4 px-6">
            <div className="sticky top-0 flex justify-end p-4 bg-primary-800 px-0">
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
                <p className="mt-4 text-md text-gray-300">{event.description}</p>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-4">
                  {speakerInfo && (
                    <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={imageSrc}
                        alt={speakerName}
                        fill
                        className="object-cover"
                        onError={handleImageError}
                        priority
                        sizes="60px"
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-1">
                    <h3 className="font-body text-xl font-semibold text-gray-100">{displayTitle}</h3>
                    {speakerName && <p className="text-md text-gray-400">{speakerName}</p>}
                    <p className="mt-1 text-md text-secondary-600">
                      {event.startTime} - {event.endTime}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-md text-gray-300">{event.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags?.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed border bg-primary-800 border-gray-800 rounded-lg shadow-2xl p-4 z-50 w-96 pointer-events-none text-left"
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
    >
      <div className="flex items-start justify-start space-x-4 bg-primary-800 text-left">
        {event.tags?.includes("Activities") ? (
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-body text-xl font-semibold text-gray-100">{displayTitle}</h3>
            <p className="mt-4 text-md text-gray-300">{event.description}</p>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-start bg-primary-800 text-left">
            <div className="flex items-start gap-4 my-auto">
              {speakerInfo && (
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={imageSrc}
                    alt={speakerName}
                    fill
                    className="w-full h-full object-cover object-top"
                    onError={handleImageError}
                    priority
                    sizes="60px"
                  />
                </div>
              )}
              <div className="flex-1 space-y-1">
                <h3 className="font-body text-xl font-semibold text-gray-100">{displayTitle}</h3>
                {speakerName && <p className="text-md text-gray-400">{speakerName}</p>}
                <p className="mt-1 text-md text-secondary-600">
                  {event.startTime} - {event.endTime}
                </p>
              </div>
            </div>
            <p className="mt-4 text-md text-gray-300">{event.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags?.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
