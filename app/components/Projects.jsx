import { assets, workData } from "../../public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useThemeManager from "./themeManager";
import ProjectCarousel from "./ProjectCarousel"


const Projects = () => {
  const theme = useThemeManager();

  return (
    <div className="border rounded p-4 hover:border-yellow-300 dark:bg-zinc-900">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">projects</span>
      <div className="mt-3">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Projects;
