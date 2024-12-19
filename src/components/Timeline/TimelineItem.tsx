import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`w-5/12 ${
          index % 2 === 0 ? "text-right pr-8" : "order-1 pl-8"
        }`}
      >
        <h3 className="text-xl font-bold text-blue-500">
          {experience.company}
        </h3>
        <p className="text-gray-400 text-lg">{experience.role}</p>
        <p className="text-sm text-gray-500 mt-1">121{experience.duration}</p>
      </div>

      <div className="w-2/12 flex justify-center relative">
        <div className="absolute w-px h-full bg-blue-500/20"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full z-10 transform transition-transform duration-300 hover:scale-150"></div>
      </div>

      <div className="w-5/12"></div>
    </motion.div>
  );
};

export default TimelineItem;
