/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dream-code-labs.s3.eu-north-1.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'betainos-cms.s3.eu-north-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
