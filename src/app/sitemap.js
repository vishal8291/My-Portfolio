import { site } from './data/site'

export default function sitemap() {
  const pages = ['', '/projects', '/services', '/about', '/join', '/contact']
  return pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 }))
}
