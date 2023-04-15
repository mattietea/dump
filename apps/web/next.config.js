/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    appDir: true,
  },
};

module.exports = config;
