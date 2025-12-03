'use client';

import { motion } from 'framer-motion';
import Portal from './Portal';

export default function Hero({ onActivate }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* S-Logo at the top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 md:top-12"
      >
        <motion.img
          src="/S-Logo/S-Logo.jpg"
          alt="Stranger Things Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          animate={{
            filter: [
              'drop-shadow(0 0 10px rgba(176, 17, 33, 0.5))',
              'drop-shadow(0 0 20px rgba(176, 17, 33, 0.8))',
              'drop-shadow(0 0 10px rgba(176, 17, 33, 0.5))',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: 'drop-shadow(0 0 15px rgba(176, 17, 33, 0.6))',
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl glitch font-stranger mb-6 px-4 text-center w-full mx-auto"
        data-text="SHEHARZAD SALAHUDDIN"
        style={{ textAlign: 'center' }}
      >
        SHEHARZAD SALAHUDDIN
      </motion.h1>

      {/* Typewriter subtitle */}
      <div className="w-full flex justify-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="typewriter text-base sm:text-lg md:text-2xl text-center w-full max-w-full"
          style={{ textAlign: 'center' }}
        >
          SYSTEM BOOTING... ACCESSING SHEHARZAD SALAHUDDIN LAB RECORDS... ID: FULLSTACK DEVELOPER
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-10 flex justify-center gap-4"
      >
        <Portal onActivate={onActivate} />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          const about = document.getElementById("about");
          if (about) {
            about.scrollIntoView({ 
              behavior: "smooth",
              block: "start"
            });
          }
        }}
        whileHover={{ scale: 1.1 }}
        style={{ cursor: 'pointer' }}
      >
        <motion.span 
          className="text-red-500 font-mono text-sm tracking-wider"
          whileHover={{ color: '#ff0000' }}
        >
          SCROLL DOWN
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}