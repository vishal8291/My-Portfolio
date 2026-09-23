import { site } from './data/site'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/demos', '/shop'] }],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
