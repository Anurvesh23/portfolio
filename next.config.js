/** @type {import('next').NextConfig} */

// Determine if the environment is production or development
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Use the basePath and assetPrefix only for production builds
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  
  // Keep the other settings
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;