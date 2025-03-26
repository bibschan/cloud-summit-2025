"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { COMMUNITIES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";



export function CommunitiesList() {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <section
      id="community-section"
      className="
        py-20
        bg-primary-900
        text-foreground
      "
    >
      <div className="container px-4 md:px-6 mx-auto space-y-12 flex flex-col items-center">
        <div className="text-center space-y-4">
          <h2
            className="
              text-6xl md:text-8xl  mb-4
               text-white
            "
          >
            Vancouver Tech <span className="block text-pale-gold">Communities</span>
          </h2>

        </div>
        <div className="space-y-4">
          <div
            className={`grid gap-4 ${isGridView
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
              }`}
          >
            {COMMUNITIES.map((community) => (
              <Link key={community.id} href={community.url} target="_blank">
                <Card className="h-full transition-all duration-200 hover:bg-primary-700 hover:shadow-md bg-primary-800 border-0 p-4">
                  <CardHeader className="flex flex-row gap-2 px-0 py-2">
                    <Image
                      src={`${community.image}`}
                      alt={`${community.name}`}
                      width={50}
                      height={50}
                    />
                    <CardDescription className="text-lg text-pale-gold font-semibold">{community.name}</CardDescription>

                  </CardHeader>
                  <CardDescription className="line-clamp-2 text-sm">
                    {community.description}
                  </CardDescription>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xl text-primary-50 max-w-2xl mx-auto text-center font-semibold">
          Got a tech community interested in this event?
        </p>
        <Link href='/contact' className="mx-auto  text-center">
          <Button
            size="lg"
            variant="outline"
            className="w-[150px] border-white/20 text-white hover:bg-pale-gold hover:text-primary-900 transition-all">Join Us</Button>
        </Link>
      </div>
    </section>
  );
}
