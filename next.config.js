/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.rapidscansecure.com'],
  },
}

module.exports = nextConfig
