"use client";

import { ScheduleTable } from "@/components/schedule/schedule-table";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-white">Event Schedule</h1>
            <p className="text-lg text-white/60">
              A full day of cloud computing insights and innovations.
            </p>
          </div>
          <ScheduleTable />
        </div>
      </div>
    </main>
  );
} 