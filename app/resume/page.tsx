import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Résumé';
const DESCRIPTION =
  'Resume of Sheharzad Salahuddin — Senior Full Stack Developer at NETSOL Technologies. Experience, skills, projects, and education.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: `${TITLE} | Sheharzad Salahuddin`,
    description: DESCRIPTION,
    url: '/resume',
    siteName: 'Sheharzad Salahuddin',
    locale: 'en_US',
    type: 'website',
    // Re-reference the shared generated OG image. A child openGraph object
    // replaces the parent's, so the file-convention image (app/opengraph-image.tsx,
    // served at /opengraph-image) must be pointed to explicitly here.
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const PDF_URL = '/resume/Sheharzad-Resume.pdf';

const experience = [
  {
    company: 'NETSOL Technologies',
    title: 'Senior Full Stack Developer',
    location: 'Lahore, Pakistan',
    dates: 'Jan 2019 – Present',
    bullets: [
      'Led full-stack development of enterprise web applications from Figma handoff to deployment using React, Vue.js, Nuxt.js, FastAPI, and Node.js, with secure PostgreSQL backend services and JWT/OAuth.',
      "Reduced development time ~25% during NETSOL's corporate website rebuild by migrating to Nuxt.js with server-side rendering and a reusable component architecture.",
      'Cut deployment time 67% (~45 to ~15 minutes) by designing CI/CD pipelines with GitHub Actions, Docker, and Vercel, eliminating manual release steps.',
      'Improved frontend performance via optimized state management, code splitting, lazy loading, and data caching; delivered a Malaysia-based clinic management system within a distributed team.',
    ],
  },
  {
    company: 'NETSOL Technologies',
    title: 'Software Engineer / Front-End Developer',
    location: 'Lahore, Pakistan',
    dates: 'Jun 2016 – Dec 2018',
    bullets: [
      'Implemented JWT/OAuth authentication, role-based access control, and REST API integrations across enterprise applications; built reusable Vue.js components that reduced duplicated code.',
      'Developed backend APIs with FastAPI, Flask, and Node.js, delivering secure Stripe payment workflows for end-to-end full-stack features.',
    ],
  },
  {
    company: 'NETSOL Technologies',
    title: 'Internship Trainee',
    location: 'Lahore, Pakistan',
    dates: 'Oct 2015 – May 2016',
    bullets: [
      "Joined through NETSOL's disability-inclusion hiring program; transitioned from a design and marketing internship into a decade-long engineering career while completing a CS degree in parallel.",
    ],
  },
];

const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'SQL', 'HTML / CSS'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Tailwind CSS', 'React Native'] },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'FastAPI', 'Flask', 'REST', 'JWT / OAuth', 'Stripe', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    label: 'AI & DevOps',
    items: ['LLM APIs', 'RAG Pipelines', 'LangChain', 'pgvector', 'Docker', 'Kubernetes', 'GitHub Actions (CI/CD)', 'Vercel'],
  },
];

const selectedProjects = [
  {
    title: 'AI Chatbot Platform',
    year: 'Jul – Sep 2025',
    summary:
      'Multi-agent, tool-aware chatbot platform letting enterprises query internal knowledge bases conversationally, with multi-tenant isolation and a RAG pipeline — document chunking, pgvector embeddings, and semantic search — grounding LLM responses in source documents to reduce hallucinations.',
    tech: ['FastAPI', 'PostgreSQL (pgvector)', 'LangChain', 'LLM APIs'],
    link: 'https://github.com/sheharzad-developer/Chatbot_Internship',
  },
  {
    title: 'AuraAi — AI Wellness Companion',
    year: 'Jan – Apr 2026',
    summary:
      'Production AI wellness companion with real-time streaming conversations via the Google Gemini API, secure authentication, persistent history, and end-to-end Stripe subscription billing (plan management, payment webhooks, gated premium features).',
    tech: ['Next.js 16', 'Google Gemini', 'Supabase', 'Stripe'],
    link: 'https://ai-mental-health-chat-app.vercel.app/',
  },
  {
    title: 'Live Gold & Silver Prices',
    year: 'Nov 2025 – Jan 2026',
    summary:
      'Production web app delivering live gold and silver prices across six international markets with full Arabic RTL localization, Incremental Static Regeneration for near real-time updates at static-site speed, and Sanity CMS for non-technical content editing.',
    tech: ['Next.js 16', 'Sanity CMS', 'ISR', 'i18n / RTL'],
    link: 'https://www.thegoldprice.gold/',
  },
  {
    title: 'Eden Avenue Management',
    year: 'May – Jun 2025',
    summary:
      'Full-stack property-management platform digitizing tenant–landlord workflows, with role-based access control, maintenance request tracking, and offline-capable PWA support for field staff.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'PWA'],
    link: 'https://edenavenue.vercel.app/',
  },
];

const education = [
  {
    school: 'Virtual University of Pakistan',
    credential: 'BSc in Computer Science',
    dates: '2021 – 2026',
    note: 'Full-time, alongside full-time work at NETSOL. Coursework in DSA, OOP, Java, and C++. Final-year project: a full-stack English language-learning platform.',
  },
  {
    school: 'Virtual University of Pakistan',
    credential: 'Associate Degree in Computer Science',
    dates: '2018 – 2021',
    note: 'Part-time foundation in computer science fundamentals.',
  },
  {
    school: 'Code Ninja Inc',
    credential: 'Full-Stack Development Bootcamp (MERN)',
    dates: '2023',
    note: '4-person team project (hotel booking & tourism); owned the Stripe payment integration.',
  },
];

const certifications = [
  { title: 'AI Engineering Program (LLM integration, RAG & agent workflows)', issuer: 'NETSOL Technologies', year: '2026' },
  { title: 'Python Programming Fundamentals', issuer: 'Microsoft (Coursera)', year: '2025' },
  { title: 'Front-End Web Development with React', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Server-side Development with Node, Express & MongoDB', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Front-End Web UI Frameworks & Tools: Bootstrap 4', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Introduction to Front-End Development with ReactJS', issuer: 'Coursera Project Network', year: '2021' },
  { title: 'Namaste JavaScript', issuer: 'NamasteDev.com', year: '2024' },
  { title: 'Namaste DSA', issuer: 'NamasteDev.com', year: '2026' },
];

export default function ResumePage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</div>
            <h1
              className="text-4xl md:text-5xl font-stranger text-red-600 mt-2 glitch"
              data-text="RESUME"
            >
              RESUME
            </h1>
            <p className="text-gray-400 font-mono text-sm mt-3 max-w-2xl">
              Senior Full Stack Developer · NETSOL Technologies · Lahore, PK
            </p>
          </div>
          <div className="flex gap-3">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" download className="btn btn-primary btn-sm">
              DOWNLOAD PDF
            </a>
            <Link href="/#home" className="btn btn-outline btn-sm">
              BACK TO HOME
            </Link>
          </div>
        </div>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
            <div className="border-b-2 border-red-600 pb-4 mb-6">
              <div className="text-red-500 font-mono text-sm tracking-wider">PROFILE</div>
              <div className="text-gray-400 font-mono text-xs mt-1">SUMMARY</div>
            </div>
            <h2 className="text-red-500 font-mono text-2xl mb-4">SHEHARZAD SALAHUDDIN</h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Senior Full Stack Developer at NETSOL Technologies, promoted twice across a
              10-year tenure — intern &rarr; Software Engineer &rarr; Senior Full Stack Developer.
              I joined in 2015 through a disability-inclusion program as someone who is hard of
              hearing, started in design and marketing, taught myself to code, and now lead
              enterprise web apps end to end with React, Vue, Nuxt, FastAPI, and Node.js — backed
              by PostgreSQL, JWT/OAuth, and GitHub Actions CI/CD. I completed my BSc in Computer
              Science in 2026 while working full-time, and I build with LLMs, RAG pipelines, and
              LangChain across AI, FinTech, and healthcare.
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
            <div className="text-red-500 font-mono text-sm tracking-wider">EXPERIENCE</div>
            <div className="text-gray-400 font-mono text-xs mt-1">PROFESSIONAL HISTORY</div>
          </div>
          <div className="space-y-8">
            {experience.map((role) => (
              <div key={role.title} className="border border-red-600/40 p-4 bg-black/30">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-red-500 font-mono text-lg">{role.title}</h3>
                  <span className="text-gray-500 font-mono text-xs">{role.dates}</span>
                </div>
                <div className="text-gray-300 font-mono text-sm mb-3">
                  {role.company} <span className="text-gray-500">— {role.location}</span>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-gray-400 font-mono text-sm">
                      <span className="text-red-500 flex-shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
          <div className="border-b-2 border-red-600 pb-4 mb-6">
            <div className="text-red-500 font-mono text-sm tracking-wider">CORE SKILLS</div>
            <div className="text-gray-400 font-mono text-xs mt-1">TECH STACK</div>
          </div>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="text-red-400 font-mono text-xs tracking-wider mb-2">{group.label.toUpperCase()}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-red-600 bg-opacity-30 border border-red-500 text-white px-3.5 py-1.5 rounded font-mono text-sm md:text-base"
                      style={{ boxShadow: '0 0 5px rgba(176, 17, 33, 0.3)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  VIEW PROJECT
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
            <div className="border-b-2 border-red-600 pb-4 mb-6">
              <div className="text-red-500 font-mono text-sm tracking-wider">EDUCATION</div>
              <div className="text-gray-400 font-mono text-xs mt-1">DEGREE &amp; TRAINING</div>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.credential} className="border border-red-600/40 p-3 bg-black/30">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-red-500 font-mono text-sm">{edu.credential}</h3>
                    <span className="text-gray-500 font-mono text-xs">{edu.dates}</span>
                  </div>
                  <div className="text-gray-300 font-mono text-xs mt-1">{edu.school}</div>
                  <p className="text-gray-500 font-mono text-xs mt-2 leading-relaxed">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 bg-opacity-50 border-2 border-red-600 p-6 md:p-8">
            <div className="border-b-2 border-red-600 pb-4 mb-6">
              <div className="text-red-500 font-mono text-sm tracking-wider">CERTIFICATIONS</div>
              <div className="text-gray-400 font-mono text-xs mt-1">CREDENTIALS</div>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start justify-between gap-3 border border-red-600/40 p-3 bg-black/30">
                  <div className="text-gray-300 font-mono text-xs">
                    {cert.title} <span className="text-gray-500">— {cert.issuer}</span>
                  </div>
                  <span className="text-gray-500 font-mono text-xs flex-shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
