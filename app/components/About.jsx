'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen text-gray-300 px-6 py-20 flex flex-col items-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-8 glitch"
        data-text="ABOUT ME"
      >
        ABOUT ME
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl w-full bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 shadow-2xl relative"
        style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
      >
        {/* Classified Header */}
        <div className="border-b-2 border-red-600 pb-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
            <span className="text-red-500 font-mono text-sm tracking-wider">SUBJECT ID: S-011</span>
          </div>
          <div className="text-gray-400 font-mono text-xs">
        SHEHARZAD SALAHUDDIN LABORATORY - PERSONNEL FILE
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-6 text-gray-300 font-mono text-sm md:text-base leading-relaxed">
          <div>
            <span className="text-red-500">[PHILOSOPHY]</span>
            <p className="mt-2 ml-4 text-gray-400">
              Subject believes great software should feel invisible. Focuses on building fast, intuitive, and seamless user experiences using modern JavaScript frameworks: React, Vue, Next.js, and Node.js.
            </p>
          </div>

          <div>
            <span className="text-red-500">[ORIGIN]</span>
            <p className="mt-2 ml-4 text-gray-400">
              Journey initiated at tech firm in Lahore. Initial exposure: Vue.js. Learned that optimal interfaces require zero cognitive load. Since activation, has contributed to applications that improved engagement metrics, increased conversion rates, and delivered clean, high-quality user experiences.
            </p>
          </div>

          <div>
            <span className="text-red-500">[SPECIALIZATION]</span>
            <p className="mt-2 ml-4 text-gray-400">
              Specialized in crafting pixel-perfect UIs, integrating REST APIs, optimizing performance, and building maintainable architectures. Tech stack includes: TypeScript, Tailwind CSS, ShadCN, and modern tooling. Enjoys designing components, refining user flows, and making products feel polished and responsive.
            </p>
          </div>

          <div>
            <span className="text-red-500">[BEHAVIORAL ANALYSIS]</span>
            <p className="mt-2 ml-4 text-gray-400">
              When not in active development mode, subject experiments with new frameworks, improves past projects, or assists others in the developer community. Core values: clean code, ethical development, and continuous learning. Believes great products emerge from collaboration, curiosity, and attention to detail.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-red-600 border-opacity-30">
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="text-red-500">STATUS: <span className="text-green-400">ACTIVE</span></span>
              <span className="text-red-500">CLEARANCE: <span className="text-yellow-400">LEVEL 3</span></span>
              <span className="text-red-500">SPECIALIZATION: <span className="text-blue-400">FULLSTACK DEVELOPER</span></span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}