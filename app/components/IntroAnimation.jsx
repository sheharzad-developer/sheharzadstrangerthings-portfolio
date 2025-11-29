'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [glitchLetters, setGlitchLetters] = useState([]);
  const [flicker, setFlicker] = useState(true);
  const audioRef = useRef(null);
  
  const text = "SHEHARZAD SALAHUDDIN";
  const letters = text.split('');

  // Random glitch effect on letters
  useEffect(() => {
    if (!showIntro) return;

    const glitchInterval = setInterval(() => {
      // Randomly select 2-4 letters to glitch
      const count = Math.floor(Math.random() * 3) + 2;
      const indices = [];
      
      while (indices.length < count) {
        const index = Math.floor(Math.random() * letters.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }
      
      setGlitchLetters(indices);
      
      // Clear glitch after short duration
      setTimeout(() => {
        setGlitchLetters([]);
      }, 100);
    }, 200);

    return () => clearInterval(glitchInterval);
  }, [showIntro, letters.length]);

  // Flickering effect
  useEffect(() => {
    if (!showIntro) return;

    const flickerInterval = setInterval(() => {
      setFlicker(prev => !prev);
    }, 150);

    return () => clearInterval(flickerInterval);
  }, [showIntro]);

  // Low rumbling sound
  useEffect(() => {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') return;

    try {
      // Try to load rumbling sound
      const audioPath = '/songs/rumble-sound.mp3';
      const audio = new Audio(audioPath);
      audio.volume = 0.4; // Low volume for rumbling
      audio.loop = false;
      audio.preload = 'auto';
      
      audio.addEventListener('error', () => {
        // If audio file doesn't exist, continue without sound
        console.log('Rumble sound not found, continuing without audio');
      });

      audioRef.current = audio;

      // Try to play on mount
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked, that's okay
        });
      }
    } catch (error) {
      console.log('Audio initialization failed, continuing without sound');
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Show skip button after 1 second and auto-complete after 3 seconds
  useEffect(() => {
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
    // Fade out audio
    if (audioRef.current) {
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
        } else {
          clearInterval(fadeOut);
          if (audioRef.current) {
            audioRef.current.pause();
          }
        }
      }, 50);
    }

    setShowIntro(false);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const handleSkip = () => {
    handleComplete();
  };

  // Generate random character for glitch effect
  const getGlitchChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Main text with flickering and glitch effects */}
          <motion.div
            animate={{ 
              opacity: flicker ? [0.7, 1, 0.9, 1, 0.8, 1] : [1, 0.9, 1, 0.8, 1, 0.9],
            }}
            transition={{ 
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="relative"
          >
            <div className="flex items-center justify-center flex-wrap">
              {letters.map((letter, index) => {
                const isGlitching = glitchLetters.includes(index);
                const displayChar = isGlitching ? getGlitchChar() : letter;
                
                return (
                  <motion.span
                    key={index}
                    className="text-7xl md:text-9xl font-stranger text-red-600 relative inline-block"
                    style={{
                      textShadow: `
                        0 0 10px rgba(176, 17, 33, 0.9),
                        0 0 20px rgba(176, 17, 33, 0.7),
                        0 0 30px rgba(176, 17, 33, 0.5),
                        0 0 40px rgba(176, 17, 33, 0.3),
                        0 0 50px rgba(176, 17, 33, 0.2)
                      `,
                      filter: 'drop-shadow(0 0 20px rgba(176, 17, 33, 0.9))',
                    }}
                    animate={
                      isGlitching
                        ? {
                            x: [0, -2, 2, -2, 2, 0],
                            y: [0, 1, -1, 1, -1, 0],
                            opacity: [1, 0.5, 1, 0.5, 1],
                          }
                        : {
                            opacity: [0.9, 1, 0.95, 1],
                          }
                    }
                    transition={{
                      duration: isGlitching ? 0.1 : 0.3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    {displayChar}
                    {/* Glitch overlay effect */}
                    {isGlitching && (
                      <>
                        <span
                          className="absolute inset-0 text-red-400 opacity-50 pointer-events-none"
                          style={{
                            clipPath: 'inset(0 50% 0 0)',
                            transform: 'translateX(-2px)',
                          }}
                        >
                          {getGlitchChar()}
                        </span>
                        <span
                          className="absolute inset-0 text-red-800 opacity-50 pointer-events-none"
                          style={{
                            clipPath: 'inset(0 0 0 50%)',
                            transform: 'translateX(2px)',
                          }}
                        >
                          {getGlitchChar()}
                        </span>
                      </>
                    )}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Skip Intro Button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 px-6 py-3 bg-black bg-opacity-70 border-2 border-red-600 text-red-500 font-mono text-sm tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all cursor-pointer"
              style={{
                boxShadow: '0 0 15px rgba(176, 17, 33, 0.6)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(176, 17, 33, 0.9)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              SKIP INTRO
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
