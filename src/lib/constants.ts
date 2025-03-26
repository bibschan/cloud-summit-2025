import { Description } from "@radix-ui/react-toast";

export const EVENT_CONFIG = {
  title: "Cloud Summit",
  date: "May 27, 2025 at 12PM",
  venue: "Orpheum",
  location: {
    city: "Vancouver",
    province: "BC",
    country: "Canada",
    address: "601 Smithe Street",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.22242662249!2d-123.1204164!3d49.2800806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fcd9b875d%3A0x6f19bb45bb73289c!2sOrpheum!5e0!3m2!1sen!2sca!4v1729318806028!5m2!1sen!2sca",
  },
  description:
    "Join cloud developers, architects, IT & infrastructure professionals and executives building the cloud ecosystem.",
  about:
    "As a non-profit organization, our purpose is to bring together & educate the local tech community about the cloud​ and support our local community through charity.",
  links: {
    tickets: "https://lu.ma/event/evt-cItbLfgBkf8na4n",
    speakers: "https://forms.gle/6qjgftM5Uf4ZSNNP7",
    volunteers: "https://forms.gle/NECDLqn6T6qbmWXZ8",
    sponsors: "https://forms.gle/1XDU3sdR94UgbcUEA",
    social: {
      instagram: "https://www.instagram.com/canadiancloudninja/",
      youtube: "https://www.youtube.com/@PublicCloudNinja/about",
      linkedin: "https://www.linkedin.com/showcase/vancouvercloudsummit",
    },
  },
  sections: {
    highlights: {
      title: "Highlights",
      images: [
        {
          id: 1,
          path: "/past-events/AWSDay-1.jpg",
          caption: "Cloud Summit 2024",
        },
        {
          id: 2,
          path: "/past-events/AWSDay-2.jpg",
          caption: "Cloud Summit 2024",
        },
        {
          id: 3,
          path: "/past-events/AWSDay-3.jpg",
          caption: "Cloud Summit 2024",
        },
        {
          id: 4,
          path: "/past-events/AWSDay-4.jpg",
          caption: "Cloud Summit 2024",
        },
        {
          id: 5,
          path: "/past-events/AWSDay-5.jpg",
          caption: "Cloud Summit 2024",
        },
      ],
    },
    eventFeatures: {
      activities: [
        {
          icon: "/activities/networking.svg", // You can replace this with an actual icon component or path
          title: "Networking",
          details: "Expand your connections with cloud professionals.",
        },
        {
          icon: "/activities/presentations.svg",
          title: "Presentations",
          details: "Get industry insights from cloud experts.",
        },
        {
          icon: "/activities/workshops.svg",
          title: "Workshops",
          details: "Watch product demos for tips & tricks.",
        },
        {
          icon: "/activities/tech_companies.svg",
          title: "Tech Companies",
          details: "Find cloud solutions for your business needs.",
        },
        {
          icon: "/activities/communities.svg",
          title: "Communities",
          details: "Explore & connect with local tech communities.",
        },
        {
          icon: "/activities/music.svg",
          title: "Live Music & AI DJ",
          details: "Enjoy the ambience with live music.",
        },
      ],
    },
    community: {
      title: "Join Our Community",
      speakers: {
        title: "Call for Speakers",
        description: "Share your expertise with our community",
        content:
          "Be part of shaping the future of cloud technology. Submit your talk proposal and inspire the next generation of innovators.",
      },
      volunteers: {
        title: "Volunteer Opportunities",
        description: "Help make Cloud Summit a success",
        content:
          "Join our team of dedicated volunteers and play a crucial role in creating an unforgettable experience for all attendees.",
      },
    },
    venue: {
      title: "Venue",
      description:
        "Experience the Vancouver Cloud Summit like no technology conference you have been to before. Sophistication and elegance meets new age technology and engagement in an amazing venue in the heart of downtown Vancouver. 2 large stages, many intimate workshops and talks as well as a few surprises!",
    },
    nominate: {
      description: 'We aim to recognize excellence within the Canadian tech community by celebrating organizations that drive positive community impact, foster growth, and showcase technical innovation through the use of cloud technology.',
      cta: 'Nominate a company that you love that best reflects these values and vote for them! The winner of this award will be announced and recognized at the event!'
    },
    charity: {
      title: "Make a Difference Together",
      description:
        "We're proud to announce that all proceeds from our conference will be donated to Union Gospel Mission!",
      content:
        "Union Gospel Mission has been feeding hope and changing the lives of men, women, youth, and children for 80 years. Through its seven locations in Metro Vancouver, the Fraser Valley and the Greater Victoria Region, UGM extends a wrap-around continuum of care to people who are struggling with poverty, homelessness, and addiction. Our comprehensive range of life-changing programs and services include: outreach, meals, chaplaincy, drop-ins, emergency shelter, family services, alcohol and drug recovery, second-stage recovery, employment services, and housing.",
      charities: [
        {
          id: "ugm",
          name: "Union Gospel Mission",
          description:
            "Union Gospel Mission has been feeding hope and changing the lives of men, women, youth, and children for 80 years. Through its seven locations in Metro Vancouver, the Fraser Valley and the Greater Victoria Region, UGM extends a wrap-around continuum of care to people who are struggling with poverty, homelessness, and addiction. Our comprehensive range of life-changing programs and services include: outreach, meals, chaplaincy, drop-ins, emergency shelter, family services, alcohol and drug recovery, second-stage recovery, employment services, and housing.",
          link: "https://ugm.ca/",
          logo: "/charity/ugm-logo.png",
          images: [
            {
              id: 1,
              path: "/charity/bbq.webp",
              caption: "Union Gospel Mission",
            },
            {
              id: 2,
              path: "/charity/Easter_lunch.webp",
              caption: "UGM volunteers serving meals",
            },
            {
              id: 2,
              path: "/charity/ugm-cold-weather.webp",
              caption: "UGM volunteers warm drink in cold",
            },
          ],
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Who is Cloud Summit for?",
          answer:
            "Cloud Summit is for anyone who wants to stay ahead of the latest technology advancements in Cloud, see and hear first-hand from industry experts in transformative innovations like generative AI, analytics, and cloud operations, as well as gaining a glimpse into what is happening on other major cloud platforms. Whether you're a developer, a business decision-maker, an IT decision-maker, or a technical project manager, there's something at Cloud Summit for you.",
        },
        {
          question:
            "How is Cloud Summit different from other technology conferences?",
          answer:
            "Cloud Summit Vancouver is our annual networking and learning event with a focus on business and the community. We are run by an official Canadian Not-For-Profit with all profits going to charity. With a focus on community comes a more heightened human and connective experience with a unique emphasis on more creative engagements such as music, hands-on demos, whiteboarding, and more to create a dynamic boost to your engagement.",
        },
        {
          question: "Is the event accessible?",
          answer:
            "Yes, there is both accessible ramps, elevators, and main stage seating. For more details check out the Vancouver Orpheum Theatre site for details https://vancouvercivictheatres.com/accessibility/#accessibility.",
        },
        {
          question: "Will I be able to watch the event online?",
          answer:
            "The event won't be live-streamed; however, we will have photos on Instagram and videos on YouTube.",
        },
      ],
    },
  },
  features: {
    title: {
      infrastructure: "Infrastructure",
      security: "Security",
      devops: "DevOps",
    },
  },
  team: {
    image: "/CloudSummit_2025_Committee_Lego.png",
    description: "Bringing the Cloud Summit to life takes creativity, dedication, and teamwork. With the expertise and passion of the 2025 team, we’re excited to deliver an unforgettable event. Get ready to connect, learn, and innovate at this year’s Cloud Summit!",
    commitee: [
      {
        image: "/team/Audrey.png",
        title: "Andrey Barkov",
        href: "https://www.linkedin.com/in/andreybarkov/",

      },
      {
        image: "/team/Bibi.png",
        title: "Bibi Souza",
        href: "https://www.linkedin.com/in/bibschan/",

      },
      {
        image: "/team/Devreet.png",
        title: "Devreet Dulay",
        href: "https://www.linkedin.com/in/devreet-dulay/",

      },
      {
        image: "/team/Dom.png",
        title: "Dom Beckers",
        href: "https://www.linkedin.com/in/dominikbeckers/",

      },
      {
        image: "/team/Fernando.png",
        title: "Fernando Stoelting",
        href: "https://www.linkedin.com/in/fstoelting/",

      },
      {
        image: "/team/Gabi.png",
        title: "Gabriela Arno",
        href: "https://www.linkedin.com/in/gabriela-arno-a7b55b163/",

      },
      {
        image: "/team/Jackie.png",
        title: "Jackie Ho",
        href: "https://www.linkedin.com/in/jackiehyho/",

      },
      {
        image: "/team/Kris.png",
        title: "Kris Krug",
        href: "https://www.linkedin.com/in/kriskrug/",
      },
      {
        image: "/team/Matt.png",
        title: "Matt Carolan",
        href: "https://www.linkedin.com/in/matthewcarolan/",

      },
      {
        image: "/team/Mattias.png",
        title: "Mattias Andersson",
        href: "https://www.linkedin.com/in/mattias-andersson/",

      },
      {
        image: "/team/Mike.png",
        title: "Mike Hoff",
        href: "https://www.linkedin.com/in/mikehoff321/",
      },
      {
        image: "/team/Mohsen.png",
        title: "Mohsen Akhavan",
        href: "https://www.linkedin.com/in/themohsenakhavan/",
      },
      {
        image: "/team/Shanky.png",
        title: "Shanky Silva",
        href: "https://www.linkedin.com/in/shankyjs/",
      },
      {
        image: "/team/Umer.png",
        title: "Umer Khalid",
        href: "https://www.linkedin.com/in/umerkhalid1/",
      },
      {
        image: "/team/Will.png",
        title: "Will Sheldon",
        href: "https://www.linkedin.com/in/wills/",
      }
    ],
    volunteers: [
      { name: "Kota", link: "https://github.com/boooocchi" },
      { name: "Sophia", link: "https://github.com/Sophia-G-Chan" },
      { name: "Luis", link: "https://github.com/luisher98" },
      { name: "Madhuja", link: "https://github.com/madhujamitra" },
    ],
    webMembers: [
      { name: "Kota", github: "https://github.com/boooocchi" },
      { name: "Sophia", github: "https://github.com/Sophia-G-Chan" },
      { name: "Luis", github: "https://github.com/luisher98" },
      { name: "Bibi", github: "https://github.com/bibschan" },
      { name: "Madhuja", github: "https://github.com/madhujamitra" },
    ],
  },
};

export const CLOUDPLATFORMS = [
  {
    name: "AWS",
    logo: "/providers/aws.svg",
  },
  {
    name: "Azure",
    logo: "/providers/azure.svg",
  },
  {
    name: "Google Cloud Platform",
    logo: "/providers/googlecloud.svg",
  },
  {
    name: "IBM Cloud",
    logo: "/providers/ibm.svg",
  },
  {
    name: "Oracle Cloud Infrastructure",
    logo: "/providers/oracle.svg",
  },
  {
    name: "Alibaba Cloud",
    logo: "/providers/alibaba.svg",
  },
];

export const SPONSORS = [
  {
    name: "Couchbase",
    status: "diamond",
    logo: "/sponsors/couchbase-white.svg",
    link: "https://www.couchbase.com/",
  },
  {
    name: "Datadog",
    status: "diamond",
    logo: "/sponsors/datadog.svg",
    link: "https://www.datadoghq.com/",
  },
  {
    name: "Ronin",
    status: "diamond",
    logo: "/sponsors/ronin.svg",
    link: "https://ronin.cloud/",
  },
  {
    name: "Fortinet",
    status: "diamond",
    logo: "/sponsors/fortinet.svg",
    link: "https://www.fortinet.com/",
  },
  {
    name: "Greydata",
    status: "gold",
    logo: "/sponsors/greydata.svg",
    link: "https://greydata.ca/",
  },
  {
    name: "Elastic",
    status: "gold",
    logo: "/sponsors/elastic.svg",
    link: "https://www.elastic.co/",
  },
];

export const MEDIA_CONFIG = {
  title: "Media Lounge",
  heading: "Explore the Media Lounge",
  host: {
    name: "Kris Krüg",
    link: "https://kriskrug.co/about/",
  },
  description:
    "as he interviews guest speakers and local AWS professionals live at the event. You might recognize Kris from his monthly CBC segment on AI with Stephen Quinn.",
  items: [
    {
      title: "The Future of Music",
      description:
        "CBC Early Edition: AI Sandbox with Kris Krüg, founder of Future Proof Creatives.",
      link: "https://www.youtube.com/watch?v=rLWbdKg_q0k&t=129s",
      thumbnail: "/kris-krug/1.png",
    },
    {
      title: "AI Companions",
      description:
        "AI chatbots and companionship tools are becoming more sophisticated.",
      link: "https://www.cbc.ca/player/play/video/9.4228529",
      thumbnail: "/kris-krug/2.png",
    },
    {
      title: "Web Summit in 2025",
      description:
        "One of the biggest tech events in the world is coming to Vancouver.",
      link: "https://www.cbc.ca/player/play/video/9.4228529",
      thumbnail: "/kris-krug/3.png",
    },
  ],
};

export const COMMUNITIES = [
  {
    id: 1,
    name: "VanJS",
    description:
      "A monthly meetup for developers in Vancouver focusing on JavaScript, front-end technology, and the open web.",
    url: "https://www.vanjs.com/",
  },
  {
    id: 2,
    name: "AWS User Group Vancouver",
    description:
      "Vancouver's AWS community with monthly events and co-host of Vancouver's largest Cloud and AI Conference.",
    url: "https://www.awsusergroups.com/",
  },
  {
    id: 3,
    name: "Azure Canada",
    description:
      "Vancouver Microsoft Azure User Group running quarterly events and co-hosting Western Canada's largest Cloud and AI Conference.",
    url: "https://www.azurecanada.ca/",
  },
  {
    id: 4,
    name: "Cloud Native",
    description:
      "A community focused on cloud-native technologies, containerization, and microservices architecture.",
    url: "https://lu.ma/p35u91p3",
  },
  {
    id: 5,
    name: "Vancouver AI Community",
    description:
      "Connect with AI enthusiasts, researchers, and practitioners in Vancouver.",
    url: "https://www.vancouveraimeetup.com/",
  },
  {
    id: 6,
    name: "Linux User Group",
    description:
      "Vancouver Linux Users Group (VanLUG) - A community for Linux enthusiasts and open-source advocates.",
    url: "https://vanlug.ca/",
  },
];
export const teamAreas = [
  {
    target: "_blank",
    alt: "Andrey Barkov",
    title: "Andrey Barkov",
    href: "https://www.linkedin.com/in/andreybarkov/",
    coords: "342,28,501,217",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Bibi Souza",
    title: "Bibi Souza",
    href: "https://www.linkedin.com/in/bibschan/",
    coords: "510,28,662,217",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Devreet Dulay",
    title: "Devreet Dulay",
    href: "https://www.linkedin.com/in/devreet-dulay/",
    coords: "674,28,839,217",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Dom Beckers",
    title: "Dom Beckers",
    href: "",
    coords: "858,28,1008,217",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Fernando Stoelting",
    title: "Fernando Stoelting",
    href: "https://www.linkedin.com/in/fstoelting/",
    coords: "1009,28,1169,217",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Gabriela Arno",
    title: "Gabriela Arno",
    href: "https://www.linkedin.com/in/gabriela-arno-a7b55b163/",
    coords: "346,231,500,410",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Jackie Ho",
    title: "Jackie Ho",
    href: "https://www.linkedin.com/in/jackiehyho/",
    coords: "512,231,665,410",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Kris Krug",
    title: "Kris Krug",
    href: "https://www.linkedin.com/in/kriskrug/",
    coords: "669,231,830,410",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Matt Carolan",
    title: "Matt Carolan",
    href: "https://www.linkedin.com/in/matthewcarolan/",
    coords: "840,231,1005,410",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Mattias Andersson",
    title: "Mattias Andersson",
    href: "https://www.linkedin.com/in/mattias-andersson/",
    coords: "1005,231,1169,410",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Mike Hoff",
    title: "Mike Hoff",
    href: "https://www.linkedin.com/in/mikehoff321/",
    coords: "348,420,497,594",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Mohsen Akhavan",
    title: "Mohsen Akhavan",
    href: "https://www.linkedin.com/in/themohsenakhavan/",
    coords: "509,423,668,594",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Shanky Silva",
    title: "Shanky Silva",
    href: "",
    coords: "677,421,830,592",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Umer Khalid",
    title: "Umer Khalid",
    href: "https://www.linkedin.com/in/umerkhalid1/",
    coords: "844,422,997,596",
    shape: "rect"
  },
  {
    target: "_blank",
    alt: "Will Sheldon",
    title: "Will Sheldon",
    href: "",
    coords: "1011,424,1161,598",
    shape: "rect"
  }
];
