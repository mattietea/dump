/** @type {import('next').NextConfig}*/
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    turbo: {},
  },
  transpilePackages: ["ui"],
};
