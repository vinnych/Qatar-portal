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
    <span className="text-[11px] font-mono text-gray-400 tabular-nums tracking-wide select-none">
      {time}
    </span>
  );
}
