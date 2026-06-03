import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sheharzad-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/articles`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
