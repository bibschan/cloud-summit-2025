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
  stage: 1 | 2
  title: string
  startTime: string
  endTime: string
  description: string
  color: string
  speaker: {
    name: string
    photo: string
  }
  tags: string[]
}

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", 
  "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
  "17:00"
]

export const events: EventType[] = [
  {
    id: 1,
    stage: 1,
    title: "Opening Ceremony",
    startTime: "09:00",
    endTime: "09:30",
    description: "Welcome to Cloud Summit 2025! Join us for the opening ceremony where we'll set the stage for an incredible day of cloud computing insights and innovations.",
    color: COLORS.BLUE,
    speaker: {
      name: "Matt Damon",
      photo: "/speakers/matt-damon.jpg"
    },
    tags: ["Opening", "Welcome"]
  },
  {
    id: 2,
    stage: 1,
    title: "The Future of Cloud Computing",
    startTime: "09:30",
    endTime: "10:30",
    description: "An inspiring keynote on the future of cloud computing, emerging trends, and how organizations can prepare for the next wave of innovation.",
    color: COLORS.PURPLE,
    speaker: {
      name: "Sarah Chen",
      photo: "/speakers/sarah-chen.jpg"
    },
    tags: ["Keynote", "Future Tech", "Innovation"]
  },
  {
    id: 3,
    stage: 2,
    title: "Cloud Security Best Practices",
    startTime: "09:30",
    endTime: "10:30",
    description: "Learn essential security practices for cloud environments, including threat detection, compliance, and zero-trust architecture.",
    color: COLORS.RED,
    speaker: {
      name: "Michael Rodriguez",
      photo: "/speakers/michael-rodriguez.jpg"
    },
    tags: ["Security", "Best Practices", "Compliance"]
  },
  {
    id: 4,
    stage: 1,
    title: "Kubernetes in Production",
    startTime: "11:00",
    endTime: "12:00",
    description: "Real-world experiences and best practices for running Kubernetes in production environments at scale.",
    color: COLORS.GREEN,
    speaker: {
      name: "Emily Johnson",
      photo: "/speakers/emily-johnson.jpg"
    },
    tags: ["Kubernetes", "DevOps", "Production"]
  },
  {
    id: 5,
    stage: 2,
    title: "Serverless Architecture Patterns",
    startTime: "11:00",
    endTime: "12:00",
    description: "Explore common patterns and anti-patterns in serverless architecture, with real-world examples and implementation strategies.",
    color: COLORS.AMBER,
    speaker: {
      name: "David Kim",
      photo: "/speakers/david-kim.jpg"
    },
    tags: ["Serverless", "Architecture", "AWS Lambda"]
  },
  {
    id: 6,
    stage: 1,
    title: "Cloud Cost Optimization",
    startTime: "13:30",
    endTime: "14:30",
    description: "Strategies and tools for optimizing cloud costs while maintaining performance and reliability.",
    color: COLORS.CYAN,
    speaker: {
      name: "Rachel Martinez",
      photo: "/speakers/rachel-martinez.jpg"
    },
    tags: ["FinOps", "Optimization", "Cost Management"]
  },
  {
    id: 7,
    stage: 2,
    title: "Multi-Cloud Strategies",
    startTime: "13:30",
    endTime: "14:30",
    description: "Learn how to effectively implement and manage multi-cloud environments for enhanced resilience and flexibility.",
    color: COLORS.TEAL,
    speaker: {
      name: "Alex Thompson",
      photo: "/speakers/alex-thompson.jpg"
    },
    tags: ["Multi-Cloud", "Strategy", "Architecture"]
  },
  {
    id: 8,
    stage: 1,
    title: "AI/ML in the Cloud",
    startTime: "15:00",
    endTime: "16:00",
    description: "Discover how to leverage cloud platforms for AI and machine learning workloads effectively.",
    color: COLORS.PINK,
    speaker: {
      name: "Lisa Wong",
      photo: "/speakers/lisa-wong.jpg"
    },
    tags: ["AI", "Machine Learning", "Innovation"]
  },
  {
    id: 9,
    stage: 2,
    title: "DevOps Transformation",
    startTime: "15:00",
    endTime: "16:00",
    description: "A comprehensive guide to implementing DevOps practices in cloud environments.",
    color: COLORS.ROSE,
    speaker: {
      name: "James Wilson",
      photo: "/speakers/james-wilson.jpg"
    },
    tags: ["DevOps", "Culture", "Automation"]
  },
  {
    id: 10,
    stage: 1,
    title: "Closing Keynote",
    startTime: "16:30",
    endTime: "17:00",
    description: "Wrap up the day with insights into the future of cloud computing and key takeaways from the summit.",
    color: COLORS.INDIGO,
    speaker: {
      name: "Michelle Lee",
      photo: "/speakers/michelle-lee.jpg"
    },
    tags: ["Keynote", "Closing", "Future"]
  }
] 