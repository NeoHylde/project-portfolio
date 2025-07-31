import { assets, workData } from "../../public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useThemeManager from "./themeManager";
import ProjectCarousel from "./ProjectCarousel"


const Projects = () => {
  const theme = useThemeManager();

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Check out some of the things I've worked on.
      </p>

      <ProjectCarousel />

      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/NeoHylde"
            className="w-max flex items-center justify-center gap-2
         text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
         my-20 hover:bg-gray-200 duration-500 dark:text-white"
          >
            Show more{" "}
            <img
              src={
                theme === "dark"
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="Right arrow "
              className="w-4"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
