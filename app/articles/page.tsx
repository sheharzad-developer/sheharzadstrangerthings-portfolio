const articles = [
  {
    title: 'Why Qualifications Still Matter and How We Can Better Support Deaf Job Seekers',
    date: 'Jan 8, 2026',
    readTime: '3 min read',
    url: 'https://medium.com/@sheharzadsalahuddin.90/why-qualifications-still-matter-and-how-we-can-better-support-deaf-job-seekers-ddf9ae83adc4',
    summary:
      'Why strong standards must come with better support, accessibility, and inclusive education for deaf candidates.',
    image:
      'https://image.thum.io/get/width/1200/https://medium.com/@sheharzadsalahuddin.90/why-qualifications-still-matter-and-how-we-can-better-support-deaf-job-seekers-ddf9ae83adc4',
  },
  {
    title: 'Understanding Deaf Culture: Communication, Respect, and the Challenges Deaf Individuals Face',
    date: 'Nov 17, 2025',
    readTime: '4 min read',
    url: 'https://medium.com/@sheharzadsalahuddin.90/understanding-deaf-culture-communication-respect-and-the-challenges-deaf-individuals-face-59d61afb8f0a',
    summary:
      'A practical guide to Deaf culture, respectful communication, and the real-world barriers the community faces.',
    image:
      'https://image.thum.io/get/width/1200/https://medium.com/@sheharzadsalahuddin.90/understanding-deaf-culture-communication-respect-and-the-challenges-deaf-individuals-face-59d61afb8f0a',
  },
  {
    title: 'My Journey of Learning Grammar as a Deaf Student in Pakistan',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    url: 'https://medium.com/@sheharzadsalahuddin.90/my-journey-of-learning-grammar-as-a-deaf-student-in-pakistan-77c0ce2054c3',
    summary:
      'A personal story about perseverance, study methods, and what helped me master English grammar.',
    image:
      'https://image.thum.io/get/width/1200/https://medium.com/@sheharzadsalahuddin.90/my-journey-of-learning-grammar-as-a-deaf-student-in-pakistan-77c0ce2054c3',
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
          <a
            href="/"
            className="text-xs font-mono text-red-400 border border-red-500 px-3 py-2 hover:bg-red-600 hover:text-white transition-colors h-fit"
            style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.4)' }}
          >
            BACK TO HOME
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.url}
              className="bg-gray-900 bg-opacity-50 border-2 border-red-600 overflow-hidden"
              style={{ boxShadow: '0 0 20px rgba(176, 17, 33, 0.3)' }}
            >
              <div className="border-b-2 border-red-600 bg-black bg-opacity-50 px-4 py-3">
                <div className="text-red-500 font-mono text-xs tracking-wider">CASE FILE</div>
                <div className="text-gray-400 font-mono text-xs mt-1">MEDIUM ARTICLE</div>
              </div>

              <div className="bg-black/40 border-b-2 border-red-600">
                <img
                  src={article.image}
                  alt={`${article.title} preview`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
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
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-red-600 hover:bg-red-700 border border-red-500 text-white px-4 py-2 transition-all text-xs font-mono font-semibold tracking-wider uppercase"
                  style={{ boxShadow: '0 0 10px rgba(176, 17, 33, 0.5)' }}
                >
                  READ ON MEDIUM
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
