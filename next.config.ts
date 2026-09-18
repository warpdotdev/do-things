import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The "Do Things with Warp" site is being sunset. All traffic to this
  // deployment (dothings.warp.dev and any preview alias) is permanently
  // redirected to warp.dev. Two rules so the root path resolves cleanly
  // and every other path falls through to the same destination.
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://warp.dev/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://warp.dev/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
