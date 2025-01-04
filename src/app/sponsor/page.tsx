"use client";

import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Sponsors() {
  const tiers = [
    {
      name: "Bronze",
      price: "x/month",
      features: ["Logo on website", "Social media shoutout"]
    },
    {
      name: "Silver",
      price: "x/month",
      features: [
        "Logo on website",
        "Social media shoutout",
        "Newsletter feature"
      ]
    },
    {
      name: "Gold",
      price: "x/month",
      features: [
        "Logo on website",
        "Social media shoutout",
        "Newsletter feature",
        "Event sponsorship"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white overflow-hidden">
      <Nav />
      <div className="max-w-6xl mx-auto">
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
          Support our mission and gain exclusive benefits by becoming a sponsor
          today.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <p className="text-3xl font-bold mb-6">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg transition-all hover:bg-blue-100"
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
        </div>
      </div>
    </section>
  );
}
