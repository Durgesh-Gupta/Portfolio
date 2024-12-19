import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { experiences } from '../../data/experience';

const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;