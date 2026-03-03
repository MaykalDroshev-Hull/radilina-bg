import { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { collections } from './data/collections';
import { categories } from './data/categories';

const baseUrl = 'https://www.radilina-bg.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/courses',
    '/gallery',
    '/visits',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add all locale versions of main pages
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Add collection pages
    collections.forEach((collection) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/collection/${collection.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });

    // Add category pages
    categories.forEach((category) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemapEntries;
}
