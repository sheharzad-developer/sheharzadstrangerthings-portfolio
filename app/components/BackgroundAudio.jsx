'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);
  const playOnInteractionRef = useRef(null);

  useEffect(() => {
    // Initialize audio only on client side
    if (typeof window === 'undefined' || typeof Audio === "undefined") {
      return;
    }

    // Create audio with proper path
    const audioPath = "/songs/portal-sound.mp3";
    const audio = new Audio(audioPath);
    audio.volume = 0.5; // Increased volume for better audibility
    audio.loop = true; // Loop continuously
    audio.preload = 'auto'; // Preload the audio

    audioRef.current = audio;

    // Add comprehensive error handling
    audio.addEventListener('error', (e) => {
      console.error('❌ Audio error:', e);
      if (audio.error) {
        console.error('Error code:', audio.error.code);
        console.error('Error message:', audio.error.message);
      }
      console.error('Audio path attempted:', audioPath);
    });

    // Add loaded event listener
    audio.addEventListener('loadeddata', () => {
      console.log('✅ Audio file loaded successfully, readyState:', audio.readyState);
    });

    audio.addEventListener('canplay', () => {
      console.log('✅ Audio can play, readyState:', audio.readyState);
    });

    audio.addEventListener('loadstart', () => {
      console.log('🔄 Audio loading started');
    });

    // Define events array
    const events = ['click', 'touchstart', 'keydown', 'mousedown', 'pointerdown', 'scroll'];

    // Resume audio context if suspended (required by some browsers)
    const resumeAudioContext = async () => {
      if (window.audioContext && window.audioContext.state === 'suspended') {
        try {
          await window.audioContext.resume();
          console.log('✅ Audio context resumed');
        } catch (e) {
          console.log('⚠️ Could not resume audio context:', e);
        }
      }
    };

    // If autoplay is blocked, play on first user interaction
    const playOnInteraction = async (event) => {
      if (!hasStartedRef.current && audioRef.current) {
        console.log('🎵 User interaction detected, attempting to play audio...');
        
        // Resume audio context first
        await resumeAudioContext();
        
        try {
          // Load audio if not loaded
          if (audioRef.current.readyState < 2) {
            audioRef.current.load();
          }

          // Wait for audio to be ready if needed
          if (audioRef.current.readyState < 2) {
            await new Promise((resolve) => {
              const onCanPlay = () => {
                audioRef.current.removeEventListener('canplay', onCanPlay);
                resolve();
              };
              audioRef.current.addEventListener('canplay', onCanPlay);
            });
          }

          // Now try to play
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('✅ Background portal sound started successfully');
                hasStartedRef.current = true;
                // Remove all listeners once started
                events.forEach(eventType => {
                  document.removeEventListener(eventType, playOnInteraction);
                  window.removeEventListener(eventType, playOnInteraction);
                });
              })
              .catch(e => {
                console.error('❌ Play failed on interaction:', e);
                // Don't remove listeners, will retry on next interaction
              });
          } else {
            // Play promise is undefined, check if already playing
            if (!audioRef.current.paused) {
              hasStartedRef.current = true;
              events.forEach(eventType => {
                document.removeEventListener(eventType, playOnInteraction);
                window.removeEventListener(eventType, playOnInteraction);
              });
            }
          }
        } catch (error) {
          console.error('❌ Audio play error:', error);
        }
      }
    };

    // Store reference for cleanup
    playOnInteractionRef.current = playOnInteraction;

    // Add multiple interaction listeners
    events.forEach(event => {
      document.addEventListener(event, playOnInteraction, { passive: true, once: false });
      window.addEventListener(event, playOnInteraction, { passive: true, once: false });
    });

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (playOnInteractionRef.current) {
        events.forEach(event => {
          document.removeEventListener(event, playOnInteractionRef.current);
          window.removeEventListener(event, playOnInteractionRef.current);
        });
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

