'use client';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const techStack = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", category: "Backend", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "OpenAI", category: "AI", icon: <SiOpenai className="text-green-400" /> },
  { name: "LLM", category: "AI", icon: <TbBrain className="text-purple-500" /> },
  { name: "Chatbot Development", category: "AI", icon: <TbMessageChatbot className="text-blue-400" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "GitHub", category: "DevOps", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Django", category: "Backend", icon: <SiDjango className="text-black dark:text-white" /> },
  { name: "Firebase", category: "Database", icon: <SiFirebase className="text-orange-500" /> },
];

const SkillsGrid = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    rootMargin: '-50px 0px' 
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), 200);
    }
  }, [inView]);

  return (
    <motion.div
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

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-stranger text-red-600 mb-8 text-center glitch"
          data-text="I WORK WITH"
        >
          I WORK WITH
        </motion.h3>
        
        {/* Skills Slider Container */}
        <div className={`overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="skills-slider flex gap-6 animate-scroll">
            {/* First set of skills */}
            {techStack.map((tech, index) => (
              <div 
                key={`${tech.name}-1`}
                className="skill-item flex-shrink-0 w-32 text-center"
              >
                <div className="bg-gray-800 border-2 border-red-600 w-20 h-20 flex items-center justify-center rounded-lg text-4xl mb-2 mx-auto transition-all duration-400 hover:border-red-400 hover:shadow-lg hover:shadow-red-600"
                  style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}>
                  {tech.icon}
                </div>
                <h4 className="font-mono font-bold text-red-400 text-center text-sm mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-500 font-mono text-center">
                  {tech.category}
                </p>
              </div>
            ))}

            {/* Second set for seamless loop */}
            {techStack.map((tech, index) => (
              <div 
                key={`${tech.name}-2`}
                className="skill-item flex-shrink-0 w-32 text-center"
              >
                <div className="bg-gray-800 border-2 border-red-600 w-20 h-20 flex items-center justify-center rounded-lg text-4xl mb-2 mx-auto transition-all duration-400 hover:border-red-400 hover:shadow-lg hover:shadow-red-600"
                  style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}>
                  {tech.icon}
                </div>
                <h4 className="font-mono font-bold text-red-400 text-center text-sm mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-500 font-mono text-center">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsGrid;

