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
    name: string;
    photo: string;
  };
  tags: string[];
};

export const timeSlots = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
export const speakerEvents: EventType[] = [
  {
    id: 1,
    stage: 1,
    title: "Keynote - Speaker To Be Announced",
    startTime: "12:00",
    endTime: "12:35",
    description: "Opening keynote",
    speaker: {
      name: "TBA",
      photo: "/speakers/tba.jpg",
    },
    tags: ["Keynote", "Web Development", "Cloud"],
  },
  {
    id: 2,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "12:35",
    endTime: "13:10",
    description: "Speaker To Be Announced",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker.jpg",
    },
    tags: ["Sponsor", "Industry Insights"],
  },
  {
    id: 3,
    stage: 1,
    title: "Break",
    startTime: "13:10",
    endTime: "13:20",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 4,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "13:20",
    endTime: "13:55",
    description: "Speaker To Be Announced",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-2.jpg",
    },
    tags: ["Sponsor", "Cloud Solutions"],
  },
  {
    id: 5,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "13:55",
    endTime: "14:30",
    description: "Speaker To Be Announced",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-3.jpg",
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 6,
    stage: 1,
    title: "Break",
    startTime: "14:30",
    endTime: "14:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 7,
    stage: 1,
    title: "Panel Discussion",
    startTime: "14:40",
    endTime: "15:50",
    description:
      "An engaging panel discussion featuring industry experts discussing current trends and future directions in cloud computing.",
    speaker: {
      name: "Panel Moderator & Guests",
      photo: "/speakers/panel.jpg",
    },
    tags: ["Panel", "Discussion", "Industry Trends"],
  },
  {
    id: 9,
    stage: 1,
    title: "Break",
    startTime: "15:50",
    endTime: "16:00",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 10,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "16:00",
    endTime: "16:35",
    description: "TBA",
    speaker: {
      name: "TBA",
      photo: "/speakers/TBA.jpg",
    },
    tags: ["AI", "LLMs", "Machine Learning"],
  },
  {
    id: 11,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "16:35",
    endTime: "17:10",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/tba.jpg",
    },
    tags: ["AI", "LLMs", "Machine Learning"],
  },
  {
    id: 12,
    stage: 2,
    title: "Lightning Talks",
    startTime: "12:45",
    endTime: "13:10",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/Speaker To Be Announced.jpg",
    },
    tags: ["Azure", "Docker", "Python", "AWS"],
  },
  {
    id: 13,
    stage: 2,
    title: "Break",
    startTime: "13:10",
    endTime: "13:20",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 14,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "13:20",
    endTime: "13:55",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/Speaker To Be Announced.jpg",
    },
    tags: ["FinOps", "Cost Optimization", "Cloud Efficiency"],
  },
  {
    id: 15,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "13:55",
    endTime: "14:30",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/cyber-wizard.jpg",
    },
    tags: ["Sponsor", "Cybersecurity", "Cloud Security"],
  },
  {
    id: 16,
    stage: 2,
    title: "Break",
    startTime: "14:30",
    endTime: "14:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 17,
    stage: 2,
    title: "Lightning Talks",
    startTime: "14:40",
    endTime: "15:03",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/denis-astahov.jpg",
    },
    tags: ["Career Development", "DevOps", "AWS"],
  },
  {
    id: 18,
    stage: 2,
    title: "Lightning Talks",
    startTime: "15:03",
    endTime: "15:26",
    description: "Speaker To Be Announced",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-5.jpg",
    },
    tags: ["Sponsor", "Cloud Technology"],
  },
  {
    id: 19,
    stage: 2,
    title: "Lightning Talks",
    startTime: "15:26",
    endTime: "15:50",
    description: "Speaker To Be Announced.",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/niti-jain.jpg",
    },
    tags: ["Microservices", "Diversity", "Women in Tech"],
  },
  {
    id: 20,
    stage: 2,
    title: "Break",
    startTime: "15:50",
    endTime: "16:00",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg",
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 21,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "16:00",
    endTime: "16:35",
    description: "Speaker To Be Announced.",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/Speaker To Be Announced-rep.jpg",
    },
    tags: ["Sponsor", "Cloud Services"],
  },
  {
    id: 22,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "16:35",
    endTime: "17:10",
    description: "Speaker To Be Announced",
    speaker: {
      name: "Speaker To Be Announced",
      photo: "/speakers/tba.jpg",
    },
    tags: ["Startup", "Cloud Infrastructure", "Scaling"],
  },

  {
    id: 24,
    stage: 1,
    title: "Networking, Food & Entertainment",
    startTime: "17:10",
    endTime: "18:00",
    description:
      "Join us for food, drinks, live music, dancing, and networking. Diamond sponsors will have pop-up booths available.",
    speaker: {
      name: "All Attendees",
      photo: "/speakers/networking.jpg",
    },
    tags: ["Networking", "Entertainment", "Food"],
  },
  {
    id: 25,
    stage: 2,
    title: "Networking, Food & Entertainment",
    startTime: "17:10",
    endTime: "18:00",
    description:
      "Join us for food, drinks, live music, dancing, and networking. Diamond sponsors will have pop-up booths available.",
    speaker: {
      name: "All Attendees",
      photo: "/speakers/networking.jpg",
    },
    tags: ["Networking", "Entertainment", "Food"],
  },
];

export const workshopEvents = [
  {
    id: 1,
    stage: 3,
    title: "Workshops Coming Soon",
    startTime: "12:00",
    endTime: "18:00",
    description: "Stay tuned for our workshop schedule!",
    speaker: {
      name: "TBA",
      photo: "",
    },
    tags: ["Workshop", "Web Development", "Cloud"],
  },
];
