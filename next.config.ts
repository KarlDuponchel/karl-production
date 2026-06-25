import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.karlduponchel.fr",
      },
    ],
  },
};

export default nextConfig;
