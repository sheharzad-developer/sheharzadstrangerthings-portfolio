'use client';

import { useState } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
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
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden min-h-screen">
        <IntroAnimation onComplete={() => setIntroComplete(true)} />

        {/* Heavy decorative effects mount only after the intro, so they don't
            compete with it during load (perf) */}
        {introComplete && <CustomCursor />}
        {introComplete && <LightningFlash />}
        {introComplete && <StrangerThingsBackground portalActive={portalActive} />}
        {introComplete && <FallingAshes />}

        {/* Content renders immediately → present in the initial HTML for crawlers,
            and visible the moment the intro overlay fades */}
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
      </main>
      </MotionConfig>
    </LazyMotion>
  );
}