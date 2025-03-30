"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import type { EventType } from "@/lib/schedule"
import Image from "next/image"
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

type EventModalProps = {
  event: EventType
  position: { x: number; y: number }
  onClose?: () => void
  isMobile: boolean
}

const MODAL_WIDTH = 384
const MODAL_HEIGHT = 300 // Approximate height
const PADDING = 16 // Padding from window edges
const CURSOR_OFFSET = 2 // Offset from cursor

export function EventModal({ event, position, onClose, isMobile }: EventModalProps) {
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
  const [imageError, setImageError] = useState(false)

  const calculatePosition = useCallback(() => {
    let left = position.x + CURSOR_OFFSET
    let top = position.y - 20

    // Check right edge
    if (left + MODAL_WIDTH + PADDING > window.innerWidth) {
      left = position.x - MODAL_WIDTH - CURSOR_OFFSET
    }

    // Check bottom edge
    if (top + MODAL_HEIGHT + PADDING > window.innerHeight) {
      top = window.innerHeight - MODAL_HEIGHT - PADDING
    }

    // Check top edge
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
    return imageError ? "/speakers/default-avatar.svg" : event.speaker?.photo
  }, [imageError, event.speaker?.photo])

  const style = useMemo(() => ({
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  }), [modalPosition.top, modalPosition.left])

  const handleClose = useCallback(() => {
    if (onClose) onClose()
  }, [onClose])

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-80 text-left">
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-full h-full max-w-md mx-auto bg-primary-800 overflow-auto flex flex-col gap-4">
            <div className="sticky top-0 flex justify-end p-4 bg-primary-800 ">
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 grow my-auto flex flex-col gap-2">
              <div className="flex flex-col items-start justify-center gap-4 ">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={imageSrc || ""}
                    alt={event.speaker?.name || ""}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                    priority
                    sizes="60px"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-body text-xl font-semibold text-gray-100">{event.title}</h3>
                  <p className="text-md text-gray-400">{event.speaker?.name}</p>
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
          </div>
        </div>
      </div>
    )
  }

  // For desktop: render a tooltip-style modal
  return (
    <div
      className="fixed border bg-primary-800 border-gray-800 rounded-lg shadow-2xl p-4 z-50 w-96 pointer-events-none text-left"
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
    >
      <div className="flex items-start justify-start space-x-4 bg-primary-800 text-left">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc || ""}
            alt={event.speaker?.name || ""}
            fill
            className="object-cover"
            onError={handleImageError}
            priority
            sizes="50px"
          />
        </div>
        <div className="flex flex-col justify-start item-start">
          <h3 className="font-body text-lg font-semibold text-gray-100">{event.title}</h3>
          <p className="text-sm text-gray-400">{event.speaker?.name}</p>
        </div>
      </div>

      <p className="mt-2 text-sm text-secondary-600">
        {event.startTime} - {event.endTime}
      </p>

      <p className="mt-2 text-sm text-gray-300">{event.description}</p>

      <div className="mt-2 flex flex-wrap gap-1">
        {event.tags?.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
