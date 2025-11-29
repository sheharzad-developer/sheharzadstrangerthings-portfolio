import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
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
  turbopack: {},
};

export default nextConfig;
