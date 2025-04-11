/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vandit-shah.me' }],
        destination: 'https://vandit-shah.me/:path*/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;