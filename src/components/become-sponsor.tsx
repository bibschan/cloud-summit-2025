"use client";

import Link from "next/link";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function BecomeSponsor() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="border-none bg-gradient-to-r from-green-500 to-blue-500">
        <CardContent className="p-6 text-center">
          <Sprout className="mx-auto mb-4 h-12 w-12 text-white" />
          <h3 className="mb-2 text-xl font-bold text-white">
            Become a Sponsor
          </h3>
          <p className="mx-auto mb-4 max-w-xl text-sm text-white">
            Support innovation and connect with leaders in cloud technology.
            Join us in shaping the future of the industry!
          </p>
          <Link href="https://forms.gle/1XDU3sdR94UgbcUEA" target="_blank">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100"
            >
              Learn More
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
} 