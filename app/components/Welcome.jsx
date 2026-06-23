import React from "react";
import { assets } from "../../public/assets";

const Welcome = () => {
  return (
    <div className="border rounded hover:border-yellow-200 duration-200 p-5 dark:bg-zinc-900">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">welcome</span>

      <div className="flex flex-row gap-4 mt-3">
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

        <div className="shrink-0">
          <img
            src={assets.hand_icon}
            alt=""
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
