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
  ROSE: "bg-rose-500/80 hover:bg-rose-500/90"
} as const

export type EventType = {
  id: number
  stage: number
  title: string
  startTime: string
  endTime: string
  description?: string
  speaker?: {
    name: string
    photo: string
  }
  tags: string[]
}

export const timeSlots = [
  "12:00",
  "13:00", "14:00",
  "15:00",  "16:00",
  "17:00",
]
export const speakerEvents: EventType[] = [
  {
    id: 1,
    stage: 1,
    title: "Keynote - CEO of Netlify (Tentative)",
    startTime: "12:00",
    endTime: "12:30",
    description: "Opening keynote address from the CEO of Netlify, discussing the latest innovations in cloud computing and web development.",
    speaker: {
      name: "CEO of Netlify",
      photo: "/speakers/netlify-ceo.jpg"
    },
    tags: ["Keynote", "Web Development", "Cloud"]
  },
  {
    id: 2,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "12:30",
    endTime: "13:00",
    description: "Insights and innovations from one of our valued sponsors.",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker.jpg"
    },
    tags: ["Sponsor", "Industry Insights"]
  },
  {
    id: 3,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "13:00",
    endTime: "13:30",
    description: "Valuable information and updates from one of our key sponsors.",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-2.jpg"
    },
    tags: ["Sponsor", "Cloud Solutions"]
  },
  {
    id: 4,
    stage: 1,
    title: "Break",
    startTime: "13:30",
    endTime: "13:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },
  {
    id: 5,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "13:40",
    endTime: "14:10",
    description: "Learn about cutting-edge solutions from one of our premier sponsors.",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-3.jpg"
    },
    tags: ["Sponsor", "Technology"]
  },
  {
    id: 6,
    stage: 1,
    title: "Panel Discussion",
    startTime: "14:10",
    endTime: "14:50",
    description: "An engaging panel discussion featuring industry experts discussing current trends and future directions in cloud computing.",
    speaker: {
      name: "Panel Moderator & Guests",
      photo: "/speakers/panel.jpg"
    },
    tags: ["Panel", "Discussion", "Industry Trends"]
  },
  {
    id: 7,
    stage: 1,
    title: "Break",
    startTime: "14:50",
    endTime: "15:00",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },


  {
    id: 8,
    stage: 1,
    title: "Panel Discussion",
    startTime: "15:00",
    endTime: "15:50",
    description: "An engaging panel discussion featuring industry experts discussing current trends and future directions in cloud computing.",
    speaker: {
      name: "Panel Moderator & Guests",
      photo: "/speakers/panel.jpg"
    },
    tags: ["Panel", "Discussion", "Industry Trends"]
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
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },
  {
    id: 10,
    stage: 1,
    title: "Speaker To Be Announced",
    startTime: "16:00",
    endTime: "16:30",
    description: "TBA",
    speaker: {
      name: "TBA",
      photo: "/speakers/dr-ryan-rad.jpg"
    },
    tags: ["AI", "LLMs", "Machine Learning"]
  },
  {
    id: 11,
    stage: 1,
    title: "The State of LLMs",
    startTime: "16:30",
    endTime: "17:00",
    description: "Dr. Ryan Rad presents the current state of Large Language Models and their impact on cloud computing and AI development.",
    speaker: {
      name: "Dr. Ryan Rad",
      photo: "/speakers/dr-ryan-rad.jpg"
    },
    tags: ["AI", "LLMs", "Machine Learning"]
  },
  {
    id: 12,
    stage: 2,
    title: "Azure, Docker & Python in AWS",
    startTime: "12:00",
    endTime: "12:15",
    description: "A lightning talk on integrating Azure Docker with Python in AWS environments by AWS Community Builder Adetokunbo.",
    speaker: {
      name: "Adetokunbo",
      photo: "/speakers/adetokunbo.jpg"
    },
    tags: ["Azure", "Docker", "Python", "AWS"]
  },
  {
    id: 13,
    stage: 2,
    title: "Driving Cloud Cost Efficiency",
    startTime: "12:15",
    endTime: "12:30",
    description: "Aiman shares strategies for optimizing cloud costs and improving efficiency in cloud deployments.",
    speaker: {
      name: "Aiman",
      photo: "/speakers/aiman.jpg"
    },
    tags: ["FinOps", "Cost Optimization", "Cloud Efficiency"]
  },
  {
    id: 14,
    stage: 2,
    title: "Cyber Wizard Talk",
    startTime: "12:30",
    endTime: "13:30",
    description: "Insights on cybersecurity in cloud environments from our sponsor Cyber Wizard.",
    speaker: {
      name: "Cyber Wizard Representative",
      photo: "/speakers/cyber-wizard.jpg"
    },
    tags: ["Sponsor", "Cybersecurity", "Cloud Security"]
  },

  {
    id: 15,
    stage: 2,
    title: "Break",
    startTime: "13:30",
    endTime: "13:40",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },
  {
    id: 16,
    stage: 2,
    title: "How to Become a Cloud/DevOps Engineer from Zero to AWS Hero",
    startTime: "13:40",
    endTime: "14:10",
    description: "Denis Astahov shares his journey and practical advice on becoming a successful Cloud/DevOps Engineer and reaching AWS Hero status.",
    speaker: {
      name: "Denis Astahov",
      photo: "/speakers/denis-astahov.jpg"
    },
    tags: ["Career Development", "DevOps", "AWS"]
  },
  {
    id: 17,
    stage: 2,
    title: "Speaker To Be Announced",
    startTime: "14:10",
    endTime: "14:40",
    description: "Valuable insights from one of our sponsor partners.",
    speaker: {
      name: "TBA",
      photo: "/speakers/sponsor-speaker-5.jpg"
    },
    tags: ["Sponsor", "Cloud Technology"]
  },
  {
    id: 18,
    stage: 2,
    title: "Break",
    startTime: "14:40",
    endTime: "14:50",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },
  {
    id: 19,
    stage: 2,
    title: "Microservices - Diversity/Women in Tech",
    startTime: "14:50",
    endTime: "15:20",
    description: "Niti Jain discusses microservices architecture while highlighting the importance of diversity and women in the tech industry.",
    speaker: {
      name: "Niti Jain",
      photo: "/speakers/niti-jain.jpg"
    },
    tags: ["Microservices", "Diversity", "Women in Tech"]
  },
  {
    id: 20,
    stage: 2,
    title: "AWS Sponsor Talk",
    startTime: "15:20",
    endTime: "15:50",
    description: "The latest innovations and services from AWS to enhance your cloud infrastructure.",
    speaker: {
      name: "AWS Representative",
      photo: "/speakers/aws-rep.jpg"
    },
    tags: ["Sponsor", "AWS", "Cloud Services"]
  },
  {
    id: 21,
    stage: 2,
    title: "Break",
    startTime: "15:50",
    endTime: "16:00",
    description: "Short break to refresh and network with other attendees.",
    speaker: {
      name: "Break",
      photo: "/speakers/break.jpg"
    },
    tags: ["Break", "Networking"]
  },
  {
    id: 22,
    stage: 2,
    title: "Building Your Startup in the Cloud",
    startTime: "16:00",
    endTime: "16:30",
    description: "Farzad shares practical insights on leveraging cloud technologies to build and scale your startup efficiently.",
    speaker: {
      name: "Farzad",
      photo: "/speakers/farzad.jpg"
    },
    tags: ["Startup", "Cloud Infrastructure", "Scaling"]
  },
  {
    id: 23,
    stage: 2,
    title: "Microsoft Sponsor Talk",
    startTime: "16:30",
    endTime: "17:00",
    description: "Microsoft presents their latest cloud solutions and technologies.",
    speaker: {
      name: "Microsoft Representative",
      photo: "/speakers/microsoft-rep.jpg"
    },
    tags: ["Sponsor", "Microsoft", "Cloud Technology"]
  },
  {
    id: 24,
    stage: 1,
    title: "Networking, Food & Entertainment",
    startTime: "17:00",
    endTime: "18:00",
    description: "Join us for food, drinks, live music, dancing, and networking. Diamond sponsors will have pop-up booths available.",
    speaker: {
      name: "All Attendees",
      photo: "/speakers/networking.jpg"
    },
    tags: ["Networking", "Entertainment", "Food"]
  },
  {
    id: 25,
    stage: 2,
    title: "Networking, Food & Entertainment",
    startTime: "17:00",
    endTime: "18:00",
    description: "Join us for food, drinks, live music, dancing, and networking. Diamond sponsors will have pop-up booths available.",
    speaker: {
      name: "All Attendees",
      photo: "/speakers/networking.jpg"
    },
    tags: ["Networking", "Entertainment", "Food"]
  }
]

export const workshopEvents = [
  {
    id: 1,
    stage: 3,
    title: "Workshops Coming Soon",
    startTime: "12:00",
    endTime: "13:00",
    description: "Stay tuned for our workshop schedule!",
    speaker: {
      name: "TBA",
      photo: ""
    },
    tags: ["Workshop", "Web Development", "Cloud"]
  },

]
