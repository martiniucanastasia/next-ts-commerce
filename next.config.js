/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "build",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
