import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          { key: 'X-Custom-Header', value: 'Hello World' },
        ],
      },
    ];
  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;