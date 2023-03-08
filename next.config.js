/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "supermomos-app-resources-us.s3.amazonaws.com",
      "supermomos-app-resourcesus.s3.amazonaws.com",
    ],
    disableStaticImages: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;
