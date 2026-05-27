'use client';

import { SiLeetcode } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { name: "Easy", solved: 76, total: 944, color: "text-green-500", border: "border-green-500", bar: "bg-green-500" },
  { name: "Medium", solved: 50, total: 2057, color: "text-yellow-400", border: "border-yellow-400", bar: "bg-yellow-400" },
  { name: "Hard", solved: 4, total: 934, color: "text-red-500", border: "border-red-500", bar: "bg-red-500" },
];

const TOTAL_SOLVED = 130;
const TOTAL_PROBLEMS = 3935;
const PROFILE_URL = "https://leetcode.com/u/sheharzad-developer/";

const LeetcodeStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), 200);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mt-20"
    >
      <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 relative" style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}>
        <div className="border-b-2 border-red-600 pb-4 mb-8">
          <div className="flex justify-between items-center mb-1">
            <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
            <span className="text-red-500 font-mono text-sm">COMBAT TRAINING LOG</span>
          </div>
          <div className="text-gray-400 font-mono text-xs mt-1">
            SUBJECT S-011 | ALGORITHMIC ENCOUNTERS
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-stranger text-red-600 mb-8 text-center glitch"
          data-text="LEETCODE"
        >
          LEETCODE
        </motion.h3>

        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            <div className="md:col-span-1 flex flex-col items-center justify-center bg-gray-800 border-2 border-red-600 rounded-lg p-6"
              style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}>
              <SiLeetcode className="text-yellow-500 text-5xl mb-3" />
              <div className="font-stranger text-red-500 text-4xl neon-text-glow-red">
                {TOTAL_SOLVED}
              </div>
              <div className="font-mono text-gray-400 text-xs mt-1 mb-4">
                / {TOTAL_PROBLEMS} SOLVED
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden mb-4">
                <div
                  className="h-full bg-red-500 transition-all duration-1000"
                  style={{ width: isVisible ? `${Math.max((TOTAL_SOLVED / TOTAL_PROBLEMS) * 100, 2)}%` : '0%' }}
                />
              </div>
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-red-400 hover:text-red-300 border border-red-600 hover:border-red-400 px-3 py-2 rounded transition-all"
              >
                VIEW PROFILE <FiExternalLink />
              </a>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => {
                const pct = (stat.solved / stat.total) * 100;
                return (
                  <div
                    key={stat.name}
                    className={`bg-gray-800 border-2 ${stat.border} rounded-lg p-4 flex flex-col justify-between`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className={`font-mono font-bold ${stat.color} tracking-wider`}>
                        {stat.name.toUpperCase()}
                      </span>
                      <span className="font-mono text-gray-500 text-xs">
                        {stat.solved}/{stat.total}
                      </span>
                    </div>
                    <div className={`font-stranger text-3xl ${stat.color} mb-3`}>
                      {stat.solved}
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${stat.bar} transition-all duration-1000`}
                        style={{ width: isVisible ? `${Math.max(pct, 2)}%` : '0%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 bg-gray-800 border-2 border-red-600 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6"
            style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}>
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="absolute inset-0 bg-green-500 opacity-20 blur-xl rounded-full" />
              <div className="relative w-full h-full bg-gray-900 border-2 border-green-500 rounded-2xl flex flex-col items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}>
                <span className="font-stranger text-green-400 text-3xl leading-none">50</span>
                <span className="font-mono text-green-500 text-[0.55rem] tracking-widest">DAYS</span>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="font-mono text-red-500 text-xs tracking-widest mb-1">// MOST RECENT BADGE</div>
              <div className="font-stranger text-red-500 text-2xl neon-text-glow-red mb-1">
                50 DAYS BADGE 2026
              </div>
              <div className="font-mono text-gray-400 text-xs">
                Solving problems 50+ days in 2026
              </div>
            </div>
            <div className="font-mono text-gray-500 text-xs">
              <span className="text-red-400">BADGES</span> · 1
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeetcodeStats;
