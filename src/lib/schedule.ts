// Event colors
export const COLORS = {
  BLUE: "bg-blue-500/80 hover:bg-blue-500/90",
  PURPLE: "bg-purple-500/80 hover:bg-purple-500/90",
  RED: "bg-red-500/80 hover:bg-red-500/90",
  GREEN: "bg-green-500/80 hover:bg-green-500/90",
  CYAN: "bg-cyan-500/80 hover:bg-cyan-500/90",
  PINK: "bg-pink-500/80 hover:bg-pink-500/90",
  AMBER: "bg-amber-500/80 hover:bg-amber-500/90",
  INDIGO: "bg-indigo-500/80 hover:bg-indigo-500/90",
  TEAL: "bg-teal-500/80 hover:bg-teal-500/90",
  ROSE: "bg-rose-500/80 hover:bg-rose-500/90",
} as const;

export type EventType = {
  id: number;
  stage: number;
  title: string;
  startTime: string;
  endTime: string;
  description?: string;
  speaker?: {
    speakerId: number[] | null;
    name?: string | null;
  };
  tags: string[];
};

export const timeSlots = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
export const speakerEvents: EventType[] = [
  {
    id: 1,
    stage: 1,
    title: "Welcoming Remarks",
    startTime: "12:00",
    endTime: "12:10",
    description: "Opening remarks to welcome attendees by our three emcees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Opening"],
  },
  {
    id: 2,
    stage: 1,
    title: "Keynote - Speaker To Be Announced",
    startTime: "12:10",
    endTime: "12:40",
    description: "Opening keynote.",
    speaker: {
      speakerId: null,
    },
    tags: ["Keynote", "Web Development", "Cloud"],
  },
  {
    id: 3,
    stage: 1,
    title: "Short Break",
    startTime: "12:40",
    endTime: "12:45",
    description: "A short break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 4,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "12:45",
    endTime: "13:15",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: null,
    },
    tags: ["Sponsor", "Industry Insights"],
  },
  {
    id: 5,
    stage: 1,
    title: "Break",
    startTime: "13:15",
    endTime: "13:25",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 6,
    stage: 1,
    title: "Speaker from Platformatic",
    startTime: "13:25",
    endTime: "13:55",
    description: "Speaker To Be Announced from Platformatic.",
    speaker: {
      speakerId: null,
    },
    tags: ["Sponsor", "Cloud Solutions"],
  },
  {
    id: 7,
    stage: 1,
    title: "Short Break",
    startTime: "13:55",
    endTime: "14:00",
    description: "A short break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 8,
    stage: 1,
    title: "Speaker from Fortinet",
    startTime: "14:00",
    endTime: "14:30",
    description: "Speaker To Be Announced from Fortinet.",
    speaker: {
      speakerId: [9],
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 9,
    stage: 1,
    title: "Break",
    startTime: "14:30",
    endTime: "14:40",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 10,
    stage: 1,
    title: "Speaker from Couchbase",
    startTime: "14:40",
    endTime: "15:10",
    description:
      "Speaker To Be Announced from Couchbase.",
    speaker: {
      speakerId: [7],
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 11,
    stage: 1,
    title: "Short Break",
    startTime: "15:10",
    endTime: "15:15",
    description: "A short break for attendees",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 12,
    stage: 1,
    title: "Speaker from AWS",
    startTime: "15:15",
    endTime: "15:45",
    description: "Speaker To Be Announced from AWS.",
    speaker: {
      speakerId: [5],
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 13,
    stage: 1,
    title: "Break",
    startTime: "15:45",
    endTime: "15:55",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 14,
    stage: 1,
    title: "Speaker from Datadog",
    startTime: "15:55",
    endTime: "16:25",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: null,
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 15,
    stage: 1,
    title: "Short Break",
    startTime: "16:25",
    endTime: "16:30",
    description: "A short break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 16,
    stage: 1,
    title: "Speaker from Ronin",
    startTime: "16:30",
    endTime: "17:00",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: null,
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 17,
    stage: 1,
    title: "Cloud Award & Closing Remarks",
    startTime: "17:00",
    endTime: "17:10",
    description: "Cloud Award & Closing Remarks",
    speaker: {
      speakerId: null,
    },
    tags: ["Closing", "Award"],
  },
  {
    id: 18,
    stage: 2,
    title: "Welcoming Remarks",
    startTime: "12:40",
    endTime: "12:45",
    description: "Opening remarks to welcome attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Opening"],
  },
  {
    id: 19,
    stage: 2,
    title: "Lightning Talk",
    startTime: "12:45",
    endTime: "13:00",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [1],
    },
    tags: ["Lightning Talk"],
  },
  {
    id: 18,
    stage: 2,
    title: "Lightning Talk",
    startTime: "13:00",
    endTime: "13:15",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [2],
    },
    tags: ["Lightning Talk"],
  },
  {
    id: 19,
    stage: 2,
    title: "Break",
    startTime: "13:15",
    endTime: "13:25",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 19,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "13:25",
    endTime: "13:55",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [3],
    },
    tags: ["Speaker"],
  },
  {
    id: 20,
    stage: 2,
    title: "Short Break",
    startTime: "13:55",
    endTime: "14:00",
    description: "A short break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 21,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "14:00",
    endTime: "14:30",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [4],
    },
    tags: ["Speaker"],
  },
  {
    id: 22,
    stage: 2,
    title: "Break",
    startTime: "14:30",
    endTime: "14:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 23,
    stage: 2,
    title: "Venture Capitalist Panel Discussion",
    startTime: "14:40",
    endTime: "15:45",
    description:
      "An engaging panel discussion featuring industry experts discussing current trends and future directions in cloud computing.",
    speaker: {
      speakerId: null,

    },
    tags: ["Panel", "Discussion", "Industry Trends"],
  },
  {
    id: 25,
    stage: 2,
    title: "Break",
    startTime: "15:45",
    endTime: "15:55",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 26,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "15:55",
    endTime: "16:25",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [6],
    },
    tags: ["Speaker"],
  },
  {
    id: 27,
    stage: 2,
    title: "Short Break",
    startTime: "16:25",
    endTime: "16:30",
    description: "A short break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 28,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "16:30",
    endTime: "17:00",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [10, 11],
    },
    tags: ["Speaker"],
  },
  {
    id: 29,
    stage: 2,
    title: "Room Transformation",
    startTime: "17:00",
    endTime: "17:10",
    description: "Preparing the room for the next segment of the event.",
    speaker: {
      speakerId: null,
    },
    tags: ["Logistics"],
  },
  {
    id: 30,
    stage: 2,
    title: "Networking, Food & Entertainment",
    startTime: "17:10",
    endTime: "18:00",
    description:
      "Join us for food, drinks, live music, dancing, and networking. Diamond sponsors will have pop-up booths available.",
    speaker: {
      speakerId: null,
      name: "All Attendees",
    },
    tags: ["Networking", "Entertainment", "Food"],
  },
];

export const workshopEvents = [
  {
    id: 1,
    stage: 3,
    title: "Doors Open and Registration",
    startTime: "11:00",
    endTime: "12:00",
    description:
      "Arrive early to register and receive exclusive event swag while supplies last.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 2,
    stage: 3,
    title: "Main Stage Talks & AI DJ",
    startTime: "12:00",
    endTime: "17:00",
    description:
      "Enjoy engaging presentations on the main stage accompanied by music from our innovative AI DJ.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 3,
    stage: 3,
    title: "Second Stage Talks & Live Band",
    startTime: "12:00",
    endTime: "17:00",
    description:
      "Experience additional presentations on our second stage while a live band provides entertainment.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 4,
    stage: 3,
    title: "Sponsors & Community Booths",
    startTime: "12:00",
    endTime: "17:00",
    description:
      "Visit our sponsors and community booths to network and learn about the latest technologies and opportunities.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 5,
    stage: 3,
    title: "Lego Swap Stand",
    startTime: "12:00",
    endTime: "17:00",
    description:
      "Trade Lego swag and donate to UGM Charity at our interactive Lego Swap Stand.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 6,
    stage: 3,
    title: "Interview Lounge",
    startTime: "13:00",
    endTime: "17:00",
    description:
      "Join CBC Radio personality Kris Krug for exclusive interviews with speakers and special guests.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
  {
    id: 7,
    stage: 3,
    title: "Closing Reception",
    startTime: "17:00",
    endTime: "18:00",
    description:
      "Celebrate with a live band, food, and drinks. All refreshments are included in your ticket price.",
    speaker: {
      speakerId: null,
      name: "",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
  },
];
