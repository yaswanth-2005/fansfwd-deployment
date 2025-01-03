/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        hostname: "idsb.tmgrup.com.tr",
      },
    ],
  },
};

export default nextConfig;
