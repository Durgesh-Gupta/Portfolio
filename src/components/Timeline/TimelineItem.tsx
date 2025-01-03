import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full relative"
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`w-5/12 ${isEven ? "" : "ml-auto"}`}>
        <div className={`${isEven ? "text-right pr-8" : "pl-8"}`}>
          <h3 className="text-xl font-bold text-blue-500">
            {experience.company}
          </h3>
          <p className="text-gray-400 text-lg">{experience.role}</p>
          <p className="text-sm text-gray-500 mt-1">{experience.duration}</p>
          {experience.description && (
            <p className="text-gray-400 mt-2">{experience.description}</p>
          )}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[1px] h-[calc(100%+2rem)] bg-blue-500/20 -z-10"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20 transform transition-all duration-300 hover:scale-125 hover:ring-8"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
