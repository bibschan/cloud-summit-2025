"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EVENT_CONFIG } from "@/lib/constants";
import { Megaphone, Users } from "lucide-react";

export const CommunitySection = () => {
  const openSpeakersLink = () => {
    window.open(EVENT_CONFIG.links.speakers, "_blank");
  };

  const openVolunteersLink = () => {
    window.open(EVENT_CONFIG.links.volunteers, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {EVENT_CONFIG.sections.community.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <Megaphone className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <CardTitle className="text-2xl font-semibold">
                {EVENT_CONFIG.sections.community.speakers.title}
              </CardTitle>
              <CardDescription>
                {EVENT_CONFIG.sections.community.speakers.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {EVENT_CONFIG.sections.community.speakers.content}
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
                {EVENT_CONFIG.sections.community.volunteers.title}
              </CardTitle>
              <CardDescription>
                {EVENT_CONFIG.sections.community.volunteers.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {EVENT_CONFIG.sections.community.volunteers.content}
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
  );
}; 