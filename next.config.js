/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // enable images from unsplash
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**.images.unsplash.com' }],
  },
}
module.exports = nextConfig
