import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['egeuysal.com'],
  },
  redirects: async () => [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ],
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Content-Security-Policy', value: "default-src 'self'" },
      ],
    },
  ],
  experimental: { esmExternals: true },
};

export default nextConfig;