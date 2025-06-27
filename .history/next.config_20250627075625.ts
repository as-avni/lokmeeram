// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",                  // add any other image host domains
    ],
  },
};

module.exports = nextConfig;