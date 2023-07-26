/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "uploadthing.com",
      "avatars.githubusercontent.com",
      "blog.logrocket.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
}
export default nextConfig
