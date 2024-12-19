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
  Instagram,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Sponsors from "@/components/sponsors";
import Link from "next/link";
import Nav from "@/components/nav";
import FAQaccordion from "@/components/faq-accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { providers } from "../../public/cloud-providers/clouds";

export default function Home() {
  const openLink = () => {
    window.open("https://www.vtixonline.com/cloud-ai-summit/4527/", "_blank");
  };

  const openSpeakersLink = () => {
    window.open("https://forms.gle/6qjgftM5Uf4ZSNNP7", "_blank");
  };

  const openVolunteersLink = () => {
    window.open("https://forms.gle/NECDLqn6T6qbmWXZ8", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Banner */}
      <Nav />
      <div className="relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden  w-full bg-[#070B14] px-4 py-16 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60"></div>
          <video
            src="/main-banner/highlight-video.mp4"
            autoPlay
            muted
            loop
            className="mix-blend-overlay object-cover h-full w-full"
          />
        </div>

        <div className="relative mx-auto flex flex-row flex-wrap justify-center gap-6">
          {/* Logo and Subtitle */}
          <div className="md:mb-8 text-center">
            <h1 className="mb-4 hidden md:block font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-green-900 to-green-500 px-6">
                Cloud Summit
              </span>
            </h1>
            <h1 className="mb-4 text-7xl font-bold tracking-tight md:hidden flex flex-wrap justify-center gap-2">
              <span className="bg-gradient-to-r from-green-900 to-green-500 px-6 ">
                Cloud
              </span>
              <span className="bg-gradient-to-r from-green-900 to-green-500 px-6 ">
                Summit
              </span>
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 font-bold text-gray-100">
              ALL THE CLOUDS, ALL AT ONCE.
            </p> */}
            <h2 className="text-xl font-light md:text-2xl hidden md:block">
              <span>Infrastructure</span>
              <span className="mx-3 text-gray-500">|</span>
              <span>Security</span>
              <span className="mx-3 text-gray-500">|</span>
              <span>DevOps</span>
            </h2>
          </div>

          {/* Event Dates */}
          <div className="mb-8 flex flex-col items-center md:items-start justify-start -mt-1">
            <div className="flex items-center gap-4 mb-3 rounded-full bg-gradient-to-r from-green-900 to-green-500 px-6 py-2">
              <span className="font-bold">May 27, 2025</span>
              <span className="text-sm">Orpheum Theatre</span>
            </div>
            <div className="flex items-center gap-4 rounded-full border  border-white/20 px-6 py-2">
              <span className="font-bold">Vancouver, BC</span>
              <span className="text-sm">Canada</span>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex flex-col flex-wrap justify-center gap-6">
          {/* Description */}
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-300 md:text-xl">
            Join cloud developers, architects, IT & infrastructure professionals
            and executives building the cloud ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="mb-2 md:mb-16 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              size="lg"
              className="min-w-[200px] bg-gradient-to-r from-green-900 to-green-500 font-bold"
              onClick={openLink}
            >
              <span className="text">GET TICKETS</span>
              <svg
                className="next-arrow"
                aria-hidden="false"
                width="20px"
                height="25px"
                viewBox="0 0 50 80"
                xmlSpace="preserve"
              >
                <polyline
                  stroke="#ffffff"
                  stroke-width="9"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="0, 0 45, 40 0, 80"
                ></polyline>
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white/20 text-white hover:bg-white/10 hidden md:block"
              onClick={openVolunteersLink}
            >
              GET INVOLVED
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center ">
            <div>
              <div className="text-2xl font-bold md:text-3xl">780+</div>
              <div className="text-sm text-gray-200">In-Person Attendees</div>
            </div>
            <div>
              <div className="text-2xl font-bold md:text-3xl">21+</div>
              <div className="text-sm text-gray-200">Talks & Workshops</div>
            </div>
            <div>
              <div className="text-2xl font-bold md:text-3xl">$10,000+</div>
              <div className="text-sm text-gray-200">Charity Donation Goal</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 md:mt-16 md:grid-cols-4 md:flex md:flex-row md:overflow-hidden md:whitespace-nowrap">
          {providers.map((provider) => (
            <a
              href={provider.link}
              key={provider.name}
              target="_blank"
              className="relative"
            >
              <img
                src={provider.icon}
                alt={provider.name}
                className="w-14 h-auto object-cover"
              />
            </a>
          ))}
        </div>
      </div>
      {/* <header className="relative h-[75vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60"></div>
          <video
            src="/main-banner/highlight-video.mp4"
            autoPlay
            muted
            loop
            className="mix-blend-overlay object-cover h-[75vh] w-full"
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Cloud Summit 2025
          </h1>
          <p className="text-xl md:text-4xl mb-8 font-bold text-gray-100">
            ALL THE CLOUDS, <br /> ALL AT ONCE.
          </p>
          <p className="text-lg md:text-xl mb-8 font-bold text-gray-100">
            May 27th, 2025 @ Orpheum Theatre
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black"
            onClick={openLink}
          >
            Register Now <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-32 md:grid-cols-4 md:flex md:flex-row md:overflow-hidden md:whitespace-nowrap">
          {providers.map((provider) => (
            <a
              href={provider.link}
              key={provider.name}
              target="_blank"
              className="relative"
            >
              <img
                src={provider.icon}
                alt={provider.name}
                className="w-20 h-auto object-cover"
              />
            </a>
          ))}
        </div>
      </header> */}
      {/* Previous Event Photos */}
      <section className="py-20 bg-gray-900" id="highlights">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Previous Event Highlights
          </h2>

          <div className="w-full mx-auto px-4 md:py-6 py-4">
            <div className="relative flex justify-center">
              <Carousel
                className="md:w-full w-[90%]"
                opts={{
                  align: "start",
                  loop: true
                }}
              >
                <CarouselContent className="-ml-4">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <CarouselItem
                      key={index}
                      className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
                    >
                      <div
                        key={index}
                        className="relative h-64 rounded-lg group"
                      >
                        <Image
                          src={`/past-events/AWSDay-${index}.jpg`}
                          alt={`Event Photo ${index}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-lg font-semibold">
                            Cloud Summit 2024
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute lg:-left-5 -left-7 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border border-white p-4" />
                <CarouselNext className="absolute lg:-right-5 -right-7 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full border border-white p-4" />
              </Carousel>
            </div>
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
      <section
        className="py-20 bg-gradient-to-b from-black to-gray-900"
        id="venue"
      >
        <div className="container mx-auto px-4 xl:max-w-[1100px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Venue Information
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
            <div className="md:w-max w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.22242662249!2d-123.1204164!3d49.2800806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fcd9b875d%3A0x6f19bb45bb73289c!2sOrpheum!5e0!3m2!1sen!2sca!4v1729318806028!5m2!1sen!2sca"
                className="h-[300px] md:w-[600px] w-full"
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
                Experience the Vancouver Cloud Summit like no technology
                conference you have been to before. Sophistication and elegance
                meets new age technology and engagement in an amazing venue in
                the heart of downtown Vancouver. 2 large stages, many intimate
                workshops and talks as well as a few surprises!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
        id="faq"
      >
        <div className="container mx-auto px-4 xl:max-w-[1100px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            FAQ
          </h2>
          <FAQaccordion />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 max-md:text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-md:place-items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Cloud Summit
              </h3>
              <p className="mb-4">
                &copy; 2025 Cloud Summit. All rights reserved.
              </p>
              <div className="flex space-x-4 max-md:justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/publiccloudninja/"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/canadiancloud"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-green-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://forms.gle/6qjgftM5Uf4ZSNNP7"
                    className="hover:text-green-500 transition-colors"
                    target="_blank"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#venue"
                    className="hover:text-green-500 transition-colors"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://forms.gle/1XDU3sdR94UgbcUEA"
                    className="hover:text-green-500 transition-colors"
                    target="_blank"
                  >
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-green-500 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li> 
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-500 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>*/}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Archive</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/2024"
                    className="hover:text-green-500 transition-colors"
                  >
                    Cloud Summit 2024
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>Built by Kota and Bibi. Powered by Vercel and v0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
