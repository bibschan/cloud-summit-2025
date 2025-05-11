"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { COMMUNITIES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function CommunitiesList() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement | null>(null);

  const visibleCount = showAll ? COMMUNITIES.length : isDesktop ? 6 : 4;
  const visibleCommunities = COMMUNITIES.slice(0, visibleCount);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const id = element.getAttribute("data-id");
          if (id) {
            setVisibleItems((prev) => ({
              ...prev,
              [id]: entry.isIntersecting
            }));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const cards = document.querySelectorAll('.community-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [visibleCommunities.length]);

  return (
    <section
      id="community-section"
      ref={sectionRef}
      className="py-20 bg-primary-900 text-foreground"
    >
      <div className="max-w-[1100px] container px-4 md:px-6 mx-auto space-y-12 flex flex-col items-center">
        <div className="text-center space-y-4">
          <h2 className="text-6xl md:text-8xl mb-4 text-white">
            Vancouver Tech <span className="block text-pale-gold">Communities</span>
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            {visibleCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                data-id={community.id}
                className="w-full sm:w-[48%] lg:w-[31%] community-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: visibleItems[community.id] ? 1 : 0,
                  y: visibleItems[community.id] ? 0 : 20,
                }}
                transition={{
                  duration: 0.3, // Reduced from 0.5 for faster animation
                  delay: index * 0.05, // Reduced from 0.1 for faster staggering
                }}
              >
                <Link href={community.url} target="_blank">
                  <Card className="h-full transition-all duration-200 hover:bg-primary-700 hover:shadow-md bg-primary-800 border-0 p-4 rounded-xl">
                    <CardHeader className="items-center gap-4 px-0 py-2">
                      {community.image && (
                        <div className="w-[50px] h-[50px] overflow-hidden rounded">
                          <Image
                            src={community.image}
                            alt={community.name}
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <CardDescription className="text-lg text-pale-gold font-semibold">
                        {community.name}
                      </CardDescription>
                    </CardHeader>
                    <CardDescription className="line-clamp-3 text-sm text-muted-foreground mt-2">
                      {community.description}
                    </CardDescription>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mx-auto mt-6 flex items-center gap-1 text-sm hover:font-bold"
          >
            {showAll ? "Show less" : "Show more"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-700 ${showAll ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
        <p className="text-xl text-primary-50 max-w-2xl mx-auto text-center font-semibold">
          Got a tech community interested in this event?
        </p>
        <Link href='/contact' className="mx-auto text-center">
          <Button
            size="lg"
            variant="outline"
            className="w-[150px] border-white/20 text-white hover:bg-pale-gold hover:text-primary-900 transition-all"
          >
            Join Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
