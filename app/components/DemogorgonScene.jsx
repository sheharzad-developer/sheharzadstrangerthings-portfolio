'use client';

import { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingFallback() {
  return null;
}

export default function DemogorgonScene({ isVisible, mousePosition }) {
  const [mounted, setMounted] = useState(false);
  const [Canvas, setCanvas] = useState(null);
  const [Demogorgon, setDemogorgon] = useState(null);

  useEffect(() => {
    // Only load on client side
    if (typeof window !== 'undefined') {
      import('@react-three/fiber').then((mod) => {
        setCanvas(() => mod.Canvas);
      });
      import('./Demogorgon').then((mod) => {
        setDemogorgon(() => mod.default);
      });
      setMounted(true);
    }
  }, []);

  if (!mounted || !Canvas || !Demogorgon) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{ 
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
              preserveDrawingBuffer: false,
            }}
            dpr={[1, 1.5]} // Limit pixel ratio for performance
            performance={{ min: 0.5 }} // Lower quality if FPS drops
            style={{ width: '100%', height: '100%' }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <Demogorgon isVisible={isVisible} mousePosition={mousePosition} />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

