"use client";

import { useEffect, useState } from "react";

export default function DohaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        timeZone: "Asia/Qatar",
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatted);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-sm">
      <span className="text-amber-600">🕐</span>
      <span className="font-mono font-semibold text-amber-900">{time}</span>
      <span className="text-xs text-amber-500">Doha</span>
    </div>
  );
}
