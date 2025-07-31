import { assets, workData } from "../../public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useThemeManager from "./themeManager";

const Projects = () => {
  const theme = useThemeManager();

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Check out some of the things I've worked on.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group bg-white dark:bg-zinc-900 border"
          >
            <div className="p-4">
              <h2 className="font-semibold text-lg dark:text-white">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <a
              href={project.link}
              target="_blank"
              className=" right-4 bg-white text-black px-4 py-2 text-sm rounded-full border border-black shadow-[2px_2px_0_#000] hover:bg-lime-300 transition"
            >
              Visit Repo
            </a>
            </div>

            <video
              src={project.bgVideo || ""}
              width={500}
              height={400}
              controls
              className="w-full h-50"
              playsInline
            />
          </div>
        ))}
      </div>

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
