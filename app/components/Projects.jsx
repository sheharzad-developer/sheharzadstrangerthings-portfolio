'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: "AuraAi — AI Wellness Companion",
    shortDesc: "A streaming AI wellness chat app (Google Gemini) with adaptive response modes, account auth, persistent history, and Stripe subscriptions — built solo on Next.js 16.",
    fullDesc: "A conversational mental-wellness companion that had to feel calm and human, not robotic. I built it end to end on Next.js 16 / React 19: a tuned wellness system prompt drives adaptive response modes — short, plain-prose replies for casual check-ins and structured, labeled sections for deeper asks. Responses stream token-by-token over the AG-UI protocol via Server-Sent Events, with sanitization so partial markdown never breaks the UI mid-stream. Auth uses NextAuth v5, chat history persists in Supabase (Postgres), and subscriptions run through Stripe. The hard part was the streaming + sanitization pipeline and keeping the experience accessible and calm under live token updates.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Google Gemini", "Server-Sent Events", "Supabase", "Stripe"],
    category: "AI / Healthcare",
    year: "2026",
    status: "live",
    team: "Solo project",
    image: "/images/projects/AI-Mental-Health.png",
    liveDemo: "https://ai-mental-health-chat-app.vercel.app/",
  },
  {
    id: 2,
    title: "AI Chatbot Platform",
    shortDesc: "A multi-agent, tool-aware chatbot platform (FastAPI) with multi-tenant isolation and a RAG document system, supporting Gemini, Groq, and DeepSeek.",
    fullDesc: "A backend-heavy platform for running multiple LLM providers behind one API. I built a FastAPI service that routes between Google Gemini, Groq, and DeepSeek, with tool-aware agents via the Model Context Protocol (MCP) and a RAG pipeline that grounds answers in uploaded documents. It supports multi-tenant isolation — separate data and encrypted API keys per tenant — plus chat history/session management and Langfuse monitoring, deployed serverless on Vercel. The interesting problems were tenant isolation and making tool-calling reliable across providers with very different APIs.",
    tech: ["FastAPI", "Python", "LangChain", "MongoDB", "MCP", "Langfuse"],
    category: "AI / Machine Learning",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/chatbot2025.png",
    github: "https://github.com/sheharzad-developer/Chatbot_Internship",
  },
  {
    id: 3,
    title: "Eden Avenue Management",
    shortDesc: "A full-stack property-management dashboard (Next.js App Router, Prisma, PostgreSQL) with role-based access, maintenance workflows, and PWA support.",
    fullDesc: "Property managers needed one place to track maintenance requests, residents, and units. I built a full-stack dashboard on the Next.js App Router with Prisma + PostgreSQL: role-based access for admins, managers, staff, and residents; a maintenance-request workflow (create → assign → status → comments); resident/staff/property management down to unit level; a notices system with priority and expiry; and real-time dashboard stats. Auth uses NextAuth with credential login, and it ships as an installable PWA with push notifications. The live demo opens straight into the working dashboard.",
    tech: ["Next.js (App Router)", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "PWA"],
    category: "Full-Stack Web Application",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/EdenAvenue.png",
    github: "https://github.com/sheharzad-developer/edenavenue",
    liveDemo: "https://edenavenuemanagement.vercel.app/dashboard",
  },
  {
    id: 4,
    title: "Daggys Cafe",
    shortDesc: "A macro-counted meal-delivery storefront (Next.js, Supabase, Stripe) with per-item nutrition, real-time order tracking, and secure checkout.",
    fullDesc: "A food-delivery storefront for macro-counted meals — every item shows calories, protein, carbs, and fats so health-conscious customers can order with intent. I built it on Next.js + React + TypeScript with Supabase for data and auth, Stripe for payments, and Socket.io for real-time order tracking, using shadcn/ui and Radix for accessible components. The focus was a reliable checkout/payment flow and a fast, clean browsing experience across devices.",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Socket.io", "Tailwind CSS"],
    category: "Full-Stack Web Application",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/daggys-cafe.png",
    github: "https://github.com/sheharzad-developer/daggys-cafe",
    liveDemo: "https://daggys-cafe.vercel.app/",
  },
  {
    id: 5,
    title: "Live Gold & Silver Prices",
    shortDesc: "A live gold & silver price site (Next.js 16, Sanity CMS) covering six markets with Arabic RTL support and server-side revalidation — running in production at thegoldprice.gold.",
    fullDesc: "A production site serving live gold and silver prices in USD and local currencies (SAR, AED, QAR, KWD, INR, PKR) for Saudi Arabia, UAE, Qatar, Kuwait, India, and Pakistan. I built it on the Next.js 16 App Router with Sanity CMS for editorial content, a gold-price API, country-specific pages, full Arabic RTL support for Gulf markets, and server-side revalidation so rates stay fresh without rebuilds. It runs live at thegoldprice.gold.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Sanity CMS", "REST API", "i18n / RTL"],
    category: "FinTech",
    year: "2026",
    status: "live",
    team: "Solo project",
    image: "/images/projects/Gold-&-Silver.png",
    liveDemo: "https://www.thegoldprice.gold/",
  },
  {
    id: 6,
    title: "ChatSmart AI",
    shortDesc: "A document-intelligence app (Python, Streamlit) using RAG over Google Gemini 1.5 with FAISS and HuggingFace embeddings for conversational document Q&A.",
    fullDesc: "An app for asking questions against your own documents. I built a RAG pipeline in Python/Streamlit: documents are parsed and embedded with HuggingFace models, indexed in FAISS, and queried conversationally through Google Gemini 1.5 via LangChain. The goal was accurate, grounded answers instead of hallucinations — so the real work was in chunking strategy, retrieval quality, and prompt construction.",
    tech: ["Python", "Streamlit", "LangChain", "Google Gemini 1.5", "FAISS", "HuggingFace"],
    category: "AI / Machine Learning",
    year: "2024",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/ChatSmart-AI.png",
    github: "https://github.com/sheharzad-developer/chatsmart-ai",
  },
  {
    id: 7,
    title: "FinPay — Crypto Wallet",
    shortDesc: "A React crypto-wallet app with email-verified auth, multi-currency balances, full transaction CRUD, and live market charts (CoinGecko + Recharts).",
    fullDesc: "A crypto-wallet front-end demonstrating end-to-end product flows in React. I built email-verified registration (6-digit codes), protected routes with session management, multi-currency balance tracking (BTC/ETH/USDT) with USD conversion, full transaction CRUD persisted to localStorage, and a market view with interactive 7-day price charts (Recharts) fed by live CoinGecko data. State is managed with the React Context API. The focus was a polished, responsive UX with real-time data and solid error handling.",
    tech: ["React", "React Router", "Tailwind CSS", "Recharts", "CoinGecko API", "Context API"],
    category: "FinTech",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/FinPay.png",
    liveDemo: "https://fin-pay-crypto.vercel.app/",
  },
  {
    id: 8,
    title: "Dental Syndicate",
    shortDesc: "A family dental-clinic site with real-time appointment booking and SMS/WhatsApp confirmations, built on a Flask backend with an animated glassmorphism UI.",
    fullDesc: "A dental clinic needed online booking with instant confirmations. I built a booking site with a Flask backend and a glassmorphism front-end: a real-time appointment system wired to SMS and WhatsApp notification APIs so patients and staff get instant confirmations, a custom SVG brand, and animated, responsive UI, deployed on Vercel. The core challenge was connecting the booking flow to the messaging APIs reliably.",
    tech: ["Python (Flask)", "JavaScript", "CSS3 (Glassmorphism)", "SMS API", "WhatsApp API", "Vercel"],
    category: "Healthcare",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/developer-dark.png",
    github: "https://github.com/sheharzad-developer/dental-syndicate",
    liveDemo: "https://dental-syndicate.vercel.app/",
  },
  {
    id: 9,
    title: "Apartment Design Tool",
    shortDesc: "An interactive floor-plan editor with real-time 3D visualization, built in React with Three.js / WebGL.",
    fullDesc: "A tool for sketching apartment floor plans and seeing them in 3D. I built an interactive editor in React with drag-and-drop placement, then rendered the plans in real time using Three.js / WebGL with a walk-through 3D view, plus a helper that proposes layouts from basic requirements and export of plans and models. The hard part was the Canvas/WebGL rendering and keeping the 2D editor and the 3D scene in sync.",
    tech: ["React", "Three.js", "WebGL", "Canvas API", "3D Rendering"],
    category: "Design Tools",
    year: "2024",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/Apartment-Planner.png",
    github: "https://github.com/sheharzad-developer/Apartment-Planner",
    liveDemo: "https://apartment-planner-eta.vercel.app/",
  },
  {
    id: 10,
    title: "LSLS School Management System",
    shortDesc: "A school-management platform (Next.js, Prisma, PostgreSQL) handling students, teachers, attendance, and results, with role-based portals for admin / teacher / student / parent.",
    fullDesc: "A management system for schools to run students, teachers, classes, attendance, and results in one place. I built it on Next.js + Prisma + PostgreSQL with role-based access across four user types: an admin dashboard with live stats, student/teacher/class management, 30-day attendance analytics, results and grade tracking, a parent portal, and search across records, with NextAuth for authentication. The focus was modeling role permissions cleanly for admins, teachers, students, and parents.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "REST API"],
    category: "Full-Stack Web Application",
    year: "2025",
    status: "completed",
    team: "Solo project",
    image: "/images/projects/LSLS-Management.png",
    liveDemo: "https://lslsmanagementsystemschool.netlify.app/",
  },
  {
    id: 11,
    title: "NetSol Technologies — Web",
    shortDesc: "Front-end work on NetSol Technologies' corporate web presence — responsive, performant marketing and product pages built with Nuxt.js as part of my role on the team.",
    fullDesc: "Front-end work on NetSol Technologies' corporate web presence, delivered as part of my role on the team. I built responsive, performant marketing and product pages with Nuxt.js / Vue, focused on clean UI, SEO, accessibility, and smooth interactions across the company's services and portfolio sections. This is production work for my employer rather than a personal project.",
    tech: ["Nuxt.js", "Vue", "JavaScript", "CSS3", "Responsive Design", "SEO"],
    category: "Corporate",
    year: "2024",
    status: "completed",
    team: "NetSol Technologies — frontend",
    image: "/images/projects/Netsoltech.png",
    liveDemo: "https://netsoltech.com/",
  },
  {
    id: 12,
    title: "Hotel Management & Tourism (MERN)",
    shortDesc: "A MERN hotel-booking and tourism platform built with a 4-person bootcamp team, where I owned the Stripe payment gateway integration and secure checkout flow.",
    fullDesc: "Built during a full-stack bootcamp at Code Ninja Inc with a team of four, this MERN (MongoDB, Express, React, Node) platform lets travelers book hotels, pay online, and hire local tour guides. My focus was the payments layer: I integrated the Stripe payment gateway end to end — building the secure checkout flow and wiring it into the booking system so customers could pay for rooms safely. The wider system included JWT authentication with role-based access (admin, hotel owners, customers), hotel listings with location/price/amenity filters, full hotel CRUD for owners, date-based room booking with availability checks, tour-guide discovery and booking, and a review/feedback module. It was where I learned how the MERN stack fits together end to end and how to wire third-party payment infrastructure into a real booking flow.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "Stripe"],
    category: "Full-Stack Web Application",
    year: "2023",
    status: "completed",
    team: "Team of 4 · my focus: Stripe payments & checkout",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch"
        data-text="PROJECTS"
      >
        PROJECTS
      </m.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor={index % 3 === 0 ? "#00f3ff" : index % 3 === 1 ? "#bc13fe" : "#ff00ff"}
            >
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(project)}
                className={`bg-gray-900 bg-opacity-50 border-2 overflow-hidden relative cursor-pointer crt-overlay ${index % 3 === 0 ? 'neon-border-blue' : index % 3 === 1 ? 'neon-border-purple' : 'border-neonPink'
                  }`}
                style={{
                  boxShadow: index % 3 === 0 ? '0 0 15px rgba(0, 243, 255, 0.2)' :
                    index % 3 === 1 ? '0 0 15px rgba(188, 19, 254, 0.2)' :
                      '0 0 15px rgba(255, 0, 255, 0.2)',
                  borderColor: index % 3 === 0 ? '#00f3ff' : index % 3 === 1 ? '#bc13fe' : '#ff00ff'
                }}
              >
                {/* Classified Header */}
                <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-red-500 font-mono text-xs tracking-wider">CASE FILE</span>
                    <span className="text-red-500 font-mono text-xs">#{String(project.id).padStart(3, '0')}</span>
                  </div>
                  <div className="text-gray-400 font-mono text-xs">
                    CLASSIFIED PROJECT
                  </div>
                </div>

                {/* Image area */}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20"></div>
                      <span className="text-gray-500 text-xs font-mono relative z-10">[CLASSIFIED IMAGE]</span>
                    </>
                  )}
                </div>

                <div className="p-4 bg-zinc-950 bg-opacity-30">
                  <h3 className="text-red-500 font-bold text-lg mb-2 glitch font-mono" data-text={project.title}>
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xs leading-relaxed font-mono">
                    {project.shortDesc}
                  </p>

                  <div className="mb-4">
                    <div className="text-gray-300 font-mono text-xs mb-2">[TECH STACK]</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={tech}
                          className={`bg-opacity-20 border px-2 py-0.5 rounded font-mono text-xs ${i % 3 === 0 ? 'bg-cyan-900 border-cyan-500 text-cyan-300' :
                            i % 3 === 1 ? 'bg-purple-900 border-purple-500 text-purple-300' :
                              'bg-pink-900 border-pink-500 text-pink-300'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-gray-800 border-gray-600 text-gray-400 border px-2 py-0.5 rounded font-mono text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="inline-block w-full text-center bg-red-600 hover:bg-red-700 border border-red-500 text-white px-4 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                    style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                  >
                    ACCESS FILE &gt;
                  </div>
                </div>
              </m.div>
            </Tilt>
          </m.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-zinc-950 bg-opacity-80 z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <m.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border-2 border-red-600 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                style={{ boxShadow: '0 0 30px rgba(176, 17, 33, 0.5)' }}
              >
                {/* Modal Header */}
                <div className={`border-b-2 bg-zinc-950 bg-opacity-50 p-4 sticky top-0 z-10 ${selectedProject.id % 3 === 0 ? 'border-neonBlue' : selectedProject.id % 3 === 1 ? 'border-neonPurple' : 'border-neonPink'
                  }`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className={`font-mono text-xs tracking-wider ${selectedProject.id % 3 === 0 ? 'text-neonBlue' : selectedProject.id % 3 === 1 ? 'text-neonPurple' : 'text-neonPink'
                          }`}>CASE FILE</span>
                        <span className={`font-mono text-xs ${selectedProject.id % 3 === 0 ? 'text-neonBlue' : selectedProject.id % 3 === 1 ? 'text-neonPurple' : 'text-neonPink'
                          }`}>#{String(selectedProject.id).padStart(3, '0')}</span>
                        {selectedProject.category && (
                          <span className="text-gray-400 font-mono text-xs">[{selectedProject.category}]</span>
                        )}
                        {selectedProject.year && (
                          <span className="text-gray-400 font-mono text-xs">YEAR: {selectedProject.year}</span>
                        )}
                        {selectedProject.status && (
                          <span className="text-green-400 font-mono text-xs">STATUS: {selectedProject.status.toUpperCase()}</span>
                        )}
                        {selectedProject.team && (
                          <span className="text-yellow-400 font-mono text-xs">{selectedProject.team}</span>
                        )}
                      </div>
                      <h3 className={`font-bold text-2xl glitch font-mono ${selectedProject.id % 3 === 0 ? 'text-neonBlue glitch-blue' :
                          selectedProject.id % 3 === 1 ? 'text-neonPurple glitch-purple' : 'text-neonPink glitch-pink'
                        }`} data-text={selectedProject.title}>
                        {selectedProject.title.toUpperCase()}
                      </h3>
                    </div>
                    <m.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className={`font-mono text-2xl w-8 h-8 flex items-center justify-center border transition-colors flex-shrink-0 ${selectedProject.id % 3 === 0 ? 'text-neonBlue border-neonBlue hover:text-white hover:bg-neonBlue' :
                          selectedProject.id % 3 === 1 ? 'text-neonPurple border-neonPurple hover:text-white hover:bg-neonPurple' :
                            'text-neonPink border-neonPink hover:text-white hover:bg-neonPink'
                        }`}
                      style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}
                    >
                      ×
                    </m.button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-red-500 font-mono text-sm mb-2">[CLASSIFIED DESCRIPTION]</div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-red-500 font-mono text-sm mb-3">[TECH STACK]</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(tech => (
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

                  {/* Action Buttons — each renders only if its URL exists */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {selectedProject.github && (
                      <m.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.8)' }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 max-w-xs text-center border text-white px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all ${selectedProject.id % 3 === 0 ? 'bg-cyan-600 border-cyan-500 hover:bg-cyan-700' :
                            selectedProject.id % 3 === 1 ? 'bg-purple-600 border-purple-500 hover:bg-purple-700' :
                              'bg-pink-600 border-pink-500 hover:bg-pink-700'
                          }`}
                        style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}
                      >
                        GITHUB
                      </m.a>
                    )}
                    {selectedProject.liveDemo && (
                      <m.a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.8)' }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 max-w-xs text-center bg-transparent border-2 px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all ${selectedProject.id % 3 === 0 ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white' :
                            selectedProject.id % 3 === 1 ? 'border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white' :
                              'border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white'
                          }`}
                        style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}
                      >
                        LIVE DEMO
                      </m.a>
                    )}
                  </div>
                </div>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
