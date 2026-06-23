import { assets, tools_stack } from "../../public/assets";
import React from "react";

const About = () => {
  return (
    <div className="border rounded p-4 dark:bg-zinc-900 hover:border-yellow-200 duration-200 h-full">
      <div className="flex flex-row md:flex-col gap-6 overflow-x-auto md:overflow-visible">

        {/* Experience */}
        <div className="min-w-[160px] md:min-w-0 shrink-0 md:shrink">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">experience</span>
          <div className="mt-2 flex flex-col gap-1">
            <p className="text-sm font-semibold">Webb Electronics</p>
            <p className="text-xs text-gray-400">Firmware / Full-stack</p>
            <p className="text-xs text-gray-500">Sep 2025 – May 2026</p>
          </div>
        </div>

        <div className="hidden md:block border-t dark:border-zinc-800" />

        {/* Education */}
        <div className="min-w-[180px] md:min-w-0 shrink-0 md:shrink">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">education</span>
          <div className="flex items-center gap-3 mt-2">
            <img src={assets.sfu} alt="SFU" className="w-7 h-7 object-contain" />
            <div>
              <p className="text-sm font-semibold">Simon Fraser University</p>
              <p className="text-xs text-gray-400">Computer Science</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-t dark:border-zinc-800" />

        {/* Tools & Stack */}
        <div className="min-w-[180px] md:min-w-0 shrink-0 md:shrink">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">tools & stack</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools_stack.map((tool, i) => (
              <span
                key={i}
                className="text-xs font-mono border rounded-full px-3 py-1 dark:border-zinc-700 text-gray-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
