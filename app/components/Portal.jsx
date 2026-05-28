'use client';

import { m } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import DemogorgonScene from './DemogorgonScene';

export default function Portal({ onActivate }) {
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Portal pulse every 7 seconds
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 7000);

    return () => clearInterval(pulseInterval);
  }, []);

  const playHoverSound = () => {};

  const handleEnter = () => {
    // Activate background effect
    onActivate(true);

    // Navigate to projects section
    setTimeout(() => {
      const projects = document.getElementById("projects");
      projects?.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.6, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <m.div
      className="relative flex flex-col items-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* 3D Demogorgon Scene - only visible on hover, positioned behind button */}
      <DemogorgonScene isVisible={isHovered} mousePosition={mousePosition} />

      <div className="relative mt-8 w-full max-w-5xl">
        <div
          className="absolute inset-0 rounded-3xl border border-red-500/40 bg-black/50 backdrop-blur-sm pointer-events-none"
          style={{ boxShadow: '0 0 60px rgba(176, 17, 33, 0.55)' }}
        />
        <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center justify-center px-6 md:px-10 py-8 md:py-10">
      <m.a
        href="#about"
        className="btn-neon-sign purple pointer-events-auto"
        onClick={(e) => {
          e.preventDefault();
          const about = document.getElementById("about");
          about?.scrollIntoView({ behavior: "smooth" });
        }}
        variants={itemVariants}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="tube-borders"></span>
        <span className="tube-ends"></span>
        <span>VIEW PROFILE</span>
      </m.a>

      <m.a
        href="/resume/Sheharzad-Resume.pdf"
        download
        className="btn-neon-sign blue pointer-events-auto"
        variants={itemVariants}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="tube-borders"></span>
        <span className="tube-ends"></span>
        <span>DOWNLOAD RESUME</span>
      </m.a>
        </div>
      </div>
    </m.div>
  );
}