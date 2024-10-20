"use client";

import React from "react";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Users,
  Megaphone,
  Building,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Sponsors from "@/components/sponsors";

export default function Home() {
  const openLink = () => {
    window.open("https://www.vtixonline.com/cloud-ai-summit/4527/", "_blank");
  };

  const openSpeakersLink = () => {
    window.open("", "_blank");
  };

  const openVolunteersLink = () => {
    window.open("", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Banner */}
      <nav className="flex fixed space-x-6 z-10 right-0 pr-6 pt-4">
        <a href="#" className="hover:underline">
          About
        </a>
        {/* <a href="#" className="hover:underline">
          Schedule
        </a>
        <a href="#" className="hover:underline">
          Speakers
        </a> */}
        <a href="#previous-event" className="hover:underline">
          2024 Cloud Summit
        </a>
      </nav>
      <header className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-black/50"></div>
          <video
            src="/main-banner/highlight-video.mp4"
            autoPlay
            muted
            className="mix-blend-overlay object-cover h-[75vh]"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Cloud Summit 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-bold text-gray-100">
            Shaping the Future of Cloud Technology
          </p>
          <p className="text-lg md:text-xl mb-8 font-bold text-gray-100">
            May 27th, 2025
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black"
            onClick={openLink}
          >
            Register Now <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Previous Event Photos */}
      <section className="py-20 bg-gray-900" id="previous-event">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Previous Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/past-events/AWSDay-${i}.jpg`}
                  alt={`Event Photo ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">
                    AWS Day 2024
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Logos */}
      <section className="py-20 bg-black">
        <Sponsors />
      </section>

      {/* Call for Speakers and Volunteers */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Join Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Megaphone className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <CardTitle className="text-2xl font-semibold">
                  Call for Speakers
                </CardTitle>
                <CardDescription>
                  Share your expertise with our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Be part of shaping the future of cloud technology. Submit your
                  talk proposal and inspire the next generation of innovators.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  onClick={openSpeakersLink}
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <CardTitle className="text-2xl font-semibold">
                  Volunteer Opportunities
                </CardTitle>
                <CardDescription>
                  Help make Cloud Summit a success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Join our team of dedicated volunteers and play a crucial role
                  in creating an unforgettable experience for all attendees.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  onClick={openVolunteersLink}
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black"
                >
                  Join Us
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Venue Information
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-max">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.22242662249!2d-123.1204164!3d49.2800806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fcd9b875d%3A0x6f19bb45bb73289c!2sOrpheum!5e0!3m2!1sen!2sca!4v1729318806028!5m2!1sen!2sca"
                width="600"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
            <div className="md:w-1/3 space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 mr-3 text-green-700" />
                    <p className="text-lg">The Orpheum Theatre</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 mr-3 text-green-700" />
                    <p className="text-lg">601 Smithe Street, Vancouver</p>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="w-6 h-6 mr-3 text-green-700" />
                    <p className="text-lg">May 27th, 2025</p>
                  </div>
                </CardContent>
              </Card>
              <p className="text-gray-300">
                Experience Cloud Summit in our cutting-edge venue, designed to
                foster innovation and collaboration with two stages. With
                state-of-the-art facilities and a futuristic atmosphere, it`s
                the perfect setting for the brightest minds in cloud technology
                to converge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 Cloud Summit. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </a>
            <a
              href="https://discord.gg/c9FPgheRH2"
              target="_blank"
              className="hover:text-green-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
