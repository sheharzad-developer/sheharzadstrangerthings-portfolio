'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import SkillsGrid from './SkillsGrid';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-10 glitch"
        data-text="WHERE I'VE WORKED"
      >
        WHERE I&apos;VE WORKED
      </m.h2>

      {/* Company logos with real role + tenure context */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-12 mb-16"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="size-24 bg-red-600 flex items-center justify-center border-2 border-red-400 overflow-hidden" style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.5)' }}>
            <Image src="/images/company/Netsol.png" alt="NetSol Technologies" width={96} height={96} className="w-full h-full object-contain p-2" />
          </div>
          <div className="text-center font-mono">
            <div className="text-red-400 text-sm font-bold">NETSOL Technologies</div>
            <div className="text-gray-400 text-xs">Front-End Developer · with NETSOL since 2015 (design → dev)</div>
          </div>
        </div>
      </m.div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Chatbot Development Card */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-green-500 p-6 relative"
          style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">🤖</div>
            <div>
              <h3 className="text-green-400 font-bold text-2xl mb-2 font-mono">CHATBOT DEVELOPMENT</h3>
              <p className="text-gray-400 text-sm font-mono">
                Creating conversational interfaces that provide natural, helpful interactions.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-green-400 font-mono text-xs mb-3">[TECHNOLOGIES]</div>
            <ul className="space-y-2">
              {['LLM', 'Web Chat', 'Multi-modal', 'Context Management'].map((tech, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 font-mono text-sm">
                  <span className="text-green-500">▸</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </m.div>

        {/* Full Stack Development Card */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-purple-500 p-6 relative"
          style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl text-purple-400 font-mono">&lt;/&gt;</div>
            <div>
              <h3 className="text-purple-400 font-bold text-2xl mb-2 font-mono">FULL STACK DEVELOPMENT</h3>
              <p className="text-gray-400 text-sm font-mono">
                Crafting end-to-end web applications with modern frameworks and tools.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-purple-400 font-mono text-xs mb-3">[TECHNOLOGIES]</div>
            <ul className="space-y-2">
              {['React/Next.js', 'Vue/Nuxt', 'Node.js', 'Python', 'TypeScript'].map((tech, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 font-mono text-sm">
                  <span className="text-purple-500">▸</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </m.div>
      </div>

      {/* Tech Stack Grid */}
      <SkillsGrid />
    </section>
  );
}
