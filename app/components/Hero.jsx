'use client';

import { motion } from 'framer-motion';
import Portal from './Portal';

export default function Hero({ onActivate }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl glitch font-stranger mb-6"
        data-text="SHEHARZAD SALAHUDDIN"
      >
        SHEHARZAD SALAHUDDIN
      </motion.h1>

      {/* Typewriter subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="typewriter text-xl md:text-2xl"
      >
        SYSTEM BOOTING... ACCESSING SHEHARZAD SALAHUDDIN LAB RECORDS... ID: FULLSTACK DEVELOPER
      </motion.p>

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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-red-500 font-mono text-sm tracking-wider">SCROLL DOWN</span>
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