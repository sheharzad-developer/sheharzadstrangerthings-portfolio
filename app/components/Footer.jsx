'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sheharzad-developer/",
      icon: <FaGithub className="text-xl" />,
      color: "text-gray-300 hover:text-white",
      borderColor: "border-gray-600 hover:border-gray-400",
    },
    {
      name: "Twitter",
      url: "https://x.com/sheharzad_sala1",
      icon: <FaTwitter className="text-xl" />,
      color: "text-blue-400 hover:text-blue-300",
      borderColor: "border-blue-600 hover:border-blue-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/",
      icon: <FaLinkedin className="text-xl" />,
      color: "text-blue-500 hover:text-blue-400",
      borderColor: "border-blue-600 hover:border-blue-500",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCTYt7upl1YwBwdxGb8lmQwg",
      icon: <FaYoutube className="text-xl" />,
      color: "text-red-500 hover:text-red-400",
      borderColor: "border-red-600 hover:border-red-500",
    },
  ];

  return (
    <footer className="relative w-full py-12 px-6 border-t-2 border-red-600 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Classified Header */}
        <div className="border-b-2 border-red-600 pb-4 mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
            <span className="text-red-500 font-mono text-sm">SUBJECT ID: S-011</span>
          </div>
          <div className="text-gray-400 font-mono text-xs">
            COMMUNICATION CHANNELS
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-red-500 font-mono text-sm mb-4 tracking-wider">[CONNECT WITH ME]</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(176, 17, 33, 0.5)' }}
                  className={`w-12 h-12 bg-gray-800 border-2 ${social.borderColor} rounded-lg flex items-center justify-center ${social.color} transition-all`}
                  style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.2)' }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-gray-400 font-mono text-sm mb-2">
              © {currentYear} SHEHARZAD SALAHUDDIN
            </p>
            <p className="text-gray-500 font-mono text-xs">
              [STATUS: ACTIVE] | [CLEARANCE: LEVEL 3]
            </p>
            <p className="text-gray-500 font-mono text-xs mt-1">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-red-600 border-opacity-30">
          <div className="text-gray-500 font-mono text-xs text-center">
            [CLASSIFIED PORTFOLIO] | [BUILT WITH NEXT.JS & REACT] | [STRANGER THINGS THEME]
          </div>
        </div>
      </div>
    </footer>
  );
}

