/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytebazaar-production.up.railway.app/",
      },
    ],
  },
};

module.exports = nextConfig;
