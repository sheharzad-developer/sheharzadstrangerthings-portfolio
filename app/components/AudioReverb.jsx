'use client';

import { useEffect, useRef } from 'react';

export default function AudioReverb() {
  const audioContextRef = useRef(null);
  const reverbGainRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.AudioContext && !window.webkitAudioContext) {
      return;
    }

    try {
      // Create audio context
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      // Create reverb effect using convolution
      // For simplicity, we'll use a gain node with delay feedback
      const reverbGain = audioContext.createGain();
      reverbGain.gain.value = 0.3;
      reverbGainRef.current = reverbGain;

      // Store in window for global access
      window.audioContext = audioContext;
      window.reverbGain = reverbGain;
    } catch (error) {
      console.log('Audio context creation failed:', error);
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null;
}

