'use client';

import { m } from 'framer-motion';
import Portal from './Portal';

export default function Hero({ onActivate }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 py-8 md:py-12">
      {/* Title */}
      <m.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl glitch font-stranger mb-4 md:mb-6 px-2 text-center max-w-6xl mx-auto leading-tight laptop-hero-title"
        data-text="SHEHARZAD SALAHUDDIN"
      >
        SHEHARZAD SALAHUDDIN
      </m.h1>

      {/* Flavor line — theme accent, intentionally small and quiet */}
      <div className="w-full flex justify-center px-4">
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="typewriter text-xs sm:text-sm md:text-base text-center w-full max-w-2xl leading-relaxed text-red-400/80"
        >
          SYSTEM BOOTING... ACCESSING LAB RECORDS...
        </m.p>
      </div>

      {/* Value proposition — the line a human actually reads */}
      <m.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl text-gray-100 leading-relaxed px-2"
      >
        Front-End Developer at NETSOL building fast, responsive web apps with{' '}
        <span className="text-cyan-300">React, Vue &amp; Nuxt</span> — and self-taught
        across the full stack with{' '}
        <span className="text-purple-300">Next.js &amp; Python</span>.
      </m.p>

      {/* Specificity hook — REPLACE the {{...}} placeholder with your real number */}
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-3 text-sm md:text-base text-center max-w-2xl text-gray-400 font-mono px-2"
      >
        At NETSOL since 2015 · Front-End Developer · BCS 2026 · 15+ projects built · Lahore, PK
      </m.p>

      {/* CTA Buttons */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-6 md:mt-8 lg:mt-10 flex justify-center gap-4"
      >
        <Portal onActivate={onActivate} />
      </m.div>

      {/* Scroll Down Indicator */}
      <m.div
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
        <m.span
          className="text-red-500 font-mono text-sm tracking-wider"
          whileHover={{ color: '#ff0000' }}
        >
          SCROLL DOWN
        </m.span>
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2"
        >
          <m.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="size-1.5 bg-red-500 rounded-full"
          />
        </m.div>
      </m.div>
    </section>
  );
}