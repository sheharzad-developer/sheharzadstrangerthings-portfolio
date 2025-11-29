'use client';

import { useEffect, useRef, useState } from 'react';
import Particles from 'react-tsparticles';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function StrangerThingsBackground({ portalActive = false }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const x = useTransform(springX, (value) => {
    if (typeof window !== 'undefined') {
      return value * window.innerWidth - 150;
    }
    return 0;
  });
  const y = useTransform(springY, (value) => {
    if (typeof window !== 'undefined') {
      return value * window.innerHeight - 150;
    }
    return 0;
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);


  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(10,10,10,1) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* Particles - Stars */}
      <Particles
        id="tsparticles-stranger"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: isHovering ? 'repulse' : 'none',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              repulse: {
                distance: isHovering ? 150 : 100,
                duration: 0.4,
                factor: isHovering ? 2 : 1,
                speed: isHovering ? 2 : 1,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              enable: false,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: true,
              speed: portalActive ? 2 : (isHovering ? 0.5 : 0.2),
              straight: false,
            },
            number: {
              value: portalActive ? 250 : (isHovering ? 120 : 100),
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              random: true,
              anim: {
                enable: true,
                speed: portalActive ? 2 : 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: portalActive ? 3 : 2 },
              random: true,
              anim: {
                enable: portalActive,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Red Fog Overlay with Glitch Pulse */}
      <motion.div
        className="absolute inset-0 bg-red-900 mix-blend-overlay pointer-events-none z-10"
        animate={{
          opacity: portalActive ? [0.3, 0.5, 0.3] : 0.1,
          scale: portalActive ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: portalActive ? 0.5 : 2,
          repeat: portalActive ? Infinity : 0,
          ease: 'easeInOut',
        }}
        style={{
          background: portalActive
            ? 'radial-gradient(circle at center, rgba(176, 17, 33, 0.5) 0%, rgba(127, 10, 10, 0.3) 100%)'
            : 'radial-gradient(circle at center, rgba(176, 17, 33, 0.1) 0%, rgba(127, 10, 10, 0.05) 100%)',
        }}
      />

      {/* Interactive Red Disturbance Effect on Hover */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-20"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(176, 17, 33, 0.3) 0%, transparent 70%)',
            x,
            y,
            mixBlendMode: 'overlay',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Floating Clouds/Mist */}
      <div className="cloud"></div>
      <div className="cloud" style={{ top: '40%', animationDuration: '90s' }}></div>
      <div className="cloud" style={{ top: '60%', animationDuration: '120s', width: '400px', height: '100px' }}></div>

      {/* Portal Activation Glitch Overlay */}
      {portalActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0.2, 0.4, 0],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.3, 0.6, 0.9, 1],
          }}
        >
          <div
            className="absolute inset-0 bg-red-600 mix-blend-overlay"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
              animation: 'glitchPortal 0.3s infinite',
            }}
          />
          <div
            className="absolute inset-0 bg-red-800 mix-blend-overlay"
            style={{
              clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)',
              animation: 'glitchPortal 0.3s infinite reverse',
            }}
          />
        </motion.div>
      )}

      <style jsx>{`
        @keyframes glitchPortal {
          0%, 100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
        }
      `}</style>
    </div>
  );
}

