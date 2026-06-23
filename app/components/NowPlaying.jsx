"use client";
import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [tracks, setTracks] = useState(undefined);

  const fetchTracks = async () => {
    try {
      const res = await fetch("/api/now-playing");
      const data = await res.json();
      setTracks(data.tracks ?? []);
    } catch {
      setTracks([]);
    }
  };

  useEffect(() => {
    fetchTracks();
    const interval = setInterval(fetchTracks, 30000);
    return () => clearInterval(interval);
  }, []);

  if (tracks === undefined) return null;

  const label = tracks[0]?.nowPlaying ? "now playing" : "last played";

  return (
    <div className="border rounded p-4 dark:bg-zinc-900 hover:border-yellow-200 duration-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          {label}
        </span>
        {tracks[0]?.nowPlaying && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
        )}
      </div>

      {tracks.length === 0 ? (
        <p className="font-mono text-sm text-gray-400">not listening to anything</p>
      ) : (
        <div className="flex flex-col gap-3">
          {tracks.map((track, i) => (
            <a
              key={track.url + i}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 group ${i > 0 ? "opacity-50 hover:opacity-80" : ""} duration-150`}
            >
              {track.image ? (
                <img
                  src={track.image}
                  alt={track.album}
                  className={`rounded shrink-0 object-cover ${i === 0 ? "w-10 h-10" : "w-7 h-7"}`}
                />
              ) : (
                <div className={`rounded shrink-0 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center ${i === 0 ? "w-10 h-10 text-base" : "w-7 h-7 text-xs"}`}>
                  ♪
                </div>
              )}
              <div className="min-w-0">
                <p className={`font-mono font-semibold truncate group-hover:text-yellow-400 duration-150 ${i === 0 ? "text-sm" : "text-xs"}`}>
                  {track.name}
                </p>
                <p className="font-mono text-xs text-gray-400 truncate">{track.artist}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
