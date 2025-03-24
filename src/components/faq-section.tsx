"use client";
import { Button } from "./ui/button";
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
          <Link href={EVENT_CONFIG.links.social.youtube} className="underline">
            YouTube
          </Link>
          .
        </>
      );
    }
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = answer.split(urlRegex);

    return (
      <>
        {parts.map((part, index) =>
          urlRegex.test(part) ? (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <section className="py-20 bg-primary-900" id="faq">
      <div className="max-w-[900px] mx-auto px-4 ">
        <h2 className="text-6xl md:text-8xl  mb-10 text-center bg-clip-text text-white">
          Some{" "}
          <span className="text-secondary-600">
            {EVENT_CONFIG.sections.faq.title}
          </span>
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full mx-auto transition-all duration-300"
        >
          {EVENT_CONFIG.sections.faq.items.map((item, i) => (
            <AccordionItem
              value={`item-${i + 1}`}
              key={i}
              className="transition-all duration-300 ease-in-out"
            >
              <AccordionTrigger
                onClick={() => handleAccordionToggle(i)}
                className="transition-transform duration-300 ease-in-out"
              >
                <span className="text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-300 ease-in-out">
                {renderAnswer(item.answer, i)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col justify-center">
          <p className="text-lg md:text-3xl font-semibold text-center my-10">Got more questions for us?</p>
          <Link href="/contact" className="mx-auto">
            <Button
              variant="outline"
              className="w-[150px]  hover:bg-secondary-600 hover:text-primary-900 transition-all font-bold"
            >
              Contact us here!
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
