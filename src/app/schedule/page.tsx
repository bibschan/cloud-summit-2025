"use client";
import { useState } from "react";
import { ScheduleTable } from "@/components/schedule/schedule-table";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { speakerEvents, workshopEvents } from "@/lib/schedule"
=======
import { speakerEvents, workshopEvents } from "@/lib/schedule";
>>>>>>> main
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const scheduleStages = [
  { id: 1, name: "Main Stage" },
<<<<<<< HEAD
  { id: 2, name: "Grand Hall" }
]

const workshopStages = [
  { id: 3, name: "Workshop Schedule Coming Soon" }
]

export default function SchedulePage() {
  const [mode, setMode] = useState<'speakers' | 'workshops'>('speakers')
=======
  { id: 2, name: "Second Stage" },
];

const workshopStages = [{ id: 3, name: "Workshop Schedule Coming Soon" }];

export default function SchedulePage() {
  const [mode, setMode] = useState<"speakers" | "workshops">("speakers");
>>>>>>> main

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-primary-900 ">
        <div className="container mx-auto px-6 py-24">
          <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl  text-white">
                Event&nbsp;
                <span className="block md:inline-block text-secondary-600 ">
                  Schedule
                </span>
              </h1>
              <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto mb-12">
<<<<<<< HEAD
                Explore the Event Schedule – Toggle between speakers and workshops.
=======
                Explore the Event Schedule – Toggle between speakers and
                workshops.
>>>>>>> main
              </p>
            </div>
            <div className="flex gap-4 mb-4 bg-primary-800 rounded-full">
              <Button
<<<<<<< HEAD
                variant='outline'
                onClick={() => setMode('speakers')}
                className={`rounded-full text-white transition-all ${mode === 'speakers' ? "bg-blue-500 " : "bg-primary-800 border-none "}`}
=======
                variant="outline"
                onClick={() => setMode("speakers")}
                className={`rounded-full text-white transition-all ${
                  mode === "speakers"
                    ? "bg-blue-500 "
                    : "bg-primary-800 border-none "
                }`}
>>>>>>> main
              >
                Speakers
              </Button>
              <Button
<<<<<<< HEAD
                variant='outline'
                onClick={() => setMode('workshops')}
                className={`rounded-full text-white transition-all ${mode === 'workshops' ? "bg-blue-500 text-white" : "bg-primary-800 border-none "}`}
=======
                variant="outline"
                onClick={() => setMode("workshops")}
                className={`rounded-full text-white transition-all ${
                  mode === "workshops"
                    ? "bg-blue-500 text-white"
                    : "bg-primary-800 border-none "
                }`}
>>>>>>> main
              >
                Workshops
              </Button>
            </div>
<<<<<<< HEAD
            {mode === 'speakers' ? (
=======
            {mode === "speakers" ? (
>>>>>>> main
              <ScheduleTable
                events={speakerEvents}
                stages={scheduleStages}
                mode="schedule"
              />
            ) : (
              <ScheduleTable
                events={workshopEvents}
                stages={workshopStages}
                mode="workshops"
              />
            )}
          </section>
        </div>
<<<<<<< HEAD
      </main >
=======
      </main>
>>>>>>> main
      <Footer />
    </>
  );
}
