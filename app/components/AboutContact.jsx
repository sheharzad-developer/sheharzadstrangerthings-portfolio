'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import { FaCalendar, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiLeetcode } from 'react-icons/si';

export default function AboutContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="about" className="min-h-screen text-gray-300 px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-stranger text-red-600 mb-8 glitch"
        data-text="ABOUT ME"
      >
        ABOUT ME
      </m.h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full">
        {/* About Card */}
        <m.div
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
            {/* Lead summary — first person, plain language, real facts only */}
            <p className="mt-2 ml-4 text-gray-400">
              I&apos;m a Front-End Developer at NETSOL Technologies, where I&apos;ve worked
              since 2015 — I joined through a disability-inclusion program as someone who is
              hard of hearing. I started in design and marketing, taught myself to code, and
              grew into a Software Engineer role building responsive apps with React, Vue, and
              Nuxt. I completed my Computer Science degree in 2026 while working full-time, and
              I&apos;ve shipped 15+ personal projects across full-stack and AI.
            </p>

            <div>
              <span className="text-red-500">[EXPERIENCE]</span>
              <p className="mt-2 ml-4 text-gray-400">
                I&apos;ve been with NETSOL Technologies since 2015, starting in design and
                marketing before teaching myself to code and transitioning into development —
                a 2023 internship, then my current Software Engineer / Front-End Developer
                role in 2024 building responsive apps in React, Vue, and Nuxt. Alongside my
                job, I&apos;ve shipped 15+ projects of my own across AI, FinTech, and
                healthcare — several live in production.
              </p>
            </div>

            <div>
              <span className="text-red-500">[WHAT I BUILD]</span>
              <p className="mt-2 ml-4 text-gray-400">
                On the frontend I work across React, Next.js, Vue, and Nuxt with
                TypeScript and Tailwind; on the backend I reach into Node.js and
                Python (Flask, FastAPI) with PostgreSQL, Prisma, and Supabase. I
                integrate LLMs — Gemini, Groq, LangChain, and RAG pipelines —
                into real products, and I focus on performance, clean
                architecture, and interfaces that get out of the user&apos;s way.
              </p>
            </div>

            <div>
              <span className="text-red-500">[SELECTED IMPACT]</span>
              <p className="mt-2 ml-4 text-gray-400">
                At NETSOL I build responsive apps in React, Vue, and Nuxt from Figma
                handoff through deployment. My Vue.js features increased user
                engagement ~20% and conversions ~15%, and the GitHub Actions CI/CD
                pipeline I set up cut deployment time ~20%.
              </p>
            </div>

            <div>
              <span className="text-red-500">[HOW I WORK]</span>
              <p className="mt-2 ml-4 text-gray-400">
                I believe great software should feel invisible — fast, intuitive,
                and reliable. I value clean code, continuous learning, and
                shipping work that actually reaches users.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-red-600 border-opacity-30">
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="text-red-500">ROLE: <span className="text-green-400">SOFTWARE ENGINEER @ NETSOL</span></span>
                <span className="text-red-500">FOCUS: <span className="text-blue-400">FRONTEND · FULL-STACK · AI</span></span>
                <span className="text-red-500">BASED IN: <span className="text-yellow-400">LAHORE, PK</span></span>
              </div>
            </div>
          </div>
        </m.div>

        {/* Contact Card */}
        <m.div
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
            LET&apos;S BUILD SOMETHING AMAZING
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-mono mb-8">
            Ready to turn your ideas into reality? I&apos;m here to help you create exceptional digital experiences. Let&apos;s chat about your project!
          </p>

          <div className="text-purple-300 font-mono text-xs tracking-wider mb-4">
            LET&apos;S HAVE A COFFEE
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
              href="https://calendly.com/sheharzad-salahuddin9000/new-meeting"
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

          <div className="mt-8 pt-6 border-t border-red-600 border-opacity-30">
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[SEND A TRANSMISSION]</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border-2 border-red-600 border-opacity-50 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-red-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border-2 border-red-600 border-opacity-50 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-red-400 transition"
              />

              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 bg-gray-800 border-2 border-red-600 border-opacity-50 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-red-400 transition resize-none"
              />

              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="p-3 bg-gray-800 border-2 border-red-600 text-red-400 font-bold tracking-wider hover:border-red-400 hover:text-red-300 transition disabled:opacity-50"
                style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.3)' }}
              >
                SEND MESSAGE
              </button>

              {status && (
                <p
                  className={`text-xs tracking-wider ${
                    status === 'Message sent successfully!'
                      ? 'text-green-400'
                      : status === 'Failed to send message.'
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="mt-8">
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[CONNECT WITH ME]</h4>
            <div className="flex gap-4">
              <a
                href="https://www.upwork.com/freelancers/~01264a0282005eca30"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 bg-gray-800 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-400 hover:border-green-400 transition"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}
                aria-label="Upwork"
              >
                <SiUpwork className="text-xl" />
              </a>
              <a
                href="https://www.fiverr.com/sellers/sheharzad_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 bg-gray-800 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-400 hover:border-green-400 transition"
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}
                aria-label="Fiverr"
              >
                <SiFiverr className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 bg-gray-800 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-400 hover:border-blue-400 transition"
                style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/sheharzad-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 bg-gray-800 border-2 border-red-600 rounded-lg flex items-center justify-center text-red-400 hover:border-red-500 transition"
                style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.3)' }}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://leetcode.com/u/sheharzad-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 bg-gray-800 border-2 border-yellow-500 rounded-lg flex items-center justify-center text-yellow-400 hover:border-yellow-400 transition"
                style={{ boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)' }}
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-xl" />
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
