import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
