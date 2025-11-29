'use client';

import { useEffect, useRef, useState } from 'react';

export default function Background({ portalActive }) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    setDimensions({ width, height });

    function flashLightning() {
      // Change background to bright red instantly to simulate a flash
      canvas.style.background = 'linear-gradient(to bottom, #ff3333 0%, #ff6666 50%, #ff9999 100%)';
      
      // Draw lightning bolt shape on the canvas
      drawLightningBolt();

      // Fade back to normal dark red after a short delay
      setTimeout(() => {
        canvas.style.background = 'linear-gradient(to bottom, #1a0000 0%, #4d0000 50%, #800000 100%)';
        ctx.clearRect(0, 0, width, height); // Clear the lightning bolt
      }, 150); // Flash duration
    }

    function drawLightningBolt() {
      ctx.strokeStyle = '#ffeeee'; // Off-white/pink color
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      // Start bolt near top center
      let startX = width / 2 + (Math.random() * 200 - 100); 
      let startY = 0;
      ctx.moveTo(startX, startY);

      let currentX = startX;
      let currentY = startY;

      // Generate random, jagged path downwards
      while (currentY < height) {
        currentX += Math.random() * 40 - 20; // Move left or right randomly
        currentY += Math.random() * 50 + 20; // Move down
        
        // Keep bolt within horizontal bounds
        if (currentX < 0) currentX = 0;
        if (currentX > width) currentX = width;
        
        ctx.lineTo(currentX, currentY);
      }
      
      ctx.stroke();
    }

    // Initial background
    canvas.style.background = 'linear-gradient(to bottom, #1a0000 0%, #4d0000 50%, #800000 100%)';

    // Trigger lightning flashes at random intervals
    const lightningInterval = setInterval(() => {
      flashLightning();
    }, Math.random() * 3000 + 2000); // Between 2 and 5 seconds

    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(lightningInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // More frequent lightning when portal is active
  useEffect(() => {
    if (!portalActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    function flashLightning() {
      canvas.style.background = 'linear-gradient(to bottom, #ff3333 0%, #ff6666 50%, #ff9999 100%)';
      
      // Draw multiple lightning bolts
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          ctx.strokeStyle = '#ffeeee';
          ctx.lineWidth = 3;
          ctx.beginPath();
          
          let startX = width / 2 + (Math.random() * 400 - 200);
          let startY = 0;
          ctx.moveTo(startX, startY);

          let currentX = startX;
          let currentY = startY;

          while (currentY < height) {
            currentX += Math.random() * 40 - 20;
            currentY += Math.random() * 50 + 20;
            if (currentX < 0) currentX = 0;
            if (currentX > width) currentX = width;
            ctx.lineTo(currentX, currentY);
          }
          
          ctx.stroke();
        }, i * 50);
      }

      setTimeout(() => {
        canvas.style.background = 'linear-gradient(to bottom, #1a0000 0%, #4d0000 50%, #800000 100%)';
        ctx.clearRect(0, 0, width, height);
      }, 300);
    }

    // More frequent lightning during portal activation
    const portalLightningInterval = setInterval(() => {
      flashLightning();
    }, Math.random() * 1000 + 500); // Between 0.5 and 1.5 seconds

    return () => {
      clearInterval(portalLightningInterval);
    };
  }, [portalActive]);

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        id="stormSky"
        className="w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, #1a0000 0%, #4d0000 50%, #800000 100%)',
          transition: 'background 0.1s ease-out',
        }}
      />
    </div>
  );
}
