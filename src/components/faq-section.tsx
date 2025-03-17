"use client";

import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { EVENT_CONFIG } from "@/lib/constants";

export const FAQSection = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = React.useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    if (index === openAccordionIndex) {
      setOpenAccordionIndex(null);
      return;
    }
    setOpenAccordionIndex(index);
  };

  const renderAnswer = (answer: string, index: number) => {
    // Special handling for the online viewing FAQ to include social links
    if (index === EVENT_CONFIG.sections.faq.items.length - 1) {
      return (
        <>
          The event won&apos;t be live-streamed; however, we will have photos
          here on{" "}
          <Link
            href={EVENT_CONFIG.links.social.instagram}
            className="underline"
          >
            Instagram
          </Link>{" "}
          and videos here on{" "}
          <Link
            href={EVENT_CONFIG.links.social.youtube}
            className="underline"
          >
            YouTube
          </Link>
          .
        </>
      );
    }
    return answer;
  };

  return (
    <section className="py-20 bg-primary-900" id="faq">
      <div className="container mx-auto px-4 xl:max-w-[1100px]">
        <h2 className="text-6xl md:text-8xl  font-bold mb-10 text-center bg-clip-text text-white">
          Some <span className="text-secondary-600">{EVENT_CONFIG.sections.faq.title}</span>
        </h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          {EVENT_CONFIG.sections.faq.items.map((item, i) => (
            <AccordionItem value={`item-${i + 1}`} key={i}>
              <AccordionTrigger

                onClick={() => handleAccordionToggle(i)}
              >
                <span className="text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                {renderAnswer(item.answer, i)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
