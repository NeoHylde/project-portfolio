"use client";
import { useState } from "react";
import { workData } from "../../public/assets";

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = workData.length;
  const project = workData[index];

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <div className="flex flex-col h-full">
      <div className="relative overflow-hidden group flex-1 min-h-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {project.bgVideo && (
          <video
            key={project.bgVideo}
            src={project.bgVideo}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>

      <div className="flex justify-between items-start mt-3 gap-3 shrink-0">
        <div className="min-w-0">
          <h2 className="font-mono font-semibold truncate">{project.title}</h2>
          <p className="font-mono text-sm text-gray-400 truncate">{project.description}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-white dark:bg-zinc-800 px-3 py-2 rounded-full border border-black dark:border-zinc-600 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#52525b] hover:bg-lime-300 dark:hover:bg-lime-400 transition"
        >
          <img src="/assets/github.png" className="w-5" alt="GitHub" />
        </a>
      </div>

      <div className="flex items-center justify-between mt-3 shrink-0">
        <button
          onClick={prev}
          className="font-mono text-sm px-3 py-1 rounded border dark:border-zinc-700 hover:border-yellow-400 duration-150"
        >
          ←
        </button>
        <span className="font-mono text-xs text-gray-400">{index + 1} / {total}</span>
        <button
          onClick={next}
          className="font-mono text-sm px-3 py-1 rounded border dark:border-zinc-700 hover:border-yellow-400 duration-150"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
