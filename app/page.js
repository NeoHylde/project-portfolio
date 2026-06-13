"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import useThemeManager from "./components/themeManager";

export default function Home() {
  const theme = useThemeManager();

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row sm:pt-24 md:pt-32 gap-20">
          <div className="flex flex-row md:flex-col px-3 gap-5 md:w-[600px] md:shrink-0">
            <Welcome />
            <Projects />
          </div>
          <div className="hidden md:block">
            <div className="border rounded">{/* local time */}local time</div>
            <div className="border rounded">mini game</div>
          </div>

          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
