'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Background from './components/Background';
import BackgroundAudio from './components/BackgroundAudio';
import IntroAnimation from './components/IntroAnimation';
import SectionWrapper from './components/SectionWrapper';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [portalActive, setPortalActive] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative overflow-hidden min-h-screen">
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <BackgroundAudio />
          <Background portalActive={portalActive} />
          <Hero onActivate={setPortalActive} />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <Certifications />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <Footer />
        </>
      )}
    </main>
  );
}