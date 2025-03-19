import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-pattern": "url('/background-pattern.svg')",
      },
      colors: {
        primary: {
          50: "#F5F5F5",
          100: "#D1D2D1",
          200: "#C0C0C0",
          300: "#A3A6A4",
          400: "#8D908E",
          500: "#767A77",
          600: "#5F6460",
          700: "#4c5259",
          800: "#313539",
          900: "#1b221d",
        },
        secondary: {
          50: "#EEF7FF",
          100: "#DEEFFF",
          200: "#CEE8FF",
          300: "#BDE0FF",
          400: "#9DD1FF",
          500: "#7CC2FF",
          600: "#5CB3FF",
          700: "#498FCC",
          800: "#376B99",
          900: "#244766",
        },
        lilac: "#E694FF",
        "lemon-lime": "#A8FB5A",
        "brink-pink": "#FF5C7F",
        "pale-gold": "#FDDE6C",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
