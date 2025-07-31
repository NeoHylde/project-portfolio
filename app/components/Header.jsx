import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../public/assets";
import useThemeManager from "./themeManager";
import { motion } from "motion/react";
import Dropdown from "./Dropdown.jsx"

const Header = () => {
  const theme = useThemeManager();

  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Neo
        <img src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Student Developer Based in Burnaby
      </motion.h1>

      

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I'm a student developer always ready for new experiences and challenges!
      </motion.p>

      <motion.img
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        src={assets.neo_tori}
        alt="user"
        className="w-60 rounded-3xl border"
      />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full dark:bg-[#1e1e1e] bg-[#1e1e1e] text-white flex items-center gap-2"
        >
          contact me
          <img
            src={
              theme === "dark"
                ? assets.right_arrow_white
                : assets.right_arrow_white
            }
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