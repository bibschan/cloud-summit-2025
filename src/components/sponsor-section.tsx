"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function SponsorSectionComponent() {
  const sponsors = {
    gold: [
      { name: "GoldCorp", logo: "/placeholder.svg?height=100&width=200" },
      {
        name: "Golden Innovations",
        logo: "/placeholder.svg?height=100&width=200",
      },
    ],
    silver: [
      { name: "SilverTech", logo: "/placeholder.svg?height=80&width=160" },
      {
        name: "Silver Solutions",
        logo: "/placeholder.svg?height=80&width=160",
      },
      { name: "Argent Systems", logo: "/placeholder.svg?height=80&width=160" },
    ],
    bronze: [
      { name: "Bronze Dynamics", logo: "/placeholder.svg?height=60&width=120" },
      {
        name: "Copper Industries",
        logo: "/placeholder.svg?height=60&width=120",
      },
      { name: "Metal Makers", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Alloy Alliance", logo: "/placeholder.svg?height=60&width=120" },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Sponsors</h2>
        <p className="text-center text-gray-600 mb-8">
          We&apos;re grateful for the support of our amazing sponsors who make
          this conference possible.
        </p>

        <div className="space-y-12">
          {Object.entries(sponsors).map(([tier, tierSponsors]) => (
            <div key={tier}>
              <h3 className="text-2xl font-semibold text-center mb-6 capitalize">
                {tier} Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tierSponsors.map((sponsor) => (
                  <Card
                    key={sponsor.name}
                    className="bg-white transition-shadow hover:shadow-md"
                  >
                    <CardContent className="p-6 flex items-center justify-center h-full">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={
                          tier === "gold" ? 200 : tier === "silver" ? 160 : 120
                        }
                        height={
                          tier === "gold" ? 100 : tier === "silver" ? 80 : 60
                        }
                        className="max-w-full h-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
