import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,

  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  experimental: {
    optimizeCss: true,
  },

  optimizeImages: true,

  webVitalsReport: true,

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  basePath: '',

  reactServerComponents: true,

  cache: {
    maxAge: 60 * 60 * 24,
  },

  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}

export default nextConfig