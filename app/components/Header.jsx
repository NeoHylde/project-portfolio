import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../public/assets";
import useThemeManager from "./themeManager";
import { motion } from "motion/react";
import Dropdown from "./Dropdown.jsx"

const Header = () => {
  const theme = useThemeManager();

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:px-8"> 
      <div className="w-full lg:w-2/3 flex md:flex-row flex-col border mx-auto rounded-3xl">
        <img
          src={assets.neo_tori}
          alt="user"
          className="md:w-[40%] h-auto border-b md:border-r rounded-t-3xl md:rounded-none md:rounded-l-3xl"
        />


        <div className="relative flex-1 min-w-0 flex flex-col">
          <img
            src={assets.gradient_bg_dark}
            alt="gradient-bg-dark"
            className="absolute inset-0 w-full h-full object-cover -z-10 rounded-b-3xl md:rounded-r-3xl"
          />

          <div className="items-center px-3 pt-5 pb-5 flex flex-col h-full">
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
              className="text-3xl sm:text-6xl lg:text-[66px] font-outfit"
            >
              Student Developer Based In Vancouver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-2xl pt-30 font-outfit hidden md:block"
            >
              Full-stack developer focused on building responsive, 
              user-centric web applications with Next.js, React, 
              and Tailwind CSS. Experienced in backend APIs and database integration, 
              with a strong attention to detail and a collaborative mindset.
            </motion.p>        
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
            <a
              href="#contact"
              className="px-10 py-3 border border-white rounded-full dark:bg-[#1e1e1e] bg-[#1e1e1e] text-white flex items-center gap-2 font-mono"
            >
              contact me
              <img
                src={theme === "dark" ? assets.right_arrow_white : assets.right_arrow_white}
                alt=""
                className="w-4"
              />
            </a>
            <Dropdown />
          </div>
    </div>
  );
};

export default Header;