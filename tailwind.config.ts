import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        cloud: "10px 10px rgba(0, 0, 0, 0.2)",
        "text-glow": "0px 0px 20px #0000006e",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite"
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
          textShadow: "0px 0px 20px #000000",
        },
      });
    },
  ],
};
export default config;
