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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="faq">
      <div className="container mx-auto px-4 xl:max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {EVENT_CONFIG.sections.faq.title}
        </h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          {EVENT_CONFIG.sections.faq.items.map((item, i) => (
            <AccordionItem value={`item-${i + 1}`} key={i}>
              <AccordionTrigger
                className={`hover:text-green-500 transition-colors ${
                  openAccordionIndex === i && "text-green-500"
                }`}
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