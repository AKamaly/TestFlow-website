/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Firebase static hosting
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '9zog2la6l29pbfba.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  // Ensure static assets are copied to the output directory
  assetPrefix: '',
  // Configure static file copying
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });
    return config;
  }
}

module.exports = nextConfig