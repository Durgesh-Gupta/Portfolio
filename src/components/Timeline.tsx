import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Experience
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right" : "order-1"
                }`}
              >
                <h3 className="text-xl font-bold text-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-400">{exp.role}</p>
                <p className="text-sm text-gray-500">11{exp.duration}</p>
              </div>

              <div
                className={`w-2/12 flex justify-center ${
                  index == 0 && " w-8/12"
                }`}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : ''}`}>
                <ul className="list-disc text-gray-400 ml-4">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
