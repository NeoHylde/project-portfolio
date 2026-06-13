import { assets, tools_stack } from "../../public/assets";
import React, { useState, useEffect } from "react";
import useThemeManager from "./themeManager";

const About = () => {
  const theme = useThemeManager();

  return (
    <div className="border rounded px-5 dark:bg-zinc-900">
      <p>about</p>
      <p>tools and stacks</p>
      {tools_stack.map((desc, index) => (
        <div key={index} className="text-sm text-gray-300 border rounded-2xl">{desc}</div>
      ))}
      <div></div>
    
    </div>
  );
};

export default About;
