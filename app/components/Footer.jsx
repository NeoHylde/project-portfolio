import { assets } from "../../public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img src={assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap02 mx-auto">
          <img src={assets.mail_icon} alt="" className="w-6" />
          neo.hyldelund@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Neo Hyldelund. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-3 sm:mt-0">
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
