'use client';

import { m } from 'framer-motion';

export default function SectionWrapper({ children }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], 
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="w-full scene-cut"
    >
      {children}
    </m.div>
  );
}

