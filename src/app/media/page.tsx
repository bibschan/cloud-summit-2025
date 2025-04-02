'use client'
import React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { MediaLounge } from "@/components/media-lounge-section";


export default function MediaPage() {

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="w-full bg-primary-900 py-10 md:py-20 flex-grow" id="media">
        <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-24">

          <MediaLounge />
        </div>
      </main >
      <Footer />
    </div >
  );
}
