/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'static',
  ssr: 'false',
  generate:{
    fallback: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true,
  },
  images: {
    domains: ['play-lh.googleusercontent.com'],
  },
}

module.exports = nextConfig
