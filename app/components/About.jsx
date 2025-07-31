import { assets, infoList, toolsData } from "../../public/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useThemeManager from "./themeManager";

const About = () => {
  const theme = useThemeManager();

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <img
            src={assets.neo_golf}
            alt="user"
            className="w-full rounded-3xl border"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            A Computing Science student at SFU passionate about building
            creative, scalable tech solutions. I enjoy working on useful web
            applications, and creating fun games. I love turning ideas into
            impactful products.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description, imgs}, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-100 
                hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white
                dark:hover:bg-gray-900"
                key={index}
              >
                <img
                  src={theme === "dark" ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-white text-sm mb-3">
                  {description}
                </p>
                {imgs && imgs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {imgs.map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt=""
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    ))}
                  </div>
)}

                
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-white font-ovo">
            tools i use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
              w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
              hover:-translate-y-1 duration-500 dark:bg-gray-300"
                key={index}
              >
                <img src={tool} alt="Tool" className="w-5 sm:w-7 " />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
