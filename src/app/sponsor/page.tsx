"use client";

import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Sponsors() {
  const tiers = [
    {
      name: "Bronze",
      bgColor: "bg-white/[0.03]",
      titleClass:
        "bg-gradient-to-b from-[#D6A573] via-[#B68B5B] to-[#8A6643] bg-clip-text text-transparent",
      price: "$100/month",
      features: ["Logo on website", "Social media shoutout"]
    },
    {
      name: "Silver",
      bgColor: "bg-white/[0.06]",
      titleClass:
        "bg-gradient-to-b from-[#FFFFFF] via-[#C0C0C0] to-[#7B7B7B] bg-clip-text text-transparent",
      price: "$500/month",
      features: [
        "Logo on website",
        "Social media shoutout",
        "Newsletter feature"
      ]
    },
    {
      name: "Gold",
      bgColor: "bg-white/[0.09]",
      titleClass:
        "bg-gradient-to-b from-[#F1C27D] via-[#D4A653] to-[#B08A39] bg-clip-text text-transparent",
      price: "$1000/month",
      features: [
        "Logo on website",
        "Social media shoutout",
        "Newsletter feature",
        "Event sponsorship"
      ]
    }
  ];

  return (
    <section className="md:h-[100vh] px-4 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white overflow-hidden">
      <Nav />
      <div className="max-w-6xl mx-auto py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Become a Sponsor
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Support our mission and gain exclusive benefits <br /> by becoming a
          sponsor today.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative flex justify-center items-center backdrop-blur-lg rounded-lg shadow-lg p-1 ${
                index === 1
                  ? "bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700"
                  : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div
                className={`relative w-full h-full p-6 rounded-lg bg-[rgb(67,73,163)] `}
              >
                <h3 className={`text-2xl font-bold mb-4 ${tier.titleClass}`}>
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold mb-6">{tier.price}</p>
                <ul className="mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUSc2xo8Fcs_-T7lJzG27lZ0kueb1oSnSNE1WxzSV1c1umCQ/viewform"
            target="_blank"
            className="w-full h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="max-md:w-full bg-white text-blue-900 px-8 py-5 md:py-3 rounded-full font-bold text-lg transition-all hover:bg-blue-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 20px rgba(255,255,255,0.5)",
                  "0px 0px 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Become a Sponsor
            </motion.button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
