'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Initialize audio only on client side
    if (typeof window === 'undefined' || typeof Audio === "undefined") {
      return;
    }

    // Create audio with proper path (renamed file without spaces)
    const audioPath = "/songs/portal-sound.mp3";
    const audio = new Audio(audioPath);
    audio.volume = 0.3; // Lower volume for background ambient sound
    audio.loop = true; // Loop continuously
    
    audioRef.current = audio;

    // Add comprehensive error handling
    audio.addEventListener('error', (e) => {
      console.error('❌ Audio error:', e);
      if (audio.error) {
        console.error('Error code:', audio.error.code);
        console.error('Error message:', audio.error.message);
      }
      // Try with encoded path as fallback
      if (!hasStartedRef.current) {
        const fallbackAudio = new Audio(encodeURI(audioPath));
        fallbackAudio.volume = 0.3;
        fallbackAudio.loop = true;
        audioRef.current = fallbackAudio;
        tryPlay(fallbackAudio);
      }
    });

    // Function to try playing
    const tryPlay = (audioInstance) => {
      if (hasStartedRef.current) return;
      
      const playPromise = audioInstance.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Background portal sound playing');
            hasStartedRef.current = true;
          })
          .catch(error => {
            console.log('⚠️ Autoplay blocked, waiting for user interaction');
            // Will be handled by interaction listeners
          });
      }
    };

    // Try to play immediately
    tryPlay(audio);

    // If autoplay is blocked, play on first user interaction
    const playOnInteraction = () => {
      if (!hasStartedRef.current && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            console.log('✅ Background portal sound started on interaction');
            hasStartedRef.current = true;
            // Remove all listeners once started
            events.forEach(event => {
              document.removeEventListener(event, playOnInteraction);
            });
          })
          .catch(e => console.error('Play failed on interaction:', e));
      }
    };
    
    // Add multiple interaction listeners (without once: true to ensure it fires)
    const events = ['click', 'touchstart', 'keydown', 'mousedown', 'pointerdown'];
    events.forEach(event => {
      document.addEventListener(event, playOnInteraction, { passive: true });
    });
    
    // Also add to window for broader coverage
    window.addEventListener('click', playOnInteraction, { passive: true });
    window.addEventListener('touchstart', playOnInteraction, { passive: true });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      events.forEach(event => {
        document.removeEventListener(event, playOnInteraction);
      });
      window.removeEventListener('click', playOnInteraction);
      window.removeEventListener('touchstart', playOnInteraction);
    };
  }, []);

  return null; // This component doesn't render anything
}

