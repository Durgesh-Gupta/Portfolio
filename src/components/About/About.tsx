import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import ProfilePicture from "../../profile.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"
        style={{ opacity: 0.1 }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={ProfilePicture}
              // src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with over 3 years of
              experience in building scalable web and mobile applications.
              Specializing in MERN stack and React Native development, I've
              helped numerous companies transform their ideas into reality.
            </p>
            <p className="text-gray-300 mb-8">
              Currently working as a Senior Developer, I focus on creating
              efficient, maintainable, and user-friendly applications while
              staying up-to-date with the latest technologies and best
              practices.
            </p>
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              <FileDown size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
