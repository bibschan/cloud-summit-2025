import { Description } from "@radix-ui/react-toast";

export const EVENT_CONFIG = {
  title: "Cloud Summit",
  date: "May 27, 2025 at 11AM",
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
          link: ""
        },
        {
          icon: "/activities/presentations.svg",
          title: "Presentations",
          details: "Get industry insights from cloud experts.",
          link: ""
        }, {
          icon: "/activities/tech_companies.svg",
          title: "Tech Companies",
          details: "Find cloud solutions for your business needs.",
          link: ""
        },
        {
          icon: "/activities/workshops.svg",
          title: "Live Interviews",
          details: "Share your thoughts on Cloud & AI.",
          link: "/media"
        },

        {
          icon: "/activities/communities.svg",
          title: "Communities",
          details: "Explore & connect with local tech communities.",
          link: "/#community-section"
        },
        {
          icon: "/activities/music.svg",
          title: "Live Music & AI DJ",
          details: "Enjoy the ambience with live music.",
          link: ""
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
    image: "/CloudSummit_2025_Committee_Lego.png",
    description:
      "Bringing the Cloud Summit to life takes creativity, dedication, and teamwork. With the expertise and passion of the 2025 team, we’re excited to deliver an unforgettable event. Get ready to connect, learn, and innovate at this year’s Cloud Summit!",
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
      },
    ],
    volunteers: [
      {
        name: "Ayda Esmradi",
        link: "https://www.linkedin.com/in/aydaesmradi/",
        team: "webAndDesign",
      },
      {
        name: "Byte Quest",
        link: "https://www.linkedin.com/company/bytequestllc/",
        team: "webAndDesign",
      },
      {
        name: "Jess Jaen",
        link: "https://www.linkedin.com/in/jess-jaen-creative-graphic-designer/",
        team: "webAndDesign",
      },
      {
        name: "Kota Ito",
        link: "https://www.linkedin.com/in/kota-ito-%EF%BC%A0041212/",
        team: "webAndDesign",
      },
      {
        name: "Luis Hernandez",
        link: "https://github.com/luisher98",
        team: "webAndDesign",
      },
      {
        name: "Madhuja Mitra",
        link: "https://www.linkedin.com/in/madhuja-mitra/",
        team: "webAndDesign",
      },
      {
        name: "Mostafa Davoodi",
        link: "https://www.linkedin.com/in/mostafa-davoodi/",
        team: "webAndDesign",
      },
      {
        name: "Sophia Chan",
        link: "https://www.linkedin.com/in/sophia-g-chan/",
        team: "webAndDesign",
      },
    ],
    webMembers: [
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
    logo: "/cloud-providers/aws-white.svg",
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
    logo: "/cloud-providers/tencent-white.svg",
  },
  {
    name: "Huawei Cloud",
    logo: "/cloud-providers/huawei.svg",
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
export const teamAreas = [
  {
    target: "_blank",
    alt: "Andrey Barkov",
    title: "Andrey Barkov",
    href: "https://www.linkedin.com/in/andreybarkov/",
    coords: "342,28,501,217",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Bibi Souza",
    title: "Bibi Souza",
    href: "https://www.linkedin.com/in/bibschan/",
    coords: "510,28,662,217",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Devreet Dulay",
    title: "Devreet Dulay",
    href: "https://www.linkedin.com/in/devreet-dulay/",
    coords: "674,28,839,217",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Dom Beckers",
    title: "Dom Beckers",
    href: "",
    coords: "858,28,1008,217",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Fernando Stoelting",
    title: "Fernando Stoelting",
    href: "https://www.linkedin.com/in/fstoelting/",
    coords: "1009,28,1169,217",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Gabriela Arno",
    title: "Gabriela Arno",
    href: "https://www.linkedin.com/in/gabriela-arno-a7b55b163/",
    coords: "346,231,500,410",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Jackie Ho",
    title: "Jackie Ho",
    href: "https://www.linkedin.com/in/jackiehyho/",
    coords: "512,231,665,410",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Kris Krug",
    title: "Kris Krug",
    href: "https://www.linkedin.com/in/kriskrug/",
    coords: "669,231,830,410",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Matt Carolan",
    title: "Matt Carolan",
    href: "https://www.linkedin.com/in/matthewcarolan/",
    coords: "840,231,1005,410",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Mattias Andersson",
    title: "Mattias Andersson",
    href: "https://www.linkedin.com/in/mattias-andersson/",
    coords: "1005,231,1169,410",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Mike Hoff",
    title: "Mike Hoff",
    href: "https://www.linkedin.com/in/mikehoff321/",
    coords: "348,420,497,594",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Mohsen Akhavan",
    title: "Mohsen Akhavan",
    href: "https://www.linkedin.com/in/themohsenakhavan/",
    coords: "509,423,668,594",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Shanky Silva",
    title: "Shanky Silva",
    href: "",
    coords: "677,421,830,592",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Umer Khalid",
    title: "Umer Khalid",
    href: "https://www.linkedin.com/in/umerkhalid1/",
    coords: "844,422,997,596",
    shape: "rect",
  },
  {
    target: "_blank",
    alt: "Will Sheldon",
    title: "Will Sheldon",
    href: "",
    coords: "1011,424,1161,598",
    shape: "rect",
  },
];

export const SPEAKERS = [
  {
    id: 7,
    name: "Matt Billman",
    title: "CEO and Co-Founder",
    company: "Netlify",
    tag: "keynote",
    bio: "Coming Soon",
    talk_title: "AX and Why It Matters",
    talk_summary: "AI agents are reshaping software development, but today’s infrastructure wasn’t built for them. For AI agents to truly be effective, we need to design our infrastructure with Agent Experience (AX) in mind. AX is about building the shortest path for an agent to go from user input to a URL in production. This requires primitives and APIs designed for LLMs and workflows that enable seamless developer-agent collaboration. This talk will offer a new perspective on AI-driven development, key architectural principles for supporting AI agents, and a glimpse into the not-so-far off future where AI isn't just a coding assistant but an active participant in software creation.",
    image: "/speakers/matt.jpg"
  },
  {
    id: 1,
    name: "Adetokunbo Ige",
    title: "Sr. DevOps Engineer",
    company: 'Planview',
    tag: "featured",
    bio: "Adetokunbo Ige is a seasoned platform engineer and Certified ISO 22301 Lead Implementer in Business Continuity. With extensive expertise spanning software engineering, enterprise application management, server infrastructure, database administration, incident response, and cloud engineering, he brings a wealth of technical knowledge to the conference. Adetokunbo holds a B.Sc in Computer Science from Babcock University and an M.Sc in Business Information Technology from Middlesex University, where he graduated with distinction. His technical arsenal includes proficiency in SQL Server, Oracle, MySQL, Docker, Kubernetes, and numerous scripting languages.",
    talk_title: "Build and Deploy Dockerize Python Application to Azure Container Instances (ACI) using Azure DevOps",
    talk_summary: "If you're building Python apps in Docker and want to deploy them to Azure automatically, this session is for you. We’ll walk through how to use Azure DevOps to deploy a containerized Python application to Azure Container Instances (ACI) with no manual intervention. You’ll learn how to streamline your pipeline, avoid common pitfalls, and set up a repeatable, reliable deployment workflow—all using real-world examples.",
    image: "/speakers/adetokunbo.jpeg"
  },
  {
    id: 2,
    name: "Aiman Parvaiz",
    title: "Director of DevOps",
    company: "NimbusStack",
    tag: "speaker",
    bio: "Aiman Parvaiz brings over a decade of hands-on experience in DevOps and cloud infrastructure, primarily across the US & Canada. Having held leadership positions at prominent companies including Fliapagram/TikTok, SHIFT, and MNTN, Aiman has spearheaded cloud transformations, led high-performing DevOps teams, and implemented large-scale infrastructure projects with significant business impact. As the founder of NimbusStack, he now focuses on helping organizations streamline DevOps practices and optimize AWS infrastructure. His impressive portfolio includes over 50 successful DevOps projects that have helped companies save more than $2 million in cloud costs while reducing time to market by 35%.",
    talk_title: "Driving Cloud Cost Efficiency: Multi-Cloud Strategies and the Culture of Cost-Conscious Engineering",
    talk_summary: "Multi-cloud sounds great—until the bills roll in. The truth is, no amount of tooling can rein in cloud spend without the right culture behind it. In this talk, we’ll explore why building a culture of cost-awareness across engineering and leadership is the real key to multi-cloud success. You’ll learn how to align DevOps and FinOps, drive better decisions through shared financial accountability, and create an environment where smart cloud usage becomes second nature.",
    image: "/speakers/aiman.jpeg"
  },
  {
    id: 3,
    name: "Denis Astahov",
    title: "Solutions Architect",
    company: "OpsGuru",
    tag: "speaker",
    bio: "Denis Astahov serves as a Solutions Architect at OpsGuru and was recognized as an AWS Community Hero in 2021. He is the creator behind the ADV-IT YouTube channel, which boasts over 100,000 subscribers, where he shares valuable insights on Cloud and DevOps technologies to help professionals advance their careers in DevOps and Cloud Engineering. Denis holds an impressive collection of 15 cloud certifications, including 12 from AWS, demonstrating his deep expertise and commitment to the field.",
    talk_title: "How to become Cloud/DevOps Engineer from Zero",
    talk_summary: "Interested in a career in Cloud or DevOps but not sure where to start? In this session, Denis Astahov will break down a practical, step-by-step learning roadmap for going from zero experience to Cloud/DevOps Engineer. We’ll cover which topics to focus on, in what order, and how deep to go at each stage. Whether you’re switching careers or just starting out, you’ll leave with a clear path forward and the confidence to begin your journey.",
    image: "/speakers/denis.jpg"
  },
  {
    id: 4,
    name: "Dr. Ryan Rad",
    title: "Asst. Professor Computer Science",
    company: "Northeastern University",
    tag: "featured",
    bio: "Dr. Ryan Rad is a Professor at Northeastern University's Khoury College of Computer Sciences and an adjunct professor at the University of British Columbia. With over a decade of experience in AI, he combines academic depth with industry expertise, having held research, engineering, and leadership roles at both startups and tech giants like Microsoft. Passionate about education, Dr. Rad has taught courses in Machine Learning, Computer Vision, Generative AI, and Data Science across five universities. His research focuses on leveraging AI for social good, with impactful projects in healthcare, sustainability, and beyond. A respected thought leader, he has delivered more than 50 talks and research papers at prestigious conferences and institutions worldwide.",
    talk_title: "The State of LLMs: Breakthroughs, Barriers, and the Road Ahead",
    talk_summary: "Large Language Models (LLMs) are everywhere—from writing code to generating content—but how do they actually work, and where are they headed? This talk explores the most exciting recent advances in LLMs, including improvements in reasoning, efficiency, and adaptability. We’ll also dive into the real challenges they face: bias, hallucinations, ethical concerns, and high compute costs. Finally, we’ll look ahead at what’s next—like retrieval-augmented generation (RAG), multimodal AI, and smarter alignment. By the end of this session, you will have a deeper understanding of the current capabilities of LLMs, the challenges that must be addressed, and the innovations shaping the future of AI. ",
    image: "/speakers/ryan.JPG"
  },
  {
    id: 5,
    name: "Eric Johnson",
    title: "Principal Developer Advocate",
    company: "Amazon Web Services (AWS)",
    tag: "featured",
    bio: "Eric is a Developer Advocate at AWS, focusing on Serverless technologies. With a background in software development and architecture, he shares his knowledge through speaking engagements and educational initiatives. He combines his technical expertise with an engaging teaching style to help others understand complex concepts.",
    talk_title: "Taking GenAI from Paper to Production with Serverless",
    talk_summary: "Start your journey into the world of Serverless and GenAI with this foundational session. Through a real-world application example, discover why serverless is the ideal architecture for GenAI workloads, offering superior scalability and cost-effectiveness compared to traditional infrastructure approaches. This practical demonstration will lay the groundwork for understanding how modern AI applications can be built and deployed efficiently using serverless.",
    image: "/speakers/eric.png"
  },
  {
    id: 6,
    name: "Farzad Khandan",
    title: "CTO & Co-Founder",
    company: "Innovimia Technologies",
    tag: "speaker",
    bio: "Farzad Khandan is a futurist, AI/ML architect, and entrepreneur with deep expertise in artificial intelligence, cloud computing, and emerging technologies. Combining a background in software engineering with a Ph.D. in Futures Studies, he has successfully designed and delivered large-scale AI/ML solutions leveraging advanced machine learning, data engineering, and cloud architectures. Farzad has led high-performance teams and launched multiple startups, including Innovimia Technologies, where he develops AI-powered SaaS solutions. He is also the founder of the Future Human Foundation (Fuman.org), a nonprofit dedicated to advancing education in AI, space, and future technologies. Currently, he is developing Hadish Social Assistant, an AI-driven content automation app that empowers users to elevate their social media presence effortlessly.",
    talk_title: "Building your Startups in the Cloud? Dos and Don'ts",
    talk_summary: "Building a startup in the cloud opens up endless possibilities—but also a fair share of traps. In this session, we’ll walk through the real-world dos and don’ts of launching and scaling a cloud-native startup. You’ll get practical insights on cloud architecture, DevOps automation, cost management, and integrating AI/ML from day one. Whether you’re a founder, engineer, or just startup-curious, this talk will help you build smarter, move faster, and avoid the costly mistakes others have made.",
    image: "/speakers/farzad.jpeg"
  },
  {
    id: 11,
    name: "Mark Gamble",
    title: "Director, Product and Solutions Marketing",
    company: "Couchbase",
    tag: "speaker",
    bio: "Mark is a passionate product marketer with a technical and solution consulting background and 20+ years of experience in enterprise and open source technology. He has launched several database and analytic solutions throughout his career, and has worked with customers across a wide variety of industries including Financial Services, Automotive, Gaming, Hospitality, High-Tech and Healthcare. With an expertise in analytics and AI, Mark loves all things data, and is an emphatic supporter of data-for-good initiatives. ",
    talk_title: "Cloud-to-edge AI and role of the database",
    talk_summary: "Edge AI is reshaping how we deliver intelligent, low-latency experiences—from mobile apps to IoT and embedded systems. But real-time AI at the edge demands more than just models—it requires a data architecture built for speed, scale, and autonomy. In this session, we’ll explore how Couchbase powers edge AI with a cloud-to-edge database, built-in vector search, and seamless sync between cloud and device. You’ll see how to deploy smarter, faster, and more resilient applications—right where your users are.",
    image: "/speakers/mark.jpg"
  },
  {
    id: 8,
    name: "Morohito (Moro) Arakaki",
    title: "Business Development Engineer - Cloud",
    company: 'Fortinet',
    tag: "speaker",
    bio: "Morohito Arakaki is a Business Development Engineer at Fortinet, specializing in cloud technologies. He brings a wealth of technical expertise and strategic insight to help clients adopt secure cloud solutions that drive business growth. With a strong background in both engineering and business development, Morohito collaborates with cross-functional teams to design tailored cloud strategies that meet the evolving needs of organizations. His work focuses on bridging the gap between technical innovation and business goals, ensuring seamless cloud adoption and optimized performance. Morohito is dedicated to enabling businesses to securely scale their operations in the cloud.",
    talk_title: "From Foundations to Expertise: Elevating Cloud Security with CNAPP ",
    talk_summary: "Cloud misconfigurations, API exploits, and zero-day attacks are rising threats—even for seasoned teams. This session introduces CNAPP (Cloud-Native Application Protection Platform), a unified approach to securing modern cloud environments. We’ll explore how tools like FortiCNAPP and Lacework help detect hidden risks, protect workloads, and strengthen security posture. You’ll also learn how CSPM, CWPP, and CIEM work together to defend against common cloud pitfalls. Whether you're just starting or scaling in the cloud, this session will give you practical strategies to stay secure at every stage.",
    image: ""
  },
  {
    id: 9,
    name: "Niti Jain",
    title: "Lead Software Engineer",
    company: 'Salesforce',
    tag: "speaker",
    bio: "Niti Jain is a Lead Software Engineer and Scrum Leader at Salesforce with seven years of industry experience. At Salesforce, she specializes in the Identity space, focusing on authorization and authentication at scale. Her technical interests encompass distributed systems, identity, and machine learning. A trailblazing tech leader, Niti combines deep technical expertise with a passionate commitment to community building. She serves on the advisory board for the University of Wisconsin, Madison, and leads the Vancouver hub for AnitaB.org, demonstrating her dedication to advancing diversity in technology.",
    talk_title: "Scaling Microservices: Mastering Zero-Downtime Data Migration Using Cloudflare",
    talk_summary: "Migrating data without disruption is a critical challenge in modern systems. In this session, we’ll explore how to execute large-scale, zero-downtime data migrations using strategies like real-time traffic shaping, phased rollouts, and canary deployments—powered by Cloudflare’s edge capabilities. Joining the session is Sarang Gupta, Staff Data Scientist at Asana, who brings over 8 years of experience building enterprise-grade data and ML systems. Together, we’ll share practical insights for designing migration workflows that are scalable, resilient, and seamless for end users.Moving data without downtime is one of the toughest challenges in scaling microservices. In this session, we’ll look at how Cloudflare’s global edge network can help you pull off seamless data migrations with zero user disruption. We’ll cover strategies for real-time traffic shaping, phased rollouts, canary deployments, and global fault tolerance—along with lessons learned from the field. If you’re scaling services or modernizing systems, this talk will give you the tools to migrate with confidence.",
    image: "/speakers/niti.png"
  },
  {
    id: 10,
    name: "Sarang Gupta",
    title: "Staff Data Scientist",
    company: 'Asana in Vancouver, Canada',
    tag: "speaker",
    bio: "Sarang Gupta is a Staff Data Scientist at Asana in Vancouver, Canada, where he serves as a founding data scientist on the Asana's AI team. With over 8 years of experience in machine learning and data science, he has made contributions to enterprise-grade ML applications and academic research. Sarang holds an MS in Data Science from Columbia University and a dual degree (BEng in Industrial Engineering and BBA in Business Management) from the Hong Kong University of Science and Technology (HKUST), where he graduated first in his class. His professional journey includes experience at Goldman Sachs, Hong Kong and research contributions at the Brown Institute for Media Innovation (a collaboration between Stanford and Columbia University).",
    talk_title: "Scaling Microservices: Mastering Zero-Downtime Data Migration Using Cloudflare",
    talk_summary: "Migrating data without disruption is a critical challenge in modern systems. In this session, we’ll explore how to execute large-scale, zero-downtime data migrations using strategies like real-time traffic shaping, phased rollouts, and canary deployments—powered by Cloudflare’s edge capabilities. Joining the session is Sarang Gupta, Staff Data Scientist at Asana, who brings over 8 years of experience building enterprise-grade data and ML systems. Together, we’ll share practical insights for designing migration workflows that are scalable, resilient, and seamless for end users.",
    image: "/speakers/Sarang.png"
  }
];
