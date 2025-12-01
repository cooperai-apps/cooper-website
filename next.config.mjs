/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Required for static export - Next.js Image Optimization requires a server
    unoptimized: true,
  },
}

export default nextConfig
