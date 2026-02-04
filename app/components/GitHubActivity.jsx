'use client';

import { motion } from 'framer-motion';

export default function GitHubActivity() {
  return (
    <section id="github" className="px-6 py-20 flex flex-col items-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-10 glitch text-center"
        data-text="GITHUB ACTIVITY"
      >
        GITHUB ACTIVITY
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-5xl bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8"
        style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
      >
        <div className="border-b-2 border-red-600 pb-4 mb-6 flex items-center justify-between">
          <div>
            <div className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</div>
            <div className="text-gray-400 font-mono text-xs mt-1">ACTIVITY HEATMAP</div>
          </div>
          <a
            href="https://github.com/sheharzad-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-red-400 border border-red-500 px-3 py-1 hover:bg-red-600 hover:text-white transition-colors"
            style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.4)' }}
          >
            VIEW PROFILE
          </a>
        </div>

        <div className="w-full overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/sheharzad-developer"
            alt="GitHub contribution graph"
            className="w-full min-w-[720px] rounded border border-red-600/40 bg-black/40 p-3"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-4 text-center text-gray-400 font-mono text-xs tracking-wider">
          ACTIVITY OVERVIEW
        </div>
      </motion.div>
    </section>
  );
}
