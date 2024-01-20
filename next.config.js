/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  env: {
    LIMIT: process.env.LIMIT,
  },
};

module.exports = nextConfig;
