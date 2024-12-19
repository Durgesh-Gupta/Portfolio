import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  Icon: IconType;
  color: string;
  index: number;
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ name, Icon, color, index }) => {
  return (
    <motion.div
      className="relative group"
      variants={itemVariants}
    >
      <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
        <div className="relative">
          <Icon 
            className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110" 
            style={{ color }}
          />
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <h3 className="text-white text-lg font-medium">{name}</h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;