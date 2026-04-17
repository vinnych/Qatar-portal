import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
          // Light Mode Palette
          sand: "#F5F2EB",
          burnished: "#C5A028",
          charcoal: "#1A1C20",
        },
      },
    },
  },
  plugins: [],
};

export default config;
