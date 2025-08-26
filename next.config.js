/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  basePath: "/website", // Set this to your repository name
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

module.exports = nextConfig;
