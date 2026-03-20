import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#640023",
        "surface-low": "#f4f3f1",
        "on-surface": "#1a1c1a",
        "secondary-accent": "#fcd34d",
        "utility-chip": "#acf2c7",
      },
      fontFamily: {
        newsreader: ["var(--font-newsreader)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
