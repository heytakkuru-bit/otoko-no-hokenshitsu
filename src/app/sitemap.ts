import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://otoko-no-hokenshitsu.vercel.app';
  const slugs = [
    'taicho',
    'fujimi',
    'ippiki-okami',
    'furutsuwamouno',
    'aniki',
    'otosan',
    'gunshi',
    'iyashi',
    'hakase',
    'sanbo',
    'sakushi',
    'shokunin',
    'fuuraibo',
    'hatsumei-ka',
    'gambler',
    'yumeoibito',
  ];

  const staticPages = [
    { url: base, lastModified: new Date() },
    { url: `${base}/diagnosis`, lastModified: new Date() },
  ];

  const resultPages = slugs.map((slug) => ({
    url: `${base}/diagnosis/result/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...resultPages];
}
