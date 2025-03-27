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
  slogan: "Western Canada's Largest Multi-Cloud Event",
  about:
    "As a non-profit organization, our purpose is to bring together & educate the local tech community about the cloud and support our local community through charity.",
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
      description:
        "We aim to recognize excellence within the Canadian tech community by celebrating organizations that drive positive community impact, foster growth, and showcase technical innovation through the use of cloud technology.",
      cta: "Nominate a company that you love that best reflects these values and vote for them! The winner of this award will be announced and recognized at the event!",
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
            "Yes, there is both accessible ramps, elevators, and main stage seating. For more details check out the Vancouver Orpheum Theatre site for details https://vancouvercivictheatres.com/accessibility/.",
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
    members: [
      { name: "Bibi", github: "https://github.com/bibschan" },
      {
        name: "Byte Quest",
        github: "https://www.linkedin.com/company/bytequestllc/",
      },
      { name: "Jackie", github: "https://jackieho.ca/" },
      { name: "Luis", github: "https://github.com/luisher98" },
      { name: "Sophia", github: "https://github.com/Sophia-G-Chan" },
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
  {
    name: "Tencent Cloud",
    logo: "/providers/Tencent_Cloud.svg",
  },
  {
    name: "Huawei Cloud",
    logo: "/providers/huawei.svg",
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
    name: "The Upgrade AI",
    status: "gold",
    logo: "/sponsors/the-upgrade.webp",
    link: "https://www.theupgrade.ai/",
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
    image: "/communities/vanjs.svg",
  },
  {
    id: 2,
    name: "AWS User Group Vancouver",
    description:
      "Vancouver's AWS community with monthly events and co-host of Vancouver's largest Cloud and AI Conference.",
    url: "https://www.awsusergroups.com/",
    image: "/communities/aws.svg",
  },
  {
    id: 3,
    name: "Azure Canada",
    description:
      "Vancouver Microsoft Azure User Group running quarterly events and co-hosting Western Canada's largest Cloud and AI Conference.",
    url: "https://www.azurecanada.ca/",
    image: "/communities/azurecanada.svg",
  },
  {
    id: 4,
    name: "Cloud Native",
    description:
      "A community focused on cloud-native technologies, containerization, and microservices architecture.",
    url: "https://lu.ma/p35u91p3",
    image: "/communities/cloudnative.svg",
  },
  {
    id: 5,
    name: "Vancouver AI Community",
    description:
      "Connect with AI enthusiasts, researchers, and practitioners in Vancouver.",
    url: "https://www.vancouveraimeetup.com/",
    image: "/communities/vanai.svg",
  },
  {
    id: 6,
    name: "Google Developer Group",
    description:
      "A diverse and inclusive tech community where everyone, regardless of their experience level, feels empowered to learn, share, and grow.",
    url: "https://gdg.community.dev/gdg-surrey/",
    image: "/communities/gdg.svg",
  },
];
