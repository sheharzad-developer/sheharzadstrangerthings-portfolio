'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function IntroAnimation({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const text = "SHEHARZAD SALAHUDDIN";
  const letters = text.split('');

  useEffect(() => {
    // Show skip button after 1 second
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1000);

    // Auto-complete after 3 seconds
    const autoCompleteTimer = setTimeout(() => {
      handleComplete();
    }, 3000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(autoCompleteTimer);
    };
  }, []);

  const handleComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const handleSkip = () => {
    handleComplete();
  };

  // Create particle/smoke effects
  useEffect(() => {
    if (!showIntro) return;

    const container = document.querySelector('.intro-container');
    if (!container) return;

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'intro-particle';
      const size = Math.random() * 3 + 1;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(176, 17, 33, ${Math.random() * 0.4 + 0.2});
        border-radius: 50%;
        pointer-events: none;
        left: ${startX}%;
        top: ${startY}%;
        opacity: ${Math.random() * 0.5 + 0.3};
        box-shadow: 0 0 ${size * 2}px rgba(176, 17, 33, 0.6);
      `;
      container.appendChild(particle);
      particles.push(particle);

      // Animate particles with GSAP
      gsap.to(particle, {
        x: `+=${(Math.random() * 200 - 100)}`,
        y: `+=${(Math.random() * 200 - 100)}`,
        opacity: 0,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        ease: 'power1.out',
        delay: Math.random() * 2,
      });
    }

    return () => {
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
        particle.remove();
      });
    };
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="intro-container fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Particle effects background */}
          <div className="absolute inset-0 opacity-30">
            {/* Smoke/particle effects will be added via JavaScript */}
          </div>

          {/* Main text animation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{
                    opacity: [0, 1, 1],
                    y: [50, 0, 0],
                    filter: ['blur(10px)', 'blur(0px)', 'blur(0px)'],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="text-8xl md:text-9xl font-stranger text-red-600 glitch-intro"
                  style={{
                    textShadow: `
                      0 0 10px rgba(176, 17, 33, 0.8),
                      0 0 20px rgba(176, 17, 33, 0.6),
                      0 0 30px rgba(176, 17, 33, 0.4),
                      0 0 40px rgba(176, 17, 33, 0.2)
                    `,
                    filter: 'drop-shadow(0 0 20px rgba(176, 17, 33, 0.8))',
                  }}
                  data-text={letter}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Skip Intro Button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 px-4 py-2 bg-black bg-opacity-50 border border-red-600 text-red-500 font-mono text-xs tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all"
              style={{
                boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)',
              }}
            >
              SKIP INTRO
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

