'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { VolunteerForm } from "@/components/volunteer-form";

export default function VolunteerPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-6 py-24">
          <div className="flex items-center justify-center">
            <p className="text-white/60">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-8 max-w-xl mx-auto">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Volunteer Application
            </h1>
            <p className="text-lg text-white/60">
              Join our team of volunteers and help make Cloud Summit 2025 an amazing experience for everyone!
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
            <VolunteerForm 
              onSuccess={() => router.push('/')}
              submitButtonClassName="w-full bg-blue-500 hover:bg-blue-600 text-white"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 