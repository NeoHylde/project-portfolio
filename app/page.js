"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import LocalTime from "./components/LocalTime";
import NowPlaying from "./components/NowPlaying";
import Github from "./components/Github";
import useThemeManager from "./components/themeManager";
import { assets } from "../public/assets";

export default function Home() {
  const theme = useThemeManager();

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white/70 dark:bg-zinc-800 backdrop-blur-md shadow"
        aria-label="Toggle theme"
      >
        <img src={theme === "dark" ? assets.sun_icon : assets.moon_icon} alt="" className="w-5" />
      </button>
      <div className="flex flex-col sm:h-dvh">
        <div className="flex flex-col md:flex-row flex-1 pt-10 gap-5 px-4 max-w-[1400px] mx-auto w-full min-h-0">
          <div className="flex flex-col gap-5 min-h-0 md:flex-[5]">
            <Welcome />
            <div className="flex-1 min-h-0"><Projects /></div>
          </div>
          <div className="flex flex-row md:flex-col gap-3 md:gap-5 w-full min-h-0 md:flex-[2]">
            <div className="flex-1 flex flex-col"><LocalTime /></div>
            <div className="flex-1 flex flex-col gap-3 md:contents">
              <div className="flex-1 flex flex-col"><NowPlaying /></div>
              <div className="flex-1 flex flex-col"><Github /></div>
            </div>
          </div>
          <div className="min-h-0 md:flex-[2]">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
