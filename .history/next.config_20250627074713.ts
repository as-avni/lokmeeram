// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com", // for Firebase Storage images
      "example.com"                     // add any other image host domains
    ],
  },
};

module.exports = nextConfig;