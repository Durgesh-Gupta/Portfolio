import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  associatedWith: string;
  githubLink: string;
  liveLink: string;
  iframeSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  associatedWith,
  githubLink,
  liveLink,
  iframeSrc,
}) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
      {iframeSrc ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full h-48"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      ) : (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-sm text-blue-500 mb-4">
          Associated with: {associatedWith}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-blue-500 transition-colors ${
              githubLink ? "" : "hidden"
            }`}
          >
            <Github size={24} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-blue-500 transition-colors ${
              liveLink ? "" : "hidden"
            }`}
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
