"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventModal } from "./event-modal"
import { events, timeSlots, type EventType } from "@/lib/schedule"

const calculateEventHeight = (startTime: string, endTime: string) => {
  const start = timeSlots.indexOf(startTime)
  const end = timeSlots.indexOf(endTime)
  return (end - start) * 60 - 4 // Each slot is 60px high, subtract 4px for gap
}

const calculateEventTop = (startTime: string) => {
  return timeSlots.indexOf(startTime) * 60 + 2 // Add 2px for top gap
}

export function ScheduleTable() {
  const [activeEvent, setActiveEvent] = useState<EventType | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeStage, setActiveStage] = useState("1")

  const handleMouseEnter = useCallback((event: EventType) => {
    setActiveEvent(event)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveEvent(null)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  return (
    <div
      className="w-full overflow-x-auto bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <div className="md:hidden sticky top-0 z-20 bg-gray-900/50 backdrop-blur-xl p-4 border-b border-white/10">
        <Tabs value={activeStage} onValueChange={setActiveStage} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900">
            <TabsTrigger
              value="1"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-gray-100 text-gray-400"
            >
              Stage 1
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-gray-100 text-gray-400"
            >
              Stage 2
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_1fr] min-w-[300px] md:min-w-[600px]">
        <div className="col-start-1 row-start-1 flex flex-col">
          <div className="h-12 md:h-16"></div>
          {timeSlots.map((time) => (
            <div key={time} className="h-[60px] p-2 flex items-center justify-end pr-4 text-sm text-white/40">
              {time}
            </div>
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-2 col-start-2 md:col-start-2 md:col-span-2 row-start-1 h-16 bg-gray-900/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-10">
          <div className="flex items-center justify-center font-medium text-white">Main Stage</div>
          <div className="flex items-center justify-center font-medium text-white border-l border-white/10">Grand Hall</div>
        </div>
        {[1, 2].map((stage) => (
          <div
            key={stage}
            className={cn(
              "col-start-2 row-start-1 relative",
              stage === 2 && "md:col-start-3",
              stage.toString() !== activeStage && "hidden md:block"
            )}
          >
            <div className="absolute inset-0 border-l border-white/10"></div>
            {events
              .filter((event) => event.stage === stage)
              .map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    "absolute left-2 right-2 p-2 rounded-md cursor-pointer",
                    "transition-colors duration-200 ",
                    event.color
                  )}
                  style={{
                    top: `${calculateEventTop(event.startTime) + 64}px`,
                    height: `${calculateEventHeight(event.startTime, event.endTime)}px`,
                  }}
                  onMouseEnter={() => handleMouseEnter(event)}
                  onMouseLeave={handleMouseLeave}
                >
                  <h3 className="font-medium text-sm truncate text-white ">{event.title}</h3>
                  <p className="text-xs text-white/80">
                    {event.startTime} - {event.endTime}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
      {activeEvent && <EventModal event={activeEvent} position={mousePosition} />}
    </div>
  )
}
