export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  associatedWith: string;
  link?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}