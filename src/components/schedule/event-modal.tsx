"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import type { EventType } from "@/lib/schedule"
import Image from "next/image"

type EventModalProps = {
  event: EventType
  position: { x: number; y: number }
}

const MODAL_WIDTH = 288 // w-72 = 18rem = 288px
const MODAL_HEIGHT = 300 // Approximate height
const PADDING = 16 // Padding from window edges
const CURSOR_OFFSET = 2 // Offset from cursor

export function EventModal({ event, position }: EventModalProps) {
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
    const updatePosition = () => {
      setModalPosition(calculatePosition())
    }

    updatePosition()

    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [calculatePosition])

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const imageSrc = useMemo(() => {
    return imageError ? "/speakers/default-avatar.svg" : event.speaker.photo
  }, [imageError, event.speaker.photo])

  const style = useMemo(() => ({
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  }), [modalPosition.top, modalPosition.left])

  return (
    <div
      className="fixed bg-gray-900/95 border border-gray-800 rounded-lg shadow-2xl p-4 z-50 w-72 pointer-events-none"
      style={style}
    >
      <div className="flex items-start space-x-4">
        <div className="relative w-[50px] h-[50px] rounded-full bg-gray-800 overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={event.speaker.name}
            fill
            className="object-cover"
            onError={handleImageError}
            priority
            sizes="50px"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-100">{event.title}</h3>
          <p className="text-sm text-gray-400">{event.speaker.name}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {event.startTime} - {event.endTime}
      </p>
      <p className="mt-2 text-sm text-gray-300">{event.description}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {event.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
} 