import { Project, Experience, Education } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "WebSocket"],
    associatedWith: "TechCorp Inc.",
    link: "https://github.com/yourusername/ecommerce"
  },
  // Add more projects...
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of microservices architecture",
      "Improved application performance by 40%",
      "Mentored junior developers"
    ]
  },
  // Add more experiences...
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Tech University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2017 - 2021",
    description: "Specialized in Software Engineering and Web Technologies"
  },
  // Add more education...
];