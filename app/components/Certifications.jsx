'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const certifications = [
  {
    id: 1,
    title: "Python Certification",
    issuer: "Certification Authority",
    date: "2024",
    description: "Python programming certification demonstrating proficiency in Python development.",
    image: "/certifications/Python-Certificate.png",
    credentialId: "CERT-001",
    category: "Programming",
  },
  {
    id: 2,
    title: "Certification One",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Professional certification in relevant field.",
    image: "/certifications/one.jpg",
    credentialId: "CERT-002",
    category: "Professional",
  },
  {
    id: 3,
    title: "Certification Two",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Professional certification in relevant field.",
    image: "/certifications/two.jpg",
    credentialId: "CERT-003",
    category: "Professional",
  },
  {
    id: 4,
    title: "Certification Three",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Professional certification in relevant field.",
    image: "/certifications/three.jpg",
    credentialId: "CERT-004",
    category: "Professional",
  },
  {
    id: 5,
    title: "Certification Four",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Professional certification in relevant field.",
    image: "/certifications/four.jpg",
    credentialId: "CERT-005",
    category: "Professional",
  },
  {
    id: 6,
    title: "Certification Five",
    issuer: "Issuing Organization",
    date: "2024",
    description: "Professional certification in relevant field.",
    image: "/certifications/five.jpg",
    credentialId: "CERT-006",
    category: "Professional",
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-stranger text-red-600 mb-12 glitch"
        data-text="CERTIFICATIONS"
      >
        CERTIFICATIONS
      </motion.h2>

      {certifications.length === 0 ? (
        <motion.div
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
        </motion.div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {certifications.map((cert, index) => (
            <motion.div
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(cert)}
                  className="bg-gray-900 bg-opacity-50 border-2 border-red-600 overflow-hidden relative cursor-pointer"
                  style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.2)' }}
                >
                  {/* Classified Header */}
                  <div className="border-b-2 border-red-600 bg-black bg-opacity-50 p-3">
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
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900 opacity-20"></div>
                        <span className="text-gray-500 text-xs font-mono relative z-10">[CERTIFICATE IMAGE]</span>
                      </>
                    )}
                  </div>
                  
                  <div className="p-4 bg-black bg-opacity-30">
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
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
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
                  {/* Certificate Image */}
                  {selectedCert.image && (
                    <div className="mb-6">
                      <img 
                        src={selectedCert.image} 
                        alt={selectedCert.title}
                        className="w-full h-auto border-2 border-red-600"
                        style={{ boxShadow: '0 0 15px rgba(176, 17, 33, 0.3)' }}
                      />
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
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

