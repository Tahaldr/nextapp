import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.111.18"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
