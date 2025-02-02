"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VotePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Vote for Your Favorite Talks</h1>
        <p className="text-gray-300">
          Welcome {session?.user?.name}! Voting functionality coming soon.
        </p>
      </div>
    </div>
  );
} 