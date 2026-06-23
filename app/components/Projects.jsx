import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  return (
    <div className="border rounded p-3 hover:border-yellow-200 duration-200 dark:bg-zinc-900 h-full flex flex-col">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">projects</span>
      <div className="mt-3 flex-1 min-h-0">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Projects;
