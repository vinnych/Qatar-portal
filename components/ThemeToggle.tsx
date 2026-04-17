"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 p-3 rounded-full glass hover:scale-110 active:scale-95 transition-all duration-300 group z-50 shadow-2xl"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 transition-all duration-700 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-brand-burnished"}`} />
        <Moon className={`absolute inset-0 transition-all duration-700 ${theme === "dark" ? "rotate-0 scale-100 opacity-100 text-brand-gold" : "-rotate-90 scale-0 opacity-0"}`} />
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-1000 ${theme === "dark" ? "bg-brand-gold/20 opacity-100" : "bg-brand-burnished/10 opacity-0"}`} />
    </button>
  );
}
