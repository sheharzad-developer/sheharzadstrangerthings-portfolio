import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume | Sheharzad Salahuddin',
  description: 'Profile, core skills, and selected projects for Sheharzad Salahuddin, Full-Stack Developer.',
};

const coreSkills = [
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'REST APIs',
  'Performance Optimization',
  'UI/UX Implementation',
];

const selectedProjects = [
  {
    title: 'Eden Avenue Management',
    year: '2025',
    summary:
      'Full-stack property management platform with role-based access, maintenance workflows, and real-time dashboards.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    link: 'https://edenavenuemanagement.vercel.app/auth/login',
  },
  {
    title: 'AI Chatbot Platform',
    year: '2025',
    summary:
      'Multi-agent chatbot platform with tool-aware agents, RAG system, and tenant isolation.',
    tech: ['FastAPI', 'Python', 'LangChain', 'MongoDB', 'Vercel'],
    link: 'https://github.com/sheharzad-developer/Chatbot_Internship',
  },
  {
    title: 'Dental Syndicate',
    year: '2025',
    summary:
      'Family dental care site with booking system, SMS/WhatsApp notifications, and glassmorphism UI.',
    tech: ['Flask', 'JavaScript', 'NuxtJS', 'CSS3'],
    link: 'https://dental-syndicate.vercel.app/',
  },
];

const certifications = [
  {
    title: 'Python Certification',
    issuer: 'Certification Authority',
    year: '2024',
  },
];

export default function ResumePage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <div className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</div>
            <h1
              className="text-4xl md:text-5xl font-stranger text-red-600 mt-2 glitch"
              data-text="RESUME"
            >
              RESUME
            </h1>
            <p className="text-gray-400 font-mono text-sm mt-3 max-w-2xl">
              Detailed profile, skills, and selected project experience.
            </p>
          </div>
          <Link
            href="/"
            className="text-xs font-mono text-red-400 border border-red-500 px-3 py-2 hover:bg-red-600 hover:text-white transition-colors h-fit"
            style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.4)' }}
          >
            BACK TO HOME
          </Link>
        </div>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
            <div className="border-b-2 border-red-600 pb-4 mb-6">
              <div className="text-red-500 font-mono text-sm tracking-wider">PROFILE</div>
              <div className="text-gray-400 font-mono text-xs mt-1">SUMMARY</div>
            </div>
            <h2 className="text-red-500 font-mono text-2xl mb-4">SHEHARZAD SALAHUDDIN</h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Full-stack developer focused on building fast, intuitive, and seamless user
              experiences with modern JavaScript frameworks. Experienced in crafting
              pixel-perfect interfaces, integrating APIs, and optimizing performance for
              production-ready applications.
            </p>
          </div>

          <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
            <div className="border-b-2 border-red-600 pb-4 mb-6">
              <div className="text-red-500 font-mono text-sm tracking-wider">CONTACT</div>
              <div className="text-gray-400 font-mono text-xs mt-1">DIRECT DETAILS</div>
            </div>
            <div className="space-y-3 text-gray-300 font-mono text-sm">
              <div>PHONE: <a className="text-red-400 hover:text-red-300" href="tel:+923160144176">+92 316 0144176</a></div>
              <div>EMAIL: <a className="text-red-400 hover:text-red-300" href="mailto:sheharzad.salahuddin9000@outlook.com">sheharzad.salahuddin9000@outlook.com</a></div>
              <div>LOCATION: Lahore, Pakistan</div>
              <div>GITHUB: <a className="text-red-400 hover:text-red-300" href="https://github.com/sheharzad-developer" target="_blank" rel="noopener noreferrer">github.com/sheharzad-developer</a></div>
              <div>LINKEDIN: <a className="text-red-400 hover:text-red-300" href="https://www.linkedin.com/in/sheharzad-salahuddin-frontend-developer/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sheharzad-salahuddin-frontend-developer</a></div>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="text-red-500 font-mono text-sm tracking-wider">CORE SKILLS</div>
            <div className="text-gray-400 font-mono text-xs mt-1">TECH STACK</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="bg-red-600 bg-opacity-30 border border-red-500 text-red-300 px-3 py-1 rounded font-mono text-xs"
                style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.3)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="text-red-500 font-mono text-sm tracking-wider">SELECTED PROJECTS</div>
            <div className="text-gray-400 font-mono text-xs mt-1">HIGHLIGHTS</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <div key={project.title} className="border border-red-600/40 p-4 bg-black/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-red-500 font-mono text-lg">{project.title}</h3>
                  <span className="text-gray-500 font-mono text-xs">{project.year}</span>
                </div>
                <p className="text-gray-400 font-mono text-sm mb-3">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 border-gray-600 text-gray-300 border px-2 py-0.5 rounded font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-red-400 border border-red-500 px-3 py-1 hover:bg-red-600 hover:text-white transition-colors inline-block"
                  style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.4)' }}
                >
                  VIEW PROJECT
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="text-red-500 font-mono text-sm tracking-wider">CERTIFICATIONS</div>
            <div className="text-gray-400 font-mono text-xs mt-1">CREDENTIALS</div>
          </div>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center justify-between border border-red-600/40 p-3 bg-black/30">
                <div className="text-gray-300 font-mono text-sm">
                  {cert.title} <span className="text-gray-500">— {cert.issuer}</span>
                </div>
                <span className="text-gray-500 font-mono text-xs">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
