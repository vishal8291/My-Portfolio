/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  // Old pages folded into About in the 2026 redesign. Kept as redirects so
  // links already shared (resume, LinkedIn) still land somewhere useful.
  async redirects() {
    return [
      { source: '/skills', destination: '/about#skills', permanent: true },
      { source: '/certifications', destination: '/about#certifications', permanent: true },
    ]
  },
};

export default nextConfig;
