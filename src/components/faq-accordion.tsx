import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";

export default function FAQaccordion() {
  const [openAccordionIndex, setOpenAccordionIndex] = React.useState<
    number | null
  >(null);

  const handleAccordionToggle = (index: number) => {
    if (index === openAccordionIndex) {
      setOpenAccordionIndex(null);
      return;
    }
    setOpenAccordionIndex(index);
  };

  const FAQs = [
    {
      question: "Who is Cloud Summit for?",
      answer: (
        <>
          Cloud Summit is for anyone who wants to stay ahead of the latest
          technology advancements in Cloud, see and hear first-hand from
          industry experts in transformative innovations like generative AI,
          analytics, and cloud operations, as well as gaining a glimpse into
          what is happening on other major cloud platforms. Whether you&apos;re
          a developer, a business decision-maker, an IT decision-maker, or a
          technical project manager, there&apos;s something at Cloud Summit for
          you.
        </>
      )
    },
    {
      question:
        "How is Cloud Summit different from other technology conferences?",
      answer: (
        <>
          Cloud Summit Vancouver is our annual networking and learning event
          with a focus on business and the community. We are run by an official
          Canadian Not-For-Profit with all profits going to charity. With a
          focus on community comes a more heightened human and connective
          experience with a unique emphasis on more creative engagements such as
          music, hands-on demos, whiteboarding, and more to create a dynamic
          boost to your engagement.
        </>
      )
    },
    {
      question: "Is the event accessible?",
      answer: (
        <>
          Yes, there is both accessible ramps, elevators, and main stage
          seating.
        </>
      )
    },
    {
      question: "Will I be able to watch the event online?",
      answer: (
        <>
          The event won&apos;t be live-streamed; however, we will have photos
          here on{" "}
          <Link
            href="https://www.instagram.com/canadiancloudninja"
            className="underline"
          >
            Instagram
          </Link>{" "}
          and videos here on{" "}
          <Link
            href="https://www.youtube.com/@PublicCloudNinja/about"
            className="underline"
          >
            YouTube
          </Link>
          .
        </>
      )
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full mx-auto">
      {FAQs.map((qa, i) => (
        <AccordionItem value={`item-${i + 1}`} key={i}>
          <AccordionTrigger
            className={`hover:text-green-500 transition-colors ${
              openAccordionIndex === i && "text-green-500"
            }`}
            onClick={() => handleAccordionToggle(i)}
          >
            <span className="text-left">{qa.question}</span>
          </AccordionTrigger>
          <AccordionContent>{qa.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
