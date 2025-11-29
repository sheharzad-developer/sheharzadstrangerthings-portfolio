'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const particlesRef = useRef([]);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursor || !cursorInner) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Initialize cursor position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorInner, { xPercent: -50, yPercent: -50 });

    // Mouse move handler
    const handleMouseMove = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Update cursor position with GSAP for smooth interpolation
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });

      // Create particle trail
      createParticle(e.clientX, e.clientY);
    };

    // Hover detection with better element checking
    const checkIfInteractive = (element) => {
      if (!element || typeof element !== 'object') return false;
      // Check if it's a DOM element
      if (!element.nodeType || element.nodeType !== 1) return false;
      // Check if it has the required methods
      if (typeof element.getAttribute !== 'function' || 
          typeof element.closest !== 'function' ||
          typeof element.classList?.contains !== 'function') {
        return false;
      }
      
      try {
        return (
          element.tagName === 'A' ||
          element.tagName === 'BUTTON' ||
          element.getAttribute('role') === 'button' ||
          element.closest('a') ||
          element.closest('button') ||
          element.closest('[role="button"]') ||
          (window.getComputedStyle && window.getComputedStyle(element).cursor === 'pointer') ||
          element.classList.contains('cursor-pointer')
        );
      } catch (error) {
        // If any check fails, return false
        return false;
      }
    };

    const handleMouseEnter = (e) => {
      if (checkIfInteractive(e.target)) {
        isHoveringRef.current = true;
        gsap.to(cursor, {
          scale: 1.8,
          opacity: 0.9,
          duration: 0.2,
          ease: 'power2.out',
        });
        gsap.to(cursorInner, {
          scale: 0.5,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = (e) => {
      if (checkIfInteractive(e.target)) {
        isHoveringRef.current = false;
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        });
        gsap.to(cursorInner, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    };

    // Particle creation function - optimized for performance
    let lastParticleTime = 0;
    const particleInterval = 16; // ~60fps particle creation

    const createParticle = (x, y) => {
      const now = performance.now();
      if (now - lastParticleTime < particleInterval) return;
      lastParticleTime = now;

      if (particlesRef.current.length > 15) {
        const oldParticle = particlesRef.current.shift();
        if (oldParticle && oldParticle.parentNode) {
          gsap.killTweensOf(oldParticle);
          oldParticle.remove();
        }
      }

      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      const size = Math.random() * 3 + 2;
      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: rgba(176, 17, 33, 0.9);
        border-radius: 50%;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        z-index: 9999;
        box-shadow: 0 0 ${size * 2}px rgba(176, 17, 33, 0.8);
        transform: translateZ(0);
        will-change: transform, opacity;
      `;
      document.body.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particle fade out with random movement
      const randomX = (Math.random() - 0.5) * 20;
      const randomY = (Math.random() - 0.5) * 20;

      gsap.to(particle, {
        x: `+=${randomX}`,
        y: `+=${randomY}`,
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          if (particle.parentNode) {
            particle.remove();
          }
          const index = particlesRef.current.indexOf(particle);
          if (index > -1) {
            particlesRef.current.splice(index, 1);
          }
        },
      });
    };

    // Event listeners with throttling for performance
    let mouseMoveThrottle = 0;
    const throttleDelay = 1000 / 144; // 144fps

    const throttledMouseMove = (e) => {
      const now = performance.now();
      if (now - mouseMoveThrottle >= throttleDelay) {
        handleMouseMove(e);
        mouseMoveThrottle = now;
      }
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Cleanup
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      // Clean up particles
      particlesRef.current.forEach(particle => {
        gsap.killTweensOf(particle);
        particle.remove();
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <>
      {/* Outer glow cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(176, 17, 33, 0.9)',
          background: 'rgba(176, 17, 33, 0.1)',
          boxShadow: `
            0 0 20px rgba(176, 17, 33, 0.8),
            0 0 40px rgba(176, 17, 33, 0.6),
            0 0 60px rgba(176, 17, 33, 0.4),
            inset 0 0 20px rgba(176, 17, 33, 0.3)
          `,
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      
      {/* Inner cursor dot */}
      <div
        ref={cursorInnerRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#b01121',
          boxShadow: '0 0 10px rgba(176, 17, 33, 0.8)',
          willChange: 'transform',
        }}
      />
    </>
  );
}

