'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import DemogorgonScene from './DemogorgonScene';

export default function Portal({ onActivate }) {
  const audioRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Portal pulse every 7 seconds
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 7000);

    return () => clearInterval(pulseInterval);
  }, []);

  const playHoverSound = () => {
    if (typeof window !== 'undefined' && typeof Audio !== "undefined") {
      try {
        const audioPath = "/songs/portal-sound.mp3";
        const audio = new Audio(audioPath);
        audio.volume = 0.3;
        audio.currentTime = 0.1; // Start slightly into the sound

        // Apply reverb if available
        if (window.audioContext && window.reverbGain) {
          try {
            const source = window.audioContext.createMediaElementSource(audio);
            const delay = window.audioContext.createDelay(0.2);
            const feedbackGain = window.audioContext.createGain();
            const outputGain = window.audioContext.createGain();

            feedbackGain.gain.value = 0.2;
            outputGain.gain.value = 0.5;

            source.connect(delay);
            delay.connect(feedbackGain);
            feedbackGain.connect(delay);
            delay.connect(outputGain);
            source.connect(outputGain);
            outputGain.connect(window.audioContext.destination);
          } catch (e) {
            // Continue without reverb
          }
        }

        audio.play().catch(() => {
          // Ignore autoplay errors
        });
      } catch (error) {
        // Ignore errors
      }
    }
  };

  const handleEnter = () => {
    // Create and play audio on click (user interaction required)
    if (typeof window !== 'undefined' && typeof Audio !== "undefined") {
      try {
        // Use renamed file without spaces
        const audioPath = "/songs/portal-sound.mp3";
        const audio = new Audio(audioPath);
        audio.volume = 0.7;
        audio.preload = 'auto';

        // Apply reverb effect if available
        if (window.audioContext && window.reverbGain) {
          try {
            const source = window.audioContext.createMediaElementSource(audio);
            const delay = window.audioContext.createDelay(0.3);
            const feedbackGain = window.audioContext.createGain();
            const outputGain = window.audioContext.createGain();

            feedbackGain.gain.value = 0.3;
            outputGain.gain.value = 0.7;

            // Create reverb with delay feedback
            source.connect(delay);
            delay.connect(feedbackGain);
            feedbackGain.connect(delay);
            delay.connect(outputGain);
            source.connect(outputGain);
            outputGain.connect(window.audioContext.destination);
          } catch (reverbError) {
            // If reverb fails, play normally
            console.log('Reverb not available, playing normally');
          }
        }

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
    <div className="relative flex flex-col gap-4 items-center w-full">
      {/* 3D Demogorgon Scene - only visible on hover, positioned behind button */}
      <DemogorgonScene isVisible={isHovered} mousePosition={mousePosition} />

      <motion.button
        className="btn-neon-sign blue mt-12"
        onClick={handleEnter}
        onMouseEnter={() => {
          setIsHovered(true);
          playHoverSound();
        }}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="tube-borders"></span>
        <span className="tube-ends"></span>
        <span>ENTER THE PORTAL</span>
      </motion.button>

      <motion.a
        href="#about"
        className="btn-neon-sign purple mt-6"
        onClick={(e) => {
          e.preventDefault();
          const about = document.getElementById("about");
          about?.scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="tube-borders"></span>
        <span className="tube-ends"></span>
        <span>VIEW PROFILE</span>
      </motion.a>
    </div>
  );
}