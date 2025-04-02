'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Nominate from "@/components/vote/nominate-section";

export default function VotePage() {
  const [toggle, setToggle] = useState<'vote' | 'nominate'>('vote')

  return (
    <div className="min-h-screen text-white ">
      <Nav />
      <main className="w-full bg-primary-900 py-10 md:py-20" id="team">
        <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-12">
          <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl">
              2025 Canadian Cloud {" "}
                <span className="text-pale-gold">
                  Award
                </span>
              </h1>
              <p className="text-sm md:text-md text-gray-300 text-center max-w-2xl mx-auto mb-12">
                Meet the dedicated individuals who make our mission possible through their generous contribution of time and
                talent.
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
            </div>
          </section>
          {
            toggle === 'vote' ?
            <div>vote</div>
            :
            <Nominate/>
          }
        </div>
      </main >
      <Footer />
    </div >
  );
}
