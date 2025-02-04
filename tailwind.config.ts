import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{tsx,mdx}",
    "./src/app/**/*.{tsx,mdx}",
    "./src/components/ui/*.{tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
