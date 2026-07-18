import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
      { protocol: 'https', hostname: 'image.thum.io' },
    ],
    unoptimized: false,
  },

  // Compression
  compress: true,

  // Output configuration
  output: 'standalone',

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },

  // Turbopack configuration (Next.js 16 default)
  // Pin the workspace root so Turbopack doesn't misinfer it from a parent
  // lockfile on the external-drive path (caused a build failure otherwise).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
