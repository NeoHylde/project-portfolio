import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets, builtData } from "../../public/assets";
import useThemeManager from "./themeManager";
import { motion } from "motion/react";

const Welcome = () => {
  const theme = useThemeManager();

  return (
    <div className="border rounded hover:border-yellow-200 duration-200 p-5 dark:bg-zinc-900">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">welcome</span>

      <div className="flex flex-col sm:flex-row gap-6 mt-3">
        {/* Text */}
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-2xl font-semibold">
            Hi, I'm Neo Hyldelund.
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            A full-stack developer focused on building tomorrow's solutions. I've worked
            across startups, consultancies, and corporations — often as the bridge between
            designers and engineers.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hello?
            I'd love to hear from you.
          </p>

          {/* Contact details slot */}
          <div className="flex gap-3 mt-2">
            {/* icons/links go here */}
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <img
            src={assets.neo_tori}
            alt="Neo Hyldelund"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
