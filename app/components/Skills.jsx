'use client';

import { motion } from 'framer-motion';
import SkillsGrid from './SkillsGrid';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 flex flex-col items-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch"
        data-text="SOME OF THE COMPANIES I WORKED WITH"
      >
        SOME OF THE COMPANIES I WORKED WITH
      </motion.h2>

      {/* Company Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center gap-12 mb-16"
      >
        <div className="w-24 h-24 bg-blue-600 flex items-center justify-center border-2 border-blue-400 overflow-hidden" style={{ boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' }}>
          <img src="/images/company/codeninjainc.jpeg" alt="Code Ninja Inc" className="w-full h-full object-contain p-2" />
        </div>
        <div className="w-24 h-24 bg-red-600 flex items-center justify-center border-2 border-red-400 overflow-hidden" style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.5)' }}>
          <img src="/images/company/Netsol.png" alt="Netsol" className="w-full h-full object-contain p-2" />
        </div>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Chatbot Development Card */}
        <motion.div
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
        </motion.div>

        {/* Full Stack Development Card */}
        <motion.div
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
              {['React/Next.js', 'Node.js', 'Python', 'Django', 'Typescript'].map((tech, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 font-mono text-sm">
                  <span className="text-purple-500">▸</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Skills Progress Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-20 w-full max-w-4xl"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl font-stranger text-red-600 mb-12 glitch text-center"
          data-text="SKILL PROFICIENCY"
        >
          SKILL PROFICIENCY
        </motion.h3>

        <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 relative" style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}>
          {/* Classified Header */}
          <div className="border-b-2 border-red-600 pb-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm">SUBJECT S-011</span>
            </div>
            <div className="text-gray-400 font-mono text-xs mt-1">
              SKILL ASSESSMENT REPORT
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Integration */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-400 font-mono text-lg">AI INTEGRATION</span>
                <span className="text-blue-400 font-mono text-lg">95%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 border border-gray-700 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="h-full bg-blue-600 relative"
                  style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.8)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* Chatbot Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-400 font-mono text-lg">CHATBOT DEVELOPMENT</span>
                <span className="text-purple-400 font-mono text-lg">92%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 border border-gray-700 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
                  className="h-full bg-purple-600 relative"
                  style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* Full Stack Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-400 font-mono text-lg">FULL STACK DEVELOPMENT</span>
                <span className="text-green-400 font-mono text-lg">90%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 border border-gray-700 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
                  className="h-full bg-green-600 relative"
                  style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 animate-pulse"></div>
                </motion.div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-400 font-mono text-lg">UI/UX DESIGN</span>
                <span className="text-purple-400 font-mono text-lg">80%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 border border-gray-700 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                  className="h-full bg-purple-600 relative"
                  style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-red-600 border-opacity-30">
            <div className="text-gray-400 font-mono text-xs text-center">
              [ASSESSMENT COMPLETE] STATUS: ACTIVE | LAST UPDATED: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Grid */}
      <SkillsGrid />
    </section>
  );
}

