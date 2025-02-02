export const EVENT_CONFIG = {
  title: "Cloud Summit",
  date: "May 27, 2025",
  venue: "Orpheum Theatre",
  location: {
    city: "Vancouver",
    province: "BC",
    country: "Canada",
    address: "601 Smithe Street",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.22242662249!2d-123.1204164!3d49.2800806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fcd9b875d%3A0x6f19bb45bb73289c!2sOrpheum!5e0!3m2!1sen!2sca!4v1729318806028!5m2!1sen!2sca"
  },
  description: "Join cloud developers, architects, IT & infrastructure professionals and executives building the cloud ecosystem.",
  links: {
    tickets: "https://lu.ma/event/evt-cItbLfgBkf8na4n",
    speakers: "https://forms.gle/6qjgftM5Uf4ZSNNP7",
    volunteers: "https://forms.gle/NECDLqn6T6qbmWXZ8"
  },
  sections: {
    highlights: {
      title: "Previous Event Highlights",
      images: [
        { id: 1, path: "/past-events/AWSDay-1.jpg", caption: "Cloud Summit 2024" },
        { id: 2, path: "/past-events/AWSDay-2.jpg", caption: "Cloud Summit 2024" },
        { id: 3, path: "/past-events/AWSDay-3.jpg", caption: "Cloud Summit 2024" },
        { id: 4, path: "/past-events/AWSDay-4.jpg", caption: "Cloud Summit 2024" },
        { id: 5, path: "/past-events/AWSDay-5.jpg", caption: "Cloud Summit 2024" }
      ]
    },
    community: {
      title: "Join Our Community",
      speakers: {
        title: "Call for Speakers",
        description: "Share your expertise with our community",
        content: "Be part of shaping the future of cloud technology. Submit your talk proposal and inspire the next generation of innovators."
      },
      volunteers: {
        title: "Volunteer Opportunities",
        description: "Help make Cloud Summit a success",
        content: "Join our team of dedicated volunteers and play a crucial role in creating an unforgettable experience for all attendees."
      }
    },
    venue: {
      title: "Venue Information",
      description: "Experience the Vancouver Cloud Summit like no technology conference you have been to before. Sophistication and elegance meets new age technology and engagement in an amazing venue in the heart of downtown Vancouver. 2 large stages, many intimate workshops and talks as well as a few surprises!"
    }
  },
  features: {
    title: {
      infrastructure: "Infrastructure",
      security: "Security",
      devops: "DevOps"
    }
  }
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com"
} as const; 