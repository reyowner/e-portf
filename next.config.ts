import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'e-portfolio-khaki-iota.vercel.app',
          },
        ],
        destination: 'https://e-portfolio-reyowners-projects.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'e-portfolio-git-main-reyowners-projects.vercel.app',
          },
        ],
        destination: 'https://e-portfolio-reyowners-projects.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'e-portfolio-qj0mtx6ns-reyowners-projects.vercel.app',
          },
        ],
        destination: 'https://e-portfolio-reyowners-projects.vercel.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
