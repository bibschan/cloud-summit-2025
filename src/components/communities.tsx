"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Grid2X2Icon, ListIcon } from "lucide-react";
import { COMMUNITIES } from "@/lib/constants";
import Link from "next/link";



export function CommunitiesList() {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <section
      id="community-section"
      className="
        py-20
        bg-gradient-to-b from-black to-gray-900
        text-foreground
      "
    >
      <div className="container px-4 md:px-6 mx-auto space-y-12">
     
        <div className="text-center space-y-4">
    
          <h2
            className="
              text-4xl md:text-5xl font-bold mb-4
              bg-clip-text text-transparent
              bg-gradient-to-r from-green-400 to-blue-500
            "
          >
            Vancouver Tech Communities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and connect with Vancouver vibrant tech communities.
          </p>
        </div>
        <div className="space-y-4">
      

          <div
            className={`grid gap-4 ${
              isGridView
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {COMMUNITIES.map((community) => (
              <Link key={community.id} href={community.url} target="_blank">
                <Card className="h-full transition-all duration-200 hover:bg-accent hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{community.name}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {community.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
