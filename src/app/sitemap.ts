import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abexsun.edu';

  const pages = [
    '', '/about', '/admissions', '/admission-policy', '/academics',
    '/classes', '/teachers', '/facilities', '/playground', '/gallery',
    '/events', '/news', '/results', '/downloads', '/contact',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page === '/admissions' ? 0.9 : 0.7,
  }));
}
