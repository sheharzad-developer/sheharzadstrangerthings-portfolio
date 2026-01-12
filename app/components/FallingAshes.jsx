'use client';

import { useEffect, useRef } from 'react';

export default function FallingAshes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    // Ash particle class
    class AshParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.4 + 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Add slight drift/wind effect
        this.speedX += (Math.random() - 0.5) * 0.02;
        this.speedX = Math.max(-1, Math.min(1, this.speedX));

        // Reset if particle goes off screen
        if (this.y > height + 10) {
          this.reset();
        }
        if (this.x < -10 || this.x > width + 10) {
          this.x = Math.random() * width;
          this.y = -10;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw ash particle as a light gray/white shape to be visible on black
        ctx.fillStyle = '#d4d4d4';
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add slight glow for depth
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create ash particles
    const particles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new AshParticle());
    }

    // Animation loop
    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
