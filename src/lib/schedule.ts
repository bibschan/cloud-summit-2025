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
  description: string;
  speaker: {
    speakerId: number[] | null;
    name?: string;
    photo?: string;
  };
  tags: string[];
  isFullWidth?: boolean;
  link?: string;
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
    title: "Speaker To Be Announced",
    startTime: "12:10",
    endTime: "12:40",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [8],
    },
    tags: ["Web Development", "Cloud"],
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
      speakerId: [13],
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
    title: "Speaker To Be Announced",
    startTime: "13:25",
    endTime: "13:55",
    description: "Speaker To Be Announced from Platformatic.",
    speaker: {
      speakerId: [12],
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
    title: "Speaker To Be Announced",
    startTime: "14:00",
    endTime: "14:30",
    description: "Speaker To Be Announced from Fortinet.",
    speaker: {
      speakerId: [9, 16],
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
    description: "Speaker To Be Announced from Couchbase.",
    speaker: {
      speakerId: [7],
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 11,
    stage: 1,
    title: "Break",
    startTime: "15:10",
    endTime: "15:20",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 12,
    stage: 1,
    title: "Speaker from AWS",
    startTime: "15:20",
    endTime: "15:50",
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
    startTime: "15:50",
    endTime: "16:00",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 14,
    stage: 1,
    title: "Talk to be Announced",
    startTime: "16:00",
    endTime: "16:30",
    description: "Talk details coming soon.",
    speaker: {
      speakerId: [14, 15],
    },
    tags: ["Sponsor", "Technology"],
  },
  {
    id: 15,
    stage: 1,
    title: "Break",
    startTime: "16:30",
    endTime: "16:40",
    description: "Break for attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break"],
  },
  {
    id: 17,
    stage: 1,
    title: "Cloud Award, UGM Spotlight, Donation to UGM, & Closing Remarks",
    startTime: "16:40",
    endTime: "17:10",
    description:
      "Cloud Award, UGM Spotlight, Donation to UGM, & Closing Remarks",
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
    id: 24,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "12:45",
    endTime: "13:15",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [4],
    },
    tags: ["Speaker"],
  },
  {
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
    stage: 2,
    title: "Lightning Talk",
    startTime: "14:00",
    endTime: "14:15",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [1],
    },
    tags: ["Lightning Talk"],
  },
  {
    id: 25,
    stage: 2,
    title: "Lightning Talk",
    startTime: "14:15",
    endTime: "14:30",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [2],
    },
    tags: ["Lightning Talk"],
  },
  {
    id: 25,
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
    id: 26,
    stage: 2,
    title: "Cloud, AI & the Rise of the Next Billion-Dollar Idea",
    startTime: "14:40",
    endTime: "15:35",
    description:
      "What separates startups that scale from those that stall? In this panel, top startup execs from Vancouver share how they're leveraging emerging AI and cloud technologies to build smarter, faster, and more defensible companies. We’ll dive into how early cloud architecture decisions shape growth trajectories, which AI tools are reshaping SaaS, and what it really takes to create an edge in today's hyper-competitive tech landscape.",
    speaker: {
      speakerId: [17, 18, 19],
      name: "Panel Discussion",
    },
    tags: ["Panel", "Discussion", "Industry Trends"],
  },
  {
    id: 27,
    stage: 2,
    title: "Short Break",
    startTime: "15:35",
    endTime: "15:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      speakerId: null,
    },
    tags: ["Break", "Networking"],
  },
  {
    id: 28,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "15:40",
    endTime: "16:10",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [6],
    },
    tags: ["Speaker"],
  },
  {
    id: 30,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "16:10",
    endTime: "16:40",
    description: "Speaker To Be Announced.",
    speaker: {
      speakerId: [10, 11],
    },
    tags: ["Speaker"],
  },
  {
    id: 31,
    stage: 2,
    title: "Room Transformation",
    startTime: "16:40",
    endTime: "17:10",
    description: "Preparing the room for the next segment of the event.",
    speaker: {
      speakerId: null,
    },
    tags: ["Logistics"],
  },
  {
    id: 32,
    stage: 2,
    title: "Networking & Entertainment",
    startTime: "17:10",
    endTime: "18:00",
    description:
      "Join us for live music, dancing, and networking. Supported by our Diamond Sponsors.",
    speaker: {
      speakerId: null,
      name: "All Attendees",
    },
    tags: ["Networking", "Entertainment", "Food"],
  },
  {
    id: 33,
    stage: 1,
    title: "Cloud Summit After Party",
    startTime: "18:30",
    endTime: "20:00",
    description:
      "🕡 Starts: 6:30 PM, following the main event\n📍 Location: Vesper Lounge, 12-minute walk from the Orpheum Theatre\n🎟️ Entry: Free for Cloud Summit pass holders; $30 for General Public \n🔗 RSVP: Required for all attendees, including pass holders",
    speaker: {
      speakerId: null,
      name: "RSVP Required",
    },
    tags: ["Activities", "After Party", "Networking"],
    isFullWidth: true,
    link: "https://www.eventbrite.com/e/cloud-summit-2025-after-party-at-vesper-lounge-tickets-1365026253269",
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
    id: 8,
    stage: 3,
    title: "AWS Workshop Registration",
    startTime: "12:45",
    endTime: "14:45",
    description:
      "The workshop will be held at Cloud Summit 2025. Please secure your event ticket to participate in this workshop. For more information and registration, visit cloudsummit.ca.* Join AWS experts to explore AI agents and autonomous workflow development using LLMs. Experience hands-on training in building intelligent virtual assistants using AWS Bedrock, implement Tool Use patterns, and orchestrate complex tasks with Step Functions. Learn essential agent architectures and best practices for choosing the right solution for your needs.",
    speaker: {
      speakerId: null,
      name: "TBA",
      photo: "",
    },
    tags: ["Activities", "Web Development", "Cloud"],
    link: "https://aws-experience.com/amer/smb/e/c96fe/workshop-building-serverless-agentic-workflows-on-aws",
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
