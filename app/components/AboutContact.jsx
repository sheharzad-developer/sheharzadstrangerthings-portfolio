'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiLeetcode } from 'react-icons/si';

export default function AboutContact() {
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

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 shadow-2xl relative"
          style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
        >
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm tracking-wider">SUBJECT ID: S-011</span>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              SHEHARZAD SALAHUDDIN LABORATORY - PERSONNEL FILE
            </div>
          </div>

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

        {/* Contact Card */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 shadow-2xl relative"
          style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
        >
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm tracking-wider">CONTACT ME</span>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              DIRECT COMMUNICATION DETAILS
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-stranger text-red-500 mb-4 glitch font-mono" data-text="LET'S BUILD SOMETHING AMAZING">
            LET'S BUILD SOMETHING AMAZING
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-mono mb-8">
            Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences. Let's chat about your project!
          </p>

          <div className="text-purple-300 font-mono text-xs tracking-wider mb-4">
            LET'S HAVE A COFFEE
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <a
              href="https://wa.me/923160144176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 border-2 border-green-500 hover:border-green-400 transition-all font-mono"
              style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}
            >
              <FaWhatsapp className="text-green-400 text-2xl" />
              <div className="flex-1">
                <div className="text-green-400 font-bold text-lg">WHATSAPP CHAT</div>
                <div className="text-green-500 text-xs">Get instant responses</div>
              </div>
            </a>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 border-2 border-purple-500 hover:border-purple-400 transition-all font-mono"
              style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' }}
            >
              <FaCalendar className="text-purple-400 text-2xl" />
              <div className="flex-1">
                <div className="text-purple-400 font-bold text-lg">BOOK A COFFEE CHAT</div>
                <div className="text-purple-500 text-xs">30-minute discovery call</div>
              </div>
              <span className="text-2xl">☕</span>
            </a>
          </div>

          <div>
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[OTHER WAYS TO REACH ME]</h4>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-red-500" />
                <a href="mailto:sheharzad.salahuddin9000@outlook.com" className="hover:text-red-400 transition text-gray-300">
                  sheharzad.salahuddin9000@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-red-500" />
                <a href="tel:+923160144176" className="hover:text-red-400 transition text-gray-300">
                  +92 316 0144176
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[CONNECT WITH ME]</h4>
            <div className="flex gap-4">
              <a
                href="https://www.upwork.com/freelancers/~01264a0282005eca30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-400 hover:border-green-400 transition"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}
                aria-label="Upwork"
              >
                <SiUpwork className="text-xl" />
              </a>
              <a
                href="https://www.fiverr.com/sellers/sheharzad_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-400 hover:border-green-400 transition"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}
                aria-label="Fiverr"
              >
                <SiFiverr className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-400 hover:border-blue-400 transition"
                style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/sheharzad-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-red-600 rounded-lg flex items-center justify-center text-red-400 hover:border-red-500 transition"
                style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.3)' }}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://leetcode.com/u/sheharzad-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-yellow-500 rounded-lg flex items-center justify-center text-yellow-400 hover:border-yellow-400 transition"
                style={{ boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)' }}
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
