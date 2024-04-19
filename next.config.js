/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/share',
        permanent: true,
      },
    ]
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["twitter.com", "pbs.twimg.com"],
  },
};

module.exports = nextConfig;
