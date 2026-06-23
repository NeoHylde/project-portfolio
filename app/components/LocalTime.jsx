"use client";
import { useState, useEffect } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(null);
  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-CA", {
          timeZone: "America/Vancouver",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setDay(
        now.toLocaleDateString("en-CA", {
          timeZone: "America/Vancouver",
          weekday: "long",
        })
      );
      setDate(
        now.toLocaleDateString("en-CA", {
          timeZone: "America/Vancouver",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border rounded p-5 dark:bg-zinc-900 hover:border-yellow-200 duration-200 h-full">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
        local time
      </span>
      <div className="mt-3 flex flex-col gap-0.5">
        <div className="text-4xl font-mono font-semibold tabular-nums tracking-tight">
          {time ?? "--:--:--"}
        </div>
        <div className="text-sm text-gray-400 font-mono">{day ?? "---"}</div>
        <div className="text-xs text-gray-500 font-mono">{date ?? "---"}</div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-500 font-mono">Burnaby, BC · Canada</span>
        </div>
      </div>
    </div>
  );
};

export default LocalTime;
