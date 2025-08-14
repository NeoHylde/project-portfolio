import { assets } from "../../public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      

      <div
        className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6 font-mono text-xs animate-gradient"
      >
        <p>© 2025 Neo Hyldelund</p>

        <div className="md:flex items-center hidden">
          <img src={assets.mail_icon} alt="" className="w-4 mr-1" />
          <p>
            neo.hyldelund@gmail.com
          </p>
        </div>
        
        <ul className="flex items-center gap-10 justify-center mt-3 sm:mt-0 font-mono">
          <li>
            <a target="_blank" href="https://github.com/NeoHylde">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/neohylde/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
