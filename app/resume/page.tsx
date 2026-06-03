import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Résumé',
  description:
    'Resume of Sheharzad Salahuddin — Software Engineer & Front-End Developer at NETSOL Technologies. Experience, skills, projects, and education.',
};

const PDF_URL = '/resume/Sheharzad-Resume.pdf';

const experience = [
  {
    company: 'NETSOL Technologies',
    title: 'Software Engineer / Front-End Developer',
    location: 'Lahore, Pakistan',
    dates: 'Jun 2024 – Present',
    bullets: [
      'Built fast, responsive web apps with React, Vue, and Nuxt, focused on scalability and clean architecture.',
      'Created dynamic Vue.js features and high-converting landing pages, increasing user engagement ~20% and conversions ~15%.',
      'Integrated RESTful APIs and secured applications with JWT + OAuth authentication.',
      'Set up GitHub Actions CI/CD and deployed to Vercel, cutting deployment time ~20% and removing manual release steps.',
      'Collaborated on Agile teams via JIRA, reducing sprint bottlenecks ~30%.',
    ],
  },
  {
    company: 'NETSOL Technologies',
    title: 'Design & Marketing',
    location: 'Lahore, Pakistan',
    dates: '2015 – 2024',
    bullets: [
      'Joined NETSOL in 2015 through a disability-inclusion hiring program, building a decade-long career while studying in parallel.',
      'Designed brand logos and web elements, improving brand consistency.',
      'Built HTML email templates and marketing materials (Adobe Illustrator), lifting open rates and engagement.',
      'Ran targeted email campaigns with Mailchimp — then taught myself web development and transitioned into the engineering team.',
    ],
  },
];

const coreSkills = [
  'React',
  'Next.js',
  'Vue',
  'Nuxt',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python (FastAPI / Flask)',
  'REST APIs',
  'JWT / OAuth',
  'PostgreSQL',
  'MongoDB',
  'GitHub Actions (CI/CD)',
  'Git · JIRA · Figma',
];

const selectedProjects = [
  {
    title: 'AuraAi — AI Wellness Companion',
    year: '2026',
    summary:
      'Streaming AI wellness chat app (Google Gemini) with adaptive responses, auth, persistent history, and Stripe subscriptions.',
    tech: ['Next.js 16', 'React 19', 'Gemini', 'Supabase', 'Stripe'],
    link: 'https://ai-mental-health-chat-app.vercel.app/',
  },
  {
    title: 'Live Gold & Silver Prices',
    year: '2026',
    summary:
      'Production site serving live gold/silver rates across six markets with Arabic RTL support and server-side revalidation.',
    tech: ['Next.js 16', 'TypeScript', 'Sanity CMS', 'REST API'],
    link: 'https://www.thegoldprice.gold/',
  },
  {
    title: 'Eden Avenue Management',
    year: '2025',
    summary:
      'Full-stack property-management dashboard with role-based access, maintenance workflows, and PWA support.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    link: 'https://edenavenuemanagement.vercel.app/dashboard',
  },
  {
    title: 'AI Chatbot Platform',
    year: '2025',
    summary:
      'Multi-agent, tool-aware chatbot platform (FastAPI) with multi-tenant isolation and a RAG document system.',
    tech: ['FastAPI', 'Python', 'LangChain', 'MongoDB', 'MCP'],
    link: 'https://github.com/sheharzad-developer/Chatbot_Internship',
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
  { title: 'Python Programming Fundamentals', issuer: 'Microsoft (Coursera)', year: '2023' },
  { title: 'Front-End Web Development with React', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Server-side Development with Node, Express & MongoDB', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Front-End Web UI Frameworks & Tools: Bootstrap 4', issuer: 'HKUST (Coursera)', year: '2021' },
  { title: 'Introduction to Front-End Development with ReactJS', issuer: 'Coursera Project Network', year: '2021' },
  { title: 'Namaste JavaScript', issuer: 'NamasteDev.com', year: '2024' },
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
              Software Engineer &amp; Front-End Developer · NETSOL Technologies · Lahore, PK
            </p>
          </div>
          <div className="flex gap-3">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" download className="btn btn-primary btn-sm">
              DOWNLOAD PDF
            </a>
            <Link href="/" className="btn btn-outline btn-sm">
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
              Front-End Developer at NETSOL Technologies, where I&apos;ve worked since 2015 —
              I joined through a disability-inclusion program as someone who is hard of hearing.
              I started in design and marketing, taught myself to code, and grew into a Software
              Engineer role building scalable, responsive web apps with React, Vue, Nuxt, and
              Tailwind — backed by RESTful APIs, JWT/OAuth, and GitHub Actions CI/CD. I completed
              my BSc in Computer Science in 2026 while working full-time, and I&apos;ve shipped
              15+ personal projects across full-stack and AI.
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
                <div key={edu.school} className="border border-red-600/40 p-3 bg-black/30">
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
