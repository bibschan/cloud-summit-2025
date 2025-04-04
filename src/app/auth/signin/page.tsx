"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-6 pt-24">
        <div className="flex flex-col gap-8 max-w-md mx-auto">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold tracking-tight text-white">Sign In</h1>
            <p className="text-lg text-white/60">
              Choose your preferred sign in method.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
            <SignInButtons />
          </div>
        </div>
      </div>
    </main>
  );
}

function SignInButtons() {
  return (
    <div className="space-y-4">
      <Button
        className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
        onClick={() => signIn("google", { callbackUrl: "/vote" })}
      >
        <Image
          src="/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Sign in with Google
      </Button>
      <Button
        className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
        onClick={() => signIn("github", { callbackUrl: "/vote" })}
      >
        <Github className="w-5 h-5" />
        Sign in with GitHub
      </Button>
    </div>
  );
}
