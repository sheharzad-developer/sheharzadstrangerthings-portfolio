'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightningFlash() {
  const [flash, setFlash] = useState(false);
  const lastScrollY = useRef(0);
  const lastFlashTime = useRef(0);

  // Automatic lightning flashes at random intervals
  useEffect(() => {
    const triggerFlash = () => {
      setFlash(true);
      lastFlashTime.current = Date.now();
      setTimeout(() => setFlash(false), 200);
    };

    // Initial flash after a short delay
    const initialTimeout = setTimeout(() => {
      triggerFlash();
    }, 500);

    // Set up interval for automatic flashes (between 2 and 5 seconds)
    const lightningInterval = setInterval(() => {
      triggerFlash();
    }, Math.random() * 3000 + 2000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(lightningInterval);
    };
  }, []);

  // Scroll-triggered flashes
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const now = Date.now();

      // Only flash if scrolled significantly and enough time has passed
      if (scrollDelta > 50 && now - lastFlashTime.current > 2000) {
        // Random chance to flash (15% probability)
        if (Math.random() > 0.85) {
          setFlash(true);
          lastFlashTime.current = now;
          setTimeout(() => setFlash(false), 150);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <>
          {/* Bright white/red flash overlay - very visible */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.5, 0.7, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 200, 200, 0.3) 20%, rgba(255, 100, 100, 0.2) 40%, rgba(176, 17, 33, 0.15) 70%, transparent 100%)',
            }}
          />
          {/* Red tint flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.3, 0.5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 150, 150, 0.25) 0%, rgba(200, 50, 50, 0.15) 50%, rgba(100, 0, 0, 0.1) 100%)',
              mixBlendMode: 'screen',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

