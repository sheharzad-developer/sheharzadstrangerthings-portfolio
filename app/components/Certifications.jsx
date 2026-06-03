'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const certifications = [
  {
    id: 1,
    title: "Python Programming Fundamentals",
    issuer: "Microsoft (via Coursera)",
    date: "2023",
    description:
      "Microsoft's Python Programming Fundamentals course, completed through Coursera — covering core Python syntax, data structures, and programming logic.",
    image: "/certifications/Python-Certificate.png",
    category: "Programming",
  },
  {
    id: 2,
    title: "Front-End Web Development with React",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    description:
      "Building rich, interactive single-page applications with React — component architecture, state management, and routing.",
    image: "/certifications/two.jpg",
    credentialId: "KD539HCFEYW7",
    verifyUrl: "https://coursera.org/verify/KD539HCFEYW7",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Server-side Development with NodeJS, Express & MongoDB",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    description:
      "Backend development with Node.js, Express, and MongoDB — designing REST APIs and persistence layers.",
    image: "/certifications/four.jpg",
    credentialId: "V55RG4V75GAG",
    verifyUrl: "https://coursera.org/verify/V55RG4V75GAG",
    category: "Backend",
  },
  {
    id: 4,
    title: "Front-End Web UI Frameworks & Tools: Bootstrap 4",
    issuer: "Hong Kong University of Science & Technology (via Coursera)",
    date: "2021",
    description:
      "Responsive, mobile-first UI development with Bootstrap 4 — grids, components, and front-end tooling.",
    image: "/certifications/three.jpg",
    credentialId: "RH5LV6MLCXS5",
    verifyUrl: "https://coursera.org/verify/RH5LV6MLCXS5",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Introduction to Front-End Development with ReactJS",
    issuer: "Coursera Project Network",
    date: "2021",
    description:
      "Hands-on, project-based introduction to building front-end interfaces with ReactJS.",
    image: "/certifications/one.jpg",
    credentialId: "G6S5BEMQDEHM",
    verifyUrl: "https://coursera.org/verify/G6S5BEMQDEHM",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Namaste JavaScript",
    issuer: "NamasteDev.com",
    date: "2024",
    description:
      "Deep-dive into JavaScript internals — closures, the event loop, hoisting, and asynchronous execution.",
    image: "/certifications/five.jpg",
    credentialId: "94OZIS",
    category: "Programming",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="min-h-screen px-6 py-20 flex flex-col items-center relative z-10">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch"
        data-text="CERTIFICATIONS"
      >
        CERTIFICATIONS
      </m.h2>

      {certifications.length === 0 ? (
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-8 max-w-2xl w-full"
          style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
        >
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</span>
              <span className="text-red-500 font-mono text-sm">SUBJECT ID: S-011</span>
            </div>
            <div className="text-gray-400 font-mono text-xs">
              CERTIFICATION ARCHIVE
            </div>
          </div>
          <p className="text-gray-400 font-mono text-center">
            [NO CERTIFICATIONS FOUND] Add your certifications to display them here.
          </p>
        </m.div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {certifications.map((cert, index) => (
            <m.div
              key={cert.id}
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
                <m.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(cert)}
                  className="bg-gray-900 bg-opacity-50 border-2 border-red-600 overflow-hidden relative cursor-pointer"
                  style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.2)' }}
                >
                  {/* Classified Header */}
                  <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-red-500 font-mono text-xs tracking-wider">CERTIFICATE</span>
                      <span className="text-red-500 font-mono text-xs">#{String(cert.id).padStart(3, '0')}</span>
                    </div>
                    <div className="text-gray-400 font-mono text-xs">
                      CLASSIFIED DOCUMENT
                    </div>
                  </div>

                  {/* Image area */}
                  <div className="w-full h-48 bg-gray-800 border-b-2 border-red-600 flex items-center justify-center relative overflow-hidden">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : cert.pdf ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20"></div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <span className="text-red-500 font-mono text-4xl">PDF</span>
                          <span className="text-gray-400 text-xs font-mono">[CERTIFICATE DOCUMENT]</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20"></div>
                        <span className="text-gray-500 text-xs font-mono relative z-10">[CERTIFICATE IMAGE]</span>
                      </>
                    )}
                  </div>
                  
                  <div className="p-4 bg-zinc-950 bg-opacity-30">
                    <h3 className="text-red-500 font-bold text-lg mb-2 glitch font-mono" data-text={cert.title}>
                      {cert.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-400 mb-2 text-xs font-mono">
                      <span className="text-red-400">[ISSUER]</span> {cert.issuer}
                    </p>
                    <p className="text-gray-400 mb-4 text-xs font-mono">
                      <span className="text-red-400">[DATE]</span> {cert.date}
                    </p>

                    <div className="inline-block w-full text-center bg-red-600 hover:bg-red-700 border border-red-500 text-white px-4 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                      style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                    >
                      VIEW CERTIFICATE &gt;
                    </div>
                  </div>
                </m.div>
              </Tilt>
            </m.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
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
                <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 p-4 sticky top-0 z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-red-500 font-mono text-xs tracking-wider">CERTIFICATE</span>
                        <span className="text-red-500 font-mono text-xs">#{String(selectedCert.id).padStart(3, '0')}</span>
                        {selectedCert.credentialId && (
                          <span className="text-gray-400 font-mono text-xs">ID: {selectedCert.credentialId}</span>
                        )}
                        {selectedCert.category && (
                          <span className="text-gray-400 font-mono text-xs">[{selectedCert.category}]</span>
                        )}
                      </div>
                      <h3 className="text-red-500 font-bold text-2xl glitch font-mono" data-text={selectedCert.title}>
                        {selectedCert.title.toUpperCase()}
                      </h3>
                    </div>
                    <m.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className="text-red-500 hover:text-red-400 font-mono text-2xl size-8 flex items-center justify-center border border-red-600 hover:border-red-400 transition-colors flex-shrink-0"
                      style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.3)' }}
                    >
                      ×
                    </m.button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  {/* Certificate Image */}
                  {selectedCert.image && (
                    <div className="mb-6">
                      <Image
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        width={1200}
                        height={900}
                        className="w-full h-auto border-2 border-red-600"
                        style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.3)' }}
                      />
                    </div>
                  )}

                  {/* Certificate PDF */}
                  {selectedCert.pdf && (
                    <div className="mb-6">
                      <iframe
                        src={selectedCert.pdf}
                        title={selectedCert.title}
                        sandbox="allow-scripts"
                        className="w-full h-[70vh] border-2 border-red-600 bg-white"
                        style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.3)' }}
                      />
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-red-600 hover:bg-red-700 border border-red-500 text-white px-4 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                        style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                      >
                        OPEN PDF IN NEW TAB &gt;
                      </a>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="text-red-500 font-mono text-sm mb-2">[CERTIFICATE DETAILS]</div>
                    <div className="space-y-2 text-gray-300 font-mono text-sm">
                      <p>
                        <span className="text-red-400">Issuer:</span> {selectedCert.issuer}
                      </p>
                      <p>
                        <span className="text-red-400">Date:</span> {selectedCert.date}
                      </p>
                      {selectedCert.credentialId && (
                        <p>
                          <span className="text-red-400">Credential ID:</span> {selectedCert.credentialId}
                        </p>
                      )}
                      {selectedCert.category && (
                        <p>
                          <span className="text-red-400">Category:</span> {selectedCert.category}
                        </p>
                      )}
                    </div>
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-red-600 hover:bg-red-700 border border-red-500 text-white px-4 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                        style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                      >
                        VERIFY CREDENTIAL &gt;
                      </a>
                    )}
                  </div>

                  {selectedCert.description && (
                    <div className="mb-6">
                      <div className="text-red-500 font-mono text-sm mb-2">[DESCRIPTION]</div>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  )}
                </div>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

