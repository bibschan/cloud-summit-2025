"use client";
import { useState } from "react";
import { ScheduleTable } from "@/components/schedule/schedule-table";
import { Button } from "@/components/ui/button";

export default function SchedulePage() {
  const [toggle, setToggle] = useState('speakers')

  return (
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
            Explore the Event Schedule – Toggle between speakers and workshops.
            </p>
          </div>
          <div className="flex gap-4 mb-4 bg-primary-800 rounded-full">
            <Button
              variant='outline'
              onClick={() => setToggle('speakers')}
              className={`rounded-full text-white ${toggle === 'speakers' ? "bg-blue-500 " : "bg-primary-800 border-none "}`}
              >
                Speakers
              </Button>
              <Button
              variant='outline'
              onClick={() => setToggle('workshops')}
              className={`rounded-full text-white ${toggle === 'workshops' ? "bg-blue-500 text-white" : "bg-primary-800 border-none "}`}
              >
                workshops
              </Button>
          </div>
          <ScheduleTable />
        </section>
      </div>
    </main >
  );
}
