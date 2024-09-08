import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{tsx,mdx}",
    "./src/app/**/*.{tsx,mdx}",
    "./src/components/ui/*.{tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cloud: "10px 10px rgba(0, 0, 0, 0.2)",
        "text-glow": "0px 0px 20px #0000006e",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".text-shadow-glow": {
          textShadow: "0px 0px 20px #0000006e",
        },
      });
    },
  ],
};
export default config;
