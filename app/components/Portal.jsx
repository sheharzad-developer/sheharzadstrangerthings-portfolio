'use client';

import { motion } from 'framer-motion';

export default function Portal({ onActivate }) {
  const handleEnter = () => {
    onActivate(true); // activate background effect
    setTimeout(() => {
      const projects = document.getElementById("projects");
      projects?.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  };

  return (
    <motion.button
      className="btn-neon mt-10"
      whileHover={{ scale: 1.1, textShadow: "0 0 8px #b01121" }}
      onClick={handleEnter}
    >
      ENTER THE PORTAL
    </motion.button>
  );
}