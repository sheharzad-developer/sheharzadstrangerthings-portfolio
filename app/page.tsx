'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import FallingAshes from './components/FallingAshes';
import AboutContact from './components/AboutContact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import StrangerThingsBackground from './components/StrangerThingsBackground';
import IntroAnimation from './components/IntroAnimation';
import CustomCursor from './components/CustomCursor';
import LightningFlash from './components/LightningFlash';
import SectionWrapper from './components/SectionWrapper';
import Footer from "./components/Footer";
import GitHubActivity from "./components/GitHubActivity";

export default function Home() {
  const [portalActive, setPortalActive] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative overflow-hidden min-h-screen">
      {introComplete && <CustomCursor />}
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <LightningFlash />
          <StrangerThingsBackground portalActive={portalActive} />
          <FallingAshes />
          <Hero onActivate={setPortalActive} />
          <SectionWrapper>
            <AboutContact />
          </SectionWrapper>
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
          <SectionWrapper>
            <GitHubActivity />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <Certifications />
          </SectionWrapper>
          <Footer />
        </>
      )}
    </main>
  );
}