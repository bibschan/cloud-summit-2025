"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface Talk {
  time: string;
  title: string;
  speaker: string;
  type: "sponsor" | "community";
  stage: "main stage" | "grand hall";
}

export default function ScheduleAndSpeakers() {
  const [activeTab, setActiveTab] = useState("main stage");
  const [selectedScheduleCard, setSelectedScheduleCard] = useState<string>("");

  useEffect(() => {
    if (selectedScheduleCard) {
      const timeout = setTimeout(() => {
        const scheduleSection = document.getElementById(selectedScheduleCard);
        if (scheduleSection) {
          scheduleSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [selectedScheduleCard]);

  const handleSpeakerClick = (cardId: string, stage?: string) => {
    if (stage) setActiveTab(stage);
    setSelectedScheduleCard(cardId);
  };

  const speakerDetails: Talk[] = [
    // Main Stage
    {
      time: "1:00 PM",
      title: "Opening Keynote",
      speaker: "Speaker 1",
      type: "sponsor",
      stage: "main stage"
    },
    {
      time: "1:30 PM",
      title: "Cloud Innovation",
      speaker: "Speaker 2",
      type: "sponsor",
      stage: "main stage"
    },
    {
      time: "2:00 PM",
      title: "Community Talk",
      speaker: "Speaker 3",
      type: "community",
      stage: "main stage"
    },
    {
      time: "2:30 PM",
      title: "Enterprise Solutions",
      speaker: "Speaker 4",
      type: "sponsor",
      stage: "main stage"
    },
    {
      time: "3:00 PM",
      title: "Developer Experience",
      speaker: "Speaker 5",
      type: "community",
      stage: "main stage"
    },
    {
      time: "3:30 PM",
      title: "Future of Cloud",
      speaker: "Speaker 6",
      type: "sponsor",
      stage: "main stage"
    },
    {
      time: "4:00 PM",
      title: "Best Practices",
      speaker: "Speaker 7",
      type: "sponsor",
      stage: "main stage"
    },
    {
      time: "4:30 PM",
      title: "Community Innovation",
      speaker: "Speaker 8",
      type: "community",
      stage: "main stage"
    },
    // Grand Hall
    {
      time: "1:00 PM",
      title: "Tech Workshop",
      speaker: "Speaker 9",
      type: "sponsor",
      stage: "grand hall"
    },
    {
      time: "1:30 PM",
      title: "Community Session",
      speaker: "Speaker 10",
      type: "community",
      stage: "grand hall"
    },
    {
      time: "2:00 PM",
      title: "Cloud Security",
      speaker: "Speaker 11",
      type: "sponsor",
      stage: "grand hall"
    },
    {
      time: "2:30 PM",
      title: "Open Source",
      speaker: "Speaker 12",
      type: "community",
      stage: "grand hall"
    },
    {
      time: "3:00 PM",
      title: "Enterprise Cloud",
      speaker: "Speaker 13",
      type: "sponsor",
      stage: "grand hall"
    },
    {
      time: "3:30 PM",
      title: "Community Talk",
      speaker: "Speaker 14",
      type: "community",
      stage: "grand hall"
    },
    {
      time: "4:00 PM",
      title: "Cloud Native",
      speaker: "Speaker 15",
      type: "sponsor",
      stage: "grand hall"
    },
    {
      time: "4:30 PM",
      title: "Closing Session",
      speaker: "Speaker 16",
      type: "community",
      stage: "grand hall"
    }
  ];

  return (
    <section className="container mx-auto py-20">
      <h2 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-12">
        Event Schedule
      </h2>
      <div className="flex justify-center">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="flex items-center gap-4 p-4">
            <h3 className="text-sm text-muted-foreground">Doors Open</h3>
            <Clock className="h-4 w-4" />
            <span className="-ml-2">12:00 PM</span>
          </CardContent>
        </Card>
      </div>
      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-8 px-4"
      >
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto space-x-2">
          <TabsTrigger
            value="main stage"
            className="data-[state=active]:bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-md py-3"
          >
            Main Stage
          </TabsTrigger>
          <TabsTrigger
            value="grand hall"
            className="data-[state=active]:bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-md py-3"
          >
            Grand Hall
          </TabsTrigger>
        </TabsList>
        <TabsContent value="main stage">
          <div className="grid gap-4 mt-8">
            {speakerDetails
              .filter((talk) => talk.stage === "main stage")
              .map((talk, i) => (
                <Card
                  key={i}
                  id={`${talk.speaker}Speaker`}
                  className={`bg-gray-800 border-gray-700 ${
                    selectedScheduleCard === `${talk.speaker}Speaker`
                      ? "border-1-white"
                      : ""
                  }`}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="min-w-[100px] text-muted-foreground">
                      {talk.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{talk.title}</h4>
                      <span
                        className="text-sm text-muted-foreground border-b border-1-white leading-[100%] hover:cursor-pointer"
                        onClick={() =>
                          handleSpeakerClick(`${talk.speaker}Schedule`)
                        }
                        role="button"
                      >
                        {talk.speaker}
                      </span>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        talk.type === "sponsor"
                          ? "bg-green-400/20 text-green-400"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {talk.type}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="grand hall">
          <div className="grid gap-4 mt-8">
            {speakerDetails
              .filter((talk) => talk.stage === "grand hall")
              .map((talk, i) => (
                <Card
                  key={i}
                  id={`${talk.speaker}Speaker`}
                  className={`bg-gray-800 border-gray-700 ${
                    selectedScheduleCard === `${talk.speaker}Speaker`
                      ? "border-1-white"
                      : ""
                  }`}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="min-w-[100px] text-muted-foreground">
                      {talk.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{talk.title}</h4>
                      <span
                        className="text-sm text-muted-foreground border-b border-1-white leading-[100%] hover:cursor-pointer"
                        onClick={() =>
                          handleSpeakerClick(`${talk.speaker}Schedule`)
                        }
                        role="button"
                      >
                        {talk.speaker}
                      </span>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        talk.type === "sponsor"
                          ? "bg-green-400/20 text-green-400"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {talk.type}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
      {/* Speakers Section */}
      <section className="container mx-auto px-4 pt-20">
        <h2 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          Featured Speakers
        </h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {speakerDetails.map((speakerDetail, i) => (
            <Card
              key={i}
              className={`bg-gray-800 border-gray-700 ${
                selectedScheduleCard === `${speakerDetail.speaker}Schedule`
                  ? "border-1-white"
                  : ""
              }`}
              id={`${speakerDetail.speaker}Schedule`}
            >
              <CardContent className="p-6">
                <div className="aspect-square rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-[2px] mb-4">
                  <div className="rounded-full bg-[#1A1F2C] p-1">
                    <img
                      src="/speakers/tempSpeakerImage.png"
                      alt={`Speaker ${i + 1}`}
                      className="rounded-full aspect-square object-cover"
                    />
                  </div>
                </div>

                <span
                  className="font-medium text-lg mb-1 border-b border-1-white leading-[100%] hover:cursor-pointer"
                  onClick={() =>
                    handleSpeakerClick(
                      `${speakerDetail.speaker}Speaker`,
                      speakerDetail.stage
                    )
                  }
                  role="button"
                >
                  Speaker {i + 1}
                </span>
                <p className="text-sm text-muted-foreground mb-2">
                  {speakerDetail.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{speakerDetail.stage}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
