'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaCalendar,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Backend integration coming soon)");
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 text-white overflow-hidden relative z-10 min-h-screen"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch text-center"
        data-text="CONTACT"
      >
        CONTACT
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 relative"
          style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
        >
          {/* Classified Header */}
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm">SUBJECT ID: S-011</span>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              COMMUNICATION PROTOCOL
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl md:text-4xl font-stranger text-red-500 mb-4 glitch font-mono" data-text="LET'S BUILD SOMETHING AMAZING">
            LET'S BUILD SOMETHING AMAZING
          </h3>
          
          {/* Intro Text */}
          <p className="text-gray-400 text-sm leading-relaxed font-mono mb-8">
            Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences. Let's chat about your project!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            {/* WhatsApp Chat Button */}
            <motion.a
              href="https://wa.me/923160144176"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-4 bg-gray-800 border-2 border-green-500 hover:border-green-400 transition-all font-mono"
              style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}
            >
              <FaWhatsapp className="text-green-400 text-2xl" />
              <div className="flex-1">
                <div className="text-green-400 font-bold text-lg">WHATSAPP CHAT</div>
                <div className="text-green-500 text-xs">Get instant responses</div>
              </div>
            </motion.a>

            {/* Book a Coffee Chat Button */}
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-4 bg-gray-800 border-2 border-purple-500 hover:border-purple-400 transition-all font-mono"
              style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' }}
            >
              <FaCalendar className="text-purple-400 text-2xl" />
              <div className="flex-1">
                <div className="text-purple-400 font-bold text-lg">BOOK A COFFEE CHAT</div>
                <div className="text-purple-500 text-xs">30-minute discovery call</div>
              </div>
              <span className="text-2xl">☕</span>
            </motion.a>
          </div>

          {/* Other ways to reach me */}
          <div className="mb-8">
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

          {/* Connect with me */}
          <div>
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[CONNECT WITH ME]</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' }}
                className="w-12 h-12 bg-gray-800 border-2 border-blue-500 rounded-lg flex items-center justify-center text-blue-400 hover:border-blue-400 transition"
                style={{ boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)' }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/sheharzad-developer"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(176, 17, 33, 0.5)' }}
                className="w-12 h-12 bg-gray-800 border-2 border-red-600 rounded-lg flex items-center justify-center text-red-400 hover:border-red-500 transition"
                style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.3)' }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 relative"
          style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
        >
          {/* Classified Header */}
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm">SUBJECT ID: S-011</span>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              MESSAGE TRANSMISSION FORM
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-stranger text-red-500 mb-8 glitch font-mono" data-text="LET'S WORK TOGETHER">
            LET'S WORK TOGETHER
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Field */}
            <div>
              <label className="block text-red-500 font-mono text-xs mb-2 tracking-wider">[NAME]</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-red-600 p-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition font-mono text-sm"
                style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.2)' }}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-red-500 font-mono text-xs mb-2 tracking-wider">[EMAIL]</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-red-600 p-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition font-mono text-sm"
                style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.2)' }}
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-red-500 font-mono text-xs mb-2 tracking-wider">[SUBJECT]</label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry, collaboration, or general message"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-red-600 p-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition font-mono text-sm"
                style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.2)' }}
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-red-500 font-mono text-xs mb-2 tracking-wider">[MESSAGE]</label>
              <textarea
                name="message"
                placeholder="Tell me about your project, collaboration idea, or any questions you have..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full bg-gray-800 border border-red-600 p-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition resize-none font-mono text-sm"
                style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.2)' }}
              />
            </div>

            {/* Send Message Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(176, 17, 33, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 border-2 border-red-500 text-white font-bold py-3 px-6 transition-all mt-4 font-mono tracking-wider uppercase"
              style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.5)' }}
            >
              <FaPaperPlane className="text-white" />
              <span>SEND MESSAGE</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;