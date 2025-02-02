"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Nav from "@/components/nav";

export default function SignIn() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-300 flex items-center justify-center">
        <div className="bg-gray-800/90 p-8 rounded-lg shadow-lg max-w-sm w-full backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-center mb-8 text-white">Sign In</h1>
          <div className="space-y-4">
            <Button
              className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
              onClick={() => signIn("google", { callbackUrl: "/" })}
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
              className="w-full flex items-center justify-center gap-2 bg-[#24292e] hover:bg-[#2c3137]"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <Github className="w-5 h-5" />
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </main>
    </>
  );
} 