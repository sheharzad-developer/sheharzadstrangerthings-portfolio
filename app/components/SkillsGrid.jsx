'use client';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaFigma,
  FaJira,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiFirebase,
  SiJavascript,
  SiSupabase,
  SiDocker,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot, TbUsersGroup } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { m } from 'framer-motion';

const sections = [
  {
    title: "// FRONTEND",
    items: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Vue", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Nuxt", icon: <SiNuxtdotjs className="text-green-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "// BACKEND",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
      { name: "Django", icon: <SiDjango className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "// AI",
    items: [
      { name: "OpenAI", icon: <SiOpenai className="text-green-400" /> },
      { name: "LLM", icon: <TbBrain className="text-purple-500" /> },
      { name: "Chatbot Development", icon: <TbMessageChatbot className="text-blue-400" /> },
    ],
  },
  {
    title: "// DATABASE",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
    ],
  },
  {
    title: "// DEVOPS",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
    ],
  },
  {
    title: "// COLLABORATION",
    items: [
      { name: "JIRA", icon: <FaJira className="text-blue-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Agile/Scrum", icon: <TbUsersGroup className="text-green-400" /> },
    ],
  },
];

const SkillCard = ({ tech }) => (
  <div className="skill-item w-32 text-center">
    <div
      className="bg-gray-800 border-2 border-red-600 size-20 flex items-center justify-center rounded-lg text-4xl mb-2 mx-auto transition-all duration-400 hover:border-red-400 hover:shadow-lg hover:shadow-red-600"
      style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}
    >
      {tech.icon}
    </div>
    <h4 className="font-mono font-bold text-red-400 text-center text-sm leading-tight break-words">
      {tech.name}
    </h4>
  </div>
);

const SkillsGrid = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    rootMargin: '-50px 0px' 
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mt-20"
    >
      <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 relative" style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}>
        {/* Classified Header */}
        <div className="border-b-2 border-red-600 pb-4 mb-8">
          <div className="flex justify-between items-center mb-1">
            <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
            <span className="text-red-500 font-mono text-sm">TECH STACK INVENTORY</span>
          </div>
          <div className="text-gray-400 font-mono text-xs mt-1">
            SUBJECT S-011 | AUTHORIZED TECHNOLOGIES
          </div>
        </div>

        <m.h3
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-stranger text-red-600 mb-8 text-center glitch"
          data-text="I WORK WITH"
        >
          I WORK WITH
        </m.h3>
        
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h4 className="font-mono text-red-500 text-sm tracking-widest mb-6 border-l-4 border-red-600 pl-3 min-h-[2.5rem] leading-tight flex items-start">
                  {section.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-6 lg:flex-col lg:items-start lg:justify-start">
                  {section.items.map((tech) => (
                    <SkillCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default SkillsGrid;

