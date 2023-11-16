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
      "avatars.akamai.steamstatic.com",
      "steamcdn-a.akamaihd.net",
      "avatars.cloudflare.steamstatic.com",
      "cheapshark.com",
      "cdn1.epicgames.com",
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withContentlayer(nextConfig);
