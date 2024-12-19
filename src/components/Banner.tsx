import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";

const Banner = () => {
  return (
    <motion.section
      className="h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-white"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Durgesh Gupta</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Expert",
              2000,
              "React Native Developer",
              2000,
            ]}
            wrapper="h2"
            className="text-2xl md:text-4xl text-gray-300 mb-6"
            repeat={Infinity}
          />
          <p className="text-gray-400 mb-8">
            3+ years of experience building scalable applications
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full flex items-center gap-2"
            onClick={() => {
              const link = document.createElement("a"); // Create a temporary anchor element
              link.href = "https://durgesh-gupta.tiiny.site"; // Replace with your resume link
              link.target = "_blank"; // Open in a new tab
              link.rel = "noopener noreferrer"; // Add security measures for external links
              document.body.appendChild(link); // Append the anchor to the document
              link.click(); // Trigger the new tab
              document.body.removeChild(link);
            }}
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
            alt="Developer"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
