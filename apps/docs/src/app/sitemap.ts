//
import { source } from '@/lib/source';

export default function sitemap() {
  const pages = source.getPages();

  return pages.map((page) => ({
    url: new URL(page.url, process.env.NEXT_PUBLIC_SITE_URL).href,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
