'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Portal({ onActivate }) {
  const audioRef = useRef(null);

  const handleEnter = () => {
    // Create and play audio on click (user interaction required)
    if (typeof window !== 'undefined' && typeof Audio !== "undefined") {
      try {
        // Use renamed file without spaces
        const audioPath = "/songs/portal-sound.mp3";
        const audio = new Audio(audioPath);
        audio.volume = 0.7;
        audio.preload = 'auto';
        
        // Play the audio immediately
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('✅ Portal sound playing successfully');
            })
            .catch(error => {
              console.error('❌ Audio play failed:', error);
              console.error('Error details:', error.message);
            });
        }
        
        // Store reference
        audioRef.current = audio;
      } catch (error) {
        console.error('❌ Failed to create audio:', error);
      }
    } else {
      console.warn('⚠️ Audio API not available');
    }
    
    // Activate background effect
    onActivate(true);
    
    // Navigate to projects section
    setTimeout(() => {
      const projects = document.getElementById("projects");
      projects?.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  };

  return (
    <motion.button
      className="btn-neon mt-10"
      whileHover={{ scale: 1.1, textShadow: "0 0 8px #b01121" }}
      onClick={handleEnter}
    >
      ENTER THE PORTAL
    </motion.button>
  );
}