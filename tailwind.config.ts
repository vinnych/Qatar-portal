import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          obsidian: "#0A0C10",
          gold: "#D4AF37",
          champagne: "#F3E5D0",
          slate: "#0F172A",
          accent: "#F5C75D",
        },
      },
    },
  },
  plugins: [],
};

export default config;
