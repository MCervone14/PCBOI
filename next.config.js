const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.igdb.com",
      "www.giantbomb.com",
      "cdn.cloudflare.steamstatic.com",
      "cdn.akamai.steamstatic.com",
      "steamcdn-a.akamaihd.net",
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withContentlayer(nextConfig);
