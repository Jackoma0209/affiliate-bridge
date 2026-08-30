import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/media/:path*.vtt",
        headers: [
          { key: "Content-Type", value: "text/vtt; charset=utf-8" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "getyourfirstsale.com" }],
        destination: "https://www.getyourfirstsale.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "affiliate-bridge-pi.vercel.app" }],
        destination: "https://www.getyourfirstsale.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
