'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: 'AuraAi — AI Wellness Companion',
    problem:
      'A mental-wellness chat app needs to feel calm and human — replies that adapt to the moment, not a rigid bot — while streaming responses without breaking the UI.',
    solution:
      'Built solo on Next.js 16: a tuned wellness prompt drives adaptive response modes, with token streaming over Server-Sent Events (AG-UI) and markdown sanitization mid-stream. Auth via NextAuth v5, chat history in Supabase, subscriptions via Stripe.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'Server-Sent Events', 'Supabase', 'Stripe'],
    category: 'AI / Healthcare',
    year: '2026',
    status: 'live',
    team: 'Solo project',
    image: '/images/projects/AI-Mental-Health.png',
    liveDemo: 'https://ai-mental-health-chat-app.vercel.app/',
  },
  {
    id: 2,
    title: 'AI Chatbot Platform',
    problem:
      'Supporting several LLM providers and grounding answers in private documents usually devolves into scattered, one-off integrations with no tenant separation.',
    solution:
      'A FastAPI platform that routes across Gemini, Groq, and DeepSeek with tool-aware agents (MCP) and a RAG pipeline, plus multi-tenant isolation (per-tenant data and encrypted keys) and Langfuse monitoring, deployed serverless on Vercel.',
    tech: ['FastAPI', 'Python', 'LangChain', 'MongoDB', 'MCP', 'Langfuse'],
    category: 'AI / Machine Learning',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/chatbot2025.png',
    github: 'https://github.com/sheharzad-developer/Chatbot_Internship',
  },
  {
    id: 13,
    title: 'RideShare — Mobility App',
    problem:
      'A ride-hailing app has to match riders and drivers in real time, track them on a live map, and take payment — all without the UI stalling as locations stream in.',
    solution:
      'A full-stack ride-hailing system: real-time driver matching over WebSockets, geospatial proximity queries with PostGIS, and Redis caching for hot location data, on a FastAPI backend with a React Native client and Stripe payments.',
    tech: ['React Native', 'FastAPI', 'PostGIS', 'Redis', 'WebSockets', 'Stripe'],
    category: 'Real-Time Full-Stack',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
  },
  {
    id: 14,
    title: 'Bilingual AI Study Companion',
    problem:
      'Learners studying in English and Urdu need a tutor that switches languages fluidly and stays grounded in sound pedagogy, not generic chatbot replies.',
    solution:
      'An AI tutor that responds fluidly in English and Urdu, built on a Node.js backend with the Claude API and a React Native client — grounded in my published applied-linguistics research on AI-assisted language learning.',
    tech: ['React Native', 'Node.js', 'Claude API', 'Bilingual (EN/UR)', 'Prompt Design'],
    category: 'AI / Education',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
  },
  {
    id: 3,
    title: 'Eden Avenue Management',
    problem:
      'Property managers track maintenance requests, residents, and units across disconnected tools with no shared view.',
    solution:
      'A full-stack dashboard (Next.js App Router, Prisma, PostgreSQL) with role-based access, a maintenance workflow (create → assign → status → comments), unit-level management, notices, and real-time stats — shipped as an installable PWA.',
    tech: ['Next.js (App Router)', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'PWA'],
    category: 'Full-Stack Web Application',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/EdenAvenue.png',
    github: 'https://github.com/sheharzad-developer/edenavenue',
    liveDemo: 'https://edenavenue.vercel.app/',
  },
  {
    id: 4,
    title: 'Daggys Cafe',
    problem: "Health-conscious diners can't easily see the macros of what they're ordering.",
    solution:
      'A meal-delivery storefront showing calories, protein, carbs, and fats per item — built on Next.js and Supabase with Stripe checkout and Socket.io order tracking, using accessible shadcn/ui components.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Socket.io', 'Tailwind CSS'],
    category: 'Full-Stack Web Application',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/daggys-cafe.webp',
    github: 'https://github.com/sheharzad-developer/daggys-cafe',
    liveDemo: 'https://daggys-cafe.vercel.app/',
  },
  {
    id: 5,
    title: 'Live Gold & Silver Prices',
    problem:
      'Buyers across Gulf and South-Asian markets need live precious-metal prices in their own currency and language.',
    solution:
      'A production site (Next.js 16, Sanity CMS) serving live gold and silver rates in six currencies with country pages, full Arabic RTL, and server-side revalidation so rates stay fresh without rebuilds.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Sanity CMS', 'REST API', 'i18n / RTL'],
    category: 'FinTech',
    year: '2026',
    status: 'live',
    team: 'Solo project',
    image: '/images/projects/Gold-&-Silver.png',
    liveDemo: 'https://www.thegoldprice.gold/',
  },
  {
    id: 6,
    title: 'ChatSmart AI',
    problem:
      'Finding one answer in long documents is slow, and generic chatbots hallucinate instead of citing the source.',
    solution:
      'A RAG app (Python/Streamlit) that embeds documents with HuggingFace models into FAISS and answers through Google Gemini 1.5 via LangChain — tuned chunking and retrieval for grounded answers.',
    tech: ['Python', 'Streamlit', 'LangChain', 'Google Gemini 1.5', 'FAISS', 'HuggingFace'],
    category: 'AI / Machine Learning',
    year: '2024',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/ChatSmart-AI.png',
    github: 'https://github.com/sheharzad-developer/chatsmart-ai',
  },
  {
    id: 7,
    title: 'FinPay — Crypto Wallet',
    problem:
      'Crypto newcomers need a simple way to track balances and transactions with live market context.',
    solution:
      'A React wallet with email-verified auth, multi-currency balances, full transaction CRUD, and live 7-day price charts (Recharts) from the CoinGecko API — state via Context, persisted locally.',
    tech: ['React', 'React Router', 'Tailwind CSS', 'Recharts', 'CoinGecko API', 'Context API'],
    category: 'FinTech',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/FinPay.png',
    liveDemo: 'https://fin-pay-crypto.vercel.app/',
  },
  {
    id: 8,
    title: 'Dental Syndicate',
    problem:
      'A dental clinic needed online appointment booking with instant confirmation for both patients and staff.',
    solution:
      'A booking site on a Flask backend with a real-time appointment system wired to SMS and WhatsApp APIs for instant confirmations, plus a custom SVG brand and animated glassmorphism UI, deployed on Vercel.',
    tech: ['Python (Flask)', 'JavaScript', 'CSS3 (Glassmorphism)', 'SMS API', 'WhatsApp API', 'Vercel'],
    category: 'Healthcare',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/developer-dark.png',
    github: 'https://github.com/sheharzad-developer/dental-syndicate',
    liveDemo: 'https://dental-syndicate.vercel.app/',
  },
  {
    id: 9,
    title: 'Apartment Design Tool',
    problem: 'Visualizing an apartment layout in 3D usually means heavy desktop software.',
    solution:
      'A browser-based floor-plan editor (React) with drag-and-drop placement and a real-time Three.js / WebGL walk-through view, plus layout auto-generation and export — the hard part was keeping the 2D editor and 3D scene in sync.',
    tech: ['React', 'Three.js', 'WebGL', 'Canvas API', '3D Rendering'],
    category: 'Design Tools',
    year: '2024',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/Apartment-Planner.png',
    github: 'https://github.com/sheharzad-developer/Apartment-Planner',
    liveDemo: 'https://apartment-planner-eta.vercel.app/',
  },
  {
    id: 10,
    title: 'LSLS School Management System',
    problem:
      'Schools manage students, teachers, attendance, and results across spreadsheets and disconnected silos.',
    solution:
      'A platform (Next.js, Prisma, PostgreSQL) with role-based portals for admin, teacher, student, and parent: dashboards, 30-day attendance analytics, results tracking, and a parent portal — focused on clean role-permission modeling.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'REST API'],
    category: 'Full-Stack Web Application',
    year: '2025',
    status: 'completed',
    team: 'Solo project',
    image: '/images/projects/LSLS-Management.png',
    liveDemo: 'https://lslsmanagementsystemschool.netlify.app/',
  },
  {
    id: 11,
    title: 'NetSol Technologies — Web',
    problem: "NETSOL's corporate site needed fast, responsive marketing and product pages that rank and convert.",
    solution:
      "Front-end work (as part of my role on the team) building responsive Nuxt.js / Vue pages with a focus on clean UI, SEO, accessibility, and smooth interactions across the company's services and portfolio.",
    tech: ['Nuxt.js', 'Vue', 'JavaScript', 'CSS3', 'Responsive Design', 'SEO'],
    category: 'Corporate',
    year: '2024',
    status: 'completed',
    team: 'NetSol Technologies — frontend',
    image: '/images/projects/Netsoltech.png',
    liveDemo: 'https://netsoltech.com/',
  },
  {
    id: 12,
    title: 'Hotel Management & Tourism (MERN)',
    problem: 'Travelers need one place to book hotels, pay online, and hire local tour guides.',
    solution:
      'A MERN platform built with a 4-person bootcamp team — I owned the Stripe payment gateway and secure checkout, wired into a booking system with JWT role-based access, hotel CRUD, and a reviews module.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth', 'Stripe'],
    category: 'Full-Stack Web Application',
    year: '2023',
    status: 'completed',
    team: 'Team of 4 · my focus: Stripe payments & checkout',
    image: '/images/projects/Codeninja_Image.png',
    github: 'https://github.com/sheharzad-developer/CodeNinja-Project',
  },
];

// Neon accent that cycles per card for visual variety
const accent = (i) =>
  i % 3 === 0
    ? { border: '#00f3ff', glow: 'rgba(0, 243, 255, 0.2)', text: 'text-cyan-300', chip: 'bg-cyan-900 border-cyan-500 text-cyan-300' }
    : i % 3 === 1
    ? { border: '#bc13fe', glow: 'rgba(188, 19, 254, 0.2)', text: 'text-purple-300', chip: 'bg-purple-900 border-purple-500 text-purple-300' }
    : { border: '#ff00ff', glow: 'rgba(255, 0, 255, 0.2)', text: 'text-pink-300', chip: 'bg-pink-900 border-pink-500 text-pink-300' };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-3 glitch"
        data-text="PROJECTS"
      >
        PROJECTS
      </m.h2>
      <p className="text-gray-400 font-mono text-sm mb-12 text-center max-w-2xl">
        Case files — the problem each project solves and how I built it.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => {
          const a = accent(index);
          return (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                scale={1.01}
                transitionSpeed={2500}
                glareEnable
                glareMaxOpacity={0.08}
                glareColor={a.border}
              >
                <article
                  className="bg-gray-900 bg-opacity-50 border-2 overflow-hidden relative crt-overlay flex flex-col h-full"
                  style={{ boxShadow: `0 0 15px ${a.glow}`, borderColor: a.border }}
                >
                  {/* Case file header */}
                  <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-red-500 font-mono text-xs tracking-wider">CASE FILE</span>
                      <span className="text-red-500 font-mono text-xs">#{String(project.id).padStart(3, '0')}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-gray-400 font-mono text-[0.65rem]">
                      <span>{project.category}</span>
                      <span>· {project.year}</span>
                      {project.status === 'live' && <span className="text-green-400">· LIVE</span>}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full h-40 bg-gray-800 border-b-2 border-red-600 flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20" />
                        <span className="text-gray-500 text-xs font-mono relative z-10">[CLASSIFIED IMAGE]</span>
                      </>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 bg-zinc-950 bg-opacity-30 flex flex-col flex-1">
                    <h3 className={`font-bold text-lg mb-2 font-mono ${a.text}`}>
                      {project.title.toUpperCase()}
                    </h3>

                    <div className="text-red-400 font-mono text-[0.65rem] mb-1 tracking-wider">[PROBLEM]</div>
                    <p className="text-gray-400 mb-3 text-xs leading-relaxed font-mono line-clamp-3">
                      {project.problem}
                    </p>

                    {project.team && (
                      <div className="text-yellow-400 font-mono text-[0.65rem] mb-3">{project.team}</div>
                    )}

                    {/* Tech preview */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => {
                        const c = accent(i);
                        return (
                          <span key={tech} className={`bg-opacity-20 border px-2 py-0.5 rounded font-mono text-[0.65rem] ${c.chip}`}>
                            {tech}
                          </span>
                        );
                      })}
                      {project.tech.length > 3 && (
                        <span className="bg-gray-800 border-gray-600 text-gray-400 border px-2 py-0.5 rounded font-mono text-[0.65rem]">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions — pinned to bottom for uniform cards */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      <button
                        onClick={() => openModal(project)}
                        className="flex-1 min-w-[7rem] text-center bg-red-600 hover:bg-red-700 border border-red-500 text-white px-3 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                        style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                      >
                        Case Study
                      </button>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-3 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                        >
                          Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center border-2 border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Tilt>
            </m.div>
          );
        })}
      </div>

      {/* Case-study modal */}
      <AnimatePresence>
        {selectedProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-zinc-950 bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <m.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} case study`}
              className="bg-gray-900 border-2 border-red-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              style={{ boxShadow: '0 0 30px rgba(176, 17, 33, 0.5)' }}
            >
              {/* Modal header */}
              <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 p-4 sticky top-0 z-10">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 text-xs font-mono">
                      <span className="text-red-500 tracking-wider">CASE FILE #{String(selectedProject.id).padStart(3, '0')}</span>
                      <span className="text-gray-400">{selectedProject.category}</span>
                      <span className="text-gray-400">{selectedProject.year}</span>
                      <span className="text-green-400">{selectedProject.status?.toUpperCase()}</span>
                    </div>
                    <h3 className="text-red-500 font-bold text-2xl font-mono">{selectedProject.title.toUpperCase()}</h3>
                    {selectedProject.team && (
                      <div className="text-yellow-400 font-mono text-xs mt-1">{selectedProject.team}</div>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    aria-label="Close case study"
                    className="text-red-500 hover:text-white hover:bg-red-600 border border-red-500 font-mono text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal body — Problem / Solution / Tech / Links */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-red-500 font-mono text-sm mb-2 tracking-wider">[PROBLEM]</div>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <div className="text-red-500 font-mono text-sm mb-2 tracking-wider">[SOLUTION]</div>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <div className="text-red-500 font-mono text-sm mb-3 tracking-wider">[TECH STACK]</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-600 bg-opacity-30 border border-red-500 text-red-300 px-3 py-1 rounded font-mono text-xs"
                        style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.3)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(selectedProject.liveDemo || selectedProject.github) && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-green-600 hover:bg-green-700 border border-green-500 text-white px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all"
                      >
                        Live Demo →
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-transparent border-2 border-gray-400 text-gray-200 hover:bg-gray-700 px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all"
                      >
                        View Code →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
