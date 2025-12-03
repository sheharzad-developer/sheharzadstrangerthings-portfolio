'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: "Exploding Text on Scroll",
    shortDesc: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions.",
    fullDesc: "Creative text animation effects using Matter.js physics engine with smooth scroll interactions. A cutting-edge web experience featuring explosive text animations that respond to user scroll. Built with Matter.js physics engine, this project creates dynamic, interactive text effects that explode and scatter across the screen. Features include smooth scroll interactions, particle physics simulation, advanced animation techniques, and responsive design.",
    tech: ["JavaScript", "Matter.js", "CSS3", "Animation", "Physics Engine", "Scroll Effects"],
    category: "Animation",
    year: "2024",
    status: "completed",
    image: "/images/projects/WebPage.png",
    // github: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
    liveDemo: "https://sheharzad-developer.github.io/sheharzad-explode-text-on-scroll-matterjs/",
  },
  {
    id: 2,
    title: "Netsol Website",
    shortDesc: "Professional corporate website with modern design and optimized user experience.",
    fullDesc: "Professional corporate website with modern design and optimized user experience. A fully responsive corporate website built for Netsol Technologies. Features include modern UI/UX design, optimized performance, SEO best practices, accessibility compliance, and smooth animations. The site showcases company services, portfolio, and contact information with intuitive navigation and professional corporate web design.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Corporate Web", "UI/UX", "NuxtJS"],
    category: "Corporate",
    year: "2024",
    status: "completed",
    image: "/images/projects/Netsoltech.png",
    // github: "https://netsoltech.com/",
    liveDemo: "https://netsoltech.com/",
  },
  {
    id: 3,
    title: "Dental Syndicate",
    shortDesc: "A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications.",
    fullDesc: "Family Dental Care Website. A spectacular, family-focused dental clinic website featuring revolutionary glassmorphism design, advanced animations, and comprehensive appointment booking with SMS/WhatsApp notifications. The website includes a contact page with floating particles, a family-centered custom SVG logo design, and a real-time appointment booking system with SMS/WhatsApp notification integration. Key features include revolutionary glassmorphism contact page with floating particles, family-centered custom SVG logo design, real-time appointment booking system, SMS/WhatsApp notification integration, advanced CSS animations and backdrop blur effects, and responsive mobile-first design.",
    tech: ["Python Flask", "HTML5", "CSS3 (Glassmorphism)", "JavaScript", "SVG Design", "Vercel", "SMS API", "WhatsApp API", "NuxtJS"],
    category: "Healthcare",
    year: "2025",
    status: "completed",
    image: "/images/projects/developer-dark.png",
    github: "https://github.com/sheharzad-developer/dental-syndicate",
    liveDemo: "https://dental-syndicate.vercel.app/",
  },
  {
    id: 4,
    title: "Daggys Cafe",
    shortDesc: "A modern food delivery platform specializing in delicious, macro-counted meals delivered right to your doorstep. Features detailed nutritional information for every item including calories, protein, carbs, and fats to help customers fuel their body the right way.",
    fullDesc: "Macro-Counted Meal Delivery. A modern food delivery platform specializing in delicious, macro-counted meals delivered right to your doorstep. Features detailed nutritional information for every item including calories, protein, carbs, and fats to help customers fuel their body the right way. Includes a macro-counted meal delivery feature for healthier choices. Key features include comprehensive menu with detailed macro nutritional information (calorie/protein/carbs/fats breakdown), modern responsive UI optimized for food delivery experience, health-conscious meal options for all dietary preferences, user-friendly interface for easy navigation and ordering, secure payment gateway integration for safe transactions, real-time order tracking and notification system, customer feedback system for continuous improvement, responsive design for seamless experience on all devices, and macro-counted meal delivery for healthier choices.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Radix UI", "Supabase", "Stripe", "Socket.io", "Google Genkit", "Turbopack", "Class Variance Authority", "Next Auth"],
    category: "Healthcare",
    year: "2025",
    status: "completed",
    image: "/images/projects/daggys-cafe.png",
    github: "https://github.com/sheharzad-developer/daggys-cafe",
    liveDemo: "https://daggys-cafe.vercel.app/",
  },
  {
    id: 5,
    title: "AI Chatbot Platform",
    shortDesc: "A sophisticated AI chatbot platform with multi-agent support, featuring Google Gemini, Groq, DeepSeek, and Google AI integration. Built with FastAPI backend and modern web interface, deployed on Vercel with comprehensive tool integration and tenant isolation capabilities.",
    fullDesc: "Multi-Tenant Tool-Aware Chatbot. A sophisticated AI chatbot platform with multi-agent support, featuring Google Gemini, Groq, DeepSeek, and Google AI integration. Built with FastAPI backend and modern web interface, deployed on Vercel with comprehensive tool integration and tenant isolation capabilities. Key features include multi-agent AI support (Google Gemini, Groq, DeepSeek, Google AI), tool-aware agents with MCP (Model Context Protocol) integration, multi-tenant architecture with secure tenant isolation, real-time chat interface with markdown support, RAG (Retrieval-Augmented Generation) document system, comprehensive chat history and session management, RESTful API with FastAPI and automatic documentation, responsive web interface optimized for all devices, environment-aware deployment (local and cloud), advanced error handling and monitoring with Langfuse, serverless deployment optimized for Vercel, and security features with API key encryption and tenant separation.",
    tech: ["FastAPI", "Python", "JavaScript", "HTML/CSS", "Google Generative AI", "Groq API", "DeepSeek API", "LangChain", "MongoDB", "Vercel", "Docker", "Pydantic", "Uvicorn", "HTTPX", "Langfuse"],
    category: "AI/Machine Learning",
    year: "2025",
    status: "completed",
    image: "/images/projects/chatbot2025.png",
    github: "https://github.com/sheharzad-developer/Chatbot_Internship",
    liveDemo: "https://github.com/sheharzad-developer/Chatbot_Internship",
  },
  {
    id: 6,
    title: "Eden Avenue Management",
    shortDesc: "A full-stack property management platform for Eden Avenue with role-based access, maintenance request workflows, resident management, and real-time dashboard insights.",
    fullDesc: "Property & Maintenance Management Dashboard. A full-stack property management platform for Eden Avenue with role-based access, maintenance request workflows, resident management, and real-time dashboard insights. Built with Next.js App Router, Prisma, and PostgreSQL, featuring secure authentication, PWA support, and a modern responsive UI. Key features include role-based access for admins, managers, staff, and residents, maintenance request creation/assignment/status tracking/comments, resident/staff/property management with unit-level detail, dashboard with real-time statistics for requests/notices/residents/staff, notices/announcements system with priority/publish state/expiry, secure authentication with NextAuth and credential-based login, mobile-friendly responsive layout with sidebar navigation, and PWA features including push notifications and install prompts.",
    tech: ["Next.js (App Router)", "TypeScript", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "PNPM", "PWA", "Node.js"],
    category: "Full-Stack Web Application",
    year: "2025",
    status: "completed",
    image: "/images/projects/EdenAvenue.png",
    github: "https://edenavenuemanagement.vercel.app/auth/login",
    liveDemo: "https://edenavenuemanagement.vercel.app/auth/login",
  },
  {
    id: 7,
    title: "LSLS School Management System",
    shortDesc: "LSLS (School Management System) is a comprehensive platform designed to manage students, teachers, classes, attendance, and results efficiently. Our system combines modern technology with user-friendly interfaces to provide the best experience for educational institutions.",
    fullDesc: "Comprehensive Educational Platform. LSLS (School Management System) is a comprehensive platform designed to manage students, teachers, classes, attendance, and results efficiently. Our system combines modern technology with user-friendly interfaces to provide the best experience for educational institutions. Key features include admin dashboard with real-time statistics and quick navigation, comprehensive student management system with detailed profiles, teacher management with assignment and tracking capabilities, class management with scheduling and organization, attendance tracking system with 30-day analytics, results management and grade tracking, credential management for secure user access, parent portal for viewing student information, role-based access control (Admin, Teacher, Student, Parent), modern responsive UI with intuitive navigation, search functionality for quick access to records, and notification system for important updates.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Node.js", "RESTful API", "Responsive Design"],
    category: "Full-Stack Web Application",
    year: "2025",
    status: "completed",
    image: "/images/projects/LSLS-Management.png",
    github: "https://lslsmanagementsystemschool.netlify.app/",
    liveDemo: "https://lslsmanagementsystemschool.netlify.app/",
  },
  {
    id: 8,
    title: "Apartment Design Tool",
    shortDesc: "A comprehensive apartment design platform that allows users to create stunning floor plans, visualize designs in 3D, and bring apartment ideas to life. Features an intuitive planning tool with AI-powered auto-generation capabilities for efficient space planning and design visualization.",
    fullDesc: "Interactive Floor Plan & 3D Visualization Platform. A comprehensive apartment design platform that allows users to create stunning floor plans, visualize designs in 3D, and bring apartment ideas to life. Features an intuitive planning tool with AI-powered auto-generation capabilities for efficient space planning and design visualization. Key features include interactive floor plan editor with drag-and-drop functionality, real-time 3D visualization with walk-through views, AI-powered auto-generation of floor plans based on requirements, intuitive user interface for easy design creation, professional-grade rendering engine for realistic visualizations, export capabilities for floor plans and 3D models, collaborative design features for team projects, and mobile-responsive design for on-the-go planning.",
    tech: ["React.js", "Three.js", "WebGL", "Canvas API", "AI/ML", "3D Rendering", "Floor Plan Editor", "Real-time Visualization", "Auto Generation", "Responsive Design"],
    category: "Design Tools",
    year: "2024",
    status: "completed",
    image: "/images/projects/Apartment-Planner.png",
    github: "https://github.com/sheharzad-developer/Apartment-Planner",
    liveDemo: "https://apartment-planner-eta.vercel.app/",
  },
  {
    id: 9,
    title: "ChatSmart AI",
    shortDesc: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5. The platform features a modern, responsive design with smooth animations and interactive elements.",
    fullDesc: "Enterprise AI Document Intelligence Platform with Advanced RAG technology using Google Gemini 1.5. The platform features a modern, responsive design with smooth animations and interactive elements. Built with Python and Streamlit, the platform enables intelligent document processing, advanced RAG (Retrieval-Augmented Generation) capabilities, and seamless integration with Google Gemini 1.5 for enhanced AI-powered document intelligence. Features include document upload and processing, intelligent document parsing, conversational AI for document queries, and advanced machine learning capabilities using LangChain, FAISS, and HuggingFace models.",
    tech: ["Python", "Streamlit", "Google AI", "LangChain", "Machine Learning", "RAG", "FAISS", "HuggingFace", "Google Gemini 1.5"],
    category: "AI/ML",
    year: "2024",
    status: "completed",
    image: "/images/projects/ChatSmart-AI.png",
    github: "https://github.com/sheharzad-developer/chatsmart-ai",
  },
  {
    id: 10,
    title: "Card Click and Play",
    shortDesc: "Interactive superhero card game with dynamic gameplay and engaging user interface. The game features a modern, responsive design with smooth animations and interactive elements.",
    fullDesc: "Interactive superhero card game with dynamic gameplay and engaging user interface. The game features a modern, responsive design with smooth animations and interactive elements. An engaging interactive card game featuring superhero-themed gameplay with dynamic card interactions. The game includes smooth animations, responsive card layouts, interactive click mechanics, intuitive user interface, advanced game mechanics, and DOM manipulation for seamless interactions. Built with vanilla JavaScript for optimal performance and featuring modern CSS3 animations for a polished gaming experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game Development", "DOM Manipulation", "Responsive Design", "Game Mechanics"],
    category: "Game Development",
    year: "2024",
    status: "completed",
    image: "/images/projects/Card-and-Click_Play.png",
    liveDemo: "https://sheharzad-developer.github.io/Card-Click-and-Play/",
  },
  {
    id: 11,
    title: "FinPay - Crypto Wallet Application",
    shortDesc: "A full-stack React crypto wallet with authentication, transaction management, and real-time market data. Built with React, Tailwind CSS, and Recharts.",
    fullDesc: "A full-stack React crypto wallet with authentication, transaction management, and real-time market data. Built with React, Tailwind CSS, and Recharts. FinPay is a comprehensive cryptocurrency wallet application featuring secure authentication with email verification, multi-cryptocurrency support (Bitcoin, Ethereum, Tether), real-time balance tracking, portfolio overview with USD value conversion, and complete transaction management with full CRUD operations. The application includes interactive price charts with 7-day analytics, area charts with gradient fills, color-coded trends, real-time price updates via CoinGecko API, and a modern responsive UI with glassmorphism effects, smooth animations, and intuitive navigation. Key features include user registration with email verification using 6-digit codes, secure sign-in/sign-out with protected routes and session management, wallet management with multi-cryptocurrency support and real-time balance tracking, transaction management with create, read, update, and delete operations, transaction persistence via localStorage, market analytics with interactive price charts and real-time price updates, responsive design optimized for mobile, tablet, and desktop, and comprehensive error handling with user feedback.",
    tech: ["React 19.2.1", "React Router DOM", "Tailwind CSS", "Recharts", "CoinGecko API", "React Context API", "localStorage", "JavaScript", "Responsive Design", "Glassmorphism", "Animation"],
    category: "FinTech",
    year: "2025",
    status: "completed",
    image: "/images/projects/fintech-website.png",
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch"
        data-text="PROJECTS"
      >
        PROJECTS
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
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
              glareColor="#b01121"
            >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(project)}
                    className="bg-gray-900 bg-opacity-50 border-2 border-red-600 overflow-hidden relative cursor-pointer crt-overlay"
                    style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.2)' }}
                  >
                {/* Classified Header */}
                <div className="border-b-2 border-red-600 bg-black bg-opacity-50 p-3">
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20"></div>
                      <span className="text-gray-500 text-xs font-mono relative z-10">[CLASSIFIED IMAGE]</span>
                    </>
                  )}
                </div>
                
                <div className="p-4 bg-black bg-opacity-30">
                  <h3 className="text-red-500 font-bold text-lg mb-2 glitch font-mono" data-text={project.title}>
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xs leading-relaxed font-mono">
                    {project.shortDesc}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-red-500 font-mono text-xs mb-2">[TECH STACK]</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map(tech => (
                        <span 
                          key={tech} 
                          className="bg-red-600 bg-opacity-30 border border-red-500 text-red-300 px-2 py-0.5 rounded font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-red-600 bg-opacity-30 border border-red-500 text-red-300 px-2 py-0.5 rounded font-mono text-xs">
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
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border-2 border-red-600 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                style={{ boxShadow: '0 0 30px rgba(176, 17, 33, 0.5)' }}
              >
                {/* Modal Header */}
                <div className="border-b-2 border-red-600 bg-black bg-opacity-50 p-4 sticky top-0 z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-red-500 font-mono text-xs tracking-wider">CASE FILE</span>
                        <span className="text-red-500 font-mono text-xs">#{String(selectedProject.id).padStart(3, '0')}</span>
                        {selectedProject.category && (
                          <span className="text-gray-400 font-mono text-xs">[{selectedProject.category}]</span>
                        )}
                        {selectedProject.year && (
                          <span className="text-gray-400 font-mono text-xs">YEAR: {selectedProject.year}</span>
                        )}
                        {selectedProject.status && (
                          <span className="text-green-400 font-mono text-xs">STATUS: {selectedProject.status.toUpperCase()}</span>
                        )}
                      </div>
                      <h3 className="text-red-500 font-bold text-2xl glitch font-mono" data-text={selectedProject.title}>
                        {selectedProject.title.toUpperCase()}
                      </h3>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className="text-red-500 hover:text-red-400 font-mono text-2xl w-8 h-8 flex items-center justify-center border border-red-600 hover:border-red-400 transition-colors flex-shrink-0"
                      style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.3)' }}
                    >
                      ×
                    </motion.button>
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

                  {/* Action Buttons */}
                  <div className={`flex gap-4 ${selectedProject.github ? '' : 'justify-center'}`}>
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(176, 17, 33, 0.8)' }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 text-center bg-red-600 hover:bg-red-700 border border-red-500 text-white px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all"
                        style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.5)' }}
                      >
                        GITHUB
                      </motion.a>
                    )}
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(176, 17, 33, 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`${selectedProject.github ? 'flex-1' : 'flex-1 max-w-xs'} text-center bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 font-mono font-semibold tracking-wider uppercase transition-all`}
                      style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.3)' }}
                    >
                      LIVE DEMO
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
