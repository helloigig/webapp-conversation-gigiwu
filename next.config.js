const nextConfig = {
  productionBrowserSourceMaps: false, // existing setting
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // existing setting
  // ADD THIS SECTION BELOW:
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
