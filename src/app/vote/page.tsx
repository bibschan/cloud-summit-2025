'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { isAdmin } from "@/lib/admin";
import Nominate from "@/components/vote/nominate-section";
import Link from "next/link";
import Vote from "@/components/vote/vote-section";

export default function VotePage() {
  const [toggle, setToggle] = useState<'vote' | 'nominate'>('vote')
  const { data: session } = useSession();
  const userIsAdmin = session?.user?.email
    ? isAdmin(session.user.email)
    : false;

  return (
    <div className="min-h-screen text-white ">
      <Nav />
      <main className="w-full bg-primary-900 py-10 md:py-20" id="team">
        <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-6">
          <section className="flex flex-col items-center justify-center space-y-6 text-center mt-8 md:my-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl md:mb-8">
                2025 Canadian Cloud {" "}
                <span className="block text-pale-gold">
                  Award
                </span>
              </h1>
              <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto">
                Vote for outstanding Canadian tech companies that drive community impact, foster growth, and showcase innovation through cloud technology.

              </p>
              <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto ">
                The winning company will be recognized at the Cloud Summit 2025 event!
              </p>
            </div>
            <div className="flex gap-4 mb-4 bg-primary-800 rounded-full">
              <Button
                variant='outline'
                onClick={() => setToggle('vote')}
                className={`rounded-full text-white transition-all ${toggle === 'vote' ? "bg-blue-500 " : "bg-primary-800 border-none "}`}
              >
                Vote
              </Button>
              <Button
                variant='outline'
                onClick={() => setToggle('nominate')}
                className={`rounded-full text-white transition-all ${toggle === 'nominate' ? "bg-blue-500 text-white" : "bg-primary-800 border-none "}`}
              >
                Nominate
              </Button>
              {userIsAdmin && (
                <Link href="/admin" className="text-sm py-2 px-4 hover:text-sky-400">
                  Admin
                </Link>
              )}
            </div>
          </section>
          {
            toggle === 'vote' ?
              <Vote setToggle={setToggle}/>
              :
              <Nominate />
          }
        </div>
      </main >
      <Footer />
    </div >
  );
}
