import React from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import { useScrollSound } from "./hooks/useScrollSound";

function App() {
  const { scrollYProgress } = useScroll();
  useScrollSound();

  return (
    <div className="bg-gray-900 min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Banner />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
