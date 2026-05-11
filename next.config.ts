import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    cacheComponents: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5ohc0ytmhc.ucarecd.net",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },

    ],
  },
};

export default nextConfig;
