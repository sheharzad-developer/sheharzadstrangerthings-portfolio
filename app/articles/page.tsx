import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const TITLE = 'Articles';
const DESCRIPTION = 'Insights on Deaf culture, education, and inclusive opportunities.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: `${TITLE} | Sheharzad Salahuddin`,
    description: DESCRIPTION,
    url: '/articles',
    siteName: 'Sheharzad Salahuddin',
    locale: 'en_US',
    type: 'website',
    // Re-reference the shared generated OG image. A child openGraph object
    // replaces the parent's, so the file-convention image (app/opengraph-image.tsx,
    // served at /opengraph-image) must be pointed to explicitly here.
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const articles = [
  {
    title: 'I Thought My Hearing Loss Was the Biggest Barrier. Later I Discovered Something Else.',
    date: 'Jun 26, 2026',
    readTime: '7 min read',
    url: 'https://sheharzadsalahuddin.substack.com/p/i-thought-my-hearing-loss-was-the',
    summary:
      'Why the real barrier to career growth was a missing ecosystem of mentors and fundamentals, not the hearing loss itself.',
    image:
      'https://image.thum.io/get/width/1200/https://sheharzadsalahuddin.substack.com/p/i-thought-my-hearing-loss-was-the',
  },
  {
    title: 'Why Qualifications Still Matter and How We Can Better Support Deaf Job Seekers',
    date: 'Jan 8, 2026',
    readTime: '3 min read',
    url: 'https://sheharzadsalahuddin.substack.com/p/why-qualifications-still-matter-and',
    summary:
      'Why strong standards must come with better support, accessibility, and inclusive education for deaf candidates.',
    image:
      'https://image.thum.io/get/width/1200/https://sheharzadsalahuddin.substack.com/p/why-qualifications-still-matter-and',
  },
  {
    title: 'Understanding Deaf Culture: Communication, Respect, and the Challenges Deaf Individuals Face',
    date: 'Nov 17, 2025',
    readTime: '4 min read',
    url: 'https://sheharzadsalahuddin.substack.com/p/understanding-deaf-culture-communication',
    summary:
      'A practical guide to Deaf culture, respectful communication, and the real-world barriers the community faces.',
    image:
      'https://image.thum.io/get/width/1200/https://sheharzadsalahuddin.substack.com/p/understanding-deaf-culture-communication',
  },
  {
    title: 'My Journey of Learning Grammar as a Deaf Student in Pakistan',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    url: 'https://sheharzadsalahuddin.substack.com/p/my-journey-of-learning-grammar-as',
    summary:
      'A personal story about perseverance, study methods, and what helped me master English grammar.',
    image:
      'https://image.thum.io/get/width/1200/https://sheharzadsalahuddin.substack.com/p/my-journey-of-learning-grammar-as',
  },
];

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen px-6 py-20 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <div className="text-red-500 font-mono text-sm tracking-wider">CLASSIFIED</div>
            <h1
              className="text-4xl md:text-5xl font-stranger text-red-600 mt-2 glitch"
              data-text="ARTICLES"
            >
              ARTICLES
            </h1>
            <p className="text-gray-400 font-mono text-sm mt-3 max-w-2xl">
              Insights on Deaf culture, education, and inclusive opportunities.
            </p>
          </div>
          <Link href="/" className="btn btn-outline btn-sm">
            BACK TO HOME
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.url}
              className="bg-gray-900 bg-opacity-50 border-2 border-red-600 overflow-hidden"
              style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
            >
              <div className="border-b-2 border-red-600 bg-zinc-950 bg-opacity-50 px-4 py-3">
                <div className="text-red-500 font-mono text-xs tracking-wider">CASE FILE</div>
                <div className="text-gray-400 font-mono text-xs mt-1">SUBSTACK ARTICLE</div>
              </div>

              <div className="bg-zinc-950/40 border-b-2 border-red-600 relative h-48">
                <Image
                  src={article.image}
                  alt={`${article.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-red-500 font-mono text-lg font-bold mb-3">
                  {article.title.toUpperCase()}
                </h2>
                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-4">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between text-gray-500 font-mono text-xs mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  READ ON SUBSTACK
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
