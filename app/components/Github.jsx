"use client";
import { useEffect, useState } from "react";
import { assets } from "../../public/assets";
import { timeAgo } from "../utils/timeAgo";

export default function Github() {
  const [push, setPush] = useState(undefined);

  useEffect(() => {
    const fetchLastPush = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setPush(data.push ?? null);
      } catch {
        setPush(null);
      }
    };
    fetchLastPush();
  }, []);

  if (push === undefined) return null;

  return (
    <div className="border rounded p-5 dark:bg-zinc-900 hover:border-yellow-200 duration-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <img src={assets.github} alt="" className="w-4 h-4" />
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          last push
        </span>
      </div>

      {push === null ? (
        <p className="font-mono text-sm text-gray-400">no recent pushes</p>
      ) : (
        <a
          href={push.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-0.5 group"
        >
          <p className="font-mono text-sm font-semibold truncate group-hover:text-yellow-400 duration-150">
            {push.repo.split("/")[1] ?? push.repo}
          </p>
          <p className="font-mono text-xs text-gray-400 truncate">
            {push.message || `pushed to ${push.branch}`}
          </p>
          <p className="font-mono text-xs text-gray-500">
            {push.branch} · {timeAgo(push.at)}
          </p>
        </a>
      )}
    </div>
  );
}
