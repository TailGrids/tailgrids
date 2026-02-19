import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: "/docs",
  assetPrefix: "/docs",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*.md",
        destination: "/api/docs/md/:path*"
      }
    ];
  }
};

export default withMDX(config);
