import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "./SocialLink";

const socialLinks = [
  {
    href: "https://github.com/Durgesh-Gupta",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/durgesh10gupta",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:durgesh10gupta@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const Connect = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Connect With Me</h2>
        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              Icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
