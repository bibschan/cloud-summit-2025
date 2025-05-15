"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventModal } from "./event-modal";
import { timeSlots, type EventType } from "@/lib/schedule";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SPEAKERS } from "@/lib/constants";
import Image from "next/image";

const TIME_SLOT_HEIGHT = 250;
const EVENT_GAP = 2;

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const firstSlotMinutes = timeToMinutes(timeSlots[0]);

const isShortTalk = (startTime: string, endTime: string) => {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  return endMinutes - startMinutes <= 15;
};

const isActivityEvent = (event: EventType) => {
  return event.tags && event.tags.includes("Activities");
};

const getSpeakerInfo = (speakerId: number[] | null): SpeakerType | null => {
  if (!speakerId || !Array.isArray(speakerId) || speakerId.length === 0) return null;
  const primarySpeaker = SPEAKERS.find(speaker => speaker.id === speakerId[0]);
  if (!primarySpeaker) return null;
  if (speakerId.length > 1) {
    const allSpeakers = speakerId
      .map(id => SPEAKERS.find(speaker => speaker.id === id))
      .filter(Boolean)
      .map(speaker => speaker?.name);
    return {
      ...primarySpeaker,
      name: allSpeakers.join(" & ")
    };
  }
  return primarySpeaker;
};

type ScheduleTableProps = {
  events: EventType[];
  stages: Array<{ id: number; name: string }>;
  mode: "schedule" | "workshops";
};

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
};

export function ScheduleTable({
  events,
  stages,
  mode = "schedule",
}: ScheduleTableProps) {
  const [activeEvent, setActiveEvent] = useState<EventType | null>(null);
  const [activeStage, setActiveStage] = useState("1");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleEventClick = useCallback((event: EventType) => {
    // If the event has a link and we're in workshops mode, open the link in a new tab
    if (mode === "workshops" && event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer");
      return;
    }

    // Only open modal for non-workshop events
    if (mode !== "workshops") {
      setActiveEvent(event);
    }
  }, [mode]);

  const handleCloseModal = useCallback(() => {
    setActiveEvent(null);
  }, []);

  const calculateEventPosition = (event: EventType, index: number) => {
    const startMinutes = timeToMinutes(event.startTime);
    const endMinutes = timeToMinutes(event.endTime);
    const minutesSinceStart = startMinutes - firstSlotMinutes;
    const duration = endMinutes - startMinutes;
    const top = (minutesSinceStart / 60) * TIME_SLOT_HEIGHT + 70;
    const rawHeight = (duration / 60) * TIME_SLOT_HEIGHT;
    const gapAdjustment = index > 0 ? EVENT_GAP : 0;
    return {
      ...event,
      top: top + gapAdjustment,
      height: Math.max(rawHeight - gapAdjustment, 20),
    };
  };

  const isSingleColumn = mode === "workshops" || stages.length === 1;
  const activityEvents = events.filter((event) => isActivityEvent(event) && !event.isFullWidth);
  const regularEvents = events.filter((event) => !isActivityEvent(event));
  const fullWidthEvents = events.filter((event) => event.isFullWidth);
  console.log("Full width events:", fullWidthEvents);

  return (
    <div
      className="w-full bg-primary-900 rounded-2xl "
    >
      {/* Mobile toggle */}
      {stages.length > 1 && (
        <div className="md:hidden sticky top-0 z-20 md:bg-primary-800  pt-4 md:p-4">
          <Tabs
            value={activeStage}
            onValueChange={setActiveStage}
            className="w-full"
          >
            <TabsList
              className={`grid w-full grid-cols-${stages.length} bg-primary-900`}
            >
              {stages.map((stage) => (
                <TabsTrigger
                  key={stage.id}
                  value={stage.id.toString()}
                  className="data-[state=active]:bg-primary-800 data-[state=active]:text-pale-gold text-gray-400"
                >
                  {stage.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {mode === "workshops" && activityEvents.length > 0 && (
        <div className=" overflow-hidden bg-primary-800 w-fit md:w-[30rem]  mx-auto">
          <table className=" w-auto border-collapse ">
            <thead>
              <tr className="border-b-2 border-primary-900">
                <th className="py-3 px-4 text-left text-pale-gold font-medium w-1/4 border-primary-900 border-r-2">
                  Time
                </th>
                <th className="py-3 px-4 text-left text-pale-gold font-medium w-3/4">
                  Event Overview
                </th>
              </tr>
            </thead>
            <tbody>
              {activityEvents.map((event, index) => (
                <tr
                  key={event.id}
                  className={cn(
                    "cursor-pointer transition-colors text-left",
                    index !== activityEvents.length - 1 &&
                    "border-b-2 border-primary-900",
                    event.link && "text-lemon-lime"
                  )}
                  onClick={() => handleEventClick(event)}
                >
                  <td className="text-sm md:text-md py-3 px-4 text-white border-primary-900 border-r-2 min-w-[50px] ">
                    {event.startTime} - {event.endTime}
                  </td>
                  <td className="py-3 px-4">
                    <h3 className={cn("font-body font-bold", event.link ? "text-lemon-lime" : "text-white")}>
                      {event.title}
                      {event.link && (
                        <span className="ml-2 text-xs hover:underline">
                          (Click to open)
                        </span>
                      )}
                    </h3>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Regular timed events section */}
      {(mode === "schedule" || regularEvents.length > 0) && (
        <div
          className={cn(
            "grid min-w-[300px] md:min-w-[600px]",
            isSingleColumn
              ? "grid-cols-[auto_1fr]"
              : "grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_1fr]"
          )}
        >
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
          {stages.length > 0 && (
            <div
              className={cn(
                "hidden md:grid md:grid-cols-2 col-start-2 md:col-start-2 md:col-span-2 row-start-1 h-16 gap-2 sticky top-0 z-10",
                stages.length > 1
                  ? "md:grid-cols-2 md:col-span-2"
                  : "md:grid-cols-1"
              )}
            >
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={cn(
                    "flex items-center justify-center font-bold text-xl text-pale-gold bg-primary-800",
                    index === 0 ? "mx-1" : "mr-2"
                  )}
                >
                  {stage.name}
                </div>
              ))}
            </div>
          )}
          {stages.map((stage, stageIndex) => {
            const stageEvents = regularEvents
              .filter((event) => event.stage === stage.id)
              .sort(
                (a, b) =>
                  timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
              );
            return (
              <div
                key={stage.id}
                className={cn(
                  "col-start-2 row-start-1 relative",
                  stageIndex === 1 && !isSingleColumn && "md:col-start-3",
                  stage.id.toString() !== activeStage &&
                  stages.length > 1 &&
                  "hidden md:block"
                )}
              >
                <div className="absolute inset-0"></div>
                {stageEvents.map((event, index) => {
                  const isBreak = event.title.includes("Break");
                  const isShort = isShortTalk(event.startTime, event.endTime);
                  const position = calculateEventPosition(event, index);
                  const speakerInfo = event.speaker?.speakerId
                    ? getSpeakerInfo(event.speaker.speakerId)
                    : (event.speaker?.name
                      ? { id: -1, name: event.speaker.name } as SpeakerType
                      : null);
                  const displayTitle = !isBreak && speakerInfo?.talk_title ? speakerInfo.talk_title : event.title;
                  return (
                    <div
                      key={event.id}
                      className={cn(
                        "absolute left-1 right-2 p-2 cursor-pointer flex flex-col items-center justify-center",
                        "transition-colors duration-200",
                        isBreak
                          ? "bg-secondary-500 text-white"
                          : "bg-primary-800",
                        event.link && "border-2 border-lemon-lime"
                      )}
                      style={{
                        top: `${position.top}px`,
                        height: `${position.height}px`,
                      }}
                      onClick={() => handleEventClick(event)}
                    >
                      {!isBreak && !isShort && (
                        <p className="text-sm md:text-md text-secondary-500">
                          {event.startTime} - {event.endTime}
                        </p>
                      )}
                      <h3 className={cn(
                        "font-body font-bold text-md md:text-xl text-center break-words line-clamp-2 overflow-ellipsis",
                        event.link ? "text-lemon-lime" : "text-white"
                      )}>
                        {displayTitle}
                        {event.link && mode === "workshops" && (
                          <span className="block text-xs">
                            (Click to open)
                          </span>
                        )}
                      </h3>
                      {!isBreak && speakerInfo && (
                        <p className="text-sm md:text-md text-center text-lemon-lime">
                          {speakerInfo.name}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {fullWidthEvents.length > 0 && (
        <div className="mt-8 overflow-hidden  bg-black w-full mx-auto ">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary-900">
                <th className="py-3 px-4 text-left text-pale-gold font-medium w-1/4 border-primary-900 border-r-2">
                  Time
                </th>
                <th className="py-3 px-4 text-left text-pale-gold font-medium w-3/4">
                  After Party
                </th>
              </tr>
            </thead>
            <tbody>
              {fullWidthEvents.map((event) => (
                <tr
                  key={event.id}
                  className="cursor-pointer hover:bg-primary-700 transition-colors text-left border-b-2 border-primary-900 "
                >
                  <td className="text-sm md:text-md py-3 px-4 text-white border-primary-900 border-r-2 ">
                    {event.startTime} - {event.endTime}
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block space-y-1"
                    >
                      <h3 className="font-body font-bold text-white flex items-center">
                        {event.title}
                        <span className="ml-2 text-pale-gold text-sm flex items-center hover:underline">
                          (Click to RSVP)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                      </h3>
                      <p className="text-sm md:text-md text-gray-300 whitespace-pre-line ">
                        {event.description.split('\n').map((line, i) => (
                          <span key={i} className="block mb-2">{line}</span>
                        ))}
                      </p>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Image
                          src="/sponsors/vesper.avif"
                          alt="Two men looking at ipad"
                          width={600}
                          height={600}
                          className="w-1/2 h-auto md:w-1/5 object-cover"
                        />
                        <Image
                          src="/sponsors/imblack.png"
                          alt="Two men looking at ipad"
                          width={600}
                          height={600}
                          className="w-1/2 h-1/2 object-cover" />
                      </div>

                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeEvent && (
        <EventModal
          event={activeEvent}
          onClose={handleCloseModal}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
