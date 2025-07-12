import { assets, workData } from "../../public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useThemeManager from "./themeManager";

const Projects = () => {
  const theme = useThemeManager();

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my project portfolio! I'm constantly looking for new and
        challenging projects to work on!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            <ul>
              <li>
                <a target="_blank" href={project.link}>
                  <img
                    src={project.bgImage != "" ? project.bgImage : null}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-md px-4 py-3 flex items-center justify-between">
                    <div>
                      <h2 className="font-semibold text-sm">{project.title}</h2>
                      <p className="text-sm text-gray-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                      <img
                        src={assets.send_icon}
                        alt="send icon"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
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
