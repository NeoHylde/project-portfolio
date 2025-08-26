import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets, builtData } from "../../public/assets";
import useThemeManager from "./themeManager";
import { motion } from "motion/react";

const Header = () => {
  const theme = useThemeManager();

  return (
    <div className="flex flex-col items-center gap-4 md:px-4 sm:px-8"> 

      <div className="w-full xl:w-2/3 lg:w-4/5 flex md:flex-row flex-col border mx-auto rounded-3xl shadow-2xl">
        <img
          src={assets.neo_tori}
          alt="user"
          className="md:w-[40%] md:h-auto md:object-cover md:object-center md:border-b-0 border-b md:border-r rounded-t-3xl md:rounded-none md:rounded-l-3xl"
        />

        <div className="relative flex-1 min-w-0 flex flex-col">
          <img
            src={theme === "dark" ? assets.gradient_bg_dark : assets.gradient_bg}
            alt="gradient-bg-dark"
            className="absolute inset-0 w-full h-full object-cover -z-10 rounded-b-3xl md:rounded-none md:rounded-r-3xl"
          />

          <div className="items-center text-center px-3 pt-5 pb-5 md:pt-15 flex flex-col h-full">
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-outfit"
            >
              Hi! I'm Neo
              <img src={assets.hand_icon} alt="" className="w-6" />
            </motion.h3>

            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-[44px] font-outfit"
            >
              Student Developer Based In Vancouver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-2xl pt-5 font-outfit hidden md:block"
            >
              Full-stack developer building fast, responsive apps with Next.js, React, and Tailwind CSS.
               Comfortable with APIs, databases, and always focused on clean code and teamwork.
            </motion.p>

            <div className="hidden md:flex flex-col sm:flex-row items-center gap-4 pt-10 mt-auto">
              <a
                href="#contact"
                className="px-10 py-3 border border-white rounded-full dark:bg-[#1e1e1e] bg-[#1e1e1e] text-white flex items-center gap-2 font-mono"
              >
                contact
                <img
                  src={theme === "dark" ? assets.right_arrow_white : assets.right_arrow_white}
                  alt=""
                  className="w-4"
                />
              </a>
              <a
                href="/assets/NeoHylde-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3 border rounded-full border-black dark:text-black dark:bg-white flex items-center gap-2 cursor-pointer font-mono"
              >
                resume    
                <img 
                  src={assets.download_icon}
                  alt="" 
                  className="w-4"
                />              
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 pt-10 mt-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="max-w-2xl mx-auto font-mono"
              >
                (built with)
              </motion.p>

              <ul className="flex items-center gap-3 sm:gap-5 pt-5">
                {builtData.map((tool, index) => (
                  <li
                    className="flex items-center justify-center
                    w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer
                    hover:-translate-y-1 duration-500 bg-white"
                    key={index}
                  >
                    <img src={tool} alt="Tool" className="w-5 sm:w-7 " />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col sm:flex-row items-center gap-4 pt-10 mt-auto">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full dark:bg-[#1e1e1e] bg-[#1e1e1e] text-white flex items-center gap-2 font-mono"
        >
          contact
          <img
            src={theme === "dark" ? assets.right_arrow_white : assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </a>
        <a
          href="/assets/NeoHylde-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border rounded-full border-black dark:text-black dark:bg-white flex items-center gap-2 cursor-pointer font-mono"
        >
          resume
          <img 
            src={assets.download_icon}
            alt="" 
            className="w-4"
          />                    
        </a>
      </div>
    </div>
  );
};

export default Header;