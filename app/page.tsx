'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Background from './components/Background';
import BackgroundAudio from './components/BackgroundAudio';
import IntroAnimation from './components/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import LightningFlash from './components/LightningFlash';
import AudioReverb from './components/AudioReverb';
import SectionWrapper from './components/SectionWrapper';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function isDecemberAccessible() {
  // Allow access in development mode (for testing)
  // In production, this will be removed by the build process
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return true;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11, where 11 is December
  
  // Check if it's December (month index 11)
  if (currentMonth !== 11) {
    return false;
  }

  // Define the start time: December 1st at 00:00:00
  const startTime = new Date(currentYear, 11, 1, 0, 0, 0);
  
  // Define the end time: December 31st at 23:59:59
  const endTime = new Date(currentYear, 11, 31, 23, 59, 59);

  // Check if current time is between start and end time
  return now >= startTime && now <= endTime;
}

function getTargetDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  // If before December, target is December 1st 00:00:00
  if (currentMonth < 11) {
    return new Date(currentYear, 11, 1, 0, 0, 0);
  }
  
  // If in December, target is December 31st 23:59:59
  if (currentMonth === 11) {
    const dec1 = new Date(currentYear, 11, 1, 0, 0, 0);
    if (now >= dec1) {
      return new Date(currentYear, 11, 31, 23, 59, 59);
    } else {
      return dec1;
    }
  }
  
  // If after December, target is next year's December 1st
  return new Date(currentYear + 1, 11, 1, 0, 0, 0);
}

function calculateTimeRemaining(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}

function CountdownTimer({ targetDate, label }: { targetDate: Date; label: string }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return (
    <div className="mt-8">
      <div className="text-red-500 text-xl font-bold mb-4">{label}</div>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-black bg-opacity-50 border-2 border-red-600 rounded-lg p-4">
          <div className="text-red-500 text-4xl font-bold">{String(timeRemaining.days).padStart(2, '0')}</div>
          <div className="text-gray-400 text-sm mt-2">DAYS</div>
        </div>
        <div className="bg-black bg-opacity-50 border-2 border-red-600 rounded-lg p-4">
          <div className="text-red-500 text-4xl font-bold">{String(timeRemaining.hours).padStart(2, '0')}</div>
          <div className="text-gray-400 text-sm mt-2">HOURS</div>
        </div>
        <div className="bg-black bg-opacity-50 border-2 border-red-600 rounded-lg p-4">
          <div className="text-red-500 text-4xl font-bold">{String(timeRemaining.minutes).padStart(2, '0')}</div>
          <div className="text-gray-400 text-sm mt-2">MINUTES</div>
        </div>
        <div className="bg-black bg-opacity-50 border-2 border-red-600 rounded-lg p-4">
          <div className="text-red-500 text-4xl font-bold">{String(timeRemaining.seconds).padStart(2, '0')}</div>
          <div className="text-gray-400 text-sm mt-2">SECONDS</div>
        </div>
      </div>
    </div>
  );
}

function FloatingCountdown({ targetDate }: { targetDate: Date }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-80 border-2 border-red-600 rounded-lg p-4 backdrop-blur-sm">
      <div className="text-red-500 text-xs font-bold mb-2 text-center">TIME REMAINING</div>
      <div className="flex gap-2 text-center">
        <div>
          <div className="text-red-500 text-lg font-bold">{String(timeRemaining.days).padStart(2, '0')}</div>
          <div className="text-gray-400 text-xs">D</div>
        </div>
        <div className="text-red-500">:</div>
        <div>
          <div className="text-red-500 text-lg font-bold">{String(timeRemaining.hours).padStart(2, '0')}</div>
          <div className="text-gray-400 text-xs">H</div>
        </div>
        <div className="text-red-500">:</div>
        <div>
          <div className="text-red-500 text-lg font-bold">{String(timeRemaining.minutes).padStart(2, '0')}</div>
          <div className="text-gray-400 text-xs">M</div>
        </div>
        <div className="text-red-500">:</div>
        <div>
          <div className="text-red-500 text-lg font-bold">{String(timeRemaining.seconds).padStart(2, '0')}</div>
          <div className="text-gray-400 text-xs">S</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [portalActive, setPortalActive] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check access on mount and update every second
    const checkAccess = () => {
      setIsAccessible(isDecemberAccessible());
      setIsChecking(false);
    };

    checkAccess();
    const interval = setInterval(checkAccess, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-red-500 text-2xl font-bold mb-4">Loading...</div>
        </div>
      </main>
    );
  }

  // Show loading state while checking
  if (isChecking) {
    return (
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-red-500 text-2xl font-bold mb-4">Checking access...</div>
        </div>
      </main>
    );
  }

  // Show access denied message if not in December
  if (!isAccessible) {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const targetDate = getTargetDate();
    
    let message = '';
    let countdownLabel = '';
    
    if (currentMonth < 11) {
      // Before December
      message = `This website will be available starting December 1st, ${currentYear} at 00:00:00 until the end of December`;
      countdownLabel = 'Time until website opens:';
    } else if (currentMonth === 11) {
      // It's December but might be before Dec 1st 00:00:00
      const dec1 = new Date(currentYear, 11, 1, 0, 0, 0);
      if (now < dec1) {
        message = `This website will be available starting December 1st, ${currentYear} at 00:00:00 until the end of December`;
        countdownLabel = 'Time until website opens:';
      } else {
        message = `This website is no longer available. It was only accessible from December 1st, ${currentYear} at 00:00:00 until the end of December`;
        countdownLabel = '';
      }
    } else {
      // After December
      message = `This website is no longer available. It was only accessible from December 1st, ${currentYear} at 00:00:00 until the end of December`;
      countdownLabel = 'Time until next December:';
    }

    return (
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-red-500 text-3xl md:text-5xl font-bold mb-4 glitch" data-text="ACCESS DENIED">
            ACCESS DENIED
          </div>
          <div className="text-gray-300 text-lg mt-6">
            {message}
          </div>
          {countdownLabel && (
            <CountdownTimer targetDate={targetDate} label={countdownLabel} />
          )}
          <div className="text-gray-500 text-sm mt-4">
            Current time: {now.toLocaleString()}
          </div>
        </div>
      </main>
    );
  }

  // Show only countdown timer during December (portfolio hidden)
  const now = new Date();
  const currentYear = now.getFullYear();
  const endOfDecember = new Date(currentYear, 11, 31, 23, 59, 59);
  
  return (
    <main className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4 max-w-4xl">
        <div className="text-red-500 text-3xl md:text-5xl font-bold mb-4 glitch" data-text="TIME REMAINING">
          TIME REMAINING
        </div>
        <CountdownTimer targetDate={endOfDecember} label="Until the end of December" />
        <div className="mt-8 space-y-2">
          <div className="text-red-500 text-2xl md:text-3xl font-bold">
            Merry Christmas
          </div>
          <div className="text-red-500 text-2xl md:text-3xl font-bold">
            Happy New Year
          </div>
        </div>
        <div className="text-gray-500 text-sm mt-4">
          Current time: {now.toLocaleString()}
        </div>
      </div>
    </main>
  );
}