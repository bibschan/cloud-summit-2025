'use client'
import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router'

export default function ThankYouPage() {

    return (
        <div className="min-h-screen text-white ">
            <Nav />
            <main className="w-full bg-primary-900 py-10 md:py-20" id="team">
                <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-24">
                    <section className="flex flex-col items-center justify-center space-y-4 text-center my-8">
                        <div className="space-y-2">
                            <h2 className="text-6xl md:text-8xl  text-white">
                                Thank you for your submission, we will get back to you within
                                <span className="block md:inline-block text-lilac">
                                    2 business days.
                                </span>
                            </h2>

                        </div>


                    </section>
                </div>
            </main >
            <Footer />
        </div >
    );
}
