interface Talk {
  time: string;
  title: string;
  speaker: string;
  type: "sponsor" | "community";
  stage: "main stage" | "grand hall";
}

export const speakerDetails: Talk[] = [
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
