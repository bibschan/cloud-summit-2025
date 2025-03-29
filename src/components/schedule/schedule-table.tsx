"use client"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventModal } from "./event-modal"
import { events, timeSlots, type EventType } from "@/lib/schedule"

const TIME_SLOT_HEIGHT = 250;
const EVENT_GAP = 2;

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
const firstSlotMinutes = timeToMinutes(timeSlots[0]);

const isShortTalk = (startTime: string, endTime: string) => {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  return endMinutes - startMinutes <= 15;
}

export function ScheduleTable() {
  const [activeEvent, setActiveEvent] = useState<EventType | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeStage, setActiveStage] = useState("1");

  const handleMouseEnter = useCallback((event: EventType) => {
    setActiveEvent(event)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveEvent(null)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const calculateEventPosition = (event: EventType, index: number) => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const minutesSinceStart = startMinutes - firstSlotMinutes;
    const duration = endMinutes - startMinutes
    const top = (minutesSinceStart / 60) * TIME_SLOT_HEIGHT + 70
    const rawHeight = (duration / 60) * TIME_SLOT_HEIGHT;
    const gapAdjustment = index > 0 ? EVENT_GAP : 0;

    return {
      ...event,
      top: top + gapAdjustment,

      height: Math.max(rawHeight - gapAdjustment, 20)
    };
  };

  return (
    <div
      className="w-full bg-primary-900 rounded-2xl shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <div className="md:hidden sticky top-0 z-20 bg-primary-800 p-4">
        <Tabs value={activeStage} onValueChange={setActiveStage} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900">
            <TabsTrigger
              value="1"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-gray-100 text-gray-400"
            >
              Main Stage
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-gray-100 text-gray-400"
            >
              Grand Hall
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_1fr] min-w-[300px] md:min-w-[600px]">
        <div className="col-start-1 row-start-1 flex flex-col">
          <div className="h-[68px] md:h-[70px]"></div>
          {timeSlots.map((time) => (
            <div
              key={time}
              className="pt-1 px-1 md:px-4 flex items-start justify-end text-xl font-bold text-white border-t-[3px] border-primary-900 bg-primary-800"
              style={{ height: `${TIME_SLOT_HEIGHT}px` }}
            >
              {time}
            </div>
          ))}

        </div>
        <div className="hidden md:grid md:grid-cols-2 col-start-2 md:col-start-2 md:col-span-2 row-start-1 h-16 gap-2 sticky top-0 z-10 ">
          <div className="flex items-center justify-center font-bold text-xl text-pale-gold bg-primary-800 mx-1">Main Stage</div>
          <div className="flex items-center justify-center font-bold text-xl text-pale-gold bg-primary-800 mr-2">Grand Hall</div>
        </div>
        {[1, 2].map((stage) => {
          const stageEvents = events
            .filter((event) => event.stage === stage)
            .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

          return (
            <div
              key={stage}
              className={cn(
                "col-start-2 row-start-1 relative",
                stage === 2 && "md:col-start-3",
                stage.toString() !== activeStage && "hidden md:block"
              )}
            >
              <div className="absolute inset-0"></div>
              {stageEvents.map((event, index) => {
                const isBreak = event.title.includes("Break");
                const isShort = isShortTalk(event.startTime, event.endTime);
                const position = calculateEventPosition(event, index);

                return (
                  <div
                    key={event.id}
                    className={cn(
                      "absolute left-1 right-2 p-2 cursor-pointer flex flex-col items-center justify-center",
                      "transition-colors duration-200",
                      isBreak ? "bg-secondary-500 text-white" : "bg-primary-800"
                    )}
                    style={{
                      top: `${position.top}px`,
                      height: `${position.height}px`,
                    }}
                    onMouseEnter={() => handleMouseEnter(event)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {!isBreak && !isShort && (
                      <p className="text-sm md:text-md  text-secondary-500">
                        {event.startTime} - {event.endTime}
                      </p>
                    )}
                    <h3 className={cn(
                      "font-body font-bold text-md md:text-xl text-center text-white",
                    )}>
                      {event.title}
                    </h3>
                    {!isBreak && (
                      <p className={cn(
                        "text-sm md:text-md text-center text-lemon-lime"
                      )}>
                        {event.speaker.name}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {activeEvent && <EventModal event={activeEvent} position={mousePosition} />}
    </div>
  )
}
