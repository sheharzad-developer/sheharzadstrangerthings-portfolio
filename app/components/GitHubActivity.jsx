'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

export default function GitHubActivity() {
  return (
    <section id="github" className="px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-10 glitch text-center"
        data-text="GITHUB ACTIVITY"
      >
        GITHUB ACTIVITY
      </m.h2>

      <m.div
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
            className="btn btn-outline btn-sm"
          >
            VIEW PROFILE
          </a>
        </div>

        <div className="w-full overflow-x-auto">
          <Image
            src="https://ghchart.rshah.org/sheharzad-developer"
            alt="GitHub contribution graph"
            width={720}
            height={112}
            unoptimized
            className="w-full min-w-[720px] rounded border border-red-600/40 bg-zinc-950/40 p-3"
          />
        </div>
        <div className="mt-4 text-center text-gray-400 font-mono text-xs tracking-wider">
          ACTIVITY OVERVIEW
        </div>
      </m.div>
    </section>
  );
}
