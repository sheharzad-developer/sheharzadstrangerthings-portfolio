'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightningFlash() {
  const [flash, setFlash] = useState(false);
  const lastScrollY = useRef(0);
  const lastFlashTime = useRef(0);

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.6, 0.9, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 pointer-events-none z-[9998]"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 51, 51, 0.4) 0%, rgba(255, 102, 102, 0.3) 50%, rgba(255, 153, 153, 0.2) 100%)',
            mixBlendMode: 'screen',
          }}
        />
      )}
    </AnimatePresence>
  );
}

