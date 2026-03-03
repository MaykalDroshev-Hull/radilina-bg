import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/en/about-us',
        destination: '/bg/about',
        permanent: true,
      },
      {
        source: '/produkti',
        destination: '/bg',
        permanent: true,
      },
      {
        source: '/kontakti',
        destination: '/bg/contact',
        permanent: true,
      },
      {
        source: '/en/prodicts',
        destination: '/bg',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
