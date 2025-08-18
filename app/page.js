"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20 sm:pt-24 md:pt-32 space-y-20">
        <Header />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
